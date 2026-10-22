import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#ebf2fa",
    theme_color: "#00296b",
    icons: [{ src: "/icon-192.webp", sizes: "192x192", type: "image/webp" }],
  }
}
