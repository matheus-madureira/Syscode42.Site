import type { MetadataRoute } from "next"

import { privacyPath, site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}${privacyPath}`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
