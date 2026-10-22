import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

// Variantes do componente "Saiba mais" do design system Syscode42 (Figma).
const buttonCva = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border-2 font-ui font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow] duration-200 outline-none select-none focus-visible:ring-4 focus-visible:ring-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-navy text-white hover:bg-navy-deep",
        gold: "border-transparent bg-gold text-ink hover:bg-[#c99d50]",
        dark: "border-transparent bg-graphite text-white hover:bg-ink",
        silver: "border-transparent bg-silver text-ink hover:bg-[#b0b0b0]",
        outline:
          "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
        "outline-gold":
          "border-gold bg-transparent text-gold hover:bg-gold hover:text-ink",
        link: "h-auto rounded-none border-0 px-0 text-navy underline decoration-sky decoration-2 underline-offset-6 hover:decoration-navy",
      },
      size: {
        default: "h-12 px-6 text-base",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
      },
    },
    // A variante link não tem altura nem padding de botão, qualquer que seja
    // o tamanho (o cva aplica size depois de variant).
    compoundVariants: [
      {
        variant: "link",
        size: ["default", "sm", "lg"],
        className: "h-auto px-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

// cva só concatena; o cn resolve conflitos como "hidden" × "inline-flex"
// quando as variantes são aplicadas direto em <a>.
function buttonVariants(props?: Parameters<typeof buttonCva>[0]) {
  return cn(buttonCva(props))
}

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonCva>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}

export { Button, buttonVariants }
