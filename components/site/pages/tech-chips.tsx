import { tools, type Tool } from "@/lib/tools"
import { cn } from "@/lib/utils"

// Liga um item do stack às ferramentas de lib/tools.ts. Itens compostos
// ("AWS e Azure") só ganham logos se todas as partes existirem lá; o resto
// vira chip de texto, sem logo inventado.
function logosFor(item: string): Tool[] {
  const parts = item.split(/\s+e\s+/i)
  const matched = parts.map((part) =>
    tools.find((tool) => tool.label.toLowerCase() === part.trim().toLowerCase())
  )

  return matched.every(Boolean) ? (matched as Tool[]) : []
}

export function TechChips({
  items,
  className,
}: {
  items: readonly string[]
  className?: string
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => {
        const logos = logosFor(item)

        return (
          <li
            key={item}
            className="flex min-h-11 items-center gap-2 rounded-[var(--radius-tile)] bg-white px-3 py-2 font-ui text-base font-medium text-ink"
          >
            {logos.map((tool) => (
              // Logo decorativo: o nome ao lado é o texto acessível.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={tool.id}
                src={tool.logo}
                alt=""
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                className="size-6 object-contain"
              />
            ))}
            {item}
          </li>
        )
      })}
    </ul>
  )
}
