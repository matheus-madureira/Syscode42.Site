import type { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/utils"

const variants = {
  paper: "bg-white text-ink",
  ice: "bg-ice-deep text-ink",
  navy: "bg-grad-navy text-white",
  beam: "bg-grad-beam text-white",
  gold: "bg-grad-gold text-ink",
  ink: "bg-ink text-white",
  image: "bg-navy p-0 text-white",
} as const

export type TileVariant = keyof typeof variants

type TileProps<T extends ElementType> = {
  as?: T
  variant?: TileVariant
} & Omit<ComponentPropsWithoutRef<T>, "as">

// Peça da prancha (spec 006 §5.3): retângulo preenchido, raio único,
// sem contorno nem sombra em repouso. A grade de colunas fica com quem usa.
export function Tile<T extends ElementType = "div">({
  as,
  variant = "paper",
  className,
  ...props
}: TileProps<T>) {
  const Component = (as ?? "div") as ElementType

  return (
    <Component
      className={cn("tile", variants[variant], className)}
      {...props}
    />
  )
}
