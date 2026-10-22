import type { Metadata } from "next"

import { site } from "@/lib/site"

type PageMetadataInput = {
  title: string
  description: string
  path: string
}

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name}, boutique de software sob medida`,
}

// openGraph e twitter de uma página substituem os do layout por inteiro,
// inclusive a imagem gerada por app/opengraph-image: por isso tudo é repetido.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${site.name}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  }
}
