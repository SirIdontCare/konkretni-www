# Analytics & Tracking Options — KONKRETNI

W obecnej wersji serwisu **nie ma wdrożonych żadnych skryptów śledzących ani analitycznych** (zero ciasteczek marketingowych, zero third-party trackers). Dzięki temu serwis ładuje się błyskawicznie i nie wymaga wyświetlania inwazyjnych banerów cookies.

Gdy zespół podejmie decyzję o uruchomieniu analityki lub kampanii płatnych, zalecane są poniższe opcje:

---

## 1. Google Analytics 4 (GA4)
- **Zastosowanie:** Mierzenie ruchu, źródeł odwiedzin, konwersji z formularza kontaktowego.
- **Implementacja:** Komponent `next/third-parties` (`@next/third-parties/google`) lub tag `gtag.js`.
- **Wymagane zmienne środowiskowe:** `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`.
- **Zdarzenia kluczowe:**
  - `generate_lead` — wysłanie formularza kontaktowego (`#kontakt`).
  - `click_cta` — kliknięcie w przycisk "Porozmawiajmy".

## 2. Meta Pixel (Facebook / Instagram Ads)
- **Zastosowanie:** Śledzenie konwersji z reklam na Facebooku i Instagramie, budowanie grup odbiorców (Custom Audiences).
- **Implementacja:** Skrypt inicjalizacyjny w `app/layout.tsx` z `next/script` (`strategy="afterInteractive"`).
- **Wymagane zmienne środowiskowe:** `NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX`.
- **Zdarzenia standardowe:**
  - `Lead` — pomyślne przesłanie formularza kontaktowego.
  - `Contact` — kliknięcie adresu e-mail / telefonu.

## 3. Microsoft Clarity
- **Zastosowanie:** Mapy ciepła (heatmaps), nagrania sesji użytkowników, diagnoza UX bez naruszania poufności danych formularza (automatyczne maskowanie pól input).
- **Implementacja:** Skrypt inicjalizacyjny w `app/layout.tsx`.
- **Wymagane zmienne środowiskowe:** `NEXT_PUBLIC_CLARITY_PROJECT_ID=XXXXXXXXXX`.

---

## Wymogi formalno-prawne przy wdrożeniu śledzenia (RODO / ePrivacy)
Przed włączeniem jakiegokolwiek narzędzia analitycznego lub marketingowego:
1. Należy wdrożyć mechanizm zgody (Consent Mode v2 / baner cookies) blokujący uruchomienie skryptów przed uzyskaniem zgody użytkownika.
2. Zaktualizować sekcję dotyczącą plików cookie w dokumencie `/polityka-prywatnosci`.
