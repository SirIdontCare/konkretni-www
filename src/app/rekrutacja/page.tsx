import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";

const title = "Rekrutacja | KONKRETNI";
const description =
  "Dołącz do KONKRETNYCH. Szukamy ludzi, którzy chcą budować relacje z klientami na rozmowie, konkretach i odpowiedzialności — nie na wciskaniu produktów.";
const canonicalUrl = `${siteConfig.seo.url}/rekrutacja`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: siteConfig.brand.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [{ url: siteConfig.seo.ogImage, width: 1448, height: 1086, alt: "Zespół KONKRETNI — Rekrutacja" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.seo.ogImage],
  },
};

const tracks = [
  {
    number: "01",
    role: "Ścieżka Doradcza",
    title: "Konsultant ds. planowania finansowego",
    description:
      "Dla osób, które chcą budować stabilny portfel klientów w oparciu o etykę, wysokie standardy i rekomendacje prywatne. Zapewniamy pełne wdrożenie, sprawdzoną metodologię pracy oraz bezpośredni mentoring praktyka (Piotr Cegła — 20 lat w branży, 8× MDRT). Bez cold callingu i bez agresywnych skryptów sprzedażowych.",
  },
  {
    number: "02",
    role: "Ścieżka Liderska",
    title: "Lider Sprzedaży / Menedżer Zespołu",
    description:
      "Dla doświadczonych doradców i liderów, którzy chcą zbudować własny zespół pod skrzydłami Senior Dyrektora Agencji. Otrzymujesz dostęp do sprawdzonych procesów rekrutacji, szkoleń i rozwoju, z naciskiem na kulturę partnerską, odpowiedzialność i długofalowe relacje z klientami.",
  },
];

const principles = [
  {
    number: "01",
    title: "Lubisz pracować z ludźmi",
    description: "Czerpiesz satysfakcję z bezpośredniego kontaktu i pomocy w porządkowaniu ważnych spraw życiowych.",
  },
  {
    number: "02",
    title: "Potrafisz słuchać",
    description: "Zanim zaproponujesz jakiekolwiek rozwiązanie, najpierw zadajesz pytania i dokładnie rozumiesz sytuację.",
  },
  {
    number: "03",
    title: "Praca i sumienie w parze",
    description: "Odrzucasz wciskanie produktów i agresywną akwizycję. Pracujesz w oparciu o etykę, zaufanie i rekomendacje.",
  },
  {
    number: "04",
    title: "Długoterminowe relacje",
    description: "Interesuje Cię opieka nad klientem przez lata, a nie jednorazowa transakcja zakończona podpisaniem umowy.",
  },
  {
    number: "05",
    title: "Chcesz uczyć się od praktyków",
    description: "Cenisz merytoryczną wiedzę o ubezpieczeniach, likwidacji szkód i planowaniu kapitałowym popartą 40-letnim doświadczeniem.",
  },
];

