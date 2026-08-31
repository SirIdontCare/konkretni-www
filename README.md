# KONKRETNI — nowa wersja serwisu

Production build stworzony w fazie PHASE 4. Zero modyfikacji istniejącego WordPressa na `konkretni.com.pl` — cała nowa wersja budowana lokalnie w tym workspace.

## Stack

- Next.js 16.3 (App Router, Turbopack)
- React 19 + TypeScript 5 (strict)
- Modern CSS (bez ciężkich UI frameworków; Tailwind zainstalowany przez create-next-app ale design system oparty na własnych tokenach — nie używamy Material/Bootstrap/Ant)
- next/font (Urbanist + Inter z `latin-ext` dla polskich znaków)
- next/image z AVIF/WebP, responsive sizes
- ESLint (next/core-web-vitals)

## Struktura

```
src/
  content/site.ts        – centralna konfiguracja treści (brand, nav, hero, obszary, proces, misja, FAQ, kontakt, seo)
  components/
    Navigation.tsx       – sticky nav, hero/light variant, mobile drawer (a11y)
    Hero.tsx             – editorial split (tekst lewo, fotografia prawo), #181933 / #F1D3A0
    Philosophy.tsx       – krótka filozofia (Decyzje bez chaosu)
    Areas.tsx            – 3 zweryfikowane obszary jako editorial rows (nie card grid)
    Process.tsx          – ROZMOWA / PLAN / ROZWIĄZANIA na tle navy
    Team.tsx             – real photography k2front, zespół jako grupa (bez zgadywania twarzy)
    FAQ.tsx              – accordion 6 pytań (tylko fakultatywne odpowiedzi)
    Contact.tsx          – formularz z walidacją, integration boundary /api/contact
    Footer.tsx
  app/
    layout.tsx           – metadata, OG, favicon, skip link, JSON-LD Organization (minimal)
    page.tsx             – homepage złożona z powyższych sekcji
    api/contact/route.ts – POST handler, zwraca 501 gdy brak konfiguracji
    polityka-prywatnosci/page.tsx – placeholder z info content-required
    sitemap.ts / robots.ts
public/
  brand/logo1.png, logobw.png, cropped-logobw.png – oryginalne PNG bez modyfikacji
  photos/k1front.jpg, k2front.jpg – oryginały + pochodne *-640/1280/1920 .webp/.avif
docs/
  content-required.md
  contact-integration.md
  screenshots/ – QA screenshots dla 8 breakpointów
```

## Uruchomienie

```bash
# install
npm install

# dev (Turbopack)
npm run dev
# → http://localhost:3000

# prod build
npm run build
npm run start
# → http://localhost:3000
```

W workspace aktualnie dev/build działa na porcie 3001 (aby nie kolidować).

## Konfiguracja treści

Wszystko w `src/content/site.ts`. Brakujące zweryfikowane dane = `null`, UI automatycznie je pomija (nie renderuje fałszywych telefonów/adresów).

```ts
contact: { phone: null, email: null, address: null }
footer: { legal: { entity: null, nip: null, ... } }
team: { members: null } // dopóki brak mapowania twarz↔nazwisko
```

Po uzupełnieniu wartości nie trzeba ruszać komponentów.

## Integracja formularza

Formularz **nie** udaje wysyłki. Waliduje client-side + POST do `/api/contact`.
- Jeśli `CONTACT_TO_EMAIL` + `RESEND_API_KEY`/`SMTP_HOST` lub `CRM_WEBHOOK_URL` nie ustawione → API zwraca `501` i UI pokazuje stan `info` (nie fałszywy success).
- Po skonfigurowaniu providera wystarczy uzupełnić logikę w `src/app/api/contact/route.ts` (oznaczone TODO).

Szczegóły: `docs/contact-integration.md`

## Asset pipeline

- Oryginały zachowane w `public/photos/*.jpg`
- Pochodne wygenerowane `sharp` (node): `*-640.webp`, `*-1280.webp/avif`, `*-1920.webp/avif` dla responsive
- next/image automatycznie serwuje AVIF/WebP + lazy-load poniżej fold, priority tylko dla hero
- Logo: `object-fit: contain`, jawne width/height, brak redraw/vectorize, geometria tarczy i filara nietknięta

## SEO / a11y / performance

- Jedno H1, hierarchia H2/H3, canonical, OG, Twitter, robots, sitemap
- Minimal JSON-LD Organization (bez fałszywego adresu/telefonu)
- Semantyczny HTML, skip-link, focus-visible (champagne ring), klawiatura, aria-expanded dla accordions/mobilnego menu, 44px touch targets, etykiety formularza, alt dla wszystkich img
- prefers-reduced-motion, brak scroll hijack/parallax
- Responsive QA przetestowane na 8 viewportach (patrz docs/screenshots)

## Co nie jest na stronie

Celowo pominięte (brak weryfikacji):
- numery telefonów, maile, adres biura, NIP/REGON/KRS, ceny, czas trwania spotkań, Google Meet/biuro, zasięg ogólnopolski, staż, certyfikaty, MDRT, towarzystwa, opinie, „niezależny doradca”

Pełna lista: `docs/content-required.md`

## Deployment

- Nie wgrywać na produkcyjny WordPress / nie zmieniać DNS.
- Build statyczny (`next build`) → deploy na Vercel / dowolny hosting Next.js lub eksport statyczny jeśli potrzebny.
- Ustawić `NEXT_PUBLIC_SITE_URL` lub edytować `siteConfig.seo.url` przed produkcją.
- Dodać ENV dla formularza gdy gotowa skrzynka/CRM.

## Skrypty

- `npm run dev` – dev
- `npm run build` – prod build (typecheck)
- `npm run start` – prod server
- `npm run lint` – eslint
