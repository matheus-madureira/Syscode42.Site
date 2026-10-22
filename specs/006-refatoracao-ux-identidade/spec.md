# Spec 006 — Refatoração de UX e identidade visual

**Status:** implementado, em validação pelo cliente · **Branch:** `refactor/ux-identidade` · **Data:** 2026-10-22

## 1. Contexto

O site (specs 001–005) está correto e limpo, mas reconhecível como "mais um site institucional": hero dividido, linhas de serviço, faixa azul, cards de valores e banners que repetem o logo. O pedido:

> Mais vida, mais identidade, mais imagens geradas em vez de imagens com o logo. Gradientes de fundo, fundos customizados por seção, ícones, modais, carrosséis, faixa horizontal com os logos das ferramentas. Mesmas regras de cor e identidade. Moderno, vivo, tecnologia/futurista/cyber.

Referências enviadas (Dribbble): **Vortek** (VR: produto grande com callouts técnicos, blocos escuros recortados, faixa de logos), **Humanity Protocol** (fundo claro, figura cyber recortada, tipografia grande, partículas), **Nicecode** (feixe de luz central com ícones de ferramentas orbitando, cards com brilho, assinatura gigante no rodapé).

Skills aplicadas: **Impeccable** (`PRODUCT.md`, craft floor, detector) e **Taste Skill v2** (direção sorteada, house rules, inspetor). Onde as duas proíbem algo que o brief pede explicitamente (gradientes, ícones, três famílias tipográficas), **o brief vence**, e a exceção é registrada aqui e passada ao inspetor com `--allow`.

## 2. Objetivos e métricas de aceite

| # | Objetivo | Como medir |
| --- | --- | --- |
| O1 | Identidade própria, não confundível com template | O hero só faz sentido para a Syscode42 (teste do concorrente, §4); detector da Impeccable sem achados de "AI slop" não justificados |
| O2 | Mais imagens, nenhuma com o logo como enfeite | ≥ 8 imagens geradas no site; banners com logo saem de hero e mosaicos |
| O3 | Vida e movimento com propósito | 1 movimento-assinatura + entradas por seção + feedback em todo controle; tudo desligado com `prefers-reduced-motion` |
| O4 | Mais caminhos para conversar | Modal "Agendar diagnóstico" acessível a partir do header, hero, páginas internas e CTA final |
| O5 | Mostrar o stack real | Faixa de logos das 15 tecnologias informadas pelo cliente |
| O6 | Manter o que já funciona | Mesmas rotas, metadata, JSON-LD, consentimento, acessibilidade AA, SEO; 0 erros de typecheck/lint/build |
| O7 | Performance | LCP < 2,5 s em 4G simulado; imagens em WebP ≤ 250 KB; nenhum JS novo no caminho crítico além dos client components listados |

## 3. Restrições que não mudam (de `PRODUCT.md` e da constituição)

- Paleta do Figma: `#000814` ink · `#00296B` navy · `#001A45` navy profundo (derivado) · `#D4AD68` dourado · `#EBF2FA` gelo · `#4A525A` aço · `#24272B` grafite · `#C0C0C0` prata · `#ADE8F4` céu.
- Fontes: Orbitron (display), Outfit (UI e títulos de bloco), TikTok Sans (texto).
- **Fundos claros por padrão.** Seções escuras são navy, nunca preto; o preto `#000814` fica só no rodapé.
- Ícones: Iconly Sharp/Light, exportados do Figma.
- Nenhuma prova inventada: sem depoimentos, logos de clientes, fotos de time ou métricas de resultado. Os logos exibidos são **ferramentas que o time usa**, nunca clientes, e a faixa diz isso no título.
- Dourado nunca é cor de texto sobre fundo claro (contraste 2:1); sobre navy, sim (6,7:1).

## 4. A ideia

> Nesta página, **o sistema sob medida, montado peça por peça por um time pequeno**, vira **uma prancha de peças encaixadas, com uma peça central desenhada como especificação técnica**.

