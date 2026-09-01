# Legacy Video Funnel — Forensic Audit

> Source: `https://oferta.konkretni.com.pl/wideo` (LIVE ad landing — do not modify).
> Audited: 2026-09-01 · read-only inspection (HTML source + Tally form schema + Vimeo oEmbed + GTM loader).
> Platform: **Landingi** (landing_id `1944318`, landing_name `VSL + ANKIETA + WIDEO - Piotr Cegła`).

---

## 1. Vimeo video

| Item | Value |
|---|---|
| Embed URL | `https://player.vimeo.com/video/1111598398?title=0&byline=0&portrait=0&badge=0&autopause=0&controls=1&dnt=1` |
| Video ID | **1111598398** |
| Title | "Konkretni VSL" (account: Konkretni, `user245580175`) |
| Duration | 323 s (5:23) · 1920×1080 · uploaded **2025-08-20** |
| Embed params | `title=0 byline=0 portrait=0 badge=0 autopause=0 controls=1 dnt=1` (privacy: **dnt=1** — no Vimeo tracking) |
| Extra | `player.vimeo.com/api/player.js` loaded; background-image upscale hack (`295x166 → 1920`) for the poster |

**Thumbnail check:** on-brand title card — "KONKRETY, NIE OBIETNICE" + current KONKRETNI shield logo, navy/champagne. No people visible in the poster → interior content (speakers, claims) **cannot be verified technically**. See `docs/video-replacement-required.md`.

## 2. CTA inventory

| Label | Destination | Notes |
|---|---|---|
| "Wypełnij ankietę! >>" (button 1, after video) | `/wideo/button/m67nFgB3CwnbTrbqvldebkwIvt8cTIFZ` → **`https://tally.so/r/w4evGk`** | Landingi redirect wrapper |
| "Wypełnij ankietę! >>" (button 2, page bottom) | `/wideo/button/TOZakwvfF58mobNgLKFXuyqQoMAbbtNl` → same Tally form | Landingi redirect wrapper |
| "Umów bezpłatną konsultację" (sticky bottom bar, appears when step-2 section leaves viewport) | `https://tally.so/r/w4evGk` | `#070e32` navy bar + `#edcd9a` champagne pill button |
| "Polityka prywatności" | `https://oferta.konkretni.com.pl/polityka-prywatnosci` | footer |
| "Regulamin" | `https://oferta.konkretni.com.pl/regulamin` | footer |

Funnel logic: **KROK 1** "Obejrzyj wideo…" → **KROK 2** "Umów się na bezpłatną konsultację" → ankieta. Legacy also uses "Czas na działanie!" (urgency-flavored — intentionally **not** carried over per new brand rules).

## 3. Form (provider / flow)

| Item | Value |
|---|---|
| Provider | **Tally** (external, hosted form) |
| Form URL | `https://tally.so/r/w4evGk` |
| Internal name | `[Piotr Cegła] - ankieta wstępna VSL` |
| Title | "Ankieta wstępna" — "Odpowiedz na 5 krótkich pytań, dzięki którym lepiej poznamy Twoją sytuację." |
| Fields | Imię* (text) · E-mail* (email) · Numer telefonu* (phone, intl) · 5 single-choice qualification questions: (1) zdrowa/y Tak/Nie, (2) <50 lat Tak/Nie, (3) słyszał*eś o ubezpieczeniu ze zwrotem składek, (4) kwota miesięczna (<200 / 200–500 / >500 zł), (5) godzina kontaktu (8–12 / 12–16 / 16–20) |
| Submit label | "Wysyłam zgłoszenie!" |
| Legal note | zgoda na przetwarzanie danych → link do polityki prywatności |
| Hidden fields / prefill | **NONE** (no hidden fields, no query-param prefill configured) |
| Thank-you flow | redirect after submit → **`https://oferta.konkretni.com.pl/dziekuje`** |
| Branding | Poppins font, cover image, "Powered by Tally" (removeBranding=false), noindex on the form itself |

Note: questions 1–2 (health, age) and 4 (amount) are **qualification filters**; the new native form deliberately keeps friction low and asks no sensitive data.

## 4. Tracking

| Item | Value |
|---|---|
| Meta Pixel ID | **1028675786003506** |
| Meta events fired in page source | **`PageView` only** (standard base code in `<head>`) |
| Lead conversion event | **Not found** in page source — no `fbq('track', 'Lead')` anywhere. Possibly wired inside GTM (unverifiable without container access). After successful Tally submit the user is redirected to `/dziekuje` (no client-side conversion code found there either — not audited in depth) |
| GTM | **`GTM-P5VF2BC`**, injected via `https://tagmanager.landingi.io/account/0811a718-3b87-11ea-9f3c-12906ea37310` |
| Platform analytics | Landingi internal stats (`stats.landingi.com/visit/1944318`, frodo.js), popups module, lightbox renderer, WOW.js, lazysizes, Blinkloader CDN (`ucarecdn.com`) |
| Consent | **No consent banner / no consent mode** on the legacy landing (Pixel + GTM load unconditionally) |

