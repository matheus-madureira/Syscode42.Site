import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Orbitron, Outfit, TikTok_Sans } from "next/font/google"

import "./globals.css"
import { Consent } from "@/components/site/consent"
import { ContactDialogProvider } from "@/components/site/contact-dialog"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"
import { JsonLd } from "@/lib/json-ld"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const tiktokSans = TikTok_Sans({
  subsets: ["latin"],
  variable: "--font-tiktok",
  display: "swap",
  // next/font não tem métricas de fallback para a TikTok Sans.
  adjustFontFallback: false,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false },
  // A convenção app/icon.* não aceita WebP; os ícones ficam em public/.
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp", sizes: "48x48" }],
    apple: [{ url: "/apple-icon.webp", type: "image/webp", sizes: "180x180" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#ebf2fa",
  colorScheme: "light",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      taxID: site.cnpj,
      foundingDate: site.foundingDate,
      url: site.url,
      logo: `${site.url}/logo-syscode-white.webp`,
      email: site.email,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: site.name,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      email: site.email,
      areaServed: site.areaServed,
      parentOrganization: { "@id": `${site.url}/#organization` },
      knowsAbout: [
        "Desenvolvimento de software sob medida",
        "Desenvolvimento web e mobile",
        "APIs e integrações",
        "Modernização de sistemas legados",
        "Inteligência artificial aplicada",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(orbitron.variable, outfit.variable, tiktokSans.variable)}
    >
      <body>
        <a
          href="#conteudo"
          className="sr-only z-50 rounded-sm bg-navy font-ui text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-4 focus:py-3"
        >
          Pular para o conteúdo
        </a>
        <JsonLd data={organizationJsonLd} />
        <ContactDialogProvider>
          <Header />
          <main id="conteudo" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </ContactDialogProvider>
        <Consent />
        {/* Sem cookies nem dados pessoais: dispensa consentimento. */}
        <Analytics />
      </body>
    </html>
  )
}
