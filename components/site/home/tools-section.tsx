import { ToolMarquee } from "@/components/site/tool-marquee"

// Faixa branca com o stack do time (spec 006 §7.1, item 2). São as nossas
// ferramentas, não clientes: o título e a frase dizem isso.
export function ToolsSection() {
  return (
    <section
      id="ferramentas"
      aria-labelledby="ferramentas-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="container-site grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
        <h2
          id="ferramentas-title"
          className="reveal heading-display text-[clamp(1.9rem,1.2rem+2.6vw,3.25rem)] leading-[1.1] lg:col-span-7"
        >
          Ferramentas que usamos todo dia
        </h2>
        <p className="reveal reveal-1 max-w-[46ch] text-steel lg:col-span-5">
          Linguagens, bancos de dados e nuvens com que o nosso time constrói e
          mantém sistemas em produção. Não são logos de clientes: é o que temos
          na bancada.
        </p>
      </div>

      <ToolMarquee tone="ice" className="reveal reveal-2 mt-10 sm:mt-12" />
    </section>
  )
}
