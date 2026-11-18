"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import SocialIcons from "@/components/shared/SocialIcons";
import styles from "./about.module.css";

type Segment = { text: string; strong?: boolean };

const NAME: Segment[] = [
  { text: "I'm " },
  { text: "Henrique Ferreira", strong: true },
];

const BIO: Segment[] = [
  { text: "A " },
  { text: "road cycling", strong: true },
  { text: " enthusiast and " },
  { text: "product engineer", strong: true },
  { text: " with over 25 years of experience shipping " },
  { text: "digital products", strong: true },
  { text: " for web, desktop and mobile platforms with highest standards." },
];

const toPlainText = (segments: Segment[]) =>
  segments.map((s) => s.text).join("");

const varStyle = (vars: Record<string, number>) =>
  vars as unknown as React.CSSProperties;

// Name is typed out character by character, with a block caret following.
function Typed({ segments }: { segments: Segment[] }) {
  const total = toPlainText(segments).length;
  let c = 0;

  return segments.map((segment, si) => {
    const words = segment.text.split(/( )/).filter(Boolean);
    const chars = words.map((word, wi) => (
      <span key={wi} className={styles.nowrap}>
        {[...word].map((char) => {
          const index = c++;
          return (
            <span
              key={index}
              className={`${styles.char} ${index === total - 1 ? styles.last : ""}`}
              style={varStyle({ "--c": index })}
            >
              {char}
            </span>
          );
        })}
      </span>
    ));
    return segment.strong ? (
      <b key={si} className={styles.strong}>
        {chars}
      </b>
    ) : (
      <span key={si}>{chars}</span>
    );
  });
}

// Bio words come into focus one after another.
function Focused({ segments }: { segments: Segment[] }) {
  let w = 0;

  return segments.map((segment, si) => {
    const words = segment.text.split(/( )/).filter(Boolean);
    const nodes = words.map((word, wi) => {
      if (word === " ") return " ";
      const index = w++;
      return (
        <span
          key={wi}
          className={styles.word}
          style={varStyle({ "--w": index })}
        >
          {word}
        </span>
      );
    });
    return segment.strong ? (
      <b key={si} className={styles.strong}>
        {nodes}
      </b>
    ) : (
      <span key={si}>{nodes}</span>
    );
  });
}

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
                <div className={styles.avatar_screen}>
                  <div className={styles.avatar_image} />
                </div>
              </div>
              <h1 className={styles.heading}>
                <span className={styles.sr_only}>{toPlainText(NAME)}</span>
                <span aria-hidden="true">
                  <Typed segments={NAME} />
                </span>
              </h1>
              <h3 className={styles.heading}>
                <span className={styles.sr_only}>{toPlainText(BIO)}</span>
                <span aria-hidden="true">
                  <Focused segments={BIO} />
                </span>
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
