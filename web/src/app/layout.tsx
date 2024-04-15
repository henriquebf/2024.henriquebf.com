import type { Metadata } from "next";
import { Saira_Extra_Condensed, Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  weight: "400",
  subsets: ["latin"],
});

const sairaCondensed = Saira_Extra_Condensed({
  weight: "400",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className} ${sairaCondensed.className}`}>
        {children}
      </body>
    </html>
  );
}
