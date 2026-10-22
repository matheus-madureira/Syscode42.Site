import { Boutique } from "@/components/site/boutique"
import { Contact } from "@/components/site/contact"
import { Faq } from "@/components/site/faq"
import { Hero } from "@/components/site/hero"
import { Process } from "@/components/site/process"
import { Services } from "@/components/site/services"
import { faq } from "@/lib/content"
import { JsonLd } from "@/lib/json-ld"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <Services />
      <Boutique />
      <Process />
      <Faq />
      <Contact />
    </>
  )
}
