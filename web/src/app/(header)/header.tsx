"use client";

import { useState } from "react";
import { classNames } from "@/helpers/utilsHelper";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Container from "@/components/layout/Container";
import styles from "./header.module.css";

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [hideHeaderOverride, setHideHeaderOverride] = useState(false);

  const showHeader = scrollPosition > 150 && !hideHeaderOverride;

  const hideHeader = (e: any) => {
    e.preventDefault();
    const target = e.target.href?.split("#")[1] ?? "";
    const element = document.getElementById(target);
    element?.scrollIntoView();
    setHideHeaderOverride(true);
    setTimeout(() => setHideHeaderOverride(false), 50);
  };

  return (
    <header
      id="header"
      className={classNames([
        styles.header,
        showHeader ? styles.show : styles.hide,
      ])}
    >
      <Container>
        <nav className={styles.nav}>
          <a href="#about" className={styles.link} onClick={hideHeader}>
            About
          </a>
          <div> &middot; </div>
          <a href="#projects" className={styles.link} onClick={hideHeader}>
            Projects & Interest
          </a>
          <div> &middot; </div>
          <a href="#experience" className={styles.link} onClick={hideHeader}>
            Experience
          </a>
          <div> &middot; </div>
          <a href="#services" className={styles.link} onClick={hideHeader}>
            Services
          </a>
        </nav>
      </Container>
    </header>
  );
}
