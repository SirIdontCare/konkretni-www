import { NextResponse } from "next/server";

/**
 * Contact form integration boundary.
 * By default no real delivery is configured.
 * Replace with actual e-mail / CRM / webhook logic.
 *
 * Expected env vars (example):
 * - CONTACT_TO_EMAIL
 * - RESEND_API_KEY or SMTP config
 * - CRM_WEBHOOK_URL
 */

type Payload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Nieprawidłowy format danych." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2) {
    return NextResponse.json({ ok: false, message: "Podaj imię." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "Podaj poprawny e-mail." }, { status: 400 });
  }

  // Check if integration is configured
  const hasEmail = Boolean(process.env.CONTACT_TO_EMAIL && (process.env.RESEND_API_KEY || process.env.SMTP_HOST));
  const hasWebhook = Boolean(process.env.CRM_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL);

  if (!hasEmail && !hasWebhook) {
    // No real destination configured — return 501 so UI can show integration info instead of fake success
    console.warn("[contact] no integration configured", { name, email, phone, message: message.slice(0, 80) });
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message:
          "Integracja docelowa nie jest jeszcze skonfigurowana. Skonfiguruj CONTACT_TO_EMAIL + RESEND_API_KEY/SMTP lub CRM_WEBHOOK_URL. Dane odebrane, ale nie wysłane do skrzynki.",
      },
      { status: 501 }
    );
  }

  // TODO: implement actual delivery
  // Example:
  // if (hasWebhook) await fetch(process.env.CRM_WEBHOOK_URL!, { method: "POST", body: JSON.stringify({ name, email, phone, message }) })
  // if (hasEmail) await sendEmail({ to: process.env.CONTACT_TO_EMAIL!, subject: `Kontakt: ${name}`, text: ... })

  return NextResponse.json({ ok: true, message: "Wiadomość została wysłana." });
}

export async function GET() {
  return NextResponse.json({
    ok: false,
    message: "Use POST to submit contact form. See /docs/contact-integration.md",
  });
}
