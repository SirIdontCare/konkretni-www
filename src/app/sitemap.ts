import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.url;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/wspolpraca`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/rekrutacja`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/polityka-prywatnosci`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
