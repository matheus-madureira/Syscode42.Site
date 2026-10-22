import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "Syscode42, boutique de software sob medida"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/logo-syscode-white.png")
  )
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 64,
        padding: "0 96px",
        background:
          "linear-gradient(152deg, #ebf2fa 0%, #ebf2fa 48%, #f3e6cc 56%, #ebf2fa 66%, #dbeaf6 100%)",
        color: "#000814",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} width={280} height={280} alt="" />
      <div
        style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Software sob medida, feito por um time pequeno e sênior
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 8, background: "#d4ad68" }} />
          <div style={{ fontSize: 32, color: "#00296b" }}>
            Boutique de software
          </div>
        </div>
      </div>
    </div>,
    size
  )
}
