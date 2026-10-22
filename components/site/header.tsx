import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { MobileNav } from "@/components/site/mobile-nav"
import { Wordmark } from "@/components/site/wordmark"
import { contactHref, nav } from "@/lib/site"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-ice/85 backdrop-blur-md supports-[backdrop-filter]:bg-ice/70">
      <div className="container-site flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="-mx-1 flex min-h-11 items-center px-1"
          aria-label="Syscode42, página inicial"
        >
          <Wordmark className="text-xl sm:text-2xl" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 font-ui text-[0.95rem] text-steel">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-sm px-3 transition-colors hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contactHref}
            className={buttonVariants({
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            Agendar conversa
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
