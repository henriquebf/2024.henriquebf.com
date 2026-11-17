"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import SocialIcons from "@/components/shared/SocialIcons";
import styles from "./about.module.css";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked `--p` (0 → 1) drives a CRT "power-down" in CSS without
  // re-rendering React on every frame.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = Math.min(window.innerHeight * 0.6, 520);
      const p = Math.min(Math.max(window.scrollY / distance, 0), 1);
      section.style.setProperty("--p", p.toFixed(4));
      section.dataset.off = p >= 1 ? "true" : "false";
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.content}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.screen}>
              <div className={styles.avatar}>
                <div className={styles.avatar_image} />
              </div>
              <h1 className={styles.heading}>
                I&apos;m <b className={styles.strong}>Henrique Ferreira</b>
              </h1>
              <h3 className={styles.heading}>
                A <b className={styles.strong}>road cycling</b> enthusiast and{" "}
                <b className={styles.strong}>product engineer</b> with over 25
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
