import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Polityka prywatności | KONKRETNI",
  description: "Informacje o przetwarzaniu danych osobowych w serwisie KONKRETNI.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation variant="light" />
      <main id="main" className="section">
        <div className="container">
          <div className="legal">
            <div className="eyebrow">Dokument</div>
            <h1>Polityka prywatności</h1>
            <p style={{ marginTop: 8, color: "var(--muted)" }}>
              Treść polityki prywatności zostanie uzupełniona po dostarczeniu zweryfikowanych informacji o administratorze danych, podstawie prawnej i zakresie przetwarzania.
            </p>

            <div style={{ marginTop: 28, padding: 20, background: "var(--paper-2)", border: "1px solid var(--line)", borderRadius: 12 }}>
              <h2 style={{ fontSize: "1.05rem", marginBottom: 8 }}>Co już wiadomo</h2>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                <li>Formularz kontaktowy zbiera wyłącznie: imię, telefon (opcjonalnie), e-mail, treść wiadomości (opcjonalnie).</li>
                <li>Dane są przetwarzane wyłącznie w celu kontaktu zwrotnego.</li>
                <li>Docelowa integracja (e-mail / CRM) jest konfigurowana — patrz <code>/docs/contact-integration.md</code>.</li>
                <li>Brak narzędzi śledzących dodanych na tym etapie — nie ma dodatkowych zgód analitycznych do wczytania.</li>
              </ul>
            </div>

            <div style={{ marginTop: 24, padding: 20, background: "#FFF8EC", border: "1px solid #F0D9A8", borderRadius: 12, color: "#4A380F", fontSize: "0.92rem", lineHeight: 1.6 }}>
              <strong>Content required:</strong> pełna treść polityki przygotowana przez administratora — dane podmiotu, NIP/REGON/KRS jeśli dotyczy, adres, inspektor ochrony danych (jeśli powołany), okres retencji, prawa użytkownika, informacje o ciasteczkach i ewentualnych narzędziach analitycznych.
            </div>

            <p style={{ marginTop: 20 }}>
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