export default function RekrutacjaPage() {
  return (
    <>
      <Navigation variant="hero" />
      <main id="main">
        {/* 01 Hero */}
        <section className="subpage-hero" aria-labelledby="rekrutacja-hero-heading">
          <div className="container">
            <div className="subpage-hero-grid">
              <div className="subpage-hero-copy">
                <div className="eyebrow eyebrow--light">REKRUTACJA</div>
                <h1 id="rekrutacja-hero-heading">Dołącz do KONKRETNYCH.</h1>
                <p className="subpage-hero-sub">
                  Szukamy ludzi, którzy chcą budować relacje z klientami na rozmowie, konkretach i odpowiedzialności — nie
                  na wciskaniu produktów.
                </p>
                <div className="subpage-hero-actions">
                  <a href="#formularz" className="btn btn--primary">
                    Porozmawiajmy o dołączeniu
                  </a>
                  <a href="#sciezki" className="btn btn--ghost">
                    Ścieżki rozwoju
                  </a>
                </div>
              </div>

              <div className="subpage-hero-visual">
                <div className="subpage-hero-frame">
                  <Image
                    src="/photos/k1front.jpg"
                    alt="Zespół KONKRETNI podczas codziennej pracy doradczej"
                    width={1448}
                    height={1086}
                    priority
                    sizes="(max-width: 960px) 100vw, 560px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 Ścieżki rozwoju */}
        <section id="sciezki" className="section section--paper" aria-labelledby="tracks-heading">
          <div className="container">
            <div className="areas-head">
              <div>
                <div className="eyebrow">Możliwości rozwoju</div>
                <h2 id="tracks-heading">Dwie ścieżki w zespole</h2>
              </div>
              <p>
                Niezależnie od tego, czy chcesz budować własny portfel klientów, czy rozwijać strukturę doradców — otrzymujesz
                wsparcie praktyków z ponad 20-letnim doświadczeniem rynkowym.
              </p>
            </div>

            <div className="editorial-grid" role="list">
              {tracks.map((track) => (
                <article key={track.number} className="editorial-card" role="listitem">
                  <div className="editorial-num" aria-hidden="true">
                    {track.number} · {track.role}
                  </div>
                  <h3 className="editorial-title">{track.title}</h3>
                  <p className="editorial-desc">{track.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="rule" aria-hidden="true" />
        </div>

        {/* 03 Who This Is For */}
        <section id="zasady" className="section section--tight" aria-labelledby="principles-heading">
          <div className="container">
            <div className="areas-head">
              <div>
                <div className="eyebrow">Dla kogo</div>
                <h2 id="principles-heading">Możesz pasować do KONKRETNYCH, jeśli...</h2>
              </div>
              <p>
                Nie szukamy agresywnych sprzedawców. Szukamy doradców, którzy chcą pracować profesjonalnie i budować swoją
                markę na rzetelności.
              </p>
            </div>

            <div className="editorial-grid" role="list">
              {principles.map((item) => (
                <article key={item.number} className="editorial-card" role="listitem">
                  <div className="editorial-num" aria-hidden="true">
                    {item.number}
                  </div>
                  <h3 className="editorial-title">{item.title}</h3>
                  <p className="editorial-desc">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="rule" aria-hidden="true" />
        </div>

        {/* 03 How We Think About The Work */}
        <section className="section section--tight" aria-labelledby="philosophy-heading">
          <div className="container">
            <div className="philosophy">
              <div className="eyebrow">Filozofia pracy</div>
              <h2 id="philosophy-heading">Najpierw rozmowa. Potem plan. Na końcu rozwiązania.</h2>
              <div className="lead">
                <p>
                  Ta sama zasada, którą stosujemy wobec naszych klientów, obowiązuje wewnątrz zespołu KONKRETNYCH.
                </p>
                <p>
                  Nie wierzymy w agresywne skrypty, presję ani sztuczne obietnice. Wierzymy w merytoryczne przygotowanie,
                  uważne słuchanie drugiego człowieka i budowanie bezpieczeństwa finansowego, które broni się wtedy, gdy
                  przychodzi moment próby.
                </p>
              </div>
              <div className="philosophy-closing">
                <span>Bez presji</span>
                <span>Z odpowiedzialnością</span>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="rule" aria-hidden="true" />
        </div>

        {/* 04 Team */}
        <section className="section" aria-labelledby="rekrutacja-team-heading">
          <div className="container">
            <div className="team-grid">
              <div className="team-visual">
                <div className="team-frame" style={{ aspectRatio: "4/3", maxHeight: 420 }}>
                  <Image
                    src="/photos/k2front.jpg"
                    alt="Zespół KONKRETNI — Piotr Cegła, Aneta Boksa, Marcin Misiewicz"
                    width={1535}
                    height={1024}
                    sizes="(max-width: 980px) 100vw, 480px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="team-figcap" style={{ marginTop: 14 }}>
                  <span className="team-figcap-kicker">Zespół KONKRETNYCH</span>
                  <span className="team-figcap-title">Piotr Cegła · Aneta Boksa · Marcin Misiewicz</span>
                </div>
                <p className="team-note">{siteConfig.team.groupNote}</p>
              </div>

              <div className="team-copy">
                <div className="eyebrow">Zespół</div>
                <h2 id="rekrutacja-team-heading">Pracujesz z praktykami, nie teoretykami.</h2>
                <div className="mission">
                  <p className="mission-lead">Wspólnie tworzymy środowisko oparte na merytoryce i zaufaniu.</p>
                  <p>
                    Rozwijając się w zespole KONKRETNYCH, korzystasz z wiedzy osób z wieloletnim doświadczeniem w
                    doradztwie kapitałowym, prawie odszkodowawczym i likwidacji szkód.
                  </p>
                  <p className="mission-strong">
                    Uczymy doradztwa opartego na rekomendacjach, szacunku do klienta i partnerskich zasadach.
                  </p>
                </div>
              </div>
            </div>

            <div className="team-profiles" style={{ marginTop: 40 }} aria-label="Profile doradców zespołu">
              {teamMembers.map((m) => (
                <article key={m.name} className="team-profile">
                  <h3>{m.name}</h3>
                  <p className="team-profile-role">{m.role}</p>
                  <p className="team-profile-spec">{m.specialization}</p>
                  <ul className="team-profile-facts">
                    {m.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Crosslink to Współpraca */}
            <div className="crosslink-banner" role="note">
              <div>
                <strong>Interesuje Cię partnerstwo biznesowe zamiast rekrutacji?</strong>
                <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: "0.9rem" }}>
                  Jeżeli prowadzisz firmę lub chcesz nawiązać współpracę poleceniową bądź projektową, sprawdź naszą ofertę
                  partnerską.
                </p>
              </div>
              <Link href="/wspolpraca" className="btn btn--ghost-dark btn--small" style={{ whiteSpace: "nowrap" }}>
                Zobacz współpracę
              </Link>
            </div>
          </div>
        </section>

        {/* 05 Recruitment CTA Form */}
        <Contact
          id="formularz"
          source="rekrutacja"
          eyebrowOverride="Rekrutacja"
          headlineOverride="Sprawdźmy, czy do siebie pasujemy."
          subOverride="Zostaw kontakt — odezwiemy się i umówimy na spokojną rozmowę o możliwościach dołączenia do zespołu. Bez presji i bez skomplikowanych formularzy."
          formTitleOverride="Porozmawiajmy o dołączeniu"
          submitLabelOverride="Wyślij — porozmawiajmy"
          benefitsOverride={[
            "Rozmowa bez presji i bez zobowiązań.",
            "Poznasz nasze podejście do pracy z klientem.",
            "Wspólnie sprawdzimy, czy mamy wspólny kierunek.",
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
