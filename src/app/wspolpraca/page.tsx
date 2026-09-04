import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";

const title = "Współpraca | KONKRETNI";
const description =
  "Współpraca biznesowa, partnerska i projektowa z zespołem KONKRETNI. Masz pomysł na wspólne działania? Porozmawiajmy konkretnie.";
const canonicalUrl = `${siteConfig.seo.url}/wspolpraca`;

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
    images: [{ url: siteConfig.seo.ogImage, width: 1448, height: 1086, alt: "Zespół KONKRETNI — Współpraca" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.seo.ogImage],
  },
};

const cooperationContexts = [
  {
    number: "01",
    title: "Benefity pracownicze i programy dla firm",
    description:
      "Wartościowe programy ochronno-kapitałowe dla pracowników oraz ponadstandardowe pakiety zabezpieczenia dla kluczowych specjalistów i kadry zarządzającej w firmie.",
  },
  {
    number: "02",
    title: "Partnerstwo poleceniowe i rekomendacje",
    description:
      "Dla przedsiębiorców i profesjonalistów, którzy chcą bezpiecznie kierować swoich klientów do zaufanych doradców ubezpieczeniowych — na przejrzystych, etycznych zasadach.",
  },
  {
    number: "03",
    title: "Ochrona wspólników i sukcesja",
    description:
      "Ubezpieczenia wspólników spółek, zabezpieczenie płynności biznesu na wypadek nagłych zdarzeń losowych oraz uporządkowanie spraw sukcesyjnych i majątkowych.",
  },
  {
    number: "04",
    title: "Synergia ze specjalistami (B2B)",
    description:
      "Dla radców prawnych, adwokatów, księgowych i doradców biznesowych. Wnosimy ponad 40 lat łącznego doświadczenia w ubezpieczeniach, prawie odszkodowawczym i likwidacji szkód.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "ROZMOWA",
    description: "Zaczynamy od poznania Twojej perspektywy, pomysłu i obszaru, w którym widzisz potencjał do wspólnych działań.",
  },
  {
    number: "02",
    title: "WSPÓLNA PRZESTRZEŃ",
    description: "Sprawdzamy, czy nasze wartości, standardy pracy i oczekiwania wzajemnie do siebie pasują.",
  },
  {
    number: "03",
    title: "MODEL WSPÓŁPRACY",
    description: "Dopiero po ustaleniu wspólnego mianownika doprecyzowujemy formę i ramy dalszych działań.",
  },
];

