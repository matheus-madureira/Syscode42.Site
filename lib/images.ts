// Imagens geradas para o site (spec 006 §9), em public/images/gen.
// Prompts e modelos de cada uma: public/images/gen/README.md.
// Use com next/image em modo `fill` dentro de uma peça com tamanho definido.
export const images = {
  heroCore: {
    src: "/images/gen/hero-core.webp",
    alt: "Módulo de sistema futurista em cerâmica branca e vidro, com trilhas douradas de circuito e brilho azul-marinho",
  },
  produtos: {
    src: "/images/gen/svc-produtos.webp",
    alt: "Painéis de interface translúcidos flutuando em camadas, em azul-marinho, branco e dourado",
  },
  sistemas: {
    src: "/images/gen/svc-sistemas.webp",
    alt: "Rede isométrica de nós conectados por linhas de dados iluminadas em azul-marinho e dourado",
  },
  modernizacao: {
    src: "/images/gen/svc-modernizacao.webp",
    alt: "Bloco de servidor antigo sendo reconstruído, peça por peça, em módulos modernos de vidro e branco",
  },
  ia: {
    src: "/images/gen/svc-ia.webp",
    alt: "Forma neural cristalina feita de partículas de luz, com núcleo azul-marinho e detalhes dourados",
  },
  circuitNavy: { src: "/images/gen/bg-circuit-navy.webp", alt: "" },
  beamNavy: { src: "/images/gen/bg-beam-navy.webp", alt: "" },
  blueprintLight: { src: "/images/gen/bg-blueprint-light.webp", alt: "" },
  studio: {
    src: "/images/gen/about-studio.webp",
    alt: "Estúdio de software claro e minimalista, com um diagrama holográfico de arquitetura sobre a mesa",
  },
  hud: {
    src: "/images/gen/process-hud.webp",
    alt: "Instrumento de navegação abstrato com anéis concêntricos e marcações em azul-marinho e dourado",
  },
} as const

export type ServiceImageKey = "produtos" | "sistemas" | "modernizacao" | "ia"
