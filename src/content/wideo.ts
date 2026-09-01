/**
 * /wideo campaign landing — content configuration.
 *
 * Conversion logic recovered from the legacy Landingi funnel
 * (see docs/legacy-video-funnel-audit.md) using only verified, current data.
 * Team copy comes from @/content/team (Piotr · Marcin · Aneta — no outdated members).
 * Audience/outcomes/areas reuse the verified homepage content from @/content/site.
 */

const vimeoId = process.env.NEXT_PUBLIC_VIMEO_VIDEO_ID ?? null;

export const wideoConfig = {
  /** Internal lead-source tag attached to every form submission from this landing. */
  source: "landing-wideo",
  landingPage: "/wideo",

  video: {
    /**
     * Legacy VSL 1111598398 is intentionally NOT reused (unverifiable content —
     * docs/video-replacement-required.md). Set NEXT_PUBLIC_VIMEO_VIDEO_ID to enable.
     */
    vimeoId,
    dnt: true,
    stepLabel: "KROK 1",
    title: "Obejrzyj wideo, które przygotowaliśmy dla Ciebie",
    note: "Krótko i konkretnie — o tym, jak budujemy bezpieczeństwo bez gwiazdek i bez drobnego druku.",
  },

  hero: {
    eyebrow: "Konkrety nie obietnice",
    headline: ["Nie sprzedajemy ubezpieczeń.", "Budujemy bezpieczeństwo."],
    supporting:
      "Dla odpowiedzialnych ludzi, którzy nie chcą już odkładać decyzji na później — bez ukrytych warunków i bez wykluczeń drobnym drukiem.",
    ctaWatch: { label: "Obejrzyj wideo", href: "#wideo" },
    ctaTalk: { label: "Porozmawiajmy", href: "#kontakt" },
    trustNote: "Bezpłatna konsultacja • Bez presji • Bez zobowiązań",
  },

  audience: {
    label: "Dla kogo",
    hint: "Każdy plan dobieramy do Twoich realnych możliwości.",
  },

  outcomes: {
    label: "Konkretna propozycja",
  },

  areas: {
    label: "W czym pomagamy",
  },

  team: {
    label: "Ludzie za KONKRETNI",
    headline: "Ludzie, nie polisy, budują zaufanie.",
    intro:
      "Ponad 40 lat łącznego doświadczenia w ubezpieczeniach na życie, likwidacji szkód i prawie odszkodowawczym. Realny zespół — te same osoby, które odbiorą Twój telefon.",
  },

  lead: {
    stepLabel: "KROK 2",
    headline: "Umów się na bezpłatną konsultację już dziś.",
    sub: "Zostaw kontakt — oddzwonimy i ustalimy dogodny termin. Najpierw rozmowa, potem plan, na końcu rozwiązania, które naprawdę mają sens.",
    benefits: [
      "Najpierw słuchamy — potem porządkujemy kierunek.",
      "Bez presji i bez pustych obietnic.",
      "Rozwiązania dopiero wtedy, gdy mają sens.",
    ],
  },
} as const;
