"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { wideoConfig } from "@/content/wideo";
import { captureAttribution } from "@/lib/attribution";
import { initMetaPixel, trackMetaLead } from "@/lib/meta-pixel";

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

/**
 * Campaign lead form — reuses the site contact backend (/api/contact).
 * Attribution (fbclid/UTM) is captured client-side and attached server-side only;
 * it is never rendered as visible form fields.
 */
export function LeadForm() {
  const fields = siteConfig.contact.form;
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "", _hp: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<null | { type: "success" | "error"; title: string; body: string }>(null);
  const [submitting, setSubmitting] = useState(false);

  // Pixel init (PageView) is a no-op until explicitly enabled + consent-gated
  // (see docs/meta-tracking-required.md). Attribution is captured at submit time.
  useEffect(() => {
    initMetaPixel();
  }, []);

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

    // Read fbclid/UTM from the URL (merged with the session store) at submit time —
    // attached to the server payload only; never rendered as visible fields.
    const attribution = captureAttribution({ landingPage: wideoConfig.landingPage, source: wideoConfig.source });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, attribution }),
      });

      if (res.ok) {
        // Confirmed server-side success — the only point where a Lead event may fire.
        trackMetaLead();
        setStatus({
          type: "success",
          title: fields.successTitle,
          body: fields.successBody,
        });
        setValues({ name: "", email: "", phone: "", message: "", _hp: "" });
        setTouched({});
      } else {
        const data = await res.json().catch(() => null);
        const msg =
          data?.message ??
          "Nie udało się wysłać wiadomości. Spróbuj ponownie później lub napisz bezpośrednio na adres biuro@konkretni.com.pl.";
        setStatus({ type: "error", title: "Nie udało się wysłać wiadomości", body: msg });
      }
    } catch {
      setStatus({
        type: "error",
        title: "Błąd połączenia",
        body: "Wystąpił problem z połączeniem. Spróbuj ponownie za chwilę lub napisz bezpośrednio na adres biuro@konkretni.com.pl.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section wl-lead" aria-labelledby="wl-lead-heading">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <div className="eyebrow">{wideoConfig.lead.stepLabel}</div>
            <h2 id="wl-lead-heading">{wideoConfig.lead.headline}</h2>
            <p>{wideoConfig.lead.sub}</p>
            <ul className="contact-benefits" aria-label="Dlaczego warto zostawić kontakt">
              {wideoConfig.lead.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="contact-card" aria-labelledby="wl-lead-form-title">
            <h3 id="wl-lead-form-title">Zostaw kontakt — oddzwonimy</h3>
            <p>Pola oznaczone * są wymagane. Odpowiadamy bez presji — ustalamy dogodny termin rozmowy.</p>

            <form noValidate onSubmit={onSubmit} aria-describedby="wl-form-privacy">
              {/* Honeypot field for bot mitigation */}
              <input
                type="text"
                name="_hp"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
                value={values._hp}
                onChange={(e) => setValues((v) => ({ ...v, _hp: e.target.value }))}
                aria-hidden="true"
              />
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="w-name">
                    {fields.fields.name.label} {fields.fields.name.required && <span aria-hidden="true">*</span>}
                  </label>
                  <input
                    id="w-name"
                    name="name"
                    autoComplete="given-name"
                    placeholder={fields.fields.name.placeholder}
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={errors.name ? "w-err-name" : undefined}
                    required
                  />
                  {touched.name && errors.name && (
                    <span id="w-err-name" className="field-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="w-phone">{fields.fields.phone.label}</label>
                    <input
                      id="w-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder={fields.fields.phone.placeholder}
                      value={values.phone}
                      onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                      aria-invalid={Boolean(touched.phone && errors.phone)}
                      aria-describedby={errors.phone ? "w-err-phone" : undefined}
                    />
                    {touched.phone && errors.phone && (
                      <span id="w-err-phone" className="field-error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="w-email">
                      {fields.fields.email.label} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="w-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={fields.fields.email.placeholder}
                      value={values.email}
                      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={errors.email ? "w-err-email" : undefined}
                      required
                    />
                    {touched.email && errors.email && (
                      <span id="w-err-email" className="field-error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="w-message">{fields.fields.message.label}</label>
                  <textarea
                    id="w-message"
                    name="message"
                    rows={4}
                    placeholder={fields.fields.message.placeholder}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  />
                </div>

                <p id="wl-form-privacy" className="form-privacy">
                  {fields.privacyNote}
                </p>

                <div className="form-actions">
                  <button type="submit" className="btn btn--primary" disabled={submitting} aria-busy={submitting}>
                    {submitting ? "Wysyłanie…" : fields.submitLabel}
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
