import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

// Ícones Iconly V3.0 (Sharp / Light) exportados do Figma para public/icons.
// Para adicionar um ícone: exporte o SVG para public/icons e registre aqui.
const icons = {
  "arrow-down-2": "/icons/arrow-down-2.svg",
  category: "/icons/category.svg",
  "close-square": "/icons/close-square.svg",
  message: "/icons/message.svg",
  send: "/icons/send.svg",
} as const

export type IconName = keyof typeof icons

type IconProps = {
  name: IconName
  // Sem label o ícone é decorativo e fica oculto para leitores de tela.
  label?: string
  className?: string
}

// Renderiza o SVG como máscara: a cor vem de currentColor.
export function Icon({ name, label, className }: IconProps) {
  const url = `url(${icons[name]})`
  const style: CSSProperties = {
    maskImage: url,
    WebkitMaskImage: url,
  }

  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={style}
      className={cn(
        "inline-block size-6 shrink-0 bg-current mask-contain mask-center mask-no-repeat",
        className
      )}
    />
  )
}