export default function WspolpracaPage() {
  return (
    <>
      <Navigation variant="hero" />
      <main id="main">
        {/* 01 Hero */}
        <section className="subpage-hero" aria-labelledby="wspolpraca-hero-heading">
          <div className="container">
            <div className="subpage-hero-grid">
              <div className="subpage-hero-copy">
                <div className="eyebrow eyebrow--light">WSPÓŁPRACA</div>
                <h1 id="wspolpraca-hero-heading">Porozmawiajmy o współpracy.</h1>
                <p className="subpage-hero-sub">
                  Nie każda współpraca musi oznaczać dołączenie do zespołu. Jeżeli widzisz przestrzeń do wspólnych działań
                  z KONKRETNYMI — w obszarze benefitów dla firm, partnerstwa poleceniowego lub synergii ze specjalistami —
                  zacznijmy od rozmowy.
                </p>
                <div className="subpage-hero-actions">
                  <a href="#formularz" className="btn btn--primary">
                    Porozmawiajmy o współpracy
                  </a>
                  <a href="#obszary" className="btn btn--ghost">
                    Kiedy warto się odezwać
                  </a>
                </div>
              </div>

              <div className="subpage-hero-visual">
                <div className="subpage-hero-frame">
                  <Image
                    src="/photos/k2front.jpg"
                    alt="Zespół KONKRETNI — partnerstwo i doradztwo biznesowe"
                    width={1535}
                    height={1024}
                    priority
                    sizes="(max-width: 960px) 100vw, 560px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 Kiedy warto się odezwać */}
        <section id="obszary" className="section section--paper" aria-labelledby="coop-heading">
          <div className="container">
            <div className="areas-head">
              <div>
                <div className="eyebrow">Obszary synergii</div>
                <h2 id="coop-heading">Kiedy warto się odezwać</h2>
              </div>
              <p>
                Jesteśmy otwarci na dialog z przedsiębiorcami i profesjonalistami, którzy cenią merytoryczne podejście i
                długoterminowe zaufanie.
              </p>
            </div>

            <div className="editorial-grid" role="list">
              {cooperationContexts.map((item) => (
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

        {/* 03 Jak zaczynamy */}
        <section className="section process" aria-labelledby="process-heading">
          <div className="container">
            <div className="process-head">
              <div className="eyebrow eyebrow--light">Prosty porządek</div>
              <h2 id="process-heading">Jak zaczynamy</h2>
              <p>
                Nie tworzymy sztywnych procedur partnerskich. Trzymamy się zasady, która sprawdza się w każdym rzetelnym
                biznesie:
              </p>
            </div>

            <div className="process-grid" role="list">
              {processSteps.map((step) => (
                <div key={step.number} className="process-step" role="listitem">
                  <div className="process-step-num" aria-hidden="true">
                    {step.number}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 Team & Trust */}
        <section className="section" aria-labelledby="wspolpraca-team-heading">
          <div className="container">
            <div className="team-grid">
              <div className="team-visual">
                <div className="team-frame" style={{ aspectRatio: "4/3", maxHeight: 420 }}>
                  <Image
                    src="/photos/k1front.jpg"
                    alt="Zespół KONKRETNI — spotkanie i praca doradcza"
                    width={1448}
                    height={1086}
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
                <div className="eyebrow">Zaufanie i doświadczenie</div>
                <h2 id="wspolpraca-team-heading">Współpracujesz z konkretnymi ludźmi.</h2>
                <div className="mission">
                  <p className="mission-lead">
                    Decyzje finansowe wymagają spokoju, rzetelności i przewidywalności.
                  </p>
                  <p>
                    Współpracując z KONKRETNYMI, wiesz dokładnie, kto odpowiada za jakość doradztwa i obsługę Twoich klientów
                    lub partnerów.
                  </p>
                  <p className="mission-strong">
                    Stawiamy na długoterminowe partnerstwo oparte na przejrzystych zasadach i wzajemnym szacunku.
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

            {/* Crosslink to Rekrutacja */}
            <div className="crosslink-banner" role="note">
              <div>
                <strong>Szukasz pracy lub chcesz dołączyć do zespołu jako doradca?</strong>
                <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: "0.9rem" }}>
                  Jeżeli interesuje Cię rozwój kariery i dołączenie do KONKRETNYCH, sprawdź naszą stronę rekrutacyjną.
                </p>
              </div>
              <Link href="/rekrutacja" className="btn btn--ghost-dark btn--small" style={{ whiteSpace: "nowrap" }}>
                Zobacz rekrutację
              </Link>
            </div>
          </div>
        </section>

        {/* 05 CTA Form */}
        <Contact
          id="formularz"
          source="wspolpraca"
          eyebrowOverride="Kontakt"
          headlineOverride="Zacznijmy od rozmowy o współpracy."
          subOverride="Zostaw kontakt — oddzwonimy i ustalimy dogodny termin rozmowy. Porozmawiamy o Twoim pomyśle i sprawdzimy, co możemy zrobić razem."
          formTitleOverride="Porozmawiajmy o współpracy"
          submitLabelOverride="Wyślij — porozmawiajmy"
          benefitsOverride={[
            "Wstępna rozmowa bez zobowiązań.",
            "Sprawdzimy, czy widzimy wspólną przestrzeń.",
            "Dopiero potem ustalamy kierunek działań.",
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