- **Prancha (Taste: "The well-kept board").** Cada seção é um quadro de peças (tiles) preenchidas, com folgas de 8 px, um raio só (10 px), sem contornos. Cada peça é uma coisa: um título, uma imagem, um número, uma lista, uma frase. Peças vizinhas nunca carregam o mesmo tipo de conteúdo.
- **Especificação técnica (Impeccable, sorteio "callouts").** No hero, a imagem gerada do "núcleo do sistema" ganha rótulos técnicos com linhas-guia apontando para as 4 frentes, como na Vortek; cada rótulo é um link para o serviço.
- **Teste do concorrente:** outra software house não tem o `_` dourado como cursor, a prancha com as 4 frentes nomeadas como peças do núcleo, nem o processo "diagnóstico → entrega com as mesmas pessoas". O `_` do logo continua sendo o elemento memorável: cursor no título, marcador de lista, indicador de item ativo e linhas-guia dos callouts.

**A coisa viva (live thing):** o modal **"Monte seu diagnóstico"**. O visitante escolhe as frentes de que precisa, o momento do projeto e o porte da empresa; o modal mostra na hora "o que acontece a seguir" para aquela combinação e monta o e-mail com assunto e corpo preenchidos. Funciona sem JavaScript: o gatilho é um link `mailto:` comum.

## 5. Sistema visual (tokens novos)

### 5.1 Superfícies e gradientes
O brief pede gradientes; eles são **campos que ocupam regiões inteiras**, nunca texto em gradiente, botão em gradiente ou blob decorativo.

| Token | Uso | Definição |
| --- | --- | --- |
| `--grad-ice` | fundo do hero e de seções claras | gelo → branco com um halo céu no canto superior direito |
| `--grad-navy` | seções escuras (boutique, CTA) | navy → navy profundo, diagonal |
| `--grad-beam` | peças de destaque | navy com o feixe dourado diagonal da marca (o mesmo do banner preto) |
| `--grad-gold` | peça de ação | dourado → dourado mais claro, quase plano |
| `--tile` | peça clara | branco puro sobre o gelo |
| `--tile-ice` | peça clara alternativa | `#DDE7F2` (um tom abaixo do gelo) |

### 5.2 Fundos por seção
| Seção | Fundo |
| --- | --- |
| Hero (home) | `--grad-ice` + imagem `bg-blueprint-light` a 100% de cobertura e baixa opacidade |
| Ferramentas | faixa branca |
| Serviços | gelo, peças com imagens geradas |
| Boutique | navy com `bg-circuit-navy` + `--grad-navy` |
| Processo | branco com o instrumento `process-hud` |
| FAQ | gelo |
| CTA | `bg-beam-navy` |
| Rodapé | ink `#000814` com a marca construída em blocos |

### 5.3 Peças (tiles)
- Raio único **10 px**; folga **8 px** (6 px no celular); padding interno 24 px.
- Elevação: nenhuma em repouso. Hover em peças clicáveis: a imagem interna escala 1,04 e a peça sobe um tom; foco visível com anel navy + céu.
- Sem bordas, exceto em formulários (modal) e nos callouts técnicos (linhas de 1 px, que são geometria, não decoração).

### 5.4 Tipografia
Mantida. Escala de 5 passos: display (Orbitron, `clamp(2.6rem, 1rem + 6vw, 6rem)`), título de seção (Orbitron, `clamp(1.9rem, 1.2rem + 2.6vw, 3.25rem)`), declaração (Outfit 500, 24–32 px), corpo (TikTok Sans, 17–18 px), nota (Outfit, 14–15 px). Tracking de display −0,02 em; títulos com no máximo 2 linhas em todas as larguras.

### 5.5 Movimento
- **Assinatura:** "shutter". A imagem central do hero abre por `clip-path` (1,1 s) enquanto assenta de 1,12 para 1 de escala; os callouts desenham suas linhas-guia logo depois.
- **Entradas:** título → texto → imagem, com defasagem de 60–90 ms, subida de 24 px, via `animation-timeline: view()` (CSS puro; sem suporte, o conteúdo já está visível).
- **Contínuo:** a faixa de ferramentas rola em duas fileiras em sentidos opostos e pausa no hover/foco.
- **Feedback:** todo botão, link e peça clicável tem hover, `active` e foco.
- `prefers-reduced-motion: reduce` desliga tudo isso; a faixa vira uma lista estática rolável.

## 6. Componentes novos

