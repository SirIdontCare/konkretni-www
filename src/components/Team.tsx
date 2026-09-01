import Image from "next/image";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";

const teamImages = [
  {
    src: "/photos/k2front.jpg",
    alt: "Zespół KONKRETNI — portret zespołu",
    width: 1448,
    height: 1086,
    kicker: "Portret zespołu",
  },
  {
    src: "/photos/k1front.jpg",
    alt: "Zespół KONKRETNI podczas pracy — rozmowa telefoniczna, laptop, notatki",
    width: 1448,
    height: 1086,
    kicker: "Zespół w pracy",
  },
];

export function Team() {
  const { team } = siteConfig;
  return (
    <section id="ludzie" className="section" aria-labelledby="team-heading">
      <div className="container">
        <div className="team-grid">
          <div className="team-visual">
            <div className="team-gallery team-gallery--duo">
              {teamImages.map((img) => (
                <figure key={img.src} className="team-figure">
                  <div className="team-frame">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(max-width: 980px) 100vw, 320px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </figure>
              ))}
            </div>
            <figcaption className="team-figcap" style={{ marginTop: 12 }}>
              <span className="team-figcap-kicker">Fotografia autentyczna</span>
              <span className="team-figcap-title">Zespół KONKRETNI — portret oraz praca z klientami</span>
            </figcaption>
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

        <div className="team-profiles" aria-label="Zespół KONKRETNI — profile">
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
      </div>
    </section>
  );
}
