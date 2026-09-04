import Image from "next/image";
import { siteConfig } from "@/content/site";

export function Hero() {
  const { hero } = siteConfig;
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow hero-eyebrow">{hero.eyebrow}</div>
            <h1 id="hero-heading">
              <span>{hero.headline[0]}</span>
              <span className="accent">{hero.headline[1]}</span>
            </h1>
            <p className="hero-sub">
              Najpierw rozmowa.
              <br />
              Potem plan.
              <br />
              Na końcu rozwiązania, które naprawdę mają sens.
            </p>
            <div className="hero-actions">
              <a href={hero.cta.href} className="btn btn--primary">
                {hero.cta.label}
                <span aria-hidden="true">→</span>
              </a>
              <a href={hero.secondaryCta.href} className="btn btn--link">
                {hero.secondaryCta.label} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-trust">{hero.trustNote}</div>
          </div>

          <div className="hero-visual reveal" style={{ animationDelay: "80ms" }}>
            <div className="hero-figure">
              <div className="hero-frame">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  width={hero.image.width}
                  height={hero.image.height}
                  priority
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
