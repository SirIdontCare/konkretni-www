import Image from "next/image";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { wideoConfig } from "@/content/wideo";

/**
 * Trust block for the campaign landing — one authentic team photo + compact profiles.
 * Uses the verified current team only (Piotr · Marcin · Aneta).
 */
export function WideoTeam() {
  const { team } = siteConfig;
  return (
    <section id="ludzie" className="section--tight" aria-labelledby="wl-team-heading">
      <div className="container">
        <div className="team-grid">
          <div className="team-visual">
            <figure className="team-figure">
              <div className="team-frame">
                <Image
                  src={team.image.src}
                  alt={team.image.alt}
                  width={team.image.width}
                  height={team.image.height}
                  sizes="(max-width: 980px) 100vw, 520px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption className="team-figcap">
                <span className="team-figcap-kicker">Ludzie KONKRETNYCH</span>
                <span className="team-figcap-title">Piotr Cegła · Marcin Misiewicz · Aneta Boksa</span>
              </figcaption>
            </figure>
          </div>

          <div className="team-copy">
            <div className="eyebrow">{wideoConfig.team.label}</div>
            <h2 id="wl-team-heading">{wideoConfig.team.headline}</h2>
            <p className="wl-team-intro">{wideoConfig.team.intro}</p>
            <div className="team-actions">
              <a href="#kontakt" className="btn btn--primary">
                Porozmawiajmy
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
