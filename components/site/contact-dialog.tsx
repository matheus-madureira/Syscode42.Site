"use client"

import * as React from "react"

import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { services } from "@/lib/content"
import { contactHref, site } from "@/lib/site"
import { cn } from "@/lib/utils"

type ServiceId = (typeof services)[number]["id"]

const stages = [
  { id: "ideia", label: "Tenho a ideia, ainda sem nada construído" },
  { id: "rodando", label: "Já tenho algo rodando e quero evoluir" },
  { id: "trocar", label: "Preciso substituir um sistema antigo" },
] as const

const sizes = [
  "Startup ou pequena empresa",
  "Média empresa",
  "Grande empresa",
] as const

// O que levamos para o diagnóstico em cada frente: alimenta a prévia ao vivo.
const focus: Record<ServiceId, string> = {
  produtos: "o menor recorte que prova valor e quem vai usar no dia a dia",
  sistemas: "os sistemas que precisam conversar e as regras de negócio",
  modernizacao: "o que existe hoje, o que não pode parar e o custo de manter",
  ia: "a tarefa concreta, os dados disponíveis e como medir a qualidade",
}

type DialogContext = { open: (service?: ServiceId) => void }

const ContactContext = React.createContext<DialogContext | null>(null)

// Um único <dialog> nativo para o site todo (spec 006 §6): foco preso,
// Esc fecha e o foco volta para quem abriu.
export function ContactDialogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const openerRef = React.useRef<HTMLElement | null>(null)
  const [preset, setPreset] = React.useState<ServiceId | undefined>()
  const [session, setSession] = React.useState(0)

  const open = React.useCallback((service?: ServiceId) => {
    openerRef.current = document.activeElement as HTMLElement | null
    setPreset(service)
    setSession((value) => value + 1)
    dialogRef.current?.showModal()
    // Foco inicial explícito no primeiro campo: nem todo navegador o move.
    requestAnimationFrame(() => {
      dialogRef.current
        ?.querySelector<HTMLElement>("input, select, textarea")
        ?.focus()
    })
  }, [])

  const close = React.useCallback(() => {
    dialogRef.current?.close()
  }, [])

  const value = React.useMemo(() => ({ open }), [open])

  return (
    <ContactContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        className="contact-dialog"
        onClose={() => openerRef.current?.focus()}
        onClick={(event) => {
          // Clique no backdrop fecha.
          if (event.target === dialogRef.current) {
            close()
          }
        }}
      >
        <ContactForm key={session} preset={preset} onClose={close} />
      </dialog>
    </ContactContext.Provider>
  )
}

type TriggerProps = Omit<React.ComponentProps<"a">, "href"> & {
  service?: ServiceId
}

// Sem JavaScript, é um link de e-mail comum; com JS, abre o modal.
export function ContactTrigger({ service, onClick, ...props }: TriggerProps) {
  const context = React.useContext(ContactContext)

  return (
    <a
      href={contactHref}
      onClick={(event) => {
        onClick?.(event)
        if (context && !event.defaultPrevented) {
          event.preventDefault()
          context.open(service)
        }
      }}
      {...props}
    />
  )
}

function joinList(items: string[]) {
  if (items.length <= 1) {
    return items.join("")
  }
  return `${items.slice(0, -1).join(", ")} e ${items.at(-1)}`
}

