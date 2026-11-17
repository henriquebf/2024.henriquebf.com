"use client";

import { useEffect, useState } from "react";
import { classNames } from "@/helpers/utilsHelper";
import { siteName } from "@/lib/site";
import Container from "@/components/layout/Container";
import styles from "./header.module.css";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects & Interest" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
];

const SHOW_AFTER = 150;
const HEADER_OFFSET = 64;

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("about");

  // Toggle visibility past a threshold; only re-renders when it flips.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(window.scrollY > SHOW_AFTER);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Track which section sits in the reading band of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const top =
      id === "about"
        ? 0
        : el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      id="header"
      className={classNames([styles.header, visible ? styles.show : undefined])}
    >
      <Container>
        <div className={styles.bar}>
          <a
            href="#about"
            className={styles.brand}
            onClick={(e) => scrollTo(e, "about")}
          >
            {siteName}
            <span className={styles.caret} aria-hidden="true" />
          </a>
          <nav aria-label="Sections">
            <ul className={styles.nav}>
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={styles.link}
                    aria-current={active === id ? "location" : undefined}
                    onClick={(e) => scrollTo(e, id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
