"use client"

import { GoogleAnalytics } from "@next/third-parties/google"
import Link from "next/link"
import Script from "next/script"
import * as React from "react"

import { buttonVariants } from "@/components/ui/button"
import { privacyPath } from "@/lib/site"
import { cn } from "@/lib/utils"

type Choice = "granted" | "denied" | "unset"

const storageKey = "syscode42-consent"
const changeEvent = "syscode42-consent-change"

const gaId = process.env.NEXT_PUBLIC_GA_ID
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID
// O ID entra num script inline: aceita só letras e números.
const safeClarityId =
  clarityId && /^[a-z0-9]+$/i.test(clarityId) ? clarityId : undefined
const hasTrackers = Boolean(gaId || safeClarityId)

// Fallback para quando o localStorage está bloqueado (aba anônima, políticas).
let memoryChoice: Choice = "unset"

function readChoice(): Choice {
  try {
    const value = window.localStorage.getItem(storageKey)
    if (value === "granted" || value === "denied") {
      return value
    }
    return memoryChoice
  } catch {
    return memoryChoice
  }
}

function writeChoice(choice: Choice) {
  memoryChoice = choice
  try {
    if (choice === "unset") {
      window.localStorage.removeItem(storageKey)
    } else {
      window.localStorage.setItem(storageKey, choice)
    }
  } catch {
    // Sem storage, a escolha vale só para esta visita.
  }
  window.dispatchEvent(new Event(changeEvent))
}

function subscribe(onChange: () => void) {
  window.addEventListener(changeEvent, onChange)
  window.addEventListener("storage", onChange)

  return () => {
    window.removeEventListener(changeEvent, onChange)
    window.removeEventListener("storage", onChange)
  }
}

function useConsent(): Choice | "loading" {
  return React.useSyncExternalStore(subscribe, readChoice, () => "loading")
}

function Trackers() {
  return (
    <>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      {safeClarityId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${safeClarityId}");`}
        </Script>
      ) : null}
    </>
  )
}

function ConsentBanner() {
  return (
    <section
      aria-labelledby="cookies-title"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:right-auto sm:bottom-4 sm:left-4 sm:max-w-md sm:p-0"
    >
      <div className="rounded-md border border-navy/15 bg-white p-5 shadow-[0_20px_40px_-20px_rgb(0_41_107/0.45)]">
        <h2
          id="cookies-title"
          className="font-heading text-lg font-semibold text-ink"
        >
          Cookies de medição
        </h2>
        <p className="mt-2 text-base text-steel">
          Usamos o Google Analytics e o Microsoft Clarity para entender como o
          site é usado e melhorá-lo. Eles só são ativados se você aceitar.{" "}
          <Link
            href={privacyPath}
            className="text-navy underline decoration-sky decoration-2 underline-offset-4 hover:decoration-navy"
          >
            Ver política de privacidade
          </Link>
        </p>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={() => writeChoice("granted")}
            className={buttonVariants({ size: "sm", className: "flex-1" })}
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={() => writeChoice("denied")}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "flex-1",
            })}
          >
            Recusar
          </button>
        </div>
      </div>
    </section>
  )
}

// Carrega GA4 e Clarity só com consentimento e mostra o aviso enquanto não há escolha.
export function Consent() {
  const choice = useConsent()

  if (!hasTrackers) {
    return null
  }

  return (
    <>
      {choice === "granted" ? <Trackers /> : null}
      {choice === "unset" ? <ConsentBanner /> : null}
    </>
  )
}

export function ConsentPreferencesButton({
  className,
}: {
  className?: string
}) {
  if (!hasTrackers) {
    return null
  }

  function reopen() {
    const previous = readChoice()
    writeChoice("unset")
    // Scripts já carregados só saem da página com um recarregamento.
    if (previous === "granted") {
      window.location.reload()
    }
  }

  return (
    <button
      type="button"
      onClick={reopen}
      className={cn(
        "inline-flex min-h-11 items-center underline-offset-4 hover:text-white hover:underline",
        className
      )}
    >
      Preferências de cookies
    </button>
  )
}
