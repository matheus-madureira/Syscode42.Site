import Image from "next/image"

import { Breadcrumb } from "@/components/site/breadcrumb"
import { Contact } from "@/components/site/contact"
import { Icon } from "@/components/ui/icon"
import { about, principles } from "@/lib/content"
import { JsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { aboutPath, site } from "@/lib/site"
import bannerBlack from "@/public/wallpaper-syscode42-black.webp"
import bannerBlue from "@/public/wallpaper-syscode42-blue.webp"

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
  "heading-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-tight"

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />

      <section
        aria-labelledby="sobre-title"
        className="relative isolate overflow-hidden"
      >
        <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
        <div className="container-site pt-8 pb-14 sm:pb-20">
          <Breadcrumb items={[{ name: "Sobre nós", href: aboutPath }]} />
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <h1
              id="sobre-title"
              className="heading-display text-[clamp(2.1rem,1.2rem+3.6vw,3.9rem)] leading-[1.08]"
            >
              Um time pequeno para construir software que dura
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-steel sm:text-xl">
              {about.mission}
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative overflow-hidden rounded-md bg-navy sm:col-span-2 lg:col-span-1 lg:row-span-2">
              <Image
                src={bannerBlue}
                alt="Logotipo da Syscode42 em branco e dourado sobre fundo azul-marinho"
                placeholder="blur"
                sizes="(min-width: 1024px) 34vw, 100vw"
                // O recorte esconde a marca d'água do canto inferior direito.
                className="aspect-[4/3] h-full w-full object-cover object-[60%_50%] lg:aspect-auto lg:object-[80%_50%]"
              />
            </div>
            <div className="flex min-h-48 flex-col justify-between rounded-md bg-gold p-6 text-ink">
              <span
                aria-hidden="true"
                className="block h-1 w-8 rounded-[1px] bg-ink"
              />
              <p className="font-display text-2xl leading-snug font-semibold text-balance">
                Poucos clientes por vez
              </p>
            </div>
            <div className="relative hidden overflow-hidden rounded-md bg-ink sm:block lg:row-span-2">
              <Image
                src={bannerBlack}
                alt=""
                placeholder="blur"
                sizes="(min-width: 1024px) 34vw, 50vw"
                className="h-full min-h-48 w-full object-cover object-[0%_50%]"
              />
            </div>
            <div className="flex min-h-48 flex-col justify-between rounded-md bg-navy p-6 text-white sm:col-span-2 lg:col-span-1">
              <span
                aria-hidden="true"
                className="block h-1 w-8 rounded-[1px] bg-gold"
              />
              <p className="font-display text-2xl leading-snug font-semibold text-balance">
                As mesmas pessoas do diagnóstico à entrega
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="historia-title"
        className="bg-white py-20 sm:py-28"
      >
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <h2 id="historia-title" className={`${sectionTitle} lg:col-span-5`}>
              {about.storyTitle}
            </h2>
            <div className="space-y-5 text-steel lg:col-span-6 lg:col-start-7">
              {about.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <dl className="mt-16 grid gap-y-10 border-t border-navy/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col-reverse justify-end gap-2 lg:border-l lg:border-navy/15 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <dt className="max-w-[16rem] text-steel">{fact.label}</dt>
                <dd className="font-display text-5xl font-semibold text-navy">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="valores-title" className="py-20 sm:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="valores-title" className={sectionTitle}>
              No que acreditamos
            </h2>
            <p className="mt-5 text-steel">
              Quatro compromissos que valem para todo projeto, do menor MVP ao
              sistema mais crítico.
            </p>
          </div>

          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <li key={item.title}>
                <span className="inline-flex size-12 items-center justify-center rounded-sm bg-navy text-white">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-steel">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  )
}
