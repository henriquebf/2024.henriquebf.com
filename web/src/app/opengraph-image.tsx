import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteName, siteTitle } from "@/lib/site";

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mirrors the palette in global.css (satori can't read CSS variables).
const color = {
  bg: "#071a2d",
  textPrimary: "#cad8f3",
  textSecondary: "#8793ad",
  active: "#40fddc",
  border: "#203852",
};

const [sairaRegular, sairaMedium, avatar] = await Promise.all([
  readFile(join(process.cwd(), "src/assets/fonts/Saira-Regular.ttf")),
  readFile(join(process.cwd(), "src/assets/fonts/Saira-Medium.ttf")),
  readFile(join(process.cwd(), "public/avatar.jpg")),
]);
const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

const Dot = () => (
  <span style={{ margin: "0 18px", color: color.active }}>·</span>
);

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 72px",
        fontFamily: "Saira",
        color: color.textSecondary,
        backgroundColor: color.bg,
        // same phosphor glow + scanlines as the hero
        backgroundImage: [
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(202, 216, 243, 0.025) 2px, rgba(202, 216, 243, 0.025) 4px)",
          "radial-gradient(ellipse 70% 80% at 22% 50%, rgba(64, 253, 220, 0.09), transparent 70%)",
        ].join(", "),
      }}
    >
      {/* top bar, like the site header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{ display: "flex", color: color.textPrimary, fontWeight: 500 }}
        >
          henriquebf.com
        </div>
        <div style={{ display: "flex" }}>Based in The Netherlands</div>
      </div>

      {/* hero */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={avatarSrc}
          width={232}
          height={232}
          style={{
            borderRadius: "50%",
            border: `4px solid ${color.active}`,
            boxShadow: "0 0 48px rgba(64, 253, 220, 0.35)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 72,
              lineHeight: 1.1,
            }}
          >
            <span>I&apos;m&nbsp;</span>
            <span style={{ color: color.textPrimary, fontWeight: 500 }}>
              {siteName}
            </span>
            <span
              style={{
                width: 32,
                height: 68,
                marginLeft: 16,
                backgroundColor: color.active,
                boxShadow: "0 0 18px rgba(64, 253, 220, 0.6)",
              }}
            />
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 36 }}>
            <span style={{ color: color.textPrimary, fontWeight: 500 }}>
              Product engineer
            </span>
            <span>&nbsp;&amp;&nbsp;</span>
            <span style={{ color: color.textPrimary, fontWeight: 500 }}>
              road cycling
            </span>
            <span>&nbsp;enthusiast</span>
          </div>
        </div>
      </div>

      {/* footer strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 28,
          borderTop: `1px solid ${color.border}`,
          fontSize: 22,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <span>25+ years shipping digital products</span>
        <Dot />
        <span>Web</span>
        <Dot />
        <span>Desktop</span>
        <Dot />
        <span>Mobile</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Saira", data: sairaRegular, style: "normal", weight: 400 },
        { name: "Saira", data: sairaMedium, style: "normal", weight: 500 },
      ],
    },
  );
}
