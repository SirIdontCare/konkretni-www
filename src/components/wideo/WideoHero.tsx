import { wideoConfig } from "@/content/wideo";

export function WideoHero({ hasVideo }: { hasVideo: boolean }) {
  const { hero } = wideoConfig;
  const primary = hasVideo ? hero.ctaWatch : hero.ctaTalk;
  const secondary = hasVideo ? hero.ctaTalk : null;

  return (
    <section className="wl-hero" aria-labelledby="wl-hero-heading" data-wl-hero>
      <div className="container">
        <div className="wl-hero-inner reveal">
          <div className="eyebrow wl-eyebrow">{hero.eyebrow}</div>
          <h1 id="wl-hero-heading">
            <span>{hero.headline[0]}</span>
            <span className="accent">{hero.headline[1]}</span>
          </h1>
          <p className="wl-hero-sub">{hero.supporting}</p>
          <div className="wl-hero-actions">
            <a href={primary.href} className="btn btn--primary">
              {primary.label}
              <span aria-hidden="true">→</span>
            </a>
            {secondary && (
              <a href={secondary.href} className="btn btn--ghost">
                {secondary.label}
              </a>
            )}
          </div>
          <div className="wl-hero-trust">{hero.trustNote}</div>
        </div>
      </div>
    </section>
  );
}
