import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { principles } from "@/lib/content"
import { images } from "@/lib/images"
import { aboutPath } from "@/lib/site"
import { cn } from "@/lib/utils"

// Cada princípio ganha um preenchimento e um tamanho próprios no mosaico,
// para que peças vizinhas nunca pareçam repetidas. Ordem = principles.
const looks = [
  {
    tile: "bg-grad-beam text-white md:col-span-7 lg:col-span-6",
    square: "bg-gold text-ink",
    body: "text-white/80",
  },
  {
    tile: "bg-grad-gold text-ink md:col-span-5 lg:col-span-3",
    square: "bg-navy text-white",
    body: "text-ink/80",
  },
  {
    tile: "bg-white text-ink md:col-span-7 lg:col-span-7",
    square: "bg-navy text-white",
    body: "text-steel",
  },
  {
    tile: "bg-navy-deep text-white md:col-span-12 lg:col-span-5",
    square: "bg-gold text-ink",
    body: "text-white/80",
  },
] as const

function Principle({ index }: { index: number }) {
  const item = principles[index]
  const look = looks[index]

  return (
    <li className={cn("tile reveal col-span-2 flex flex-col gap-4", look.tile)}>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-sm",
          look.square
        )}
      >
        <Icon name={item.icon} />
      </span>
      <h3 className="font-ui text-xl leading-snug font-semibold text-balance">
        {item.title}
      </h3>
      <p className={cn("max-w-[48ch]", look.body)}>{item.body}</p>
    </li>
  )
}

export function Boutique() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <Image
        src={images.circuitNavy.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="bg-grad-navy absolute inset-0 -z-10 opacity-70"
      />

      <div className="container-site">
        {/* Mosaico: no desktop a peça-título ocupa duas linhas à esquerda. */}
        <ul className="board">
          <li className="tile col-span-2 flex flex-col justify-between gap-10 bg-navy md:col-span-12 lg:col-span-6 lg:row-span-2">
            <div>
              <h2
                id="sobre-title"
                className="reveal font-display text-[clamp(1.9rem,1.2rem+2.6vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.01em] text-balance"
              >
                Pequenos de propósito
              </h2>
              <p className="reveal reveal-1 mt-5 max-w-md text-white/80">
                Uma boutique atende poucos clientes por vez. Isso muda a
                velocidade das decisões, a qualidade do código e quem você
                encontra do outro lado da call.
              </p>
            </div>
            <Link
              href={aboutPath}
              className={buttonVariants({
                variant: "outline-gold",
                className: "reveal reveal-2 self-start active:bg-[#c99d50]",
              })}
            >
              Conheça a Syscode42
            </Link>
          </li>

          <Principle index={0} />

          <li className="tile reveal col-span-2 flex flex-col justify-between gap-6 bg-ice-deep text-ink md:col-span-5 lg:col-span-3">
            <p className="font-display text-[clamp(2.75rem,1.8rem+3vw,4rem)] leading-none font-semibold tracking-[-0.02em]">
              Zero
            </p>
            <p className="font-ui text-lg leading-snug font-medium">
              intermediários entre você e quem programa
            </p>
          </li>

          <Principle index={1} />
          <Principle index={2} />
          <Principle index={3} />
        </ul>
      </div>
    </section>
  )
}
