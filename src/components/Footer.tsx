import Image from "next/image";
import { siteConfig } from "@/content/site";

export function Footer() {
  const { footer, brand } = siteConfig;
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <Image src={brand.logo.dark} alt={brand.logo.alt} width={56} height={56} style={{ objectFit: "contain" }} />
              <div>
                <strong>{brand.name}</strong>
                <small>{brand.tagline}</small>
              </div>
            </div>
            <p>{footer.brandNote} Najpierw rozmowa, potem plan, na końcu rozwiązania, które naprawdę mają sens.</p>
          </div>

          <div className="footer-col">
            <h4>Nawigacja</h4>
            <ul className="footer-links">
              <li>
                <a href="#obszary">Obszary</a>
              </li>
              <li>
                <a href="#proces">Jak działamy</a>
              </li>
              <li>
                <a href="#ludzie">Ludzie</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Informacje</h4>
            <ul className="footer-links">
              {footer.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="/sitemap.xml">Mapa strony</a>
              </li>
            </ul>
            {(siteConfig.legal.entityName || siteConfig.legal.nip || siteConfig.legal.address) ? (
              <div style={{ marginTop: 18, fontSize: "0.78rem", color: "rgba(255,255,255,0.52)", lineHeight: 1.6 }}>
                {siteConfig.legal.entityName && <div>{siteConfig.legal.entityName}</div>}
                {siteConfig.legal.address && <div>{siteConfig.legal.address}</div>}
                {(siteConfig.legal.nip || siteConfig.legal.regon || siteConfig.legal.krs) && (
                  <div>
                    {[
                      siteConfig.legal.nip ? `NIP: ${siteConfig.legal.nip}` : null,
                      siteConfig.legal.regon ? `REGON: ${siteConfig.legal.regon}` : null,
                      siteConfig.legal.krs ? `KRS: ${siteConfig.legal.krs}` : null,
                    ]
                      .filter(Boolean)
                      .join(" • ")}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <span>
            Projekt: KONKRETNI • <a href="https://konkretni.com.pl">konkretni.com.pl</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
