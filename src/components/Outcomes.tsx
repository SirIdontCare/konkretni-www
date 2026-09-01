import { siteConfig } from "@/content/site";

export function Outcomes() {
  const { outcomes } = siteConfig;
  return (
    <section className="section section--tight outcomes" aria-labelledby="outcomes-heading">
      <div className="container">
        <div className="outcomes-wrap">
          <div className="outcomes-head">
            <div className="eyebrow">{outcomes.label}</div>
            <h2 id="outcomes-heading">{outcomes.headline}</h2>
            <p>{outcomes.intro}</p>
          </div>

          <div className="outcomes-grid" role="list">
            {outcomes.items.map((item) => (
              <div key={item.number} className="outcomes-item" role="listitem">
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
      </div>
    </section>
  );
}
