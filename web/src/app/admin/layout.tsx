import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "../global.css";

const saira = Saira({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin",
  description: null,
  robots: "noindex, nofollow",
  openGraph: null,
  twitter: null,
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
