import { siteConfig } from "@/content/site";
import { wideoConfig } from "@/content/wideo";

export function WideoAudience() {
  const { audience } = siteConfig;
  return (
    <section id="dla-kogo" className="section--tight" aria-labelledby="wl-audience-heading">
      <div className="container">
        <div className="wl-audience-wrap">
          <div className="eyebrow">{wideoConfig.audience.label}</div>
          <h2 id="wl-audience-heading">{audience.headline}</h2>
          <ul>
            {audience.items.map((item) => (
              <li key={item.group}>
                <strong>{item.group}</strong> — {item.need}
              </li>
            ))}
          </ul>
          <p className="wl-audience-hint">{wideoConfig.audience.hint}</p>
        </div>
      </div>
    </section>
  );
}
