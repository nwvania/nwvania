import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nwvania — The Unified Digital Ecosystem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #EEF4FF 0%, #ffffff 60%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#005CE6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <span style={{ color: "white", fontSize: 36, fontWeight: 700 }}>N</span>
        </div>

        {/* Brand */}
        <div style={{ fontSize: 24, fontWeight: 600, color: "#005CE6", marginBottom: 16, letterSpacing: 2 }}>
          NWVANIA
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 24,
          }}
        >
          The Unified Digital Ecosystem
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 24, color: "#64748b", maxWidth: 700, lineHeight: 1.5 }}>
          One platform. 20 sectors. 220 applications.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#005CE6",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
