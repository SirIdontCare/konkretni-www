import { siteConfig } from "@/content/site";

export function Process() {
  const { process } = siteConfig;
  return (
    <section id="proces" className="section process" aria-labelledby="process-heading">
      <div className="container">
        <div className="process-head">
          <div className="eyebrow eyebrow--light">Jak działamy</div>
          <h2 id="process-heading">{process.headline}</h2>
          <p>{process.intro}</p>
        </div>

        <div className="process-grid" role="list">
          {process.steps.map((s) => (
            <div key={s.number} className="process-step" role="listitem">
              <div className="process-step-num" aria-hidden="true">
                {s.number}
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>

        <p className="process-note">{process.note}</p>
      </div>
    </section>
  );
}
