"use client"

import * as React from "react"

import { ContactTrigger } from "@/components/site/contact-dialog"
import { NavLink } from "@/components/site/nav-link"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { nav } from "@/lib/site"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (!open) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-sm text-ink hover:bg-navy/5"
      >
        {open ? <Icon name="close-square" /> : <Icon name="category" />}
      </button>

      <nav
        id="menu-mobile"
        aria-label="Principal"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-navy/10 bg-ice shadow-[0_12px_24px_-12px_rgb(0_41_107/0.25)]"
      >
        <ul className="container-site flex flex-col py-3 font-ui text-lg">
          {nav.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center gap-3 border-b border-navy/10 text-ink"
                activeClassName="text-navy before:h-[3px] before:w-4 before:rounded-[1px] before:bg-gold"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <ContactTrigger
              onClick={() => setOpen(false)}
              className={buttonVariants({ className: "w-full" })}
            >
              Agendar conversa
            </ContactTrigger>
          </li>
        </ul>
      </nav>
    </div>
  )
}
