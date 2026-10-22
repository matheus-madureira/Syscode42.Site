import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { contactHref, site } from "@/lib/site"

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="py-20 sm:py-28"
    >
      <div className="container-site">
        <div className="relative isolate overflow-hidden rounded-md border border-navy/15 bg-white px-6 py-14 sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="hero-beam absolute top-1/2 -right-1/3 -z-10 h-24 w-[90%] rotate-[-28deg] opacity-70"
          />
          <div className="max-w-2xl">
            <h2
              id="contato-title"
              className="heading-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-tight"
            >
              Tem um sistema para tirar do papel?
            </h2>
            <p className="mt-5 text-steel">
              Conte em poucas linhas o que você precisa. Respondemos em até um
              dia útil para marcar o diagnóstico, sem custo.
            </p>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a href={contactHref} className={buttonVariants({ size: "lg" })}>
                <Icon name="send" className="size-5" />
                Agendar uma conversa
              </a>
              <a
                href={`mailto:${site.email}`}
                className={buttonVariants({
                  variant: "link",
                  className: "self-start text-lg sm:self-auto",
                })}
              >
                <Icon name="message" className="size-5" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
