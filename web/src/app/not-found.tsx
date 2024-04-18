import styles from "./not-found.module.css";

export default async function NotFound() {
  return <h1 className={styles.notFound}>404! Page Not Found</h1>;
}