| Componente | Tipo | Responsabilidade |
| --- | --- | --- |
| `ContactDialogProvider` + `ContactTrigger` | client | Um único `<dialog>` nativo (`showModal`: foco preso, `Esc`, backdrop) aberto por qualquer gatilho; sem JS, o gatilho é `mailto:` |
| `ContactDialog` | client | Formulário "Monte seu diagnóstico": frentes (checkbox em chips), momento (radio), porte (select), nome, mensagem; prévia "o que acontece a seguir"; botão "Abrir e-mail com o pedido" |
| `ToolMarquee` | server + CSS | Duas fileiras de logos (`lib/tools.ts`), cópia duplicada `aria-hidden`, pausa no hover, versão estática no reduced motion |
| `Carousel` | client | Trilho com `scroll-snap`, botões anterior/próximo com `aria-controls`, estados desabilitados nas pontas, rolagem por teclado e toque |
| `Tile` | server | Peça da prancha: variantes `paper`, `ice`, `navy`, `beam`, `gold`, `image` |
| `SpecCallouts` | server + CSS | Imagem do núcleo com 4 rótulos posicionados em %, linhas-guia SVG, cada rótulo é link |
| `BlockWordmark` | server | "syscode42" construído em blocos no rodapé (SVG acessível com `<title>`) |
| `Reveal` | CSS | Classe utilitária `.reveal` com `animation-timeline: view()` |

## 7. Páginas

### 7.1 Home `/`
1. **Hero — prancha 2×2** (`min-height: calc(100svh - header)`):
   - peça grande clara: `h1` "Software sob medida, feito de perto" + cursor `_`, frase de apoio e as duas ações (modal; link para serviços);
   - peça imagem: `hero-core` com os 4 callouts técnicos (Produtos digitais, Sistemas e APIs, Modernização, IA aplicada);
   - peça `beam`: "Do diagnóstico à entrega, as mesmas pessoas.";
   - peça `gold`: "Diagnóstico sem custo", gatilho do modal.
2. **Ferramentas:** título "Ferramentas com que trabalhamos todo dia" e faixa dupla de logos.
3. **Serviços:** título + **carrossel** de 4 slides, cada um com imagem gerada, nome, resumo, entregas e link para `/servicos#id`. Ao lado, peça com o número "4" e a frase sobre um time só.
4. **Boutique — mosaico em navy com circuito:** peça-título, 4 princípios com ícones em peças de tamanhos diferentes, peça com "Zero intermediários" e o link "Conheça a Syscode42".
5. **Processo — instrumento:** título, imagem `process-hud` e as 4 etapas como marcadores de um trilho horizontal (lista ordenada; a ordem é informação, então a numeração fica).
6. **FAQ — acordeão de peças:** título fixo à esquerda no desktop, `<details name="faq">` (abre um por vez), a peça aberta fica navy.
7. **CTA — peça de ação:** linha de 3 peças (imagem `bg-beam-navy`, peça dourada com título e gatilho do modal, peça navy).
8. **Rodapé:** marca em blocos, links, contato, dados legais e preferências de cookies.

### 7.2 Serviços `/servicos`
Hero com `bg-blueprint-light` e título; prancha com as 4 frentes (imagem gerada como peça grande, alternando lados); em cada detalhe, "O que entregamos", "Quando faz sentido" e **logos das tecnologias** daquela frente; faixa de ferramentas; CTA com modal.

### 7.3 Sobre `/sobre`
Hero com `about-studio`; história em duas colunas; fatos como peças (2024, 4, 100%, Zero) com fundos variados; valores em mosaico com ícones; faixa de ferramentas; CTA.

### 7.4 Política de privacidade
Só herda header, rodapé e tokens (modo Read: sem prancha).

## 8. Acessibilidade

- Modal: `<dialog>` nativo com `aria-labelledby`, foco inicial no primeiro campo, retorno do foco ao gatilho, `Esc` fecha, rótulos visíveis em todos os campos, erros ligados por `aria-describedby`, alvos ≥ 44 px.
- Carrossel: região com `aria-roledescription="carrossel"` e rótulo; slides `role="group"` com "1 de 4"; botões com nome; nada de autoplay.
- Faixa de logos: lista real (`<ul>`) com nome acessível de cada ferramenta; a cópia duplicada é `aria-hidden` e `inert`.
- Callouts: links com texto real, não só posição visual; em telas estreitas viram uma lista sob a imagem.
- Imagens geradas: `alt` descritivo quando informam, `alt=""` quando são fundo.
- Contraste AA em todas as combinações; texto sobre imagem só com véu de cor da paleta.

## 9. Imagens

