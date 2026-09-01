import { siteConfig } from "@/content/site";
import { wideoConfig } from "@/content/wideo";

export function WideoAreas() {
  const { areas } = siteConfig;
  return (
    <section id="obszary" className="section--tight" aria-labelledby="wl-areas-heading">
      <div className="container">
        <div className="wl-outcomes-head">
          <div className="eyebrow">{wideoConfig.areas.label}</div>
          <h2 id="wl-areas-heading">{areas.intro}</h2>
        </div>
        <div className="area-list">
          {areas.items.map((area) => (
            <article key={area.number} className="area-row">
              <div className="area-num" aria-hidden="true">
                {area.number}
              </div>
              <div className="area-main">
                <h3>{area.title}</h3>
                <p className="area-desc">{area.description}</p>
              </div>
              <div className="area-meta">
                <p className="area-framing">{area.framing}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
