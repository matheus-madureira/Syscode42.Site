# Spec 005 — Páginas de Serviços e Sobre nós

**Status:** implementado · **Data:** 2026-10-22

## Contexto

Os itens "Serviços" e "Sobre nós" do menu levavam a seções da home. Eles passam a abrir páginas próprias, com mais profundidade de conteúdo e URLs indexáveis para buscas como "desenvolvimento de software sob medida" e "empresa de software". **A home não muda:** suas seções `#servicos` e `#sobre` continuam onde estão.

Referências visuais (Dribbble):
- **Serviços:** hero dividido (título à esquerda, texto e CTA à direita), faixa de imagens, grade de serviços com ícone e chamada para detalhes, CTA final.
- **Sobre nós:** hero centralizado, mosaico de imagens com blocos de destaque, história em duas colunas, linha de números, valores.

## Histórias de usuário

1. **Como decisor comparando fornecedores**, quero uma página só de serviços com o que cada frente entrega, para quem serve e com que tecnologias.
   - Aceite: `/servicos` com visão geral das 4 frentes e uma seção de detalhes para cada uma, com âncora própria.
2. **Como decisor**, quero entender quem é a Syscode42 antes de conversar.
   - Aceite: `/sobre` com missão, história, fatos verificáveis e valores.
3. **Como visitante**, quero saber em que página estou.
   - Aceite: item do menu da página atual destacado e com `aria-current="page"`; breadcrumb visível nas páginas internas.
4. **Como visitante convencido**, quero falar com a empresa de qualquer página.
   - Aceite: as duas páginas terminam no mesmo bloco de contato da home.

## Requisitos

- RS1 — Rotas estáticas `/servicos` e `/sobre`, com metadata completa (título, descrição, canonical, Open Graph e Twitter com imagem) e entradas no `sitemap.xml`.
- RS2 — Menu (header, mobile e rodapé): "Serviços" → `/servicos`, "Sobre nós" → `/sobre`. "Processo" e "Perguntas" seguem em `/#processo` e `/#faq`.
- RS3 — JSON-LD: `BreadcrumbList` nas duas páginas; `ItemList` de `Service` (com `provider` apontando para a organização) em `/servicos`; `AboutPage` em `/sobre`.
- RS4 — Nada de conteúdo fabricado: sem depoimentos, logos de clientes, fotos de equipe ou métricas inventadas. Os blocos de destaque usam só fatos do próprio negócio (ano de fundação, frentes de atuação, propriedade do código).
- RS5 — Conteúdo em `lib/content.ts`, fonte única para a home e as novas páginas.
- RS6 — Mesmo design system, constituição e qualidade das specs anteriores: fundo claro, um `<h1>` por página, WCAG 2.2 AA, mobile-first, ícones Iconly Sharp/Light.

## Plano de design

### Serviços (`/servicos`)

```
breadcrumb  Início / Serviços
┌───────────────────────────┬──────────────────────┐
│ H1 Orbitron               │ texto de apoio       │   hero dividido
│                           │ [Agendar conversa]   │
├──────────┬────────────────┴────┬─────────────────┤
│ banner   │ bloco navy: "4 frentes,│ banner preto  │   faixa de imagens da marca
│ azul     │  um mesmo time"     │ (feixe dourado) │
├──────────┴─────────┬───────────┴─────────────────┤
│ card ícone         │ card ícone   (2×2)          │   visão geral → âncoras
├────────────────────┴─────────────────────────────┤
│ _ Produtos digitais   descrição longa            │   detalhe por frente:
│   O que entregamos | Quando faz sentido | Stack  │   3 colunas de listas
│ ...                                              │
├──────────────────────────────────────────────────┤
│ bloco de contato (mesmo da home)                 │
└──────────────────────────────────────────────────┘
```

### Sobre nós (`/sobre`)

```
breadcrumb  Início / Sobre nós
          H1 centralizado + missão
┌───────────┬───────────┬───────────┐
│ banner    │ bloco ouro│ banner    │   mosaico: imagens da marca +
│ azul      ├───────────┤ preto     │   blocos de fatos (sem métricas
│ (alto)    │ bloco navy│ (alto)    │   inventadas)
├───────────┴───────────┴───────────┤
│ H2 história        │ 2 parágrafos │   duas colunas
├────────┬────────┬────────┬────────┤
│ 2024   │ 4      │ 100%   │ 1      │   fatos com rótulo
├────────┴────────┴────────┴────────┤
│ valores (4, com ícone)            │
├───────────────────────────────────┤
│ bloco de contato                  │
└───────────────────────────────────┘
```

### Revisão contra o brief (o que mudei e por quê)

- **Fotos de pessoas das referências → banners da marca e blocos de cor.** Não existem fotos reais do time; fotos de banco numa boutique que vende proximidade minam a confiança.
- **"200k+ clientes", "90% mais rápido" → fatos verificáveis.** Ano de fundação, 4 frentes, 100% do código no nome do cliente, um único time do diagnóstico à entrega.
- **Depoimentos, logos e "conheça o time" → fora.** Entram quando houver conteúdo real (registrado em "Fora do escopo").
- **"Read more" em cada card → âncora para a seção de detalhes na mesma página.** Não há páginas por serviço ainda; o link leva a um conteúdo que existe.
- **Destaque do item ativo no menu → o `_` dourado da marca sob o link,** reaproveitando o elemento memorável do site em vez de um pill genérico.

## Fora do escopo

- Páginas individuais por serviço, cases, depoimentos, fotos e perfis do time, palavra do fundador.

## Tarefas

- [x] T01 Exportar 8 ícones Iconly Sharp/Light e registrá-los no `<Icon>`
- [x] T02 Expandir `lib/content.ts` (detalhes dos serviços, história e fatos)
- [x] T03 Helper `pageMetadata()` para metadata completa de páginas internas (e aplicá-lo à política)
- [x] T04 Componentes compartilhados: breadcrumb com JSON-LD e links de navegação com estado ativo
- [x] T05 Página `/servicos`
- [x] T06 Página `/sobre`
- [x] T07 Menu e sitemap
- [x] T08 Verificação: typecheck, lint, build, navegação, estado ativo e revisão visual em desktop e mobile
