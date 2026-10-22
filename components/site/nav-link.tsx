"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type NavLinkProps = ComponentProps<typeof Link> & {
  href: string
  activeClassName?: string
}

// Link do menu que marca a página atual. Âncoras da home (/#secao) nunca
// ficam ativas: elas apontam para seções, não para páginas.
export function NavLink({
  href,
  className,
  activeClassName,
  ...props
}: NavLinkProps) {
  const pathname = usePathname()
  const active = !href.includes("#") && pathname === href

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(className, active && activeClassName)}
      {...props}
    />
  )
}
