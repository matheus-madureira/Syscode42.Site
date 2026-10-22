import Image from "next/image"

import { Breadcrumb } from "@/components/site/breadcrumb"
import { Contact } from "@/components/site/contact"
import { ToolMarquee } from "@/components/site/tool-marquee"
import { Icon } from "@/components/ui/icon"
import { Tile, type TileVariant } from "@/components/ui/tile"
import { about, principles } from "@/lib/content"
import { images } from "@/lib/images"
import { JsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { aboutPath, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata = pageMetadata({
  title: "Sobre nós",
  description:
    "Conheça a Syscode42: uma boutique de software enxuta, fundada em 2024, com um time sênior que atende poucos clientes por vez e deixa o código no nome de quem contrata.",
  path: aboutPath,
})

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${site.url}${aboutPath}`,
  url: `${site.url}${aboutPath}`,
  name: `Sobre a ${site.name}`,
  inLanguage: "pt-BR",
  mainEntity: { "@id": `${site.url}/#organization` },
}

const sectionTitle =
  "heading-display text-[clamp(1.5rem,1rem+2.2vw,3.25rem)] leading-tight tracking-[-0.02em]"

// Peças dos fatos: fundos variados e larguras diferentes na prancha.
const factTiles: { variant: TileVariant; className: string }[] = [
  { variant: "navy", className: "col-span-2 min-h-52 md:col-span-5" },
  { variant: "paper", className: "col-span-1 min-h-44 md:col-span-3" },
  { variant: "gold", className: "col-span-1 min-h-44 md:col-span-4" },
  {
    variant: "ice",
    className:
      "col-span-2 md:col-span-12 md:flex-row-reverse md:items-end md:justify-end md:gap-8",
  },
]

// Mosaico dos valores: 7/5 e depois 5/7, para nenhuma linha repetir a outra.
const principleTiles: { variant: TileVariant; className: string }[] = [
  { variant: "paper", className: "md:col-span-7 md:min-h-72" },
  { variant: "gold", className: "md:col-span-5" },
  { variant: "ice", className: "md:col-span-5" },
  { variant: "paper", className: "md:col-span-7" },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />

      <section
        aria-labelledby="sobre-title"
        className="bg-grad-ice relative isolate overflow-hidden"
      >
        <div className="container-site pt-8 pb-16 sm:pb-24">
          <Breadcrumb items={[{ name: "Sobre nós", href: aboutPath }]} />

          <div className="mx-auto mt-10 max-w-5xl text-center">
            <h1
              id="sobre-title"
              className="heading-display text-[clamp(1.875rem,0.9rem+4vw,4.75rem)] leading-[1.08] tracking-[-0.02em]"
            >
              Um time pequeno, software que dura
            </h1>
            <p className="mx-auto mt-6 max-w-[56ch] text-lg text-steel sm:text-xl">
              {about.mission}
            </p>
          </div>

          <div className="board mt-12 sm:mt-16">
            <Tile
              variant="image"
              className="tile-media col-span-2 aspect-[4/3] md:col-span-6 md:row-span-2 md:aspect-auto md:min-h-[30rem]"
            >
              <Image
                src={images.studio.src}
                alt={images.studio.alt}
                fill
                preload
                sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </Tile>

            <Tile
              variant="gold"
              className="col-span-1 flex min-h-44 flex-col justify-between gap-6 md:col-span-3"
            >
              <span
                aria-hidden="true"
                className="block h-1 w-8 rounded-[1px] bg-ink"
              />
              <p className="font-ui text-2xl leading-snug font-medium text-balance">
                Poucos clientes por vez
              </p>
            </Tile>

            <Tile
              variant="image"
              className="tile-media col-span-1 row-span-2 min-h-72 md:col-span-3"
            >
              <Image
                src={images.hud.src}
                alt={images.hud.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </Tile>

            <Tile
              variant="beam"
              className="col-span-1 flex min-h-44 flex-col justify-between gap-6 md:col-span-3"
            >
              <span
                aria-hidden="true"
                className="block h-1 w-8 rounded-[1px] bg-gold"
              />
              <p className="font-ui text-2xl leading-snug font-medium text-balance">
                As mesmas pessoas do diagnóstico à entrega
              </p>
            </Tile>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="historia-title"
        className="bg-white py-16 sm:py-24"
      >
        <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2
            id="historia-title"
            className={cn(sectionTitle, "reveal lg:col-span-5")}
          >
            {about.storyTitle}
          </h2>
          <div className="reveal reveal-1 max-w-[65ch] space-y-5 text-steel lg:col-span-6 lg:col-start-7">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="fatos-title" className="py-16 sm:py-24">
        <div className="container-site">
          <h2 id="fatos-title" className={cn(sectionTitle, "reveal")}>
            O essencial, em quatro fatos
          </h2>

          <dl className="board reveal reveal-1 mt-10">
            {about.facts.map((fact, index) => {
              const tile = factTiles[index % factTiles.length]
              const light = tile.variant === "paper" || tile.variant === "ice"

              return (
                <Tile
                  key={fact.label}
                  variant={tile.variant}
                  className={cn(
                    "flex flex-col-reverse justify-end gap-3",
                    tile.className
                  )}
                >
                  <dt
                    className={cn(
                      "max-w-[28ch] font-ui text-base leading-snug sm:text-lg",
                      tile.variant === "navy" && "text-white/80",
                      tile.variant === "gold" && "text-ink/80",
                      light && "text-steel"
                    )}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className={cn(
                      "font-display text-[clamp(2.5rem,1.8rem+2.6vw,4.5rem)] leading-none font-semibold",
                      light && "text-navy"
                    )}
                  >
                    {fact.value}
                  </dd>
                </Tile>
              )
            })}
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="valores-title"
        className="relative isolate overflow-hidden bg-navy py-16 sm:py-24"
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src={images.circuitNavy.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="bg-grad-navy absolute inset-0 opacity-85" />
        </div>

        <div className="container-site">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h2
              id="valores-title"
              className={cn(sectionTitle, "reveal text-white lg:col-span-6")}
            >
              No que acreditamos
            </h2>
            <p className="reveal reveal-1 max-w-[52ch] text-white/80 lg:col-span-5 lg:col-start-8">
              Quatro compromissos que valem para todo projeto, do menor MVP ao
              sistema mais crítico.
            </p>
          </div>

          <ul className="board reveal reveal-2 mt-10 sm:mt-14">
            {principles.map((item, index) => {
              const tile = principleTiles[index % principleTiles.length]
              const lead = index === 0

              return (
                <Tile
                  as="li"
                  key={item.title}
                  variant={tile.variant}
                  className={cn(
                    "col-span-2 flex flex-col gap-5",
                    tile.className
                  )}
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-[var(--radius-tile)] bg-navy text-white">
                    <Icon name={item.icon} />
                  </span>
                  <h3
                    className={cn(
                      "font-ui leading-snug font-semibold text-balance text-ink",
                      lead ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "max-w-[52ch]",
                      tile.variant === "gold" ? "text-ink/80" : "text-steel"
                    )}
                  >
                    {item.body}
                  </p>
                </Tile>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="ferramentas-title"
        className="bg-ice-deep py-16 sm:py-24"
      >
        <div className="container-site">
          <h2 id="ferramentas-title" className={cn(sectionTitle, "reveal")}>
            Ferramentas que usamos todo dia
          </h2>
          <p className="reveal reveal-1 mt-4 max-w-[60ch] text-steel">
            As tecnologias com que o time trabalha nos projetos. Não são logos
            de clientes.
          </p>
        </div>
        <ToolMarquee className="reveal reveal-2 mt-10" />
      </section>

      <Contact />
    </>
  )
}
