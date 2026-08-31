import { siteConfig } from "@/content/site";

const audience = [
  {
    key: "Myślą o dziecku",
    want: "chcą zbudować mu bezpieczny start w dorosłość.",
  },
  {
    key: "Planują emeryturę",
    want: "chcą uniezależnić się od ZUS i mieć pewność środków na przyszłość.",
  },
  {
    key: "Odpowiadają za finanse rodziny",
    want: "chcą, by choroba lub wypadek nie zachwiały domowym budżetem.",
  },
  {
    key: "Pracują lub prowadzą firmę",
    want: "chcą wiedzieć, ile realnie otrzymają w razie wypadku lub niezdolności do pracy.",
  },
];

export function Areas() {
  const { areas } = siteConfig;
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

        <div className="areas-audience">
          <p className="areas-audience-label">Mamy dla Ciebie konkretną propozycję — najczęściej rozmawiamy z osobami, które:</p>
          <ul>
            {audience.map((a) => (
              <li key={a.key}>
                <strong>{a.key}</strong> — {a.want}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
