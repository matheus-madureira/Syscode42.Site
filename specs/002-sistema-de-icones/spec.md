# Spec 002 — Sistema de ícones (Iconly)

**Status:** implementado · **Data:** 2026-10-22

## Contexto

O site usava `lucide-react` em três pontos (menu mobile e FAQ). A marca passa a usar a biblioteca **Iconly V3.0** do Figma (`9w77VTAUyK1sCGl8BmXrH9`), e a dependência de ícones de terceiros sai do projeto.

## Decisões

- **Estilo:** `Iconly/Sharp/Light`. Cantos retos e traço de 1,5 px conversam com a Orbitron e com o visual técnico do design system; o traço fino mantém a página leve sobre fundo claro.
- **Formato:** um arquivo SVG por ícone em `public/icons/`, exportado do Figma sem alterar o desenho. Só os retângulos de fundo da página do Figma, que vêm junto na exportação, são removidos.
- **Renderização:** máscara CSS (`mask-image`) com `background-color: currentColor`. O ícone herda a cor do texto e os SVGs não entram no bundle JavaScript.
- **Componente único:** `<Icon name="…" />` em `components/ui/icon.tsx`, com nomes tipados. Adicionar um ícone = exportar o SVG para `public/icons/` e registrar o nome no mapa.

## Requisitos

- RI1 — Nenhum import de biblioteca de ícones no código; `lucide-react` removido do `package.json`.
- RI2 — Ícone decorativo por padrão (`aria-hidden`). Com `label`, vira `role="img"` com `aria-label`.
- RI3 — Tamanho padrão 24 px (grade do Iconly), ajustável por classe (`size-5`, `size-6`…).
- RI4 — Cor sempre via `currentColor`; contraste segue o texto ao redor.
- RI5 — Animações dos ícones (rotação do FAQ) respeitam `prefers-reduced-motion`.

## Mapa de uso

| Nome            | Nó Figma (Sharp/Light) | Onde                                   |
| --------------- | ---------------------- | -------------------------------------- |
| `category`      | `41911:4825`           | Abrir menu mobile                      |
| `close-square`  | `41911:5046`           | Fechar menu mobile                     |
| `arrow-down-2`  | `41911:4801`           | Abrir/fechar resposta do FAQ           |
| `send`          | `41911:5016`           | Botão "Agendar uma conversa" do contato |
| `message`       | `41911:5150`           | Links de e-mail (contato e rodapé)     |

A versão free do Iconly não tem ícone de "hambúrguer"; `Category` cumpre o papel de menu, como em interfaces que usam essa biblioteca.

## Tarefas

- [x] T01 Exportar os 5 SVGs do Figma para `public/icons/`
- [x] T02 Componente `Icon` com nomes tipados, máscara CSS e acessibilidade
- [x] T03 Substituir `lucide-react` no menu mobile e no FAQ
- [x] T04 Ícones de envio e e-mail no contato e no rodapé
- [x] T05 Remover `lucide-react` das dependências
- [x] T06 Verificação: typecheck, lint, build e conferência visual
