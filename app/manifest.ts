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
    icons: [{ src: "/icon.png", sizes: "260x260", type: "image/png" }],
  }
}