## 5. Attribution handling (fbclid / UTM)

- **No custom handling found.** No JS on the landing reads, stores, or forwards `fbclid` / `utm_*`.
- The Tally form has **no hidden fields and no prefill params** configured → click-side attribution is **lost** between landing and form (only Meta-side signals like `_fbp` cookie + Pixel PageView survive).
- Conclusion for the new route: attribution preservation must be **built natively** (session capture + hidden server-side lead metadata).

## 6. Copy worth preserving (verified against current site)

- Two-step funnel logic: watch video → book free consultation ("KROK 1 / KROK 2" framing).
- Headline family: "Zabezpiecz przyszłość swoją i bliskich — bez gwiazdek, bez drobnego druku, bez zaskoczeń." / "Dla odpowiedzialnych ludzi, którzy nie chcą już odkładać decyzji na później."
- "Dla kogo" 4 segments — **map 1:1 to current verified `siteConfig.audience`** (rodzice / emerytura / odpowiedzialni za rodzinę / przedsiębiorcy i pracownicy). Legacy "Rodzicem → odkładać 800+" contains a specific amount → replaced by verified wording ("posag i bezpieczny start dziecka").
- "Dowiesz się, jak…" 4 bullets — **map 1:1 to current `siteConfig.outcomes`** (chronić / budować kapitał / zabezpieczyć dziecko / przygotować emeryturę).
- Sticky mobile CTA bar pattern ("Umów bezpłatną konsultację" after the video block scrolls out) — high-value mobile pattern, carried over.
- Free-consultation positioning: "bezpłatna konsultacja", "bez ukrytych warunków i wykluczeń" (meta description).

## 7. Outdated content (must NOT appear on new route)

| Item | Legacy claim | Current verified |
|---|---|---|
| **Aleksandra Sikora** | Full bio card with photo (`cdn.lugc.link/4f8ecb3f…`), 6 bullets, schema.org Person | **Removed — must appear 0 times** |
| Piotr Cegła | "18-letnie doświadczenie", "Nordea, Expander, Prudential", "6× TOP Doradca (2019–2024)", "Członek MDRT" (no count), "Senior Dyrektor (od 2024)", "buduje zespoły od ponad 7 lat" | **Senior Dyrektor Agencji Pru, 20 lat doświadczenia, 8× MDRT, Współtwórca KONKRETNYCH** |
| Team order | Piotr → Aleksandra → Marcin → Aneta | Piotr → Marcin → Aneta |
| Amounts | "odkładać 800+" | no amounts (not verified) |
| Urgency | "Czas na działanie!" | avoided (no fake urgency) |
| Aneta Boksa | "19 lat jako likwidator szkód" ✅ | consistent with current site (OK) |
| Marcin Misiewicz | bio consistent with current site (OK) | OK |

## 8. Legacy SEO metadata (reference)

- Title: `Zabezpiecz Przyszłość Bez Zaskoczeń`
- Description: `Ochrona dla odpowiedzialnych. Bez ukrytych warunków i wykluczeń. Umów się na bezpłatną konsultację.`
- Indexable (no noindex on landing). Legacy landing stays untouched and live.

---

## 9. New /wideo route — implementation decisions (2026-09-01)

| Topic | Decision |
|---|---|
| Video | **Not embedded** — see `docs/video-replacement-required.md`. Route is video-ready via `NEXT_PUBLIC_VIMEO_VIDEO_ID`; without it, production renders no video section and the hero primary CTA becomes "Porozmawiajmy". No "missing video" UI is ever shown. |
| Form | Native KONKRETNI form reusing the existing `/api/contact` backend (Resend / CRM webhook / calm 503). No second backend, no Tally dependency. No sensitive data (no health, PESEL, income, policy numbers). |
| Attribution | `src/lib/attribution.ts` — client-side capture of `fbclid` + `utm_*` (sessionStorage, first/last-touch merge, sanitized), attached to the submission as a server-only `attribution` object with `landing_page: "/wideo"` and `source: "landing-wideo"`. Included in the email body and CRM webhook payload. Never rendered as visible fields. |
| Meta Pixel | Architecture prepared in `src/lib/meta-pixel.ts` — **disabled by default** (`NEXT_PUBLIC_META_PIXEL_ID` + `NEXT_PUBLIC_META_PIXEL_ENABLED="true"` required). `Lead` fires only after confirmed `res.ok` from the form API. Requirements + consent checklist: `docs/meta-tracking-required.md`. |
| SEO | `noindex, follow` + canonical `https://konkretni.com.pl/wideo` (clean, no tracking params). Rationale: paid-traffic campaign landing with copy overlapping the homepage (duplicate content); organic entry should go to the full homepage. Not added to `sitemap.xml`. To flip to indexed: change `robots` in `src/app/wideo/page.tsx` and add the route to `src/app/sitemap.ts`. |
| Legacy funnel | Unmodified. No redirects, no DNS changes, no campaign edits. |

