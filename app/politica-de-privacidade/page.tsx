import type { ReactNode } from "react"

import { pageMetadata } from "@/lib/metadata"
import { privacyPath, site } from "@/lib/site"

const privacyUpdatedAt = "2026-10-22"

export const metadata = pageMetadata({
  title: "Política de privacidade",
  description:
    "Como a Syscode42 trata dados pessoais no site: o que coletamos, para quê, com quem compartilhamos, cookies e como exercer seus direitos pela LGPD.",
  path: privacyPath,
})

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-navy underline decoration-sky decoration-2 underline-offset-4 hover:decoration-navy"
    >
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  )
}

const email = (
  <a
    href={`mailto:${site.email}`}
    className="text-navy underline decoration-sky decoration-2 underline-offset-4 hover:decoration-navy"
  >
    {site.email}
  </a>
)

const sections: { id: string; title: string; body: ReactNode }[] = [
  {
    id: "quem-somos",
    title: "Quem somos",
    body: (
      <p>
        A {site.name} ({site.legalName}, CNPJ {site.cnpj}) é uma boutique de
        desenvolvimento de software. Nesta política, “nós” se refere à{" "}
        {site.name}, controladora dos dados pessoais tratados em{" "}
        {site.url.replace("https://", "")}. Dúvidas sobre privacidade podem ser
        enviadas para {email}.
      </p>
    ),
  },
  {
    id: "dados",
    title: "Quais dados coletamos",
    body: (
      <>
        <p>
          Coletamos apenas o necessário para responder a você e melhorar o site:
        </p>
        <ul>
          <li>
            <strong>Contato por e-mail:</strong> quando você nos escreve,
            recebemos seu nome, endereço de e-mail e o que mais você decidir
            contar na mensagem.
          </li>
          <li>
            <strong>Medição com consentimento:</strong> se você aceitar os
            cookies, o Google Analytics e o Microsoft Clarity registram páginas
            visitadas, origem da visita, tipo de dispositivo e navegador,
            localização aproximada e interações como cliques e rolagem. O
            Clarity também grava a sessão de forma que mostra o movimento na
            página, mascarando o texto digitado.
          </li>
          <li>
            <strong>Medição sem identificação:</strong> o Vercel Web Analytics
            conta visitas e páginas vistas sem cookies e sem identificar quem
            você é.
          </li>
        </ul>
        <p>
          Não pedimos dados sensíveis e o site não tem formulários, cadastro ou
          área logada.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Para que usamos e com qual base legal",
    body: (
      <ul>
        <li>
          <strong>Responder seu contato e preparar propostas:</strong> execução
          de procedimentos preliminares a um contrato, a seu pedido (LGPD, art.
          7º, V).
        </li>
        <li>
          <strong>Entender como o site é usado e melhorá-lo</strong> com Google
          Analytics e Microsoft Clarity: consentimento (art. 7º, I), que você
          pode retirar a qualquer momento.
        </li>
        <li>
          <strong>Estatísticas agregadas de audiência</strong> com Vercel Web
          Analytics: legítimo interesse (art. 7º, IX), sem identificação do
          visitante.
        </li>
      </ul>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <>
        <p>
          Cookies de medição só são gravados depois que você clica em “Aceitar”
          no aviso de cookies. Se recusar, nada é carregado. Você pode mudar de
          ideia a qualquer momento pelo link “Preferências de cookies”, no
          rodapé de todas as páginas.
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> (cookies <code>_ga</code> e{" "}
            <code>_ga_*</code>): até 2 anos.
          </li>
          <li>
            <strong>Microsoft Clarity</strong> (cookies <code>_clck</code>,{" "}
            <code>_clsk</code>, <code>CLID</code> e afins): até 1 ano.
          </li>
        </ul>
        <p>
          Sua escolha sobre cookies fica salva no seu próprio navegador, sem ser
          enviada para nós.
        </p>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "Com quem compartilhamos",
    body: (
      <>
        <p>
          Não vendemos dados pessoais. Compartilhamos apenas com os fornecedores
          que operam o site e as ferramentas de medição, que tratam os dados em
          nosso nome:
        </p>
        <ul>
          <li>
            Google (Google Analytics),{" "}
            <External href="https://policies.google.com/privacy">
              política de privacidade do Google
            </External>
            .
          </li>
          <li>
            Microsoft (Clarity),{" "}
            <External href="https://privacy.microsoft.com/pt-br/privacystatement">
              declaração de privacidade da Microsoft
            </External>
            .
          </li>
          <li>
            Vercel (hospedagem e Web Analytics),{" "}
            <External href="https://vercel.com/legal/privacy-policy">
              política de privacidade da Vercel
            </External>
            .
          </li>
        </ul>
        <p>
          Esses fornecedores podem processar dados fora do Brasil, em países
          como os Estados Unidos. A transferência ocorre com as garantias
          previstas no art. 33 da LGPD, como cláusulas contratuais adotadas por
          eles. Também podemos compartilhar dados quando a lei ou uma autoridade
          exigir.
        </p>
      </>
    ),
  },
  {
    id: "retencao",
    title: "Por quanto tempo guardamos",
    body: (
      <ul>
        <li>
          Mensagens de contato: enquanto durar a conversa ou o projeto, e por
          até 5 anos depois, para cumprir obrigações legais e nos defender em
          eventuais processos.
        </li>
        <li>
          Dados do Google Analytics: 14 meses, apagados automaticamente depois.
        </li>
        <li>
          Microsoft Clarity: gravações de sessão por até 30 dias e mapas de
          calor por até 13 meses, conforme a retenção padrão da ferramenta.
        </li>
      </ul>
    ),
  },
  {
    id: "direitos",
    title: "Seus direitos",
    body: (
      <>
        <p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
        <ul>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desacordo com a lei;
          </li>
          <li>portabilidade dos dados a outro fornecedor;</li>
          <li>eliminação dos dados tratados com base no seu consentimento;</li>
          <li>informação sobre com quem compartilhamos seus dados;</li>
          <li>revogação do consentimento.</li>
        </ul>
        <p>
          Para exercer qualquer um deles, escreva para {email}. Respondemos em
          até 15 dias. Você também pode reclamar à Autoridade Nacional de
          Proteção de Dados (
          <External href="https://www.gov.br/anpd">ANPD</External>).
        </p>
      </>
    ),
  },
  {
    id: "seguranca",
    title: "Segurança",
    body: (
      <p>
        O site é servido apenas por HTTPS e o acesso às ferramentas de medição e
        à caixa de e-mail é restrito ao nosso time. Nenhum sistema é totalmente
        imune a incidentes; se algum afetar seus dados, avisaremos você e a ANPD
        conforme a lei.
      </p>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações nesta política",
    body: (
      <p>
        Podemos atualizar esta política quando o site ou a legislação mudarem. A
        data da última atualização fica no topo da página.
      </p>
    ),
  },
]

const updatedLabel = new Date(
  `${privacyUpdatedAt}T12:00:00`
).toLocaleDateString("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
})

export default function PrivacyPolicyPage() {
  return (
    <article className="container-site py-16 sm:py-24">
      <header className="max-w-3xl">
        <h1 className="heading-display text-[clamp(2rem,1.3rem+2.8vw,3.25rem)] leading-tight">
          Política de privacidade
        </h1>
        <p className="mt-5 text-steel">
          Última atualização:{" "}
          <time dateTime={privacyUpdatedAt}>{updatedLabel}</time>
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <nav
          aria-label="Nesta página"
          className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start"
        >
          <h2 className="font-ui text-base font-medium text-navy">
            Nesta página
          </h2>
          <ol className="mt-3 space-y-1 border-l border-navy/15">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="-ml-px inline-flex min-h-10 items-center border-l-2 border-transparent pl-4 text-steel hover:border-gold hover:text-navy"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-[68ch] space-y-12 lg:col-span-8">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="policy-body"
            >
              <h2
                id={`${section.id}-title`}
                className="font-heading text-2xl font-semibold text-ink"
              >
                {section.title}
              </h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
