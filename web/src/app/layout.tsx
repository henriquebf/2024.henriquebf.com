import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./global.css";

const saira = Saira({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const title = `Henrique Ferreira - Fullstack Developer based in The Netherlands`;
const description = `A Road Cycling enthusiast and Fullstack Developer that delivers exceptional user experience and optimal performance.`;
const images = `https://henriquebf.com/meta-opengraph.jpg`;
const icons = `https://henriquebf.com/favicon.png`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images,
    type: "website",
  },
  twitter: {
    title,
    description,
    images,
  },
  icons,
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
