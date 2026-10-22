# Spec 001 — Site institucional Syscode42

**Status:** implementado · **Data:** 2026-10-22

## Contexto

A Syscode42 é uma boutique de software enxuta: um time pequeno e sênior que desenha, constrói e mantém software sob medida. O site é o principal canal de geração de leads orgânicos. Referência de estrutura: codeminer42.com/br. Referência estética: interfaces futuristas (HUD, feixes de luz, tipografia técnica), aplicadas sobre fundos claros.

## Público

Fundadores, gestores de produto e líderes de TI de empresas pequenas e médias que precisam de um parceiro técnico para construir ou modernizar um sistema. Chegam por busca orgânica ("empresa de desenvolvimento de software sob medida", "modernização de sistema legado") ou indicação.

## Objetivo principal

Fazer o visitante entender em poucos segundos o que a Syscode42 faz e por que um time pequeno é vantagem, e levá-lo a iniciar uma conversa.

## Histórias de usuário

1. **Como visitante vindo da busca**, quero ler no primeiro viewport o que a empresa faz, para decidir se continuo.
   - Aceite: H1 e subtítulo descrevem o serviço; CTA primário visível sem rolar em 360×640 e 1440×900.
2. **Como decisor avaliando fornecedores**, quero ver os serviços oferecidos com exemplos concretos de entregas.
   - Aceite: seção "Serviços" com 4 áreas, cada uma com descrição e exemplos de entregas.
3. **Como decisor**, quero entender o que muda em contratar uma boutique enxuta em vez de uma fábrica de software.
   - Aceite: seção com diferenciais objetivos (quem atende, senioridade, escopo, propriedade do código).
4. **Como decisor**, quero saber como o projeto acontece, do primeiro contato à entrega.
   - Aceite: processo em 4 etapas sequenciais numeradas.
5. **Como visitante com dúvidas**, quero respostas para perguntas comuns (preço, prazo, propriedade do código).
   - Aceite: FAQ acessível por teclado, marcado com JSON-LD `FAQPage`.
6. **Como visitante convencido**, quero entrar em contato com um clique.
   - Aceite: CTA final com e-mail (`mailto:`) e o mesmo CTA no cabeçalho.
7. **Como usuário de teclado ou leitor de tela**, quero navegar todo o site sem barreiras.
   - Aceite: link "Pular para o conteúdo", foco visível, menu mobile com `aria-expanded`/`aria-controls`, landmarks.

## Requisitos funcionais

- RF1 — Página única (`/`) com âncoras: `#servicos`, `#boutique`, `#processo`, `#faq`, `#contato`.
- RF2 — Cabeçalho fixo com logo, navegação por âncoras e CTA; menu recolhível abaixo de 768 px.
- RF3 — Rodapé em `#000814` com o logo preto, links, e-mail e copyright.
- RF4 — Metadados completos, JSON-LD (`Organization`, `ProfessionalService`, `WebSite`, `FAQPage`), sitemap, robots, manifest, ícones e imagem OG.
- RF5 — Idioma `pt-BR`.

## Requisitos não funcionais

Ver a constituição (`.specify/memory/constitution.md`): SEO, WCAG 2.2 AA, mobile-first, fidelidade ao design system, performance.

## Fora do escopo (nesta versão)

- Formulário de contato com backend, blog, páginas de case, i18n em inglês, modo escuro.

## Pontos em aberto

- Domínio definitivo e e-mail de contato (usados valores provisórios em `lib/site.ts`).
- Cases reais e depoimentos para uma futura seção de prova social.
