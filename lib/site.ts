// TODO: confirmar se o domínio canônico é com ou sem "www" antes de publicar.
export const site = {
  name: "Syscode42",
  legalName: "SYSCODE42 SERVICOS DE INFORMATICA LTDA - ME",
  cnpj: "58.228.425/0001-32",
  foundingDate: "2024-11-26",
  url: "https://www.syscode42.com.br",
  email: "contato@syscode42.com.br",
  locale: "pt_BR",
  title: "Soluções de software sob medida | Syscode42",
  description:
    "Boutique de software enxuta: um time sênior e pequeno que projeta, desenvolve e mantém sistemas web, APIs e produtos digitais sob medida para a sua empresa.",
  keywords: [
    "desenvolvimento de software sob medida",
    "boutique de software",
    "empresa de desenvolvimento de software",
    "desenvolvimento de sistemas web",
    "desenvolvimento de APIs",
    "modernização de sistemas legados",
    "consultoria de software",
    "inteligência artificial aplicada",
  ],
  areaServed: "BR",
} as const

export const servicesPath = "/servicos"
export const aboutPath = "/sobre"

export const nav = [
  { href: servicesPath, label: "Serviços" },
  { href: aboutPath, label: "Sobre nós" },
  { href: "/#processo", label: "Processo" },
  { href: "/#faq", label: "Perguntas" },
] as const

export const privacyPath = "/politica-de-privacidade"

export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Quero conversar sobre um projeto"
)}`
