import { ContactTrigger } from "@/components/site/contact-dialog"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { faq } from "@/lib/content"

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-ice py-20 sm:py-28"
    >
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2
            id="faq-title"
            className="reveal heading-display text-[clamp(1.9rem,1.2rem+2.6vw,3.25rem)] leading-[1.1]"
          >
            Perguntas frequentes
          </h2>
          <p className="reveal reveal-1 mt-5 max-w-[38ch] text-steel">
            Não encontrou a sua? Escreva para a gente e respondemos em até um
            dia útil.
          </p>
          <ContactTrigger
            className={buttonVariants({
              variant: "link",
              className: "reveal reveal-1 mt-4 min-h-11 active:text-navy-deep",
            })}
          >
            Mandar minha pergunta
          </ContactTrigger>
        </div>

        {/* Acordeão de peças: name="faq" abre uma por vez; a aberta fica navy. */}
        <div className="grid gap-1.5 md:gap-2 lg:col-span-8">
          {faq.map((item) => (
            <details
              key={item.question}
              name="faq"
              className="group reveal rounded-[var(--radius-tile)] bg-white text-ink transition-colors duration-200 open:bg-navy open:text-white not-open:hover:bg-ice-deep"
            >
              <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-6 rounded-[var(--radius-tile)] px-6 py-5 font-ui text-lg font-medium marker:content-none group-open:focus-visible:outline-gold sm:text-xl [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-ice text-navy transition-transform duration-200 group-open:bg-gold group-open:text-ink group-active:scale-90"
                >
                  <Icon
                    name="arrow-down-2"
                    className="transition-transform duration-200 group-open:rotate-180"
                  />
                </span>
              </summary>
              <p className="max-w-[62ch] px-6 pb-6 text-white/80">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
