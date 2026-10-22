import { principles } from "@/lib/content"

export function Boutique() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -top-1/3 -right-1/4 -z-10 size-[42rem] rounded-full bg-[radial-gradient(circle,rgb(173_232_244/0.16),transparent_65%)]"
      />
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2
            id="sobre-title"
            className="font-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-tight font-semibold text-balance"
          >
            Pequenos de propósito
          </h2>
          <p className="mt-5 max-w-md text-white/80">
            Uma boutique atende poucos clientes por vez. Isso muda a velocidade
            das decisões, a qualidade do código e quem você encontra do outro
            lado da call.
          </p>
        </div>

        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-7">
          {principles.map((item) => (
            <li key={item.title}>
              <span
                aria-hidden="true"
                className="block h-1 w-8 rounded-[1px] bg-gold"
              />
              <h3 className="mt-5 font-heading text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-white/80">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
