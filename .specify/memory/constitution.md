# Constituição do front-end — Syscode42.Site

Princípios inegociáveis. Toda spec, plano e tarefa deste repositório é avaliada contra eles.

## I. SEO é requisito, não acabamento

- Toda rota pública exporta `metadata` (title, description, canonical, Open Graph, Twitter).
- HTML semântico: um único `<h1>` por página, hierarquia de headings sem saltos, landmarks (`header`, `nav`, `main`, `footer`).
- Dados estruturados JSON-LD (schema.org) para a organização e para conteúdo elegível (FAQ).
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` e imagem OG gerados pelas convenções de arquivo do App Router.
- Conteúdo crítico renderizado no servidor (Server Components por padrão). Client Components só onde houver interação.

## II. Acessibilidade WCAG 2.2 AA

- Contraste mínimo 4.5:1 para texto e 3:1 para componentes de UI. O dourado `#D4AD68` nunca é usado como cor de texto sobre fundo claro.
- Navegação completa por teclado, foco sempre visível, link "Pular para o conteúdo".
- `prefers-reduced-motion` desliga toda animação não essencial.
- Imagens informativas têm `alt` descritivo; imagens decorativas têm `alt=""`.
- Alvos de toque com no mínimo 44×44 px.

## III. Responsivo e mobile-first

- Layout construído de 360 px para cima; sem rolagem horizontal em nenhuma largura.
- Tipografia fluida com `clamp()`; linhas de texto corrido com até ~70 caracteres.

## IV. Fidelidade ao design system Syscode42 (Figma)

- Cores, fontes e botões vêm do arquivo Figma `HqbGQ1zX6lCwNyBvddx4gi` e são expostos como tokens em `app/globals.css`.
- Fundos claros por padrão (público prefere). Preto `#000814` apenas no rodapé, junto do logo preto.

## V. Performance

- LCP < 2.5 s, CLS < 0.1. Fontes via `next/font` (self-hosted, `display: swap`), imagens via `next/image`.
- Sem dependências novas sem justificativa no plano.
