import { Icon } from "@/components/ui/icon"
import { faq } from "@/lib/content"

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2
            id="faq-title"
            className="heading-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-tight"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-5 text-steel">
            Não encontrou a sua? Escreva para a gente e respondemos em até um
            dia útil.
          </p>
        </div>

        <div className="divide-y divide-navy/15 border-y border-navy/15 lg:col-span-8">
          {faq.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 py-6 font-heading text-lg font-medium text-ink marker:content-none sm:text-xl [&::-webkit-details-marker]:hidden">
                {item.question}
                <Icon
                  name="arrow-down-2"
                  className="mt-1 text-navy transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="max-w-[62ch] pb-6 text-steel">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
