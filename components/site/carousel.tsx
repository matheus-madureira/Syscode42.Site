"use client"

import * as React from "react"

import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

type CarouselProps = {
  label: string
  children: React.ReactNode
  className?: string
  // Conteúdo que fica à esquerda dos botões (ex.: título da seção).
  header?: React.ReactNode
}

// Trilho com scroll-snap (spec 006 §6): rola por toque, trackpad e teclado;
// os botões só aceleram a navegação. Sem autoplay.
export function Carousel({
  label,
  children,
  className,
  header,
}: CarouselProps) {
  const railId = React.useId()
  const railRef = React.useRef<HTMLDivElement>(null)
  const [edges, setEdges] = React.useState({ start: true, end: false })
  const slides = React.Children.toArray(children)

  const update = React.useCallback(() => {
    const rail = railRef.current
    if (!rail) {
      return
    }
    const max = rail.scrollWidth - rail.clientWidth
    setEdges({ start: rail.scrollLeft <= 4, end: rail.scrollLeft >= max - 4 })
  }, [])

  React.useEffect(() => {
    const rail = railRef.current
    if (!rail) {
      return
    }
    update()
    rail.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      rail.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [update])

  function go(direction: 1 | -1) {
    const rail = railRef.current
    if (!rail) {
      return
    }
    const slide = rail.firstElementChild as HTMLElement | null
    const step = slide ? slide.offsetWidth + 8 : rail.clientWidth
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    rail.scrollBy({
      left: step * direction,
      behavior: reduce ? "auto" : "smooth",
    })
  }

  const buttonClass =
    "inline-flex size-12 items-center justify-center rounded-sm bg-navy text-white transition-[background-color,opacity,transform] duration-200 hover:bg-navy-deep active:translate-y-px disabled:pointer-events-none disabled:opacity-35"

  return (
    <section
      aria-roledescription="carrossel"
      aria-label={label}
      className={cn("grid gap-6", className)}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 flex-1">{header}</div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-controls={railId}
            aria-label="Anterior"
            disabled={edges.start}
            onClick={() => go(-1)}
            className={buttonClass}
          >
            <Icon name="arrow-right" className="-scale-x-100" />
          </button>
          <button
            type="button"
            aria-controls={railId}
            aria-label="Próximo"
            disabled={edges.end}
            onClick={() => go(1)}
            className={buttonClass}
          >
            <Icon name="arrow-right" />
          </button>
        </div>
      </div>

      <div id={railId} ref={railRef} className="rail" tabIndex={0}>
        {slides.map((slide, index) => (
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${slides.length}`}
            className="min-w-0"
          >
            {slide}
          </div>
        ))}
      </div>
    </section>
  )
}
