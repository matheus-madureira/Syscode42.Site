# Spec 003 — Analytics e consentimento

**Status:** implementado · **Data:** 2026-10-22

## Contexto

O site precisa medir aquisição e comportamento para orientar SEO e conversão de leads. Três ferramentas:

| Ferramenta              | Para quê                                   | Cookies | Consentimento |
| ----------------------- | ------------------------------------------ | ------- | ------------- |
| Google Analytics 4      | Aquisição, páginas, conversões             | Sim     | Obrigatório   |
| Microsoft Clarity       | Mapas de calor e gravação de sessões       | Sim     | Obrigatório   |
| Vercel Web Analytics    | Visitas e páginas, sem identificar pessoas | Não     | Dispensado    |

## Requisitos

- RA1 — GA4 e Clarity só carregam depois que o visitante aceita no aviso de cookies (LGPD, art. 7º, I). Sem resposta ou com recusa, nenhum script deles é baixado.
- RA2 — Vercel Web Analytics carrega sempre: não usa cookies nem dados pessoais.
- RA3 — IDs via variáveis de ambiente públicas: `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_CLARITY_ID`. Sem a variável, a ferramenta correspondente não carrega, e o aviso não aparece se nenhuma das duas estiver definida.
- RA4 — A escolha fica salva no navegador (`localStorage`, chave `syscode42-consent`) e pode ser revista a qualquer momento pelo link "Preferências de cookies" no rodapé.
- RA5 — Ao retirar um consentimento já dado, a página recarrega para descarregar os scripts.
- RA6 — Aviso acessível: região rotulada, botões de mesmo peso para aceitar e recusar, operável por teclado, sem bloquear a navegação.
- RA7 — Sem impacto no LCP: scripts carregados após a hidratação (`@next/third-parties` e `next/script` com `afterInteractive`).
- RA8 — O ID do Clarity é validado (apenas letras e números) antes de entrar no script inline.

## Implementação

- `components/site/consent.tsx` — store de consentimento (`useSyncExternalStore` sobre `localStorage`), aviso de cookies, botão de preferências e carregamento condicional de GA4 e Clarity.
- `app/layout.tsx` — `<Consent />` e `<Analytics />` da Vercel.
- `.env.example` — documenta as variáveis.

## Fora do escopo

- Página de política de privacidade (recomendada antes de publicar; o aviso deve linkar para ela).
- Eventos personalizados de conversão (cliques em "Agendar uma conversa").

## Tarefas

- [x] T01 Instalar `@next/third-parties` e `@vercel/analytics`
- [x] T02 Store de consentimento e aviso de cookies
- [x] T03 GA4 e Clarity condicionados ao aceite e às variáveis de ambiente
- [x] T04 Vercel Web Analytics no layout
- [x] T05 Link "Preferências de cookies" no rodapé
- [x] T06 `.env.example`
- [x] T07 Verificação: typecheck, lint, build e conferência do comportamento sem e com consentimento
