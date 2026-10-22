import Image from "next/image"
import Link from "next/link"

import { ContactTrigger } from "@/components/site/contact-dialog"
import { SpecCallouts, type Callout } from "@/components/site/spec-callouts"
import { Tile } from "@/components/ui/tile"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { images } from "@/lib/images"
import { servicesPath } from "@/lib/site"

// Pontos em % da peça. Ficam perto do eixo central do núcleo para continuar
// sobre o objeto quando o recorte muda (quadrado no tablet, alto no desktop);
// os rótulos ocupam as faixas vazias acima e abaixo dele.
const callouts: Callout[] = [
  {
    label: "Produtos digitais",
    href: `${servicesPath}#produtos`,
    point: { x: 50, y: 25 },
    at: { x: 46, y: 8 },
    side: "left",
  },
  {
    label: "Sistemas e APIs",
    href: `${servicesPath}#sistemas`,
    point: { x: 66, y: 47 },
    at: { x: 56, y: 15 },
    side: "right",
  },
  {
    label: "Modernização de legado",
    href: `${servicesPath}#modernizacao`,
    point: { x: 36, y: 58 },
    at: { x: 52, y: 84 },
    side: "left",
  },
  {
    label: "IA aplicada",
    href: `${servicesPath}#ia`,
    point: { x: 50, y: 73 },
    at: { x: 56, y: 92 },
    side: "right",
  },
]

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-grad-ice relative isolate overflow-hidden py-2"
    >
      <Image
        src={images.blueprintLight.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
      />

      {/* Prancha 2×2: título, núcleo com callouts e duas peças curtas. */}
      <div className="container-site">
        <div className="board lg:min-h-[max(600px,calc(100svh-120px))] lg:grid-rows-[minmax(0,1fr)_auto]">
          <Tile className="@container col-span-2 flex flex-col gap-10 md:col-span-12 lg:col-span-7">
            <h1
              id="hero-title"
              // Tamanho pela largura da peça: o título fica em 2 linhas do
              // tablet ao desktop largo.
              className="heading-display text-[clamp(1.9rem,7.2cqi,4.5rem)] leading-[1.08] tracking-[-0.02em]"
            >
              Software sob medida, feito de perto
              <span
                aria-hidden="true"
                className="ml-[0.12em] inline-block h-[0.12em] w-[0.6em] animate-cursor bg-gold align-baseline"
              />
            </h1>
            <p className="-mt-4 max-w-[38rem] text-lg text-steel sm:text-xl">
              Somos um time pequeno e sênior que projeta, constrói e mantém
              sistemas web, APIs e produtos digitais para empresas que querem um
              parceiro técnico, não uma fábrica de software.
            </p>
            <div className="mt-auto">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ContactTrigger className={buttonVariants({ size: "lg" })}>
                  Agendar diagnóstico
                </ContactTrigger>
                <Link
                  href={servicesPath}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Ver serviços
                </Link>
              </div>
            </div>
          </Tile>

          <SpecCallouts
            image={images.heroCore.src}
            alt={images.heroCore.alt}
            callouts={callouts}
            preload
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 66vw, 100vw"
            className="col-span-2 md:col-span-8 md:h-[30rem] lg:col-span-5 lg:row-span-2 lg:h-auto"
          />

          <div className="col-span-2 grid grid-cols-2 gap-[inherit] md:col-span-4 md:grid-cols-1 lg:col-span-7 lg:grid-cols-12">
            <Tile
              variant="beam"
              className="flex min-h-40 flex-col lg:col-span-7 lg:min-h-48"
            >
              <p className="font-ui text-xl leading-snug font-medium text-balance sm:text-2xl">
                Do diagnóstico à entrega, as mesmas pessoas.
              </p>
            </Tile>

            <ContactTrigger className="tile bg-grad-gold group flex min-h-40 flex-col justify-between gap-6 text-ink transition-[filter] duration-200 hover:brightness-105 active:brightness-95 lg:col-span-5 lg:min-h-48">
              <span>
                <span className="block font-ui text-xl leading-tight font-semibold sm:text-2xl">
                  Diagnóstico sem custo
                </span>
                <span className="mt-2 block text-base text-ink/80">
                  Uma conversa para entender o problema e o que já existe.
                </span>
              </span>
              <Icon
                name="arrow-right"
                className="size-7 transition-transform duration-200 group-hover:translate-x-1"
              />
            </ContactTrigger>
          </div>
        </div>
      </div>
    </section>
  )
}
