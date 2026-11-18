import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://salvadortenorio.dev";
  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: "2026-11-16",
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}`]),
      ),
    },
  }));
}
