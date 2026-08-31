import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Areas } from "@/components/Areas";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation variant="hero" />
      <main id="main">
        <Hero />
        <Philosophy />
        <div className="container">
          <div className="rule" aria-hidden="true" />
        </div>
        <Areas />
        <Process />
        <Team />
        <div className="container">
          <div className="rule" aria-hidden="true" />
        </div>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
