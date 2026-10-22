import { services } from "@/lib/content"

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <h2
            id="servicos-title"
            className="heading-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-tight"
          >
            O que fazemos
          </h2>
          <p className="mt-5 text-steel">
            Quatro frentes, um mesmo time. Você contrata a pessoa certa para
            cada etapa sem precisar coordenar fornecedores diferentes.
          </p>
        </div>

        <ul className="mt-14 border-b border-navy/15">
          {services.map((service) => (
            <li
              key={service.id}
              className="grid gap-4 border-t border-navy/15 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <h3 className="flex items-baseline gap-3 font-heading text-xl font-semibold text-ink sm:text-2xl md:col-span-4">
                <span
                  aria-hidden="true"
                  className="inline-block h-1 w-5 shrink-0 translate-y-[-0.2em] rounded-[1px] bg-gold"
                />
                {service.name}
              </h3>
              <p className="text-steel md:col-span-5">{service.summary}</p>
              <ul
                aria-label={`Entregas de ${service.name}`}
                className="flex flex-wrap gap-2 md:col-span-3 md:flex-col md:gap-1.5"
              >
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm bg-ice px-2.5 py-1 font-ui text-sm text-navy md:bg-transparent md:p-0 md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
