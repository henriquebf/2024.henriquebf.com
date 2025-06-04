"use client";

import { useEffect, useState } from "react";
import { classNames } from "@/helpers/utilsHelper";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Container from "@/components/layout/Container";
import SocialIcons from "@/components/shared/SocialIcons";
import styles from "./about.module.css";

export default function AboutSection() {
  const scrollPosition = useScrollPosition();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (scrollPosition > 150) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, [scrollPosition]);

  return (
    <section id="about" className={styles.about}>
      <div
        className={classNames([
          styles.content,
          showIntro ? styles.show : styles.hide,
        ])}
      >
        <Container>
          <div className={styles.wrapper}>
            <div
              className={classNames([
                styles.scale,
                showIntro ? styles.show : styles.hide,
              ])}
            >
              <div className={styles.avatar} />
              <h1 className={styles.heading}>
                I am <b className={styles.strong}>Henrique Ferreira</b>
              </h1>
              <h3 className={styles.heading}>
                A <b className={styles.strong}>road cycling</b> enthusiast and{" "}
                <b className={styles.strong}>product engineer</b> with over 20
                years of experience shipping{" "}
                <b className={styles.strong}>digital products</b> for web,{" "}
                desktop and mobile platforms with highest standards.
              </h3>
              <div className={styles.social_icons}>
                <SocialIcons />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
