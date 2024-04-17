"use client";

import { useEffect, useState } from "react";
import { classNames } from "@/helpers/utilsHelper";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Container from "@/components/layout/Container";
import SocialIcons from "@/components/shared/SocialIcons";
import styles from './page.module.css'

export default function About() {
  const scrollPosition = useScrollPosition();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (scrollPosition > 150) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, [scrollPosition, setShowIntro]);

  const _handleCaretClick = () => {};

  return (
    <section id="about" className={styles.about}>
      <div className={classNames([styles.content, showIntro ? styles.show : styles.hide])}>
        <Container>
          <div className={styles.wrapper}>
            <div className={classNames([styles.scale, showIntro ? styles.show : styles.hide])}>
              <div className={styles.avatar} />
              <h1 className={styles.heading}>
                I am <b className={styles.strong}>Henrique Ferreira</b>
              </h1>
              <h3 className={styles.heading}>
                A <b className={styles.strong}>Road Cycling</b> enthusiast and <b className={styles.strong}>Fullstack Developer</b>{" "}
                specialist on React based frameworks.
              </h3>
              <h3 className={styles.heading}>
                20+ years experience building e-commerce and applications for
                Web, Desktop, Mobile or anything you can write code for.
              </h3>
              <div className={styles.social_icons}>
                <SocialIcons />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        className={classNames([styles.caret, showIntro ? styles.show : styles.hide])}
        onClick={_handleCaretClick}
      />
    </section>
  );
}
