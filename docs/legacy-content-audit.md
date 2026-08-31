# Legacy Content Audit — oferta.konkretni.com.pl/wideo

Źródło: Landingi (landing_id 1944318, „VSL + ANKIETA + WIDEO - Piotr Cegła"), scrape 31.08.2026.
Dokument WEWNĘTRZNY — nie publikować.

## Klasyfikacja

### A. VERIFIED AND CURRENT — użyte na stronie
| Treść | Zastosowanie |
|---|---|
| Zespół: Piotr Cegła, Marcin Misiewicz, Aneta Boksa (bios) | `src/content/team.ts` → profile w sekcji Ludzie |
| „Mamy dla Ciebie konkretną propozycję" + segmenty (rodzic / przyszły emeryt / odpowiedzialny za rodzinę / przedsiębiorca-pracownik) | blok odbiorców w sekcji Obszary |
| „Dowiesz się, jak…" — 4 tematy praktyczne | scalone z blokiem odbiorców (uniknięcie duplikacji) |
| biuro@konkretni.com.pl (z polityki prywatności oferty) | `contact.email`, JSON-LD, strona polityki |
| Administrator: „zespół agentów ubezpieczeniowych KONKRETNI" | stopka + polityka prywatności www |
| Cele/podstawy RODO (art. 6 b/f/a), retencja, prawa, dobrowolność, zabezpieczenia | `/polityka-prywatnosci` |

### B. VERIFIED BUT OUTDATED — NIE UŻYWAĆ
| Treść | Powód |
|---|---|
| **Aleksandra Sikora** (bio, rola, zdjęcie, kontekst zespołu) | nieaktywna — CLIENT OVERRIDE; zero wystąpień w buildzie |
| „W skład zespołu wchodzi **4** niezależnych agentów" (polityka prywatności) | nieaktualna liczba po odejściu Aleksandry — nie publikujemy liczebnika |
| Piotr: „**18-letnie** doświadczenie" | override: obecnie 20 lat |
| Piotr: „**6×** TOP Doradca Prudential (2019–2024)" | zastąpione 8× MDRT (override); historyczna nagroda pominięta dla zwięzłości |
| „Senior Dyrektor Agencji (od 2024)" bez PRU | override precyzuje: Senior Dyrektor Agencji **PRU** |

### C. REQUIRES CONFIRMATION — nie użyte
| Treść | Uwagi |
|---|---|
| „bezpłatna konsultacja" / „Umów bezpłatną konsultację" | pojawia się 2× w CTA legacy; FACT LOCK wymaga potwierdzenia — nie publikujemy do potwierdzenia |
| „bez milionów wykluczeń i ukrytych warunków", „Bez ukrytych warunków i wykluczeń" | marketingowe obietnice o produkcie — wymagają potwierdzenia zakresu |
| „W PRU odnalazł stabilność, wartości i rozwój oraz produkty, które z przekonaniem rekomenduje" | rekomendacja konkretnego TU — wymaga decyzji klienta |
| Regulamin oferta.konkretni.com.pl | dotyczy landinga ofertowego, nie www — do weryfikacji czy stosować |

### D. PURE MARKETING COPY — przepisane w granicach faktów
| Legacy | Na stronie |
|---|---|
| „Chcesz odkładać **800+** i zbudować dziecku bezpieczny start" | „chcą zbudować mu bezpieczny start w dorosłość" (liczba wycięta — FACT LOCK: bez kwot) |
| „aby choroba lub wypadek nie **zrujnowały** domowego budżetu" | „nie zachwiały domowym budżetem" (łagodniejszy, spokojny ton marki) |
| „Budować kapitał… **bez przepłacania** i bez skomplikowanej obsługi" | elementy scalone; obietnica cenowa pominięta |

## Ankieta Tally (funnel review) — DECYZJA: NIE PRZENOSIMY
`tally.so/r/w4evGk` — „ankieta wstępna VSL", 5 pytań:
1. Imię / e-mail / telefon (OK, niski próg)
2. „Czy obecnie jesteś zdrowa/y?" — **dane o zdrowiu** → wyklucza bez świadomej procedury
3. „Czy masz mniej niż 50 lat?" — screening wiekowy
4. „Czy słyszałaś/eś o ubezpieczeniu ze zwrotem składek?" (OK)
5. „Jaką kwotę miesięcznie chcesz odkładać?" — widełki finansowe
6. Okno kontaktowe 8–12/12–16/16–20 (przydatna idea na przyszłość)

Primary CTA pozostaje rozmowa. Ewentualna ankieta w przyszłości: pytania 1/4/6 tylko, po konsultacji z klientem.

## Video (VSL)
Vimeo id 1111598398 (embed na legacy). Zawartości nie można zweryfikować automatycznie — NIE osadzone. Zobacz `docs/video-refresh.md`.

## Tracking legacy
Meta Pixel (fbq ×6) na landingach ofertowych. Obecny www: brak pikseli (świadomie).
