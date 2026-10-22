import Image from "next/image"
import Link from "next/link"

import { Breadcrumb } from "@/components/site/breadcrumb"
import { Contact } from "@/components/site/contact"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { services } from "@/lib/content"
import { JsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { contactHref, servicesPath, site } from "@/lib/site"
import bannerBlack from "@/public/wallpaper-syscode42-black.webp"
import bannerBlue from "@/public/wallpaper-syscode42-blue.webp"

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

const sectionTitle =
  "heading-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-tight"

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />

      <section
        aria-labelledby="servicos-title"
        className="relative isolate overflow-hidden"
      >
        <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
        <div className="container-site pt-8 pb-14 sm:pb-20">
          <Breadcrumb items={[{ name: "Serviços", href: servicesPath }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1
              id="servicos-title"
              className="heading-display text-[clamp(2.1rem,1.2rem+3.6vw,3.9rem)] leading-[1.08] lg:col-span-7"
            >
              Software sob medida para cada etapa do seu negócio
            </h1>
            <div className="lg:col-span-5">
              <p className="text-lg text-steel">
                Do primeiro protótipo à modernização de sistemas críticos, um
                time pequeno e sênior cuida do ciclo inteiro: produto,
                engenharia e operação.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a href={contactHref} className={buttonVariants()}>
                  <Icon name="send" className="size-5" />
                  Agendar uma conversa
                </a>
                <Link
                  href="/#processo"
                  className={buttonVariants({
                    variant: "link",
                    className: "self-start sm:self-auto",
                  })}
                >
                  Ver como trabalhamos
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="relative hidden overflow-hidden rounded-md bg-navy sm:block">
              <Image
                src={bannerBlue}
                alt=""
                placeholder="blur"
                sizes="(min-width: 640px) 50vw, 100vw"
                // O recorte esconde a marca d'água do canto inferior direito.
                className="h-full min-h-56 w-full object-cover object-[60%_50%] lg:min-h-72"
              />
            </div>
            <div className="flex min-h-56 flex-col justify-between rounded-md bg-navy p-6 text-white lg:min-h-72">
              <span
                aria-hidden="true"
                className="block h-1 w-8 rounded-[1px] bg-gold"
              />
              <p className="font-display text-2xl leading-snug font-semibold text-balance">
                4 frentes, um mesmo time do diagnóstico à entrega
              </p>
            </div>
            <div className="relative overflow-hidden rounded-md bg-ink">
              <Image
                src={bannerBlack}
                alt=""
                placeholder="blur"
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[16/10] h-full w-full object-cover object-[0%_50%] sm:aspect-auto sm:min-h-56 lg:min-h-72"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="frentes-title"
        className="bg-white py-20 sm:py-28"
      >
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h2 id="frentes-title" className={`${sectionTitle} lg:col-span-6`}>
              Quatro frentes, um mesmo time
            </h2>
            <p className="text-steel lg:col-span-5 lg:col-start-8">
              Você contrata a pessoa certa para cada etapa sem coordenar
              fornecedores diferentes. Escolha uma frente para ver o que
              entregamos.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <li
                key={service.id}
                className="flex flex-col rounded-md border border-navy/15 bg-ice/40 p-6 transition-colors hover:border-navy/40 sm:p-8"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-sm bg-navy text-white">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-ink sm:text-2xl">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-steel">{service.summary}</p>
                <a
                  href={`#${service.id}`}
                  className={buttonVariants({
                    variant: "link",
                    className: "mt-6 self-start",
                  })}
                >
                  Ver detalhes
                  <span className="sr-only"> de {service.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="py-8 sm:py-12">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-title`}
            className="container-site"
          >
            <div className="grid gap-10 border-b border-navy/15 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
              <div className="lg:col-span-5">
                <span className="inline-flex size-12 items-center justify-center rounded-sm border border-navy/20 text-navy">
                  <Icon name={service.icon} />
                </span>
                <h2
                  id={`${service.id}-title`}
                  className="mt-6 font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] leading-tight font-semibold text-balance text-ink"
                >
                  {service.name}
                </h2>
                <p className="mt-5 text-steel">{service.description}</p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
                <div>
                  <h3 className="font-ui text-base font-medium text-navy">
                    O que entregamos
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-ink">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-baseline gap-3">
                        <span
                          aria-hidden="true"
                          className="inline-block h-[3px] w-3 shrink-0 -translate-y-[0.2em] rounded-[1px] bg-gold"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-ui text-base font-medium text-navy">
                    Quando faz sentido
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-steel">
                    {service.fitFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                  <h3 className="font-ui text-base font-medium text-navy">
                    Tecnologias
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-sm bg-white px-2.5 py-1 font-ui text-sm text-navy"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Contact />
    </>
  )
}
