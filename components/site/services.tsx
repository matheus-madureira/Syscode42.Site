import Image from "next/image"
import Link from "next/link"

import { Carousel } from "@/components/site/carousel"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Tile } from "@/components/ui/tile"
import { services } from "@/lib/content"
import { images } from "@/lib/images"
import { servicesPath } from "@/lib/site"

type Service = (typeof services)[number]

// Slide = duas peças encaixadas: imagem em cima, texto embaixo. O link
// "Ver detalhes" se estende por cima do slide inteiro (::after), então a
// peça toda é clicável sem aninhar links.
function ServiceSlide({ service }: { service: Service }) {
  return (
    <article className="tile-link group relative grid h-full grid-rows-[auto_1fr] gap-1.5 md:gap-2">
      <Tile variant="image" className="tile-media aspect-[4/3]">
        <Image
          src={images[service.id].src}
          alt={images[service.id].alt}
          fill
          sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 86vw"
          className="object-cover"
        />
      </Tile>

      <Tile className="static flex flex-col gap-4 transition-colors duration-200 group-hover:bg-[#f6f9fd]">
        <span
          aria-hidden="true"
          className="inline-flex size-12 items-center justify-center rounded-sm bg-navy text-white"
        >
          <Icon name={service.icon} />
        </span>
        <h3 className="font-ui text-2xl leading-tight font-semibold text-ink">
          {service.name}
        </h3>
        <p className="text-steel">{service.summary}</p>
        <ul
          aria-label={`Entregas de ${service.name}`}
          className="flex flex-wrap gap-1.5"
        >
          {service.deliverables.map((item) => (
            <li
              key={item}
              className="rounded-sm bg-ice px-2.5 py-1 font-ui text-sm text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={`${servicesPath}#${service.id}`}
          className={buttonVariants({
            variant: "link",
            className:
              "mt-auto self-start pt-2 group-hover:decoration-navy after:absolute after:inset-0 after:rounded-[var(--radius-tile)] active:text-navy-deep",
          })}
        >
          Ver detalhes
          <span className="sr-only"> de {service.name}</span>
        </Link>
      </Tile>
    </article>
  )
}

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="bg-ice py-20 sm:py-28"
    >
      <div className="container-site">
        <Carousel
          label="Serviços"
          header={
            <div className="max-w-2xl">
              <h2
                id="servicos-title"
                className="reveal heading-display text-[clamp(1.9rem,1.2rem+2.6vw,3.25rem)] leading-[1.1]"
              >
                O que fazemos
              </h2>
              <p className="reveal reveal-1 mt-5 text-steel">
                Quatro frentes, um mesmo time. Você contrata a pessoa certa para
                cada etapa sem precisar coordenar fornecedores diferentes.
              </p>
            </div>
          }
        >
          {services.map((service) => (
            <ServiceSlide key={service.id} service={service} />
          ))}
        </Carousel>

        <div className="board reveal mt-1.5 md:mt-2">
          <Tile
            variant="navy"
            className="col-span-2 flex min-h-56 flex-col justify-between gap-6 md:col-span-5"
          >
            <p className="font-display text-[clamp(4rem,2rem+8vw,8rem)] leading-none font-semibold">
              4
            </p>
            <p className="font-ui text-lg leading-snug font-medium text-white/80 sm:text-xl">
              frentes, um mesmo time
            </p>
          </Tile>
          <Link
            href={servicesPath}
            className="tile tile-link group col-span-2 flex flex-col justify-between gap-6 bg-white text-ink transition-colors duration-200 hover:bg-ice-deep active:bg-[#d3dfec] md:col-span-7"
          >
            <span className="max-w-[34ch] text-steel">
              Escopo, entregas, quando cada frente faz sentido e as tecnologias
              de cada uma.
            </span>
            <span className="flex items-end justify-between gap-4 font-ui text-xl leading-snug font-semibold sm:text-2xl">
              Ver todos os serviços em detalhe
              <Icon
                name="arrow-right"
                className="size-7 shrink-0 text-navy transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
