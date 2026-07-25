import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified,
    changeFrequency: "monthly",
    priority: lang === "he" ? 1 : 0.9,
    alternates: {
      languages: {
        he: `${SITE_URL}/he`,
        en: `${SITE_URL}/en`,
      },
    },
  }));
}
