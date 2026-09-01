import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

/** Compact campaign footer — same conventions as the site footer, landing-safe links only. */
export function WideoFooter() {
  const { brand, footer } = siteConfig;
  return (
    <footer className="site-footer" role="contentinfo" data-wl-footer>
      <div className="container">
        <div className="wl-footer-inner">
          <div className="footer-brand">
            <Image src={brand.logo.dark} alt={brand.logo.alt} width={56} height={56} style={{ objectFit: "contain" }} />
            <div>
              <strong>{brand.name}</strong>
              <small>{brand.tagline}</small>
            </div>
          </div>
          <ul className="footer-links">
            <li>
              <Link href="/">Strona główna</Link>
            </li>
            {footer.links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <span>
            <a href="https://konkretni.com.pl">konkretni.com.pl</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
