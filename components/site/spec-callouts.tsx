import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

export type Callout = {
  label: string
  href: string
  // Ponto do objeto para onde a linha aponta, em % da peça.
  point: { x: number; y: number }
  // Onde o rótulo fica, em % da peça; o lado decide o alinhamento.
  at: { x: number; y: number }
  side: "left" | "right"
}

type SpecCalloutsProps = {
  image: string
  alt: string
  callouts: Callout[]
  preload?: boolean
  sizes: string
  className?: string
}

// Imagem do "núcleo" com rótulos técnicos (spec 006 §4): no desktop, linhas
// guia saem do objeto até cada rótulo; abaixo de lg, os rótulos viram uma
// lista sob a imagem. Cada rótulo é um link real para a frente correspondente.
export function SpecCallouts({
  image,
  alt,
  callouts,
  preload,
  sizes,
  className,
}: SpecCalloutsProps) {
  return (
    <figure className={cn("flex h-full flex-col", className)}>
      <div className="shutter relative min-h-72 flex-1 overflow-hidden rounded-[var(--radius-tile)] bg-white">
        <Image
          src={image}
          alt={alt}
          fill
          preload={preload}
          sizes={sizes}
          className="object-cover"
        />

        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 hidden size-full lg:block"
        >
          {callouts.map((callout) => (
            <g key={callout.label}>
              <line
                className="callout-line"
                x1={callout.point.x}
                y1={callout.point.y}
                x2={callout.at.x}
                y2={callout.at.y}
                stroke="#00296b"
                strokeOpacity={0.55}
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={callout.point.x}
                cy={callout.point.y}
                r={0.7}
                fill="#d4ad68"
              />
            </g>
          ))}
        </svg>

        <ul className="hidden lg:block">
          {callouts.map((callout, index) => (
            <li
              key={callout.label}
              className="callout-label absolute -translate-y-1/2"
              style={
                {
                  "--i": index,
                  top: `${callout.at.y}%`,
                  ...(callout.side === "left"
                    ? { right: `${100 - callout.at.x}%` }
                    : { left: `${callout.at.x}%` }),
                } as unknown as CSSProperties
              }
            >
              <Link
                href={callout.href}
                className="group/callout inline-flex min-h-11 items-center gap-2 rounded-sm bg-white px-3 font-ui text-sm font-medium text-ink shadow-[0_8px_20px_-12px_rgb(0_26_69/0.45)] transition-colors hover:bg-navy hover:text-white lg:text-[0.95rem]"
              >
                <span
                  aria-hidden="true"
                  className="h-[3px] w-3 rounded-[1px] bg-gold"
                />
                {callout.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="lg:sr-only">
        <ul className="mt-2 grid grid-cols-2 gap-1.5">
          {callouts.map((callout) => (
            <li key={callout.label}>
              <Link
                href={callout.href}
                className="flex min-h-12 items-center gap-2 rounded-[var(--radius-tile)] bg-white px-3 font-ui text-sm font-medium text-ink"
              >
                <span
                  aria-hidden="true"
                  className="h-[3px] w-3 shrink-0 rounded-[1px] bg-gold"
                />
                {callout.label}
              </Link>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  )
}
