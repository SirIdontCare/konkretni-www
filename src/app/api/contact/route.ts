import { NextResponse } from "next/server";

/**
 * Contact form integration boundary.
 *
 * Supported integration options:
 * - RESEND: CONTACT_TO_EMAIL + RESEND_API_KEY
 * - SMTP: CONTACT_TO_EMAIL + SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 * - CRM WEBHOOK: CRM_WEBHOOK_URL or CONTACT_WEBHOOK_URL
 *
 * If no real destination is configured, returns 501 (Not Implemented) with user-friendly info.
 */

type Payload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  _hp?: string; // Honeypot field for bot mitigation
};

// In-memory rate limiting: max 5 requests per 60 seconds per IP
const ipHits = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now > entry.resetTime) {
    ipHits.set(ip, { count: 1, resetTime: now + 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 5;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { ok: false, message: "Zbyt wiele prób wysłania wiadomości. Odczekaj chwilę i spróbuj ponownie." },
      { status: 429 }
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Nieprawidłowy format danych." }, { status: 400 });
  }

  // Honeypot check — bots filling hidden field get 200 without dispatching
  if (body._hp && body._hp.trim().length > 0) {
    return NextResponse.json({ ok: true, message: "Wiadomość przyjęta." });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ ok: false, message: "Podaj imię (od 2 do 100 znaków)." }, { status: 400 });
  }
  if (!isValidEmail(email) || email.length > 150) {
    return NextResponse.json({ ok: false, message: "Podaj poprawny adres e-mail." }, { status: 400 });
  }
  if (phone.length > 0) {
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9 || digits.length > 15) {
      return NextResponse.json({ ok: false, message: "Podaj poprawny numer telefonu (min. 9 cyfr)." }, { status: 400 });
    }
  }
  if (message.length > 3000) {
    return NextResponse.json({ ok: false, message: "Treść wiadomości jest zbyt długa (maks. 3000 znaków)." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const webhookUrl = process.env.CRM_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL;

  // 1. Primary path: Resend API
  if (resendApiKey && toEmail) {
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "KONKRETNI <kontakt@konkretni.com.pl>";
    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [toEmail],
          reply_to: email,
          subject: `Nowe zapytanie: ${name}`,
          text: `Nowe zgłoszenie z serwisu KONKRETNI:\n\nImię: ${name}\nE-mail: ${email}\nTelefon: ${phone || "(nie podano)"}\n\nWiadomość:\n${message || "(brak wiadomości)"}\n\n---\nData: ${new Date().toISOString()}\nIP: ${clientIp}`,
        }),
      });

      if (!resendRes.ok) {
        const errorBody = await resendRes.json().catch(() => null);
        console.error("[contact:resend] delivery failed", { status: resendRes.status, errorBody });
        return NextResponse.json(
          { ok: false, message: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę lub napisz bezpośrednio na biuro@konkretni.com.pl." },
          { status: 502 }
        );
      }

      const resendData = await resendRes.json().catch(() => ({}));
      console.log("[contact:resend] message dispatched successfully", { id: resendData?.id });
      return NextResponse.json({ ok: true, message: "Wiadomość została wysłana." });
    } catch (err) {
      console.error("[contact:resend] network exception", err);
      return NextResponse.json(
        { ok: false, message: "Wystąpił problem z połączeniem. Spróbuj ponownie za chwilę lub napisz bezpośrednio na biuro@konkretni.com.pl." },
        { status: 502 }
      );
    }
  }

  // 2. Alternative path: CRM Webhook
  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, clientIp, timestamp: new Date().toISOString() }),
      });

      if (!webhookRes.ok) {
        console.error("[contact:webhook] delivery failed", { status: webhookRes.status });
        return NextResponse.json(
          { ok: false, message: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę lub napisz bezpośrednio na biuro@konkretni.com.pl." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, message: "Wiadomość została wysłana." });
    } catch (err) {
      console.error("[contact:webhook] network exception", err);
      return NextResponse.json(
        { ok: false, message: "Wystąpił problem z połączeniem. Spróbuj ponownie za chwilę lub napisz bezpośrednio na biuro@konkretni.com.pl." },
        { status: 502 }
      );
    }
  }

  // 3. Unconfigured environment: calm user-facing error (no fake success, no technical jargon)
  console.warn("[contact] submission received but no delivery transport configured (missing CONTACT_TO_EMAIL / RESEND_API_KEY / CRM_WEBHOOK_URL)");
  return NextResponse.json(
    {
      ok: false,
      message: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę lub skontaktuj się bezpośrednio na adres biuro@konkretni.com.pl.",
    },
    { status: 503 }
  );
}

export async function GET() {
  return NextResponse.json({
    ok: false,
    message: "Use POST to submit contact form. See /docs/production-launch.md",
  });
}
