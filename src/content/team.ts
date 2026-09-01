/**
 * ACTIVE KONKRETNI team — verified data
 *
 * Current verified profiles:
 * - Piotr Cegła (Senior Dyrektor Agencji Pru, 20 lat doświadczenia, 8× MDRT, Współtwórca KONKRETNYCH)
 * - Marcin Misiewicz (Doradca ubezpieczeniowy, ubezpieczenia na życie, ochrona firm i wspólników)
 * - Aneta Boksa (Doradca ubezpieczeniowy, 19 lat jako likwidator szkód, sukcesja majątkowa)
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
    role: "Senior Dyrektor Agencji Pru · Współtwórca KONKRETNYCH",
    specialization: "Buduje i rozwija zespoły doradców; doradza w oparciu o rekomendacje.",
    facts: [
      "20 lat doświadczenia w branży finansowo-ubezpieczeniowej.",
      "8× MDRT — członek międzynarodowego stowarzyszenia najlepszych doradców.",
    ],
  },
  {
    name: "Marcin Misiewicz",
    role: "Doradca ubezpieczeniowy",
    specialization: "Indywidualne ubezpieczenia na życie oraz ochrona finansowa firm.",
    facts: [
      "Zabezpieczenia wspólników i kluczowych osób w biznesie.",
      "Plany oszczędnościowe dla dzieci oraz ochrona na wypadek chorób.",
    ],
  },
  {
    name: "Aneta Boksa",
    role: "Doradca ubezpieczeniowy",
    specialization: "Sukcesja majątkowa dla rodzin i przedsiębiorstw.",
    facts: [
      "19 lat doświadczenia jako likwidator szkód ubezpieczeniowych.",
      "Praktyczna znajomość prawa cywilnego i procedur odszkodowawczych.",
    ],
  },
];
