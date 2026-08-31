import { siteConfig } from "@/content/site";

export function Philosophy() {
  const { philosophy } = siteConfig;
  return (
    <section className="section" aria-labelledby="philosophy-heading">
      <div className="container">
        <div className="philosophy">
          <div className="eyebrow">{philosophy.label}</div>
          <h2 id="philosophy-heading">{philosophy.headline}</h2>
          <div className="lead">
            {philosophy.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="philosophy-closing" aria-hidden="true">
            {philosophy.closings.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
