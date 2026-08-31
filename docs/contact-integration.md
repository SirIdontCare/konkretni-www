# Contact Integration — granica integracji formularza

Formularz na `#kontakt` jest **w pełni zwalidowany po stronie klienta**, ale **nie udaje** pomyślnej wysyłki gdy brak backendu.

## Obecny stan

- UI: `src/components/Contact.tsx`
  - pola: Imię* / E-mail* / Telefon / Wiadomość (opcjonalnie)
  - walidacja: min 2 znaki dla imienia, format e-mail, telefon opcjonalnie min 9 cyfr
  - `aria-invalid`, `role=alert` dla błędów, `aria-busy` podczas wysyłki
  - po submit → `fetch POST /api/contact`

- API: `src/app/api/contact/route.ts`
  - waliduje payload (name, email)
  - sprawdza ENV:
    - `CONTACT_TO_EMAIL` + (`RESEND_API_KEY` lub `SMTP_HOST`)  → wysyłka mailowa
    - `CRM_WEBHOOK_URL` lub `CONTACT_WEBHOOK_URL` → webhook CRM
  - **jeśli brak konfiguracji → zwraca 501** z komunikatem dla UI:
    ```json
    { "ok": false, "configured": false, "message": "Integracja docelowa nie jest jeszcze skonfigurowana..." }
    ```
  - UI w tym przypadku pokazuje stan `info` (żółty), nie zielony success — odwiedzający wie, że doręczenie wymaga jeszcze podłączenia skrzynki.

Nie ma fałszywego „Wiadomość wysłana”, nie ma `console.error`, nie ma wycieku danych w logach (log serwera obcina treść do 80 znaków).

## Jak podłączyć realną wysyłkę

### Opcja A — e-mail (Resend)

```bash
CONTACT_TO_EMAIL=kontakt@konkretni.com.pl
RESEND_API_KEY=re_xxx
```

W `src/app/api/contact/route.ts` odkomentuj / dodaj:

```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'KONKRETNI <no-reply@konkretni.com.pl>',
  to: process.env.CONTACT_TO_EMAIL!,
  subject: `Kontakt: ${name} <${email}>`,
  text: `Imię: ${name}\nE-mail: ${email}\nTelefon: ${phone}\n\n${message}`,
  replyTo: email,
});
return NextResponse.json({ ok: true });
```

### Opcja B — SMTP (Nodemailer)

```bash
CONTACT_TO_EMAIL=kontakt@konkretni.com.pl
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
```

Dodaj `nodemailer` i wyślij analogicznie.

### Opcja C — webhook CRM / Zapier / Make

```bash
CRM_WEBHOOK_URL=https://hooks.zapier.com/...
# lub
CONTACT_WEBHOOK_URL=https://crm.example.com/api/leads
```

W handlerze:

```ts
await fetch(process.env.CRM_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, phone, message, source: 'konkretni-www#kontakt', ts: new Date().toISOString() }),
});
```

Po wdrożeniu którejkolwiek opcji handler zwraca `200 { ok: true }`, a UI pokazuje zielony stan success z treścią z `siteConfig.contact.form.successTitle/Body`.

### Dodatkowe ENV

- `CONTACT_FROM_EMAIL` — nadawca (opcjonalnie)
- `CONTACT_BCC` — ukryta kopia
- `CONTACT_RATE_LIMIT` — prosta ochrona przed spamem (rozważ dodanie Upstash Redis)

## Testy

```bash
# brak konfiguracji → 501 info
curl -X POST http://localhost:3001/api/contact -H "Content-Type: application/json" -d '{"name":"Jan","email":"jan@test.pl"}'

# po konfiguracji → 200
```

W playwright QA (`docs/screenshots/form-validation.png`) walidacja błędów jest już przetestowana (2 błędy dla pustych pól).

## RODO / zgody

- Obecna notka: „Wysyłając formularz, zgadzasz się na kontakt zwrotny... Szczegóły w polityce prywatności (w przygotowaniu).”
- Jeśli wymagany checkbox RODO, dodaj go w `Contact.tsx` i walidację w API.
- Nie dodawaj checkboxów analitycznych bez realnej potrzeby.

## Co jeszcze

- Rozważ dodanie honeypot / Turnstile dla antyspamu (bez wpływu na UX).
- Nie loguj pełnych danych osobowych na produkcji.
- Po podłączeniu usuń ostrzeżenie `info` i przetestuj e2e na stagingu.
