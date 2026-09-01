import { siteConfig } from "@/content/site";

export function Areas() {
  const { areas, audience } = siteConfig;
  return (
    <section id="obszary" className="section section--tight" aria-labelledby="areas-heading">
      <div className="container">
        <div className="areas-head">
          <div>
            <div className="eyebrow">{areas.label}</div>
            <h2 id="areas-heading">W czym naprawdę pomagamy</h2>
          </div>
          <p>{areas.intro}</p>
        </div>

        <div className="area-list" role="list">
          {areas.items.map((item) => (
            <article key={item.number} className="area-row" role="listitem">
              <div className="area-num" aria-hidden="true">
                {item.number}
              </div>
              <div className="area-main">
                <h3>{item.title}</h3>
                <p className="area-desc">{item.description}</p>
              </div>
              <div className="area-meta">
                <p className="area-framing">{item.framing}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="areas-audience" aria-labelledby="audience-label">
          <p id="audience-label" className="areas-audience-label">
            {audience.headline}
          </p>
          <ul>
            {audience.items.map((a) => (
              <li key={a.group}>
                <strong>{a.group}</strong> — {a.need}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
