import Image from "next/image"
import Link from "next/link"

import { Breadcrumb } from "@/components/site/breadcrumb"
import { Contact } from "@/components/site/contact"
import { ContactTrigger } from "@/components/site/contact-dialog"
import { TechChips } from "@/components/site/pages/tech-chips"
import { ToolMarquee } from "@/components/site/tool-marquee"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Tile, type TileVariant } from "@/components/ui/tile"
import { services } from "@/lib/content"
import { images } from "@/lib/images"
import { JsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { servicesPath, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata = pageMetadata({
  title: "Serviços de desenvolvimento de software",
  description:
    "Produtos digitais, sistemas e APIs sob medida, modernização de legado e IA aplicada. Conheça o que a Syscode42 entrega, para quem serve e com quais tecnologias.",
  path: servicesPath,
})

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Serviços da ${site.name}`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${site.url}${servicesPath}#${service.id}`,
      name: service.name,
      description: service.description,
      serviceType: service.name,
      areaServed: site.areaServed,
      provider: { "@id": `${site.url}/#organization` },
    },
  })),
}

type Service = (typeof services)[number]

// Ritmo das seções de detalhe: chão da seção e preenchimento de cada peça.
const themes: Record<
  Service["id"],
  {
    ground: "paper" | "ice" | "navy"
    intro: TileVariant
    deliverables: TileVariant
    fit: TileVariant
  }
> = {
  produtos: {
    ground: "paper",
    intro: "ice",
    deliverables: "navy",
    fit: "ice",
  },
  sistemas: {
    ground: "ice",
    intro: "paper",
    deliverables: "navy",
    fit: "paper",
  },
  modernizacao: {
    ground: "paper",
    intro: "ice",
    deliverables: "gold",
    fit: "ice",
  },
  ia: { ground: "navy", intro: "paper", deliverables: "gold", fit: "ice" },
}

const blockTitle = "font-ui text-lg font-semibold"
const linkClass = buttonVariants({
  variant: "link",
  className: "min-h-11 self-start",
})

function Deliverables({
  items,
  variant,
}: {
  items: readonly string[]
  variant: TileVariant
}) {
  // Marcador "_" da marca: dourado sobre navy, tinta sobre dourado.
  const marker = variant === "gold" ? "bg-ink" : "bg-gold"

  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "inline-block h-[3px] w-3 shrink-0 -translate-y-[0.2em] rounded-[1px]",
              marker
            )}
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

