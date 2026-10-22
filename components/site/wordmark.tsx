import { cn } from "@/lib/utils"

type WordmarkProps = {
  className?: string
  tone?: "dark" | "light"
}

// Recria o logotipo horizontal do Figma ("_syscode42") em texto, para ficar
// nítido em qualquer tamanho e legível por leitores de tela.
export function Wordmark({ className, tone = "dark" }: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-end gap-[0.18em] font-display leading-none font-medium tracking-[-0.02em]",
        tone === "dark" ? "text-ink" : "text-white",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="mb-[0.08em] h-[0.14em] w-[0.5em] rounded-[1px] bg-gold"
      />
      <span>
        syscode
        <span className={tone === "dark" ? "text-navy" : "text-gold"}>42</span>
      </span>
    </span>
  )
}
