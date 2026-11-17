import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };

/** Link-preview image for WhatsApp, LinkedIn, etc. (Latin text only — OG renderer has no Tamil font.) */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: 72, background: "linear-gradient(135deg, #0f1f3d 0%, #081329 60%, #0b1a38 100%)", color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#b9d0ff", letterSpacing: 4, textTransform: "uppercase" }}>
          Digital visiting card
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div
            style={{
              width: 180, height: 180, borderRadius: 44, display: "flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg, #26406d, #0f1f3d)", border: "4px solid rgba(142,179,255,0.6)", fontSize: 72, fontWeight: 700,
            }}
          >
            {site.person.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -1 }}>{site.person.name}</div>
            <div style={{ fontSize: 34, color: "#c8d5e9", marginTop: 8 }}>{`Business Development Manager · ${site.person.qualification}`}</div>
            <div style={{ fontSize: 34, color: "#8eb3ff", marginTop: 6 }}>{site.brand.name}</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#c8d5e9" }}>
          <span>{`${site.location.city}, ${site.location.state}`}</span>
          <span>{site.contact.phoneDisplay}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
