import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
  alternates: null,
};

export default async function NotFound() {
  return <h1 className={styles.notFound}>404! Page Not Found</h1>;
}
