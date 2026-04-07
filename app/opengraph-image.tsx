import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Vox Dei Studio — Senior product judgment, beautifully executed"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#fafaf9",
          fontFamily: "serif",
        }}
      >
        {/* Top — Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              border: "1px solid rgba(0,0,0,0.15)",
              fontSize: "11px",
              fontFamily: "sans-serif",
              letterSpacing: "0.12em",
              color: "#000",
            }}
          >
            VD
          </div>
          <span
            style={{
              fontSize: "13px",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#000",
            }}
          >
            Vox Dei Studio
          </span>
        </div>

        {/* Center — Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 500,
              fontFamily: "sans-serif",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "#000",
            }}
          >
            Senior product judgment,
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "rgba(0,0,0,0.35)",
            }}
          >
            beautifully executed.
          </span>
        </div>

        {/* Bottom — Descriptor + rule */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(181,96,58,0.3), transparent)",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Product &middot; Design &middot; Engineering
            </span>
            <span
              style={{
                fontSize: "13px",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(0,0,0,0.3)",
              }}
            >
              studio.voxdei.io
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
