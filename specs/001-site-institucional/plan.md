# Plano técnico e de design — Spec 001

## Stack

Next.js 16.4 (App Router, Server Components), React 19.3, Tailwind CSS v4, `next/font/google`, `next/image`, `next/og`. Nenhuma dependência nova.

## Design system (extraído do Figma `HqbGQ1zX6lCwNyBvddx4gi`)

### Cores

| Token              | Hex       | Uso                                                        |
| ------------------ | --------- | ---------------------------------------------------------- |
| `ice`              | `#EBF2FA` | Fundo base do site                                          |
| `white`            | `#FFFFFF` | Superfícies elevadas (painéis, FAQ)                         |
| `ink`              | `#000814` | Texto principal; fundo do rodapé                            |
| `navy`             | `#00296B` | Cor primária: CTAs, links, faixa da seção "boutique"        |
| `gold`             | `#D4AD68` | O traço `_` da marca, feixe de luz, botão dourado. Nunca texto sobre claro |
| `steel`            | `#4A525A` | Texto secundário (7.0:1 sobre `ice`)                        |
| `graphite`         | `#24272B` | Botão escuro                                                |
| `silver`           | `#C0C0C0` | Bordas e divisores                                          |
| `sky`              | `#ADE8F4` | Sublinhado do link "Saiba mais", brilho de foco             |
| Sinais (não usados na v1) | `#B80C09`, `#FDC500`, `#04E762` e tons claros | Erros, avisos, sucesso |

### Tipografia

- **Orbitron** — display: H1, H2 e o wordmark. É a voz da marca (letras quadradas do logo).
- **Outfit** — UI: navegação, botões, H3, rótulos.
- **TikTok Sans** — texto corrido.

Escala (razão ~1.25, fluida): body 17–18 px / 1.6; H3 20–22 px; H2 `clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)`; H1 `clamp(2.25rem, 1.3rem + 4vw, 4.25rem)` com tracking levemente negativo.

### Botões (variantes do Figma "Saiba mais")

`primary` (navy), `gold` (dourado com texto ink), `outline` (borda navy), `outline-gold` (para fundos escuros), `dark` (graphite), `link` (texto navy com sublinhado sky). Raio pequeno (4 px), altura 48 px.

## Conceito de layout

Alinhamento à esquerda em todo o site; texto ocupa no máximo 7 de 12 colunas.

```
┌──────────────────────────────────────────────┐
│ syscode42      Serviços Boutique Processo  [Conversar] │  header claro, fixo
├──────────────────────────────────────────────┤
│ H1 Orbitron 2–3 linhas_          ┌─────────┐  │
│ subtítulo                        │ banner  │  │  hero: feixe dourado diagonal
│ [Agendar conversa] [Serviços]    │ navy    │  │  atravessando o fundo ice
│                                  └─────────┘  │
├──────────────────────────────────────────────┤
│ H2 Serviços                                   │
│ ─ Produtos web e mobile     descrição  entregas │  linhas, não cards
│ ─ Sistemas e APIs           ...               │
├──────────────────────────────────────────────┤
│ █ faixa navy: por que boutique enxuta (2×2)   │  único bloco escuro-azulado
├──────────────────────────────────────────────┤
│ Processo 1 → 2 → 3 → 4 (sequência real)       │
├──────────────────────────────────────────────┤
│ FAQ (details/summary)                         │
├──────────────────────────────────────────────┤
│ CTA final + e-mail                            │
├──────────────────────────────────────────────┤
│ footer #000814 + logo preto                   │
└──────────────────────────────────────────────┘
```

## Princípios de design

1. **O `_` é o elemento memorável.** O traço dourado do logo vira cursor de terminal piscando no fim do H1, marcador das linhas de serviço e indicador de seção ativa. A ousadia fica aqui; o resto é contido.
2. **Feixe de luz do banner preto, reinterpretado no claro.** Um único gradiente diagonal dourado-para-sky atravessa o hero, animado uma vez no carregamento (desligado com `reduced-motion`).
3. **Futurista por precisão, não por neon.** Grade técnica finíssima só no hero, cantos com marcas de recorte (HUD) no painel do banner, Orbitron nos títulos. Sem glow, sem glassmorphism.
4. **Copy direta.** Frases curtas, verbos no ativo, nada de números inventados.

## Revisão do plano contra o brief (o que mudei e por quê)

- **Serviços em grade de 4 cards iguais → linhas com divisores.** Cards idênticos com sombra são o kit SaaS genérico; linhas com nome, descrição e entregas leem como um catálogo de boutique e são melhores para leitura em mobile.
- **Rótulos em CAIXA ALTA acima de cada H2 → removidos.** O H2 em Orbitron já tem presença; o eyebrow era decoração.
- **Faixa de estatísticas no hero ("+100 projetos") → removida.** Não há dados reais; números inventados prejudicam a credibilidade de uma boutique.
- **Numeração 01/02/03 só no processo**, que é de fato uma sequência. Serviços e diferenciais não são numerados.
- **Hero preto inspirado no Dribbble → hero claro.** O brief pede fundo claro; o banner navy entra como imagem emoldurada, preservando o clima futurista sem escurecer a página.

## Estrutura de arquivos

```
app/
  layout.tsx            fontes, metadata global, JSON-LD de organização, skip link
  page.tsx              composição das seções + JSON-LD FAQPage
  globals.css           tokens do design system (Tailwind v4 @theme)
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.png apple-icon.png
components/
  site/                 header, mobile-nav (client), footer, wordmark, seções
  ui/button.tsx         variantes do Figma
lib/
  site.ts               dados da empresa (url, e-mail, redes)
  content.ts            conteúdo das seções (fonte única para UI e JSON-LD)
```

## Verificação

`bun run typecheck`, `bun run lint`, `bun run build`; inspeção visual em 375, 768 e 1440 px com Playwright; checagem de headings, landmarks e foco via snapshot de acessibilidade.

## Revisão 1 (2026-10-22)

- Todas as imagens em WebP (`public/*.webp`); logos sem perda, banners com qualidade 88 (de ~1,4 MB para ~20 KB).
- Favicon e apple-icon a partir do logo branco arredondado, declarados em `metadata.icons`, porque a convenção `app/icon.*` não aceita WebP.
- A imagem OG converte o logo WebP para PNG em memória com `sharp` (dependência explícita; o renderizador do `next/og` não lê WebP).
- Item de navegação "Por que boutique" renomeado para "Sobre nós" (âncora `#sobre`).