Geradas com IA no Figma (autorizado pelo cliente) e salvas em `public/images/gen/` em WebP, com os prompts registrados em `public/images/gen/README.md`. Os banners com o logo (`wallpaper-*`) saem de hero e mosaicos; o logo continua no header, rodapé, favicon e imagem OG.

## 10. Plano de execução (multi-agente)

| Etapa | Responsável | Entrega |
| --- | --- | --- |
| A | agente de imagens | 10 imagens geradas, otimizadas, com README de prompts |
| B | agente de assets | 15 logos (Devicon, MIT) + `lib/tools.ts` + ícones Iconly extras |
| C | eu (fundação) | tokens, `PRODUCT.md`, `DESIGN.md`, componentes da §6 |
| D | agente da home | §7.1 usando só a fundação |
| E | agente das páginas internas | §7.2 e §7.3 usando só a fundação |
| F | eu (integração e QA) | detector da Impeccable, inspetor da Taste Skill, Playwright/Edge em 1440/768/390, correções |

## 11. Fora do escopo

Cases, depoimentos, fotos de time, blog, modo escuro, formulário com backend (o modal monta um e-mail).

## 12. Tarefas

- [x] T01 `PRODUCT.md` (init da Impeccable) e `.impeccable/config.json`
- [x] T02 Direção sorteada (Taste `dense-tiles`, seed 472382111; Impeccable surface roll, callouts)
- [x] T03 Imagens geradas (agente A)
- [x] T04 Logos, `lib/tools.ts` e ícones extras (agente B)
- [x] T05 `DESIGN.md` e tokens em `globals.css`
- [x] T06 Componentes: `Tile`, `ToolMarquee`, `Carousel`, `ContactDialog*`, `SpecCallouts`, `BlockWordmark`, `.reveal`
- [x] T07 Home (agente D)
- [x] T08 Serviços e Sobre (agente E)
- [x] T09 Header e rodapé com o modal e a marca em blocos
- [x] T10 QA: detector, inspetor, screenshots em 3 larguras, teclado, reduced motion, typecheck/lint/build
- [x] T11 Rodar a branch localmente para validação

## 13. Resultado do QA

Verificação em build de produção (`next build` + `next start`), Edge headless via DevTools Protocol (o Playwright MCP estava desconectado), inspetor da Taste Skill em 1440/768/390 e detector da Impeccable.

**Comportamento (15/15 passaram):** modal abre pelo header, foco entra no modal, prévia ao vivo muda conforme as frentes escolhidas, `Esc` fecha e o foco volta ao gatilho, gatilho de serviço abre o modal com a frente marcada, carrossel com estados de borda e rolagem, faixa de logos animada, menu mobile abre e o CTA dele fecha o menu e abre o modal, sem rolagem lateral em 390 px, e com `prefers-reduced-motion` a faixa para, a cópia some e shutter e entradas ficam desligados.

**Detector da Impeccable:** 0 achados após remover o CSS morto da versão anterior (`.hero-grid`, `.hero-beam`, `.hud-corners`).

**Corrigido durante o QA:** rolagem lateral causada pela faixa de logos (coluna de grid sem `minmax(0, 1fr)`); a mesma causa no formulário do modal; linhas dos callouts tracejadas (`pathLength` com traço sem escala); feixe do `--grad-beam` cruzando o texto; `priority` (obsoleto no Next 16) trocado por `preload`; `h1` das páginas internas pequeno demais no celular; título do CTA em 4 linhas em 768 px.

### Exceções aceitas (com justificativa)

| Aviso do inspetor | Por que fica |
| --- | --- |
| Gradientes e 3 famílias tipográficas | Pedido explícito do brief e design system do Figma (`--allow gradient,font-count`) |
| `h1` da home com 3 linhas em 390 px | A Orbitron é muito larga; 2 linhas exigiriam ~20 px, ilegível como título. Tablet e desktop ficam em 2 linhas |
| Números 01–04 no processo | É um `<ol>` cuja ordem é a informação (spec §7.1, item 5) |
| Sombra nos rótulos dos callouts | Os rótulos flutuam sobre a imagem; a sombra indica elevação real |
| Linha fina sob o header e acima dos dados legais | Separação mínima de barras fixas/rodapé, herdada das specs anteriores |
| "Texto coberto" | É o aviso de cookies (fixo, em perfil limpo) e a área clicável transparente dos slides do carrossel |
| "Sem vídeo" | Não há filmagem real da empresa; vídeo de banco de imagens não representaria o cliente |
