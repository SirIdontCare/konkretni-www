# Content Required — brakujące zweryfikowane informacje

Publiczny serwis **nie wyświetla** poniższych danych, dopóki nie zostaną zweryfikowane. Miejsce w kodzie jest przygotowane (`siteConfig.*: null` → UI pomija sekcję). Nie ma placeholderów typu „CONTENT REQUIRED” widocznych dla odwiedzających.

## 1) Dane kontaktowe
- [ ] telefon (format E.164, np. +48 …) → `siteConfig.contact.phone`
- [ ] e-mail kontaktowy → `siteConfig.contact.email`
- [ ] adres korespondencyjny / biura (jeśli dotyczy) → `siteConfig.contact.address`
- [ ] preferowana forma kontaktu (telefon / mail / formularz)
- [ ] godziny dostępności

## 2) Podmiot prawny / stopka
- [ ] pełna nazwa podmiotu / forma prawna → `siteConfig.footer.legal.entity`
- [ ] NIP → `siteConfig.footer.legal.nip`
- [ ] REGON → `siteConfig.footer.legal.regon`
- [ ] KRS (jeśli dotyczy) → `siteConfig.footer.legal.krs`
- [ ] treść noty prawnej / copyright

## 3) Zespół — krytyczne dla zaufania
- [ ] zweryfikowane imiona i nazwiska osób ze zdjęć
- [ ] **jednoznaczne mapowanie** twarz ↔ imię (bez zgadywania! obecnie zespół pokazywany jako grupa)
- [ ] stanowiska / role (jeśli mają być wyświetlane)
- [ ] krótkie biogramy (opcjonalnie, tylko zweryfikowane)
- [ ] czy wszyscy na k1front/k2front mają być pokazani, czy tylko część
- [ ] zgody na publikację wizerunku potwierdzone

Obecny stan: `siteConfig.team.members = null`, `groupNote` informuje, że tożsamości nie są przypisane.

## 4) Polityka prywatności / RODO
- [ ] administrator danych (nazwa, adres, kontakt)
- [ ] inspektor ochrony danych (jeśli powołany)
- [ ] podstawa prawna przetwarzania formularza
- [ ] okres retencji
- [ ] prawa użytkownika, sposób ich realizacji
- [ ] informacje o plikach cookie / ewentualnej analityce
- [ ] czy używane są narzędzia śledzące (GA, Meta Pixel, itp.) – jeśli tak, wymagane zgody

Placeholder: `src/app/polityka-prywatnosci/page.tsx`

## 5) Integracja formularza
- [ ] docelowa skrzynka e-mail → `CONTACT_TO_EMAIL`
- [ ] provider e-mail (RESEND_API_KEY lub SMTP_HOST/PORT/USER/PASS)
- [ ] lub webhook CRM → `CRM_WEBHOOK_URL` / `CONTACT_WEBHOOK_URL`
- [ ] treść auto-odpowiedzi (jeśli ma być)
- [ ] wymagania dot. RODO przy formularzu (checkbox, link do polityki)

Szczegóły techniczne: `docs/contact-integration.md`. Dopóki brak integracji, API zwraca 501 i UI pokazuje stan „integracja w przygotowaniu” — nie udaje sukcesu.

## 6) Social / zewnętrzne profile
- [ ] Facebook URL
- [ ] LinkedIn URL
- [ ] Instagram URL
- [ ] inne zweryfikowane profile (tylko jeśli istnieją) → `siteConfig.contact.social`

## 7) Elementy opcjonalne (tylko jeśli klient chce je pokazać i są zweryfikowane)
- [ ] lata doświadczenia / liczby klientów (nie publikować bez źródła)
- [ ] certyfikaty / licencje / wpisy do rejestrów (KNF etc.)
- [ ] MDRT / nagrody (tylko zweryfikowane)
- [ ] lista partnerów / towarzystw ubezpieczeniowych (tylko potwierdzone współprace)
- [ ] referencje / opinie (tylko realne, za zgodą)
- [ ] fizyczna lokalizacja biura + godziny otwarcia

## 8) SEO / domena
- [ ] finalny `siteConfig.seo.url` (obecnie https://konkretni.com.pl)
- [ ] zweryfikowany opis meta (obecny oparty na hasłach zweryfikowanych)
- [ ] czy dodać słowa kluczowe lokalne (tylko jeśli lokalizacja zweryfikowana)

## Jak uzupełnić

1. Zebrać dane, potwierdzić na piśmie.
2. Edytować `src/content/site.ts` — wstawić wartości zamiast `null`.
3. Dla zespołu: dodać `members` z mapowaniem, ewentualnie podmienić zdjęcia jeśli potrzebne.
4. Dla kontaktu: ustawić ENV i uzupełnić logikę w `src/app/api/contact/route.ts`.
5. `npm run build` + QA screenshots ponownie.

Nie dodawać niezweryfikowanych obietnic ani liczb (np. „ZUS zapewni ułamek”, „50–200 tys.”, „100% przejrzystości” – zakazane w FACT LOCK).
