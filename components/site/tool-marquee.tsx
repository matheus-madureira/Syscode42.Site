import { tools, type Tool } from "@/lib/tools"
import { cn } from "@/lib/utils"

type Tone = "paper" | "ice"

function ToolTile({ tool, tone }: { tool: Tool; tone: Tone }) {
  return (
    <li
      className={cn(
        "flex h-20 shrink-0 items-center gap-3 rounded-[var(--radius-tile)] px-5 sm:h-24 sm:px-6",
        tone === "paper" ? "bg-white" : "bg-ice-deep"
      )}
    >
      {/* Logo decorativo: o nome ao lado é o texto acessível. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tool.logo}
        alt=""
        width={40}
        height={40}
        loading="lazy"
        decoding="async"
        className="size-9 object-contain sm:size-10"
      />
      <span className="font-ui text-base font-medium whitespace-nowrap text-ink sm:text-lg">
        {tool.label}
      </span>
    </li>
  )
}

function Row({
  items,
  reverse,
  label,
  tone,
}: {
  items: readonly Tool[]
  reverse?: boolean
  label: string
  tone: Tone
}) {
  return (
    <div
      className="marquee"
      data-direction={reverse ? "reverse" : undefined}
      role="region"
      aria-label={label}
      tabIndex={0}
    >
      <ul className="marquee-track">
        {items.map((tool) => (
          <ToolTile key={tool.id} tool={tool} tone={tone} />
        ))}
      </ul>
      {/* Segunda cópia só para o laço visual contínuo. */}
      <ul className="marquee-track" aria-hidden="true" inert>
        {items.map((tool) => (
          <ToolTile key={tool.id} tool={tool} tone={tone} />
        ))}
      </ul>
    </div>
  )
}

// Faixa dupla com as tecnologias do time (spec 006 §6). Pausa no hover e no
// foco; com movimento reduzido vira uma lista estática rolável. `tone` é a cor
// das peças: "paper" sobre fundos gelo, "ice" sobre fundos brancos.
export function ToolMarquee({
  className,
  tone = "paper",
}: {
  className?: string
  tone?: Tone
}) {
  // Cada fileira leva todas as ferramentas para nunca ficar mais curta que
  // a tela; a segunda, em ordem inversa e sentido oposto. Só a primeira é
  // anunciada a leitores de tela.
  const reversed = [...tools].reverse()

  return (
    <div
      className={cn("grid min-w-0 grid-cols-[minmax(0,1fr)] gap-2", className)}
    >
      <Row items={tools} label="Tecnologias com que trabalhamos" tone={tone} />
      <div aria-hidden="true" inert>
        <Row
          items={reversed}
          reverse
          label="Tecnologias, em sentido oposto"
          tone={tone}
        />
      </div>
    </div>
  )
}
