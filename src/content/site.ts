/**
 * Central content configuration for KONKRETNI
 * All business copy originates here. Missing verified data uses `null` so UI can omit it.
 * Do not hardcode public copy inside components.
 */

export const siteConfig = {
  brand: {
    name: "KONKRETNI",
    tagline: "Konkrety nie obietnice",
    logo: {
      light: "/brand/logo1.png",
      dark: "/brand/logobw.png",
      icon: "/brand/cropped-logobw.png",
      alt: "KONKRETNI — sygnet tarczy z filarem",
      width: 180,
      height: 180,
    },
  },

  nav: {
    links: [
      { label: "Obszary", href: "#obszary" },
      { label: "Jak działamy", href: "#proces" },
      { label: "Ludzie", href: "#ludzie" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Porozmawiajmy", href: "#kontakt" },
  },

  hero: {
    eyebrow: "Konkrety nie obietnice",
    headline: ["Nie sprzedajemy ubezpieczeń.", "Budujemy bezpieczeństwo."],
    supporting: "Najpierw rozmowa.\nPotem plan.\nNa końcu rozwiązania, które naprawdę mają sens.",
    cta: { label: "Porozmawiajmy", href: "#kontakt" },
    secondaryCta: { label: "Jak działamy", href: "#proces" },
    image: {
      src: "/photos/k1front.jpg",
      alt: "Zespół KONKRETNI — trzy osoby, naturalne światło, wspólna praca",
      width: 1448,
      height: 1086,
    },
    trustNote: "Rozmowa bez presji • Zaczynamy od tego, co dla Ciebie ważne",
  },

  philosophy: {
    label: "Filozofia",
    headline: "Decyzje bez chaosu.",
    body: [
      "Życie potrafi zaskakiwać. Czasem pięknie, czasem brutalnie.",
      "My jesteśmy od tego, żeby finansowo było stabilnie — niezależnie od scenariusza.",
      "Rozmawiamy, tłumaczymy, planujemy.",
    ],
    closings: ["Bez presji.", "Bez pustych obietnic."],
  },

  areas: {
    label: "W czym pomagamy",
    intro: "Trzy obszary, w których porządkujemy sprawy na lata — nie na chwilę.",
    items: [
      {
        number: "01",
        title: "Oszczędności dla Ciebie",
        description:
          "Prywatne programy emerytalne, rozwiązania inwestycyjne i długoterminowe oszczędzanie.",
        framing: "Chcesz odkładać z myślą o przyszłości i mieć spokój, że plan jest po Twojej stronie.",
      },
      {
        number: "02",
        title: "Posag dla bliskich",
        description:
          "Środki na edukację dzieci, posag, przyszłość bliskich. Plan, który działa nawet wtedy, gdy Ciebie zabraknie przy sterach.",
        framing: "Myślisz o tych, którzy liczą na Ciebie najbardziej — i chcesz, by mieli zabezpieczoną przyszłość.",
      },
      {
        number: "03",
        title: "Leczenie na Twoich zasadach.",
        description:
          "Ochrona finansowa na wypadek choroby, wypadku lub śmierci. Tak, żeby rodzina miała bezpieczeństwo, a nie dodatkowy problem.",
        framing: "Gdy przychodzi trudny moment, liczy się to, by mieć wybór i wsparcie finansowe.",
      },
    ],
  },

  process: {
    label: "Jak działamy",
    headline: "Najpierw rozmowa. Potem plan. Na końcu rozwiązania.",
    intro:
      "Prosty porządek. Zaczynamy od zrozumienia, co jest dla Ciebie ważne — resztę układamy krok po kroku.",
    steps: [
      {
        number: "01",
        title: "ROZMOWA",
        description: "Zaczynamy od tego, co jest dla Ciebie ważne. Słuchamy, pytamy, porządkujemy potrzeby.",
      },
      {
        number: "02",
        title: "PLAN",
        description: "Porządkujemy kierunek działania. Wiemy, dokąd zmierzamy i po co.",
      },
      {
        number: "03",
        title: "ROZWIĄZANIA",
        description: "Na końcu wybieramy rozwiązania, które naprawdę mają sens w Twojej sytuacji.",
      },
    ],
    note: "Bez presji. Bez pustych obietnic. Za to z uwagą na detale, które decydują, gdy przychodzi moment próby.",
  },

  team: {
    label: "Ludzie za KONKRETNI",
    headline: "Ludzie, nie polisy, budują zaufanie.",
    missionTitle: "Misja",
    missionBody: [
      "Decyzje bez chaosu.",
      "Życie potrafi zaskakiwać. Czasem pięknie, czasem brutalnie.",
      "My jesteśmy od tego, żeby finansowo było stabilnie niezależnie od scenariusza.",
      "Rozmawiamy, tłumaczymy, planujemy.",
      "Bez presji. Bez pustych obietnic. Za to z doświadczeniem, które naprawdę robi różnicę, kiedy przychodzi moment próby.",
    ],
    image: {
      src: "/photos/k2front.jpg",
      alt: "Zespół KONKRETNI — trzy osoby, wspólne zdjęcie portretowe przy jasnym tle",
      width: 1535,
      height: 1024,
    },
    // Team is presented as a group. Do not map names to faces without verified mapping.
    groupNote:
      "Na zdjęciu zespół KONKRETNI. Tożsamości poszczególnych osób nie są przypisane do twarzy bez weryfikacji — pokazujemy zespół jako całość.",
    // Placeholder for future verified bios — keep null until verified
    members: null as null | Array<{ name: string; role: string; photoIndex: number }>,
  },

  faq: {
    label: "FAQ",
    headline: "Najczęstsze pytania",
    items: [
      {
        q: "Od czego zaczynamy?",
        a: "Od rozmowy. Najpierw rozmowa, potem plan, na końcu rozwiązania, które naprawdę mają sens. Zaczynamy od tego, co jest dla Ciebie ważne.",
      },
      {
        q: "W czym konkretnie pomagacie?",
        a: "W trzech obszarach: 1) Oszczędności dla Ciebie — prywatne programy emerytalne, rozwiązania inwestycyjne i długoterminowe oszczędzanie. 2) Posag dla bliskich — środki na edukację dzieci i przyszłość bliskich, plan, który działa nawet wtedy, gdy Ciebie zabraknie przy sterach. 3) Leczenie na Twoich zasadach — ochrona finansowa na wypadek choroby, wypadku lub śmierci, tak żeby rodzina miała bezpieczeństwo, a nie dodatkowy problem.",
      },
      {
        q: "Czy muszę od razu podejmować decyzję?",
        a: "Nie. Rozmawiamy, tłumaczymy, planujemy — bez presji i bez pustych obietnic. Decyzje podejmujesz wtedy, gdy masz jasność i poczucie, że kierunek ma sens.",
      },
      {
        q: "Jak wygląda dalszy proces po pierwszej rozmowie?",
        a: "Porządkujemy potrzeby i kierunek działania, a na końcu wybieramy rozwiązania, które mają sens w Twojej sytuacji. Trzymamy się prostej zasady: rozmowa → plan → rozwiązania.",
      },
      {
        q: "Kim jesteście?",
        a: "Jesteśmy zespołem KONKRETNI. Wierzymy, że decyzje finansowe wymagają spokoju, a nie chaosu. Rozmawiamy, tłumaczymy i planujemy tak, by finansowo było stabilnie niezależnie od scenariusza. Zdjęcia na stronie pokazują nasz rzeczywisty zespół.",
      },
      {
        q: "Jak mogę się z Wami skontaktować?",
        a: "Najprościej — zostaw kontakt przez formularz na dole strony. Oddzwonimy i ustalimy dogodny termin rozmowy. Dane kontaktowe uzupełnimy, gdy tylko zostaną zweryfikowane.",
      },
    ],
  },

  contact: {
    label: "Kontakt",
    headline: "Zacznijmy od rozmowy.",
    sub: "Zostaw kontakt — oddzwonimy i ustalimy dogodny termin. Bez presji, bez zobowiązań.",
    // All contact details are unverified — keep null so UI omits them
    phone: null as string | null,
    email: null as string | null,
    address: null as string | null,
    // form configuration
    form: {
      fields: {
        name: { label: "Imię", placeholder: "Twoje imię", required: true },
        phone: { label: "Telefon", placeholder: "+48 ___ ___ ___", required: false },
        email: { label: "E-mail", placeholder: "twoj@email.pl", required: true },
        message: { label: "Wiadomość (opcjonalnie)", placeholder: "Napisz, co jest dla Ciebie ważne…", required: false },
      },
      submitLabel: "Wyślij — oddzwonimy",
      privacyNote:
        "Wysyłając formularz, zgadzasz się na kontakt zwrotny. Dane są przetwarzane wyłącznie w celu odpowiedzi. Szczegóły w polityce prywatności (w przygotowaniu).",
      successTitle: "Dziękujemy — wiadomość przyjęta do wysyłki",
      successBody:
        "Twoja wiadomość została przygotowana. Integracja z docelowym systemem kontaktu jest w trakcie konfiguracji — wkrótce potwierdzimy doręczenie.",
    },
    // Social / legal are unverified
    social: null as null | { facebook?: string; linkedin?: string; instagram?: string },
  },

  footer: {
    brandNote: "KONKRETNI — Konkrety nie obietnice.",
    legal: {
      entity: null as string | null,
      nip: null as string | null,
      regon: null as string | null,
      krs: null as string | null,
    },
    links: [
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    copyright: `© ${new Date().getFullYear()} KONKRETNI. Wszelkie prawa zastrzeżone.`,
  },

  seo: {
    title: "KONKRETNI | Konkrety nie obietnice",
    description:
      "Nie sprzedajemy ubezpieczeń. Budujemy bezpieczeństwo. Najpierw rozmowa, potem plan, na końcu rozwiązania, które naprawdę mają sens. KONKRETNI — Konkrety nie obietnice.",
    url: "https://konkretni.com.pl",
    ogImage: "/photos/k1front.jpg",
    locale: "pl_PL",
  },
} as const;

export type SiteConfig = typeof siteConfig;
