import Image from "next/image"
import Link from "next/link"

import { ConsentPreferencesButton } from "@/components/site/consent"
import { Icon } from "@/components/ui/icon"
import { contactHref, nav, privacyPath, site } from "@/lib/site"
import logo from "@/public/logo-syscode42-transparent.webp"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white/75">
      <div className="container-site grid gap-12 py-16 sm:py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image
            src={logo}
            alt="Syscode42"
            sizes="128px"
            className="h-auto w-32"
          />
          <p className="mt-6 max-w-sm">
            Boutique de software enxuta. Sistemas, APIs e produtos digitais sob
            medida, feitos por um time pequeno e sênior.
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <h2 className="font-ui text-base font-medium text-gold">Navegação</h2>
          <ul className="mt-4 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center hover:text-white"
                >
                  {item.label}
                </Link>
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
                className="inline-flex min-h-11 items-center gap-2 break-all text-white underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
              >
                <Icon name="message" className="size-5 text-gold" />
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
        <div className="container-site flex flex-col gap-2 py-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <p className="py-2">
              © {year} {site.name}. Todos os direitos reservados.
              <br />
              {site.legalName}, CNPJ {site.cnpj}
            </p>
            <Link
              href={privacyPath}
              className="inline-flex min-h-11 items-center underline-offset-4 hover:text-white hover:underline"
            >
              Política de privacidade
            </Link>
            <ConsentPreferencesButton />
          </div>
          <p>Feito sob medida, como tudo que entregamos.</p>
        </div>
      </div>
    </footer>
  )
}
