import Container from "@/components/layout/Container";
import SocialIcons from "@/components/shared/SocialIcons";
import styles from "./footer.module.css";

export default function Footer() {
  const emailAddress = "contact@henriquebf.com";

  return (
    <footer id="footer" className={styles.footer}>
      <Container>
        <div className={styles.contact}>
          <p className={styles.prompt}>Have a product in mind?</p>
          <a href={`mailto:${emailAddress}`} className={styles.email_link}>
            {emailAddress}
          </a>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Henrique Ferreira
          </span>
          <SocialIcons />
        </div>
      </Container>
    </footer>
  );
}