function ServiceDetail({ service, flip }: { service: Service; flip: boolean }) {
  const theme = themes[service.id]
  const titleId = `${service.id}-title`
  const image = images[service.id]

  return (
    <section
      id={service.id}
      aria-labelledby={titleId}
      className={cn(
        "relative isolate overflow-hidden py-16 sm:py-24",
        theme.ground === "paper" && "bg-white",
        theme.ground === "ice" && "bg-ice",
        theme.ground === "navy" && "bg-navy"
      )}
    >
      {theme.ground === "navy" ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src={images.circuitNavy.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="bg-grad-navy absolute inset-0 opacity-80" />
        </div>
      ) : null}

      <div className="container-site">
        <div className="board md:grid-flow-dense">
          <Tile
            variant="image"
            className={cn(
              "tile-media reveal col-span-2 aspect-[4/3] md:col-span-6 md:row-span-2 md:aspect-auto md:min-h-[30rem]",
              flip && "md:col-start-7"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Tile>

          <Tile
            variant={theme.intro}
            className={cn(
              "reveal reveal-1 col-span-2 flex flex-col gap-5 md:col-span-6",
              flip && "md:col-start-1"
            )}
          >
            <span className="inline-flex size-12 items-center justify-center rounded-[var(--radius-tile)] bg-navy text-white">
              <Icon name={service.icon} />
            </span>
            <h2
              id={titleId}
              className="font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] leading-tight font-semibold text-balance text-ink"
            >
              {service.name}
            </h2>
            <p className="max-w-[60ch] text-steel">{service.description}</p>
            <ContactTrigger service={service.id} className={linkClass}>
              Quero conversar sobre isso
              <Icon name="arrow-right" className="size-5" />
            </ContactTrigger>
          </Tile>

          <Tile
            variant={theme.deliverables}
            className={cn(
              "reveal reveal-1 col-span-2 sm:col-span-1 md:col-span-3",
              flip && "md:col-start-1"
            )}
          >
            <h3 className={blockTitle}>O que entregamos</h3>
            <Deliverables
              items={service.deliverables}
              variant={theme.deliverables}
            />
          </Tile>

          <Tile
            variant={theme.fit}
            className="reveal reveal-2 col-span-2 sm:col-span-1 md:col-span-3"
          >
            <h3 className={cn(blockTitle, "text-ink")}>Quando faz sentido</h3>
            <ul className="mt-4 space-y-2.5 text-steel">
              {service.fitFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Tile>

          <Tile
            variant="ice"
            className="reveal reveal-2 col-span-2 flex flex-col gap-4 md:col-span-12 md:flex-row md:items-center md:gap-8"
          >
            <h3 className={cn(blockTitle, "shrink-0 text-ink")}>Tecnologias</h3>
            <TechChips items={service.stack} />
          </Tile>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />

      <section
        aria-labelledby="servicos-title"
        className="bg-grad-ice relative isolate overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src={images.blueprintLight.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>

        <div className="container-site pt-8 pb-16 sm:pb-24">
          <Breadcrumb items={[{ name: "Serviços", href: servicesPath }]} />

          <h1
            id="servicos-title"
            className="heading-display mt-8 text-[clamp(1.875rem,0.9rem+4vw,4.75rem)] leading-[1.08] tracking-[-0.02em]"
          >
            Software sob medida, etapa por etapa
          </h1>

          <div className="reveal reveal-1 mt-6 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <p className="max-w-[58ch] text-lg text-steel lg:col-span-7">
              Do primeiro protótipo à modernização de sistemas críticos, um time
              pequeno e sênior cuida do ciclo inteiro: produto, engenharia e
              operação.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:col-span-5 lg:justify-end">
              <ContactTrigger className={buttonVariants({ size: "lg" })}>
                <Icon name="send" className="size-5" />
                Agendar diagnóstico
              </ContactTrigger>
              <Link href="/#processo" className={linkClass}>
                Ver como trabalhamos
              </Link>
            </div>
          </div>

          <div className="board mt-10 sm:mt-14">
            <a
              href="#produtos"
              className="tile tile-link tile-media col-span-2 aspect-[4/3] bg-navy p-0 transition-transform active:scale-[0.99] md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-[32rem]"
            >
              <Image
                src={images.produtos.src}
                alt={images.produtos.alt}
                fill
                preload
                sizes="(min-width: 1280px) 720px, (min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-6 left-6 inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-tile)] bg-white px-4 font-ui text-base font-medium text-ink">
                {services[0].name}
                <Icon name="arrow-down-2" className="size-5" />
              </span>
            </a>

            <Tile
              as="nav"
              variant="navy"
              aria-labelledby="frentes-title"
              className="col-span-2 flex flex-col gap-5 md:col-span-5"
            >
              <h2
                id="frentes-title"
                className="font-ui text-2xl leading-snug font-semibold text-balance"
              >
                Quatro frentes, um mesmo time
              </h2>
              <ul className="grid gap-1">
                {services.map((service) => (
                  <li key={service.id}>
                    <a
                      href={`#${service.id}`}
                      className="group flex min-h-11 items-center gap-3 rounded-sm font-ui text-lg text-white/80 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-sky active:text-sky"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-[3px] w-3 shrink-0 rounded-[1px] bg-gold transition-[width] duration-200 group-hover:w-6"
                      />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Tile>

            <a
              href="#sistemas"
              className="tile tile-link tile-media col-span-1 min-h-44 bg-navy p-0 transition-transform active:scale-[0.99] md:col-span-2 md:min-h-0 lg:col-span-3"
            >
              <Image
                src={images.sistemas.src}
                alt={images.sistemas.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
              <span className="sr-only">{services[1].name}</span>
            </a>

            <Tile
              variant="gold"
              className="col-span-1 flex min-h-44 flex-col justify-between gap-4 md:col-span-3 md:min-h-0 lg:col-span-2"
            >
              <p className="font-display text-5xl leading-none font-semibold">
                4
              </p>
              <p className="font-ui text-base leading-snug font-medium">
                frentes, as mesmas pessoas
              </p>
            </Tile>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          service={service}
          flip={index % 2 === 1}
        />
      ))}

      <section
        aria-labelledby="ferramentas-title"
        className="bg-ice-deep py-16 sm:py-24"
      >
        <div className="container-site">
          <h2
            id="ferramentas-title"
            className="heading-display reveal text-[clamp(1.5rem,1rem+2.2vw,3.25rem)] leading-tight tracking-[-0.02em]"
          >
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