function ContactForm({
  preset,
  onClose,
}: {
  preset?: ServiceId
  onClose: () => void
}) {
  const [picked, setPicked] = React.useState<ServiceId[]>(
    preset ? [preset] : []
  )
  const [stage, setStage] =
    React.useState<(typeof stages)[number]["id"]>("ideia")
  const [size, setSize] = React.useState<(typeof sizes)[number]>(sizes[0])
  const [name, setName] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [sent, setSent] = React.useState(false)

  const chosen = services.filter((service) => picked.includes(service.id))
  const stageLabel = stages.find((item) => item.id === stage)?.label ?? ""

  function toggle(id: ServiceId) {
    setPicked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  function submit(event: React.FormEvent) {
    event.preventDefault()
    const names = chosen.map((service) => service.name)
    const subject = names.length
      ? `Diagnóstico: ${joinList(names)}`
      : "Quero conversar sobre um projeto"
    const body = [
      name ? `Olá, sou ${name}.` : "Olá!",
      "",
      `Frentes: ${names.length ? joinList(names) : "ainda não sei"}`,
      `Momento: ${stageLabel}`,
      `Empresa: ${size}`,
      "",
      message || "(conte aqui em poucas linhas o que você precisa)",
    ].join("\n")

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fieldClass =
    "w-full rounded-[var(--radius-tile)] border border-navy/20 bg-white px-4 py-3 text-base text-ink transition-colors placeholder:text-steel/80 hover:border-navy/40 focus-visible:border-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"

  return (
    <div className="grid md:grid-cols-[minmax(0,1fr)_17rem]">
      <form
        onSubmit={submit}
        className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-6 p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2
              id="contact-dialog-title"
              className="font-display text-2xl leading-tight font-semibold text-ink sm:text-3xl"
            >
              Monte seu diagnóstico
            </h2>
            <p className="mt-2 text-base text-steel">
              Três escolhas rápidas e o e-mail sai pronto. A conversa é sem
              custo.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm text-ink transition-colors hover:bg-navy/5"
          >
            <Icon name="close-square" />
          </button>
        </div>

        <fieldset className="grid gap-3">
          <legend className="mb-3 font-ui text-base font-medium text-ink">
            Do que você precisa?
          </legend>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => {
              const active = picked.includes(service.id)
              return (
                <label
                  key={service.id}
                  className={cn(
                    "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 font-ui text-sm transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-navy",
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-navy/20 bg-white text-ink hover:border-navy/50"
                  )}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={active}
                    onChange={() => toggle(service.id)}
                  />
                  <Icon name={service.icon} className="size-5" />
                  {service.name}
                </label>
              )
            })}
          </div>
        </fieldset>

        <fieldset className="grid gap-2">
          <legend className="mb-3 font-ui text-base font-medium text-ink">
            Em que momento você está?
          </legend>
          {stages.map((item) => (
            <label
              key={item.id}
              className="flex min-h-11 cursor-pointer items-center gap-3 text-base text-ink"
            >
              <input
                type="radio"
                name="stage"
                value={item.id}
                checked={stage === item.id}
                onChange={() => setStage(item.id)}
                className="size-5 accent-navy"
              />
              {item.label}
            </label>
          ))}
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 font-ui text-base font-medium text-ink">
            Porte da empresa
            <select
              value={size}
              onChange={(event) =>
                setSize(event.target.value as (typeof sizes)[number])
              }
              className={fieldClass}
            >
              {sizes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 font-ui text-base font-medium text-ink">
            Seu nome
            <input
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={fieldClass}
            />
          </label>
        </div>

        <label className="grid gap-2 font-ui text-base font-medium text-ink">
          Em poucas linhas, o que você quer resolver?
          <textarea
            rows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={cn(fieldClass, "resize-y")}
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="submit" className={buttonVariants({ size: "lg" })}>
            <Icon name="send" className="size-5" />
            Abrir e-mail com o pedido
          </button>
          <p className="text-sm text-steel">
            Ou escreva direto para{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-navy underline decoration-sky decoration-2 underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </div>
        <p role="status" className="text-sm text-navy">
          {sent
            ? "Seu app de e-mail foi aberto com o pedido. Se nada abriu, use o endereço acima."
            : ""}
        </p>
      </form>

      <aside
        aria-label="O que acontece a seguir"
        className="bg-grad-beam p-6 text-white sm:p-8 md:rounded-r-[14px]"
      >
        <h3 className="font-ui text-lg font-semibold">
          O que acontece a seguir
        </h3>
        <ol className="mt-5 grid gap-5 text-base text-white/85">
          <li>
            <span className="block font-ui font-medium text-gold">
              Em até um dia útil
            </span>
            Respondemos para marcar uma conversa de 30 a 45 minutos.
          </li>
          <li>
            <span className="block font-ui font-medium text-gold">
              No diagnóstico
            </span>
            {chosen.length
              ? `Olhamos ${joinList(chosen.map((service) => focus[service.id]))}.`
              : "Entendemos o problema, o contexto do negócio e o que já existe."}
          </li>
          <li>
            <span className="block font-ui font-medium text-gold">Depois</span>
            Proposta por escrito com escopo, prazo e investimento, com as
            decisões técnicas explicadas.
          </li>
        </ol>
      </aside>
    </div>
  )
}
