import Image from "next/image"

import { ContactTrigger } from "@/components/site/contact-dialog"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { images } from "@/lib/images"
import { site } from "@/lib/site"

// Fecho de todas as páginas (spec 006 §7.1, item 7): uma linha da prancha com
// a peça de ação dourada no centro, ladeada por imagem e campo navy.
export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="py-20 sm:py-28"
    >
      <div className="container-site">
        <div className="board">
          <div className="tile relative col-span-1 min-h-40 bg-navy p-0 md:col-span-6 md:min-h-56 lg:col-span-3 lg:min-h-[22rem]">
            <Image
              src={images.beamNavy.src}
              alt=""
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="tile bg-grad-gold reveal col-span-2 row-start-1 flex flex-col justify-center gap-6 p-8 text-ink sm:p-10 md:col-span-12 md:row-start-1 md:p-12 lg:col-span-6 lg:row-start-auto">
            <h2
              id="contato-title"
              className="font-display text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] leading-tight font-semibold text-balance"
            >
              Seu sistema, fora do papel
            </h2>
            <p className="max-w-[46ch] text-lg text-ink/80">
              Conte em poucas linhas o que você precisa. Respondemos em até um
              dia útil para marcar o diagnóstico, sem custo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <ContactTrigger
                className={buttonVariants({
                  size: "lg",
                  className: "bg-ink hover:bg-navy-deep",
                })}
              >
                <Icon name="send" className="size-5" />
                Montar meu diagnóstico
              </ContactTrigger>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center gap-2 font-ui text-base font-medium text-ink underline decoration-ink/30 decoration-2 underline-offset-6 hover:decoration-ink"
              >
                <Icon name="message" className="size-5" />
                {site.email}
              </a>
            </div>
          </div>

          <div className="tile bg-grad-navy col-span-1 flex min-h-40 flex-col justify-end text-white md:col-span-6 md:min-h-56 lg:col-span-3 lg:min-h-[22rem]">
            <p className="font-ui text-lg leading-snug font-medium text-balance">
              Do diagnóstico à entrega, as mesmas pessoas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
