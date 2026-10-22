import Link from "next/link"

import { JsonLd } from "@/lib/json-ld"
import { site } from "@/lib/site"

type Crumb = { name: string; href: string }

// Trilha de navegação visível + BreadcrumbList para os buscadores.
// O primeiro item é sempre a home; o último é a página atual.
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const crumbs = [{ name: "Início", href: "/" }, ...items]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  }

  return (
    <nav aria-label="Trilha de navegação">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-2 font-ui text-sm text-steel">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1

          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-navy">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className="inline-flex min-h-11 items-center hover:text-navy"
                  >
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
