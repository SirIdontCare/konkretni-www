import { siteConfig } from "@/content/site";
import { wideoConfig } from "@/content/wideo";

export function WideoOutcomes() {
  const { outcomes } = siteConfig;
  return (
    <section id="jak" className="section--tight" aria-labelledby="wl-outcomes-heading">
      <div className="container">
        <div className="wl-outcomes-head">
          <div className="eyebrow">{wideoConfig.outcomes.label}</div>
          <h2 id="wl-outcomes-heading">{outcomes.headline}</h2>
          <p>{outcomes.intro}</p>
        </div>
        <div className="outcomes-grid">
          {outcomes.items.map((item) => (
            <div key={item.number} className="outcomes-item">
              <div className="outcomes-num" aria-hidden="true">
                {item.number}
              </div>
              <div className="outcomes-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
