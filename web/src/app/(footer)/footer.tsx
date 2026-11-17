"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SocialIcons from "@/components/shared/SocialIcons";
import IconCopyClipboard from "@/components/svg/IconCopyClipboard";
import { classNames, sleep } from "@/helpers/utilsHelper";
import styles from "./footer.module.css";

export default function Footer() {
  const emailAddress = "contact@henriquebf.com";
  const [hasCopied, setCopied] = useState(false);
  const [isFading, setFading] = useState(false);

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(emailAddress);
    if (hasCopied) return;
    // show "copied" message
    setCopied(true);
    // fade "copied message"
    await sleep(1000);
    setFading(true);
    // reset
    await sleep(1000);
    setCopied(false);
    setFading(false);
  };

  return (
    <footer id="footer" className={styles.footer}>
      <Container>
        <div className={styles.contact}>
          <p className={styles.prompt}>Have a product in mind?</p>
          <div className={styles.email}>
            <a href={`mailto:${emailAddress}`} className={styles.email_link}>
              {emailAddress}
            </a>
            <button
              type="button"
              className={styles.copy}
              onClick={copyToClipboard}
              aria-label="Copy email address"
              title="Copy email address"
            >
              <IconCopyClipboard size="20px" />
            </button>
            <span
              role="status"
              className={classNames([
                styles.copied,
                hasCopied && !isFading ? styles.visible : "",
              ])}
            >
              {hasCopied ? "Copied" : ""}
            </span>
          </div>
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
