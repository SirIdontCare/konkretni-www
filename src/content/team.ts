/**
 * ACTIVE KONKRETNI team — recovered from company's own landing page
 * (oferta.konkretni.com.pl/wideo, "Poznaj zespół") + client overrides.
 *
 * OVERRIDES CURRENT > LEGACY (Piotr): 20 lat (nie 18), 8× MDRT (nie 6× TOP jako główny fakt),
 * Senior Dyrektor Agencji PRU, Współtwórca KONKRETNYCH.
 *
 * OUTDATED — DO NOT REUSE: Aleksandra Sikora (nieaktywna, potwierdzone przez klienta).
 * Brak mapowania twarz↔imię — profile celowo nie mają zdjęć.
 */

export type TeamMember = {
  name: string;
  role: string;
  specialization: string;
  facts: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Piotr Cegła",
    role: "Współtwórca KONKRETNYCH · Senior Dyrektor Agencji PRU",
    specialization: "Rozwija i buduje zespoły doradców; pracuje na rekomendacjach.",
    facts: [
      "20 lat w branży ubezpieczeniowej — Nordea, Expander, Prudential Polska.",
      "8× MDRT — międzynarodowe stowarzyszenie doradców.",
    ],
  },
  {
    name: "Marcin Misiewicz",
    role: "Doradca ubezpieczeniowy",
    specialization: "Indywidualne ubezpieczenia na życie — klienci prywatni i firmowi.",
    facts: [
      "Zabezpieczenia finansowe wspólników firm i kluczowych osób.",
      "Plany oszczędnościowe dla dzieci — ubezpieczenia posagowe.",
    ],
  },
  {
    name: "Aneta Boksa",
    role: "Doradca ubezpieczeniowy",
    specialization: "Sukcesja dla firm i rodzin — zabezpieczenie i przekazanie majątku.",
    facts: [
      "19 lat jako likwidator szkód.",
      "Praktyczna znajomość dystrybucji ubezpieczeń, prawa cywilnego i finansów.",
    ],
  },
];
