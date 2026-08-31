"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function validate(values: { name: string; email: string; phone: string; message: string }): FieldErrors {
  const errs: FieldErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errs.name = "Podaj imię (min. 2 znaki).";
  }
  if (!values.email.trim()) {
    errs.email = "Podaj adres e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errs.email = "Podaj poprawny adres e-mail.";
  }
  if (values.phone && values.phone.trim().length > 0 && values.phone.replace(/\D/g, "").length < 9) {
    errs.phone = "Numer wygląda na niepełny.";
  }
  return errs;
}

export function Contact() {
  const { contact } = siteConfig;
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<null | { type: "success" | "error" | "info"; title: string; body: string }>(null);
  const [submitting, setSubmitting] = useState(false);

  const hasContactDetails = Boolean(contact.phone || contact.email || contact.address);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(errs).length > 0) {
      setStatus({ type: "error", title: "Sprawdź formularz", body: "Popraw zaznaczone pola i spróbuj ponownie." });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      // Integration boundary: try POST to /api/contact if exists, otherwise show info state
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          title: contact.form.successTitle,
          body: contact.form.successBody,
        });
        setValues({ name: "", email: "", phone: "", message: "" });
        setTouched({});
      } else {
        // Handle missing integration gracefully — do not fake success
        const data = await res.json().catch(() => null);
        const msg = data?.message ?? "Integracja formularza jest w trakcie konfiguracji. Twoje dane nie zostały jeszcze wysłane do docelowego systemu.";
        setStatus({
          type: "info",
          title: "Formularz gotowy — integracja w przygotowaniu",
          body: msg + " Zostaw kontakt, a my potwierdzimy doręczenie po podłączeniu skrzynki / CRM.",
        });
      }
    } catch {
      setStatus({
        type: "info",
        title: "Brak połączenia z systemem doręczeń",
        body: "Nie udało się wysłać wiadomości — docelowa integracja (e-mail / CRM / webhook) nie jest jeszcze skonfigurowana. Skonfiguruj /api/contact, aby włączyć rzeczywistą wysyłkę. Dokumentacja: /docs/contact-integration.md",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <div className="eyebrow">{contact.label}</div>
            <h2 id="contact-heading">{contact.headline}</h2>
            <p>{contact.sub}</p>

            <ul className="contact-benefits" aria-label="Dlaczego warto napisać">
              <li>Najpierw słuchamy — potem porządkujemy kierunek.</li>
              <li>Bez presji i bez pustych obietnic.</li>
              <li>Rozwiązania dopiero wtedy, gdy mają sens.</li>
            </ul>

            {hasContactDetails && (
              <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--line)" }}>
                {contact.phone && (
                  <p style={{ fontSize: "0.95rem" }}>
                    Tel: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </p>
                )}
                {contact.email && (
                  <p style={{ fontSize: "0.95rem" }}>
                    E-mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                )}
                {contact.address && <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{contact.address}</p>}
              </div>
            )}

            {!hasContactDetails && (
              <p style={{ marginTop: 18, fontSize: "0.82rem", color: "var(--muted)", borderTop: "1px solid var(--line)", paddingTop: 14, lineHeight: 1.6 }}>
                Dane kontaktowe (telefon, e-mail, adres) zostaną wyświetlone tutaj automatycznie, gdy tylko zostaną uzupełnione w konfiguracji — bez zmian w kodzie.
              </p>
            )}
          </div>

          <div className="contact-card" aria-labelledby="contact-form-title">
            <h3 id="contact-form-title">Zostaw kontakt — oddzwonimy</h3>
            <p>Pola oznaczone * są wymagane. Odpowiadamy bez presji — ustalamy dogodny termin rozmowy.</p>

            <form noValidate onSubmit={onSubmit} aria-describedby="form-privacy">
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="c-name">
                    {contact.form.fields.name.label} {contact.form.fields.name.required && <span aria-hidden="true">*</span>}
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    autoComplete="given-name"
                    placeholder={contact.form.fields.name.placeholder}
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    required
                  />
                  {touched.name && errors.name && (
                    <span id="err-name" className="field-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="c-phone">{contact.form.fields.phone.label}</label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder={contact.form.fields.phone.placeholder}
                      value={values.phone}
                      onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                      aria-invalid={Boolean(touched.phone && errors.phone)}
                      aria-describedby={errors.phone ? "err-phone" : undefined}
                    />
                    {touched.phone && errors.phone && (
                      <span id="err-phone" className="field-error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="c-email">
                      {contact.form.fields.email.label} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={contact.form.fields.email.placeholder}
                      value={values.email}
                      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      required
                    />
                    {touched.email && errors.email && (
                      <span id="err-email" className="field-error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="c-message">{contact.form.fields.message.label}</label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={4}
                    placeholder={contact.form.fields.message.placeholder}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  />
                </div>

                <p id="form-privacy" className="form-privacy">
                  {contact.form.privacyNote}
                </p>

                <div className="form-actions">
                  <button type="submit" className="btn btn--primary" disabled={submitting} aria-busy={submitting}>
                    {submitting ? "Wysyłanie…" : contact.form.submitLabel}
                  </button>
                </div>

                {status && (
                  <div className={`form-status form-status--${status.type}`} role="status" aria-live="polite">
                    <strong style={{ display: "block", marginBottom: 4 }}>{status.title}</strong>
                    <span>{status.body}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
