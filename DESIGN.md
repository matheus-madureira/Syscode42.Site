# Design — Syscode42

Sistema visual do site. Fonte das decisões: design system no Figma (`HqbGQ1zX6lCwNyBvddx4gi`), `PRODUCT.md` e a spec 006.

## Mundo

**Prancha de peças sob luz clara.** O site é montado como um sistema sob medida: peças preenchidas e encaixadas com folgas de 8 px, cada uma com um conteúdo só. Imagens geradas de objetos técnicos (núcleos, redes, módulos) em navy, branco e dourado dão o tom futurista; o `_` dourado do logo é o fio que liga tudo (cursor, marcador, linha-guia, item ativo).

## Cor

| Papel | Valor | Regra |
| --- | --- | --- |
| Fundo | `#EBF2FA` gelo | padrão de página; o público prefere fundos claros |
| Peça clara | `#FFFFFF` / `#DDE7F2` | um tom acima ou abaixo do fundo |
| Tinta | `#000814` | texto principal |
| Tinta secundária | `#4A525A` | só texto de apoio (7:1 sobre gelo) |
| Primária | `#00296B` navy | ações, links, campos escuros de seção |
| Navy profundo | `#001A45` | fim de gradiente, hover da primária |
| Acento | `#D4AD68` dourado | `_` da marca, peça de ação, detalhes sobre navy; nunca texto sobre claro |
| Céu | `#ADE8F4` | halos de gradiente, sublinhado de link, anel de foco |
| Rodapé | `#000814` | única superfície preta |

Estratégia: **cheia** (gelo como chão, navy em campos inteiros de seção, dourado na ação). Gradientes só como campos de seção ou de peça: `--grad-ice`, `--grad-navy`, `--grad-beam`, `--grad-gold`. Nunca em texto ou botões.

## Tipo

- **Orbitron** 600: display e títulos de seção. Máximo 2 linhas; tracking −0,02 em.
- **Outfit** 500–600: navegação, botões, títulos de peça, declarações.
- **TikTok Sans** 400: corpo, 17–18 px, entrelinha 1,6, medida ≤ 70 caracteres.

## Forma

- Raio único de 10 px em peças, imagens e campos; botões com raio de 4 px (herança do Figma).
- Sem sombra em repouso; sombra só em elementos que flutuam (modal, menu mobile).
- Linhas de 1 px apenas em formulários e callouts técnicos.

## Ícones

Iconly V3.0 Sharp/Light, como máscara CSS (`<Icon>`), herdando `currentColor`. Em peças: 24 px dentro de quadrado navy de 48 px, ou soltos em linha com texto.

## Imagem

Imagens geradas (`public/images/gen/`), objeto técnico em fundo claro ou campo navy, sem texto e sem pessoas. Cobrem peças inteiras com `object-fit: cover`. O logo não é usado como imagem de conteúdo.

## Movimento

Uma assinatura (shutter da imagem do hero + linhas dos callouts), entradas por seção com `animation-timeline: view()`, faixa de ferramentas contínua e feedback em controles. Tudo desligado em `prefers-reduced-motion`.
