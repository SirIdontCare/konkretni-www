import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Polityka prywatności | KONKRETNI",
  description: "Informacje o przetwarzaniu danych osobowych w serwisie KONKRETNI.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  const { legal } = siteConfig;
  return (
    <>
      <Navigation variant="light" />
      <main id="main" className="section">
        <div className="container">
          <div className="legal">
            <div className="eyebrow">Dokument</div>
            <h1>Polityka prywatności</h1>
            <p style={{ marginTop: 8, color: "var(--muted)" }}>
              Niniejsza polityka dotyczy serwisu konkretni.com.pl oraz formularza kontaktowego.
            </p>

            <div style={{ marginTop: 32, display: "grid", gap: 26 }}>
              <section>
                <h2 style={{ fontSize: "1.15rem", marginBottom: 10 }}>1. Administrator danych</h2>
                <p>
                  Administratorem danych osobowych jest{" "}
                  {legal.entityName ? (
                    <strong>{legal.entityName}</strong>
                  ) : (
                    <>
                      zespół agentów ubezpieczeniowych działających wspólnie pod nazwą <strong>KONKRETNI</strong>
                    </>
                  )}
                  {legal.address ? `, z siedzibą: ${legal.address}` : ""}, współpracujących ze sobą przy obsłudze klientów.
                  Kontakt w sprawach ochrony danych:{" "}
                  <a href={`mailto:${legal.privacyEmail}`} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                    {legal.privacyEmail}
                  </a>.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.15rem", marginBottom: 10 }}>2. Zakres przetwarzanych danych</h2>
                <p>
                  Za pośrednictwem formularza kontaktowego zbierane mogą być następujące dane osobowe: imię, numer
                  telefonu, adres e-mail oraz dobrowolnie podana treść wiadomości.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.15rem", marginBottom: 10 }}>3. Cele i podstawa prawna</h2>
                <p>Dane osobowe są przetwarzane w następujących celach:</p>
                <ul style={{ margin: "10px 0 0", paddingLeft: 18, lineHeight: 1.8 }}>
                  <li>kontakt z klientem — art. 6 ust. 1 lit. b RODO,</li>
                  <li>przedstawienie oferty ubezpieczenia na życie — art. 6 ust. 1 lit. f RODO,</li>
                  <li>działania marketingowe — art. 6 ust. 1 lit. a RODO.</li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: "1.15rem", marginBottom: 10 }}>4. Okres przechowywania danych</h2>
                <p>
                  Dane osobowe będą przechowywane: do czasu zakończenia procesu przygotowania oferty i udzielenia
                  odpowiedzi; w przypadku zawarcia umowy ubezpieczenia — przez okres wymagany przepisami prawa; w
                  przypadku zgody marketingowej — do momentu jej cofnięcia.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.15rem", marginBottom: 10 }}>5. Odbiorcy danych</h2>
                <p>
                  Dane osobowe mogą być udostępniane: towarzystwom ubezpieczeniowym współpracującym z agentami —
                  wyłącznie w celu przygotowania i przedstawienia oferty oraz zawarcia umowy ubezpieczenia; podmiotom
                  świadczącym usługi IT i wsparcie techniczne; podmiotom wspierającym działania marketingowe.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.15rem", marginBottom: 10 }}>6. Prawa osób, których dane dotyczą</h2>
                <p>Osoba, której dane dotyczą, ma prawo do:</p>
                <ul style={{ margin: "10px 0 0", paddingLeft: 18, lineHeight: 1.8 }}>
                  <li>dostępu do swoich danych,</li>
                  <li>sprostowania danych,</li>
                  <li>cofnięcia zgody w dowolnym momencie,</li>
                  <li>usunięcia danych.</li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: "1.15rem", marginBottom: 10 }}>7. Dobrowolność podania danych</h2>
                <p>
                  Podanie danych osobowych jest dobrowolne, ale konieczne w celu umożliwienia kontaktu i przygotowania
                  odpowiedzi.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.15rem", marginBottom: 10 }}>8. Zabezpieczenia danych</h2>
                <p>
                  Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę danych osobowych przed
                  ich utratą, dostępem osób nieuprawnionych czy nieuprawnionym ujawnieniem.
                </p>
              </section>
            </div>

            <p style={{ marginTop: 32 }}>
              <Link href="/#kontakt" className="btn btn--primary btn--small">
                Wróć do kontaktu
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
