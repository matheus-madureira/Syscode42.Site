import Image from "next/image"

import { contactHref, nav, site } from "@/lib/site"
import logoBlack from "@/public/logo-syscode42-black.webp"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white/75">
      <div className="container-site grid gap-12 py-16 sm:py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image
            src={logoBlack}
            alt="Syscode42"
            width={128}
            height={128}
            className="-ml-4 size-32"
          />
          <p className="mt-4 max-w-sm">
            Boutique de software enxuta. Sistemas, APIs e produtos digitais sob
            medida, feitos por um time pequeno e sênior.
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <h2 className="font-ui text-base font-medium text-gold">Navegação</h2>
          <ul className="mt-4 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-ui text-base font-medium text-gold">Contato</h2>
          <ul className="mt-4 space-y-1">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center break-all text-white underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={contactHref}
                className="inline-flex min-h-11 items-center hover:text-white"
              >
                Agendar uma conversa
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-white/60 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.legalName}. Todos os direitos reservados.
          </p>
          <p>Feito sob medida, como tudo que entregamos.</p>
        </div>
      </div>
    </footer>
  )
}
