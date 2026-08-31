import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";

const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-urbanist",
  display: "swap",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  metadataBase: new URL(siteConfig.seo.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.url,
    siteName: siteConfig.brand.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1600,
        height: 1067,
        alt: siteConfig.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: [
      { url: "/brand/cropped-logobw.png", type: "image/png" },
    ],
    apple: "/brand/cropped-logobw.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${urbanist.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Przejdź do treści
        </a>
        {children}
        {/* Minimal safe Organization schema — no unverified fields */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.brand.name,
              url: siteConfig.seo.url,
              slogan: siteConfig.brand.tagline,
              logo: `${siteConfig.seo.url}${siteConfig.brand.logo.icon}`,
            }),
          }}
        />
      </body>
    </html>
  );
}
