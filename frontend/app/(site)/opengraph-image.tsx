import { ImageResponse } from "next/og";
import { SITE } from "../lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — desarrollo web y clases en Madrid`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen social de marca (papel / negro / rojo de DESIGN.md). */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f4f1",
          color: "#0a0a0a",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "#0a0a0a",
            color: "#ffffff",
            padding: "20px 28px",
            margin: "-64px -64px 0",
            width: "calc(100% + 128px)",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              background: "#c8102e",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 700 }}>{SITE.domain}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
            Desarrollo web y clases
            <br />
            de programación en Madrid
          </div>
          <div style={{ fontSize: 28, color: "#5c5754" }}>{SITE.name}</div>
        </div>
        <div
          style={{
            display: "flex",
            height: 8,
            background: "#c8102e",
            width: "40%",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
