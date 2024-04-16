import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

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

export default function Home({
  header,
  about,
  projects,
  experience,
  availability,
  footer,
}: {
  header: React.ReactNode;
  about: React.ReactNode;
  projects: React.ReactNode;
  experience: React.ReactNode;
  availability: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        {header}
        {about}
        {projects}
        {experience}
        {availability}
        {footer}
      </body>
    </html>
  );
}
