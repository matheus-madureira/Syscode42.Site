import Image from "next/image"

import { Icon } from "@/components/ui/icon"
import { Tile } from "@/components/ui/tile"
import { steps } from "@/lib/content"
import { images } from "@/lib/images"

export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="container-site">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2
            id="processo-title"
            className="reveal heading-display text-[clamp(1.9rem,1.2rem+2.6vw,3.25rem)] leading-[1.1] lg:col-span-7"
          >
            Como um projeto acontece
          </h2>
          <p className="reveal reveal-1 max-w-[46ch] text-steel lg:col-span-5">
            Do primeiro contato à entrega, você sabe em que etapa estamos e o
            que vem a seguir.
          </p>
        </div>

        <Tile
          variant="image"
          className="reveal reveal-2 mt-10 aspect-[4/3] bg-ice sm:mt-12 sm:aspect-[21/9]"
        >
          <Image
            src={images.hud.src}
            alt={images.hud.alt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </Tile>

        {/* Trilho: linha navy com um ponto dourado por etapa; horizontal no
            desktop, vertical no celular. A numeração é informação. */}
        <div className="relative mt-12 md:mt-14">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[11px] w-0.5 bg-navy md:top-[11px] md:right-0 md:bottom-auto md:left-0 md:h-0.5 md:w-auto"
          />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="reveal relative pl-12 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 size-6 rounded-full border-4 border-white bg-gold md:relative md:block"
                />
                <div className="flex items-center gap-3 md:mt-6">
                  <span className="font-display text-2xl leading-none font-semibold text-navy">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon name={step.icon} className="text-navy" />
                </div>
                <h3 className="mt-4 font-ui text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-steel">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
