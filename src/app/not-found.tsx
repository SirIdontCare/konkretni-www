import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation variant="light" />
      <main id="main" className="section">
        <div className="container">
          <div className="legal" style={{ textAlign: "center", padding: "40px 0" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Błąd 404
            </div>
            <h1>Strony nie znaleziono</h1>
            <p style={{ maxWidth: "52ch", marginInline: "auto" }}>
              Wygląda na to, że trafiłeś na adres, który nie istnieje. Wróć na stronę główną lub skontaktuj się z nami bezpośrednio.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/" className="btn btn--primary">
                Strona główna
              </Link>
              <Link href="/#kontakt" className="btn btn--ghost-dark">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
