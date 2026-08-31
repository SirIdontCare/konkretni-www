import Image from "next/image";
import { siteConfig } from "@/content/site";

const galleryImages = [
  {
    src: "/photos/k1front.jpg",
    alt: "Zespół KONKRETNI podczas pracy — rozmowa telefoniczna, laptop, notatki",
    width: 1448,
    height: 1086,
  },
  {
    src: "/photos/k3front.jpg",
    alt: "Zespół KONKRETNI w jasnym wnętrzu biura — portret grupowy",
    width: 1448,
    height: 1086,
  },
];

export function Team() {
  const { team } = siteConfig;
  return (
    <section id="ludzie" className="section" aria-labelledby="team-heading">
      <div className="container">
        <div className="team-grid">
          <div className="team-visual">
            <div className="team-gallery">
              <figure className="team-figure team-figure--main">
                <div className="team-frame">
                  <Image
                    src={team.image.src}
                    alt={team.image.alt}
                    width={team.image.width}
                    height={team.image.height}
                    sizes="(max-width: 980px) 100vw, 620px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <figcaption className="team-figcap">
                  <span className="team-figcap-kicker">Fotografia autentyczna</span>
                  <span className="team-figcap-title">Zespół KONKRETNI — trzy osoby, jedno ujęcie</span>
                </figcaption>
              </figure>

              <div className="team-gallery-side" aria-hidden="false">
                {galleryImages.map((img) => (
                  <figure key={img.src} className="team-figure team-figure--small">
                    <div className="team-frame team-frame--small">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes="(max-width: 980px) 50vw, 300px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
            <p className="team-note">{team.groupNote}</p>
          </div>

          <div className="team-copy">
            <div className="eyebrow">{team.label}</div>
            <h2 id="team-heading">{team.headline}</h2>

            <div className="mission" aria-labelledby="mission-title">
              <p id="mission-title" className="mission-lead">
                {team.missionBody[0]}
              </p>
              <p>{team.missionBody[1]}</p>
              <p>{team.missionBody[2]}</p>
              <p>{team.missionBody[3]}</p>
              <p className="mission-strong">{team.missionBody[4]}</p>
              <p className="mission-meta">
                {team.missionTitle} • KONKRETNI
              </p>
            </div>

            <p className="team-footnote">
              Nie pokazujemy sztucznych wizytówek, dopóki nie mamy zweryfikowanych biogramów. Zaufanie budujemy autentycznym zdjęciem zespołu — nie domysłami, kto jest kim.
            </p>

            <div className="team-actions">
              <a href="#kontakt" className="btn btn--primary">
                Porozmawiajmy
              </a>
              <a href="#proces" className="btn btn--ghost-dark">
                Zobacz jak działamy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
