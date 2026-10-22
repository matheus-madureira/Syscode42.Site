# Spec 004 — Política de privacidade e links entre páginas

**Status:** implementado · **Data:** 2026-10-22

## Contexto

A spec 003 colocou GA4 e Microsoft Clarity atrás de um aviso de cookies. A LGPD (arts. 6º, VI e 9º) exige informar de forma clara quais dados são tratados, para quê e com quem são compartilhados. O site ganha sua segunda rota, `/politica-de-privacidade`.

Até aqui, todo o conteúdo ficava em `/` e a navegação usava âncoras relativas (`#servicos`). Numa segunda página essas âncoras quebram, porque apontam para a própria página atual.

## Histórias de usuário

1. **Como visitante decidindo sobre cookies**, quero ler o que é coletado antes de aceitar.
   - Aceite: o aviso de cookies tem link para a política.
2. **Como visitante**, quero encontrar a política a qualquer momento.
   - Aceite: link "Política de privacidade" no rodapé de todas as páginas.
3. **Como visitante na página da política**, quero usar o menu e voltar às seções do site.
   - Aceite: todos os itens do menu e do rodapé levam às seções da página inicial (`/#servicos` etc.), de qualquer página.
4. **Como titular de dados**, quero saber como exercer meus direitos.
   - Aceite: seção com os direitos do art. 18 e o canal de contato.

## Requisitos

- RP1 — Rota estática `/politica-de-privacidade` com `metadata` própria (título, descrição, canonical) e incluída no `sitemap.xml`.
- RP2 — Conteúdo: quem somos, dados coletados (contato por e-mail, GA4, Clarity, Vercel Web Analytics), finalidades e bases legais, cookies, compartilhamento e transferência internacional, retenção, direitos do titular, segurança, contato, alterações e data da última atualização.
- RP3 — Cada ferramenta de terceiros listada com o link para a política do fornecedor.
- RP4 — HTML semântico: um `<h1>`, seções com `<h2>`, sumário navegável por âncoras internas.
- RP5 — Navegação global (header, menu mobile, rodapé) usa `next/link` com destinos absolutos `/#secao`. As âncoras internas de uma página (sumário da política, "Ver serviços" no hero) continuam relativas.
- RP6 — Layout de leitura: coluna de até ~70 caracteres, mesma tipografia e tokens do site, fundo claro.

## Fora do escopo

- Termos de uso.
- ~~Dados cadastrais da empresa~~: incluídos em `lib/site.ts` (razão social e CNPJ) na seção "Quem somos", no rodapé e no JSON-LD.

## Tarefas

- [x] T01 `nav` em `lib/site.ts` com destinos `/#secao`; header, menu mobile e rodapé com `next/link`
- [x] T02 Conteúdo da política como lista de seções na própria página (fonte única para sumário e corpo)
- [x] T03 Página `app/politica-de-privacidade/page.tsx` com metadata e sumário
- [x] T04 Link para a política no aviso de cookies e no rodapé
- [x] T05 Sitemap com a nova rota
- [x] T06 Verificação: typecheck, lint, build, navegação entre páginas e âncoras
