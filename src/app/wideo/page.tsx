import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { WideoHero } from "@/components/wideo/WideoHero";
import { VideoSection } from "@/components/wideo/VideoSection";
import { WideoAudience } from "@/components/wideo/WideoAudience";
import { WideoOutcomes } from "@/components/wideo/WideoOutcomes";
import { WideoAreas } from "@/components/wideo/WideoAreas";
import { WideoTeam } from "@/components/wideo/WideoTeam";
import { LeadForm } from "@/components/wideo/LeadForm";
import { StickyCta } from "@/components/wideo/StickyCta";
import { WideoFooter } from "@/components/wideo/WideoFooter";
import { wideoConfig } from "@/content/wideo";
import { siteConfig } from "@/content/site";

/**
 * /wideo — Meta Ads campaign landing (replacement for the legacy
 * oferta.konkretni.com.pl/wideo funnel; legacy stays untouched and live).
 *
 * SEO decision: NOINDEX, FOLLOW. Rationale: campaign landing for paid traffic,
 * copy intentionally overlaps the homepage (duplicate-content risk), and organic
 * entry should land on the full homepage. To flip to indexed later, change
 * `robots` below and add the route to src/app/sitemap.ts.
 */

const hasVideo = Boolean(wideoConfig.video.vimeoId);

const navLinks = [
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Obszary", href: "#obszary" },
  { label: "Ludzie", href: "#ludzie" },
];

const title = "Wideo | KONKRETNI — Konkrety nie obietnice";
const description =
  "Nie sprzedajemy ubezpieczeń. Budujemy bezpieczeństwo. Obejrzyj krótkie wideo i umów się na bezpłatną konsultację — bez presji i bez ukrytych warunków.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/wideo" },
  robots: { index: false, follow: true },
  openGraph: {
    title,
    description,
    url: "/wideo",
    siteName: siteConfig.brand.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [{ url: siteConfig.seo.ogImage, width: 1600, height: 1067, alt: siteConfig.brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.seo.ogImage],
  },
};

export default function WideoPage() {
  return (
    <>
      <Navigation variant="hero" links={navLinks} cta={siteConfig.nav.cta} />
      <main id="main">
        <WideoHero hasVideo={hasVideo} />
        <VideoSection />
        <WideoAudience />
        <div className="container">
          <div className="rule" aria-hidden="true" />
        </div>
        <WideoOutcomes />
        <WideoAreas />
        <div className="container">
          <div className="rule" aria-hidden="true" />
        </div>
        <WideoTeam />
        <LeadForm />
      </main>
      <WideoFooter />
      <StickyCta label="Umów bezpłatną konsultację" href="#kontakt" />
    </>
  );
}
