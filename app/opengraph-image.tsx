import { ImageResponse } from "next/og";

export const alt = "Infinity DataLabs — Intelligent systems. Serious engineering.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#05070c", color: "white", position: "relative", overflow: "hidden", padding: "72px", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", position: "absolute", width: 680, height: 680, borderRadius: 680, background: "radial-gradient(circle, rgba(91,140,255,.28), transparent 68%)", right: -120, top: -260 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <svg width="88" height="54" viewBox="0 0 112 64" fill="none">
          <path d="M24 49C11 49 5 40 5 32s6-17 19-17c13 0 18 13 28 13s15-13 28-13c13 0 19 9 19 17s-6 17-19 17c-13 0-18-13-28-13S37 49 24 49Z" stroke="#5B64FF" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="5" cy="32" r="4" fill="#071326" stroke="#5272FF" strokeWidth="2.5" />
          <circle cx="99" cy="32" r="4" fill="#071326" stroke="#7751FF" strokeWidth="2.5" />
          <path d="M19 32h13" stroke="#3B9DFF" strokeWidth="6" strokeLinecap="round" />
          <path d="M73 32h13" stroke="#78E2BD" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 34, letterSpacing: "-1px" }}><span style={{ fontWeight: 300 }}>Infinity&nbsp;</span><span style={{ fontWeight: 750 }}>DataLabs</span></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.02, letterSpacing: "-4px", fontWeight: 600, maxWidth: 900 }}><span>Intelligent systems.</span><span>Serious engineering.</span></div>
        <div style={{ display: "flex", marginTop: 30, color: "#9AA8BC", fontSize: 24 }}>AI · Software · Cloud · Security · Talent</div>
      </div>
    </div>,
    size,
  );
}
