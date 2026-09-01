# Production Launch Checklist — KONKRETNI (`konkretni.com.pl`)

Dokumentacja procedury wdrożenia produkcyjnego serwisu KONKRETNI na domenie docelowej `https://konkretni.com.pl/`.

---

## 1. Wymagane zmienne środowiskowe (Vercel Environment Variables)

W panelu Vercel (Project Settings -> Environment Variables) należy skonfigurować:

### Opcja A — Wysyłka przez Resend (Rekomendowana):
```env
CONTACT_TO_EMAIL=biuro@konkretni.com.pl
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

### Opcja B — Wysyłka przez własny serwer SMTP:
```env
CONTACT_TO_EMAIL=biuro@konkretni.com.pl
SMTP_HOST=mail.konkretni.com.pl
SMTP_PORT=465
SMTP_USER=biuro@konkretni.com.pl
SMTP_PASS=twoje_haslo_smtp
```

### Opcja C — Integracja z CRM / Webhook:
```env
CRM_WEBHOOK_URL=https://twoj-crm.pl/api/leads/webhook
```

---

## 2. Konfiguracja domeny w Vercel (DNS & SSL)

1. **Dodanie domen w Vercel:**
   - Domena główna: `konkretni.com.pl` (Primary Domain, automatyczne przekierowanie z HTTP do HTTPS).
   - Domena z www: `www.konkretni.com.pl` (Redirect do `https://konkretni.com.pl`).

2. **Rekordy DNS u rejestratora domeny (np. OVH, Cyberfolks, SeoHost):**
   - Rekord A dla `@`: `76.76.21.21`
   - Rekord CNAME dla `www`: `cname.vercel-dns.com.`

*Ważne: Nie zmieniać rekordów DNS dopóki nie zostanie wyznaczony dzień przełączenia (cutover).*

---

## 3. Stan domenowy w kodzie źródłowym

Wszystkie kluczowe punkty serwisu są już skonfigurowane na produkcyjną domenę `https://konkretni.com.pl`:
- `siteConfig.seo.url` = `https://konkretni.com.pl`
- Kanoniczne adresy URL (`canonical: "/"`) wskazują na bazę `https://konkretni.com.pl`.
- Mapa strony `sitemap.xml` generuje pełne adresy `https://konkretni.com.pl/` oraz `https://konkretni.com.pl/polityka-prywatnosci`.
- `robots.txt` wskazuje mapę strony `https://konkretni.com.pl/sitemap.xml`.
- Tagi Open Graph (`og:url`, `og:image`) generują poprawne adresy bazujące na domenie produkcyjnej.

---

## 4. Przekierowania ze starej strony (Legacy Redirects)

Jeżeli w sieci funkcjonowały stare linki ze strony Landingi (`oferta.konkretni.com.pl`):
- `https://oferta.konkretni.com.pl/wideo` -> 301 Redirect do `https://konkretni.com.pl/#kontakt`
- `https://oferta.konkretni.com.pl/regulamin` -> 301 Redirect do `https://konkretni.com.pl/`
- `https://oferta.konkretni.com.pl/polityka-prywatnosci` -> 301 Redirect do `https://konkretni.com.pl/polityka-prywatnosci`
