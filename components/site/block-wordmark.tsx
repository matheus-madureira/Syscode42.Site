import { cn } from "@/lib/utils"

// "syscode42" construído em blocos de alturas diferentes, com as letras
// recortadas no pé de cada bloco (spec 006 §7.1, rodapé). Decorativo: o nome
// acessível vai num texto oculto.
const blocks = [
  { char: "s", height: "72%", tone: "bg-navy text-white" },
  { char: "y", height: "100%", tone: "bg-white text-ink" },
  { char: "s", height: "64%", tone: "bg-navy-deep text-white" },
  { char: "c", height: "86%", tone: "bg-sky text-ink" },
  { char: "o", height: "70%", tone: "bg-navy text-white" },
  { char: "d", height: "94%", tone: "bg-white text-ink" },
  { char: "e", height: "60%", tone: "bg-navy-deep text-white" },
  { char: "4", height: "100%", tone: "bg-gold text-ink" },
  { char: "2", height: "80%", tone: "bg-gold text-ink" },
]

export function BlockWordmark({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <span className="sr-only">Syscode42</span>
      <div
        aria-hidden="true"
        className="flex h-[22svh] min-h-36 items-end gap-1 sm:h-[34svh] sm:max-h-80"
      >
        {blocks.map((block, index) => (
          <div
            key={index}
            style={{ height: block.height }}
            className={cn(
              "flex min-w-0 flex-1 items-end justify-center overflow-hidden rounded-[4px] pb-[1vw]",
              block.tone
            )}
          >
            <span className="font-display text-[clamp(2.25rem,9vw,8.5rem)] leading-[0.8] font-semibold">
              {block.char}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
