import Image from "next/image"

import { buttonVariants } from "@/components/ui/button"
import { contactHref } from "@/lib/site"
import banner from "@/public/wallpaper-syscode42-blue.png"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute top-[40%] -left-[20%] h-24 w-[140%] origin-center animate-beam sm:h-32">
          <div className="hero-beam absolute inset-0" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>

      <div className="container-site grid items-center gap-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="font-ui text-base font-medium text-navy">
            Boutique de software sob medida
          </p>
          <h1
            id="hero-title"
            className="heading-display mt-5 text-[clamp(2.1rem,1.2rem+3.8vw,4.1rem)] leading-[1.08]"
          >
            Software feito por quem responde por cada linha
            <span
              aria-hidden="true"
              className="ml-[0.12em] inline-block h-[0.12em] w-[0.6em] animate-cursor bg-gold align-baseline"
            />
          </h1>
          <p className="mt-6 max-w-[38rem] text-lg text-steel sm:text-xl">
            Somos um time pequeno e sênior que projeta, constrói e mantém
            sistemas web, APIs e produtos digitais para empresas que querem um
            parceiro técnico, não uma fábrica de software.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={contactHref} className={buttonVariants({ size: "lg" })}>
              Agendar uma conversa
            </a>
            <a
              href="#servicos"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="relative sm:max-w-xl lg:col-span-5 lg:max-w-none">
          <div
            aria-hidden="true"
            className="hud-corners absolute -inset-3 sm:-inset-4"
          />
          <div className="relative overflow-hidden rounded-md bg-navy shadow-[0_30px_60px_-30px_rgb(0_41_107/0.55)]">
            <Image
              src={banner}
              alt="Logotipo da Syscode42 em branco e dourado sobre fundo azul-marinho com brilho radial"
              priority
              placeholder="blur"
              // O recorte 4:5 exibe só o centro da imagem 16:9: pede uma
              // largura maior que a da caixa para não ampliar o banner.
              sizes="(min-width: 1024px) 1100px, 100vw"
              // Os recortes escondem a marca d'água no canto inferior direito
              // do arquivo original.
              className="aspect-[4/3] w-full object-cover object-[60%_50%] lg:aspect-[4/5] lg:object-[77%_50%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
