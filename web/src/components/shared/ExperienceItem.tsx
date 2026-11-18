"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { classNames } from "@/helpers/utilsHelper";
import IconArrow from "@/components/svg/IconArrow";
import styles from "./ExperienceItem.module.css";

type Link = {
  text: string;
  url: string;
};

export type ExperienceEntry = {
  time: string;
  duration: string;
  title: string;
  location: string;
  position: string;
  description: string[];
  highlights?: string[];
  bullets: string[];
  thumb?: string;
  link?: Link;
  // Shown in full even while "Earlier career" is collapsed.
  alwaysExpanded?: boolean;
};

// One row of the vertical timeline: date column, rail node, content.
// On mobile the date column collapses and the date sits above the content.
export function TimelineRow({
  date,
  node,
  stickyDate = false,
  className,
  children,
}: {
  date: ReactNode;
  node: "entry" | "chapter" | "compact";
  stickyDate?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={classNames([
        styles.row,
        styles[`row_${node}`],
        className ?? "",
      ])}
    >
      <div className={styles.date}>
        <div className={stickyDate ? styles.sticky : ""}>{date}</div>
      </div>
      <div className={styles.rail_cell} aria-hidden="true">
        <span
          data-node
          className={classNames([styles.node, styles[`node_${node}`]])}
        />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default function ExperienceItem({ item }: { item: ExperienceEntry }) {
  return (
    <TimelineRow
      node="entry"
      stickyDate
      date={
        <>
          <div className={styles.date_time}>{item.time}</div>
          <div className={styles.date_duration}>{item.duration}</div>
        </>
      }
    >
      <article className={styles.entry}>
        {item.thumb && <CrtThumb src={item.thumb} alt={item.title} />}
        <div className={styles.text}>
          <h3 className={styles.heading}>{item.title}</h3>
          <div className={styles.position}>{item.position}</div>
          <div className={styles.location}>{item.location}</div>
          {item.description.map((paragraph, i) => (
            <p key={i} className={styles.description}>
              {paragraph}
            </p>
          ))}
          <ul className={styles.bullets}>
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {item.link && (
            <a
              className={styles.link}
              href={item.link.url}
              rel="noreferrer"
              target="_blank"
            >
              {item.link.text}
              <IconArrow />
            </a>
          )}
        </div>
      </article>
    </TimelineRow>
  );
}

// Compact one-line version, used for the collapsed early career.
export function ExperienceCompact({ item }: { item: ExperienceEntry }) {
  return (
    <TimelineRow
      node="compact"
      date={<div className={styles.date_time}>{item.time}</div>}
    >
      <div className={styles.compact}>
        <span className={styles.compact_title}>{item.title}</span>
        <span className={styles.compact_meta}>
          {item.position} · {item.location.split(",")[0]}
        </span>
      </div>
    </TimelineRow>
  );
}

// Logo thumbnail that "switches on" like an old CRT the first time it scrolls
// into view, then stays static.
function CrtThumb({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOn, setOn] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={classNames([styles.thumb, isOn ? styles.on : ""])}
    >
      <Image src={`/${src}`} alt={alt} width={540} height={250} />
    </div>
  );
}
