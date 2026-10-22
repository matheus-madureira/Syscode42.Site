import { steps } from "@/lib/content"

export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="py-20 sm:py-28"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <h2
            id="processo-title"
            className="heading-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-tight"
          >
            Como um projeto acontece
          </h2>
          <p className="mt-5 text-steel">
            Do primeiro contato à entrega, você sabe em que etapa estamos e o
            que vem a seguir.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-3xl font-semibold text-navy">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-gradient-to-r from-navy/40 to-transparent"
                />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-steel">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
