// TODO: confirmar domínio e e-mail definitivos antes de publicar.
export const site = {
  name: "Syscode42",
  legalName: "Syscode42",
  url: "https://www.syscode42.com.br",
  email: "contato@syscode42.com.br",
  locale: "pt_BR",
  title: "Syscode42 — Boutique de software sob medida",
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

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#boutique", label: "Por que boutique" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "Perguntas" },
] as const

export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Quero conversar sobre um projeto"
)}`
