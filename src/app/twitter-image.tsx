import { ImageResponse } from "next/og";

export const alt = "Salvador Tenorio Alba — Lead Software Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(145deg, #070D18 0%, #0B1220 45%, #121A2A 100%)",
          color: "#E8EEF7",
          fontFamily: "Segoe UI, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#14B8A6",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          STA Solutions · Freelance
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
            Salvador Tenorio Alba
          </div>
          <div style={{ fontSize: 30, color: "#94A3B8", lineHeight: 1.3 }}>
            Lead Software Architect | Senior Full Stack Engineer
          </div>
          <div style={{ fontSize: 24, color: "#CBD5E1", maxWidth: 900 }}>
            Enterprise software that scales — architecture, modernization, and
            reliable .NET delivery.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(148,163,184,0.25)",
            paddingTop: 24,
            color: "#94A3B8",
            fontSize: 20,
          }}
        >
          <span>Guadalajara, Jalisco, Mexico</span>
          <span style={{ color: "#14B8A6" }}>Available immediately</span>
        </div>
      </div>
    ),
    size,
  );
}
