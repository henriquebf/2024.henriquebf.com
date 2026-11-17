"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { classNames } from "@/helpers/utilsHelper";
import styles from "./ExperienceItem.module.css";

type Link = {
  text: string;
  url: string;
};

type Item = {
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
};

export default function ExperienceItem({
  direction,
  item,
}: {
  direction: "left" | "right";
  item: Item;
}) {
  const className = direction === "left" ? styles.left : styles.right;

  return (
    <div>
      {item.thumb && (
        <CrtThumb className={className} src={item.thumb} alt={item.title} />
      )}
      <div className={classNames([styles.title, className])}>
        <h3 className={styles.heading}>{item.title}</h3>
      </div>
      <div className={classNames([styles.position, className])}>
        {item.position}
      </div>
      <div className={classNames([styles.time, className])}>
        {item.time} ({item.duration})
      </div>
      {item.description.map((paragraph, i) => (
        <div key={i} className={classNames([styles.description, className])}>
          {paragraph}
        </div>
      ))}

      {item.link && (
        <div className={classNames([styles.link, className])}>
          <a href={item.link.url} rel="noreferrer" target="_blank">
            {item.link.text}
          </a>
        </div>
      )}
      <ul className={classNames([styles.bullets, className])}>
        {item.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className={classNames([styles.line, className])}></div>
    </div>
  );
}

// Logo thumbnail that "switches on" like an old CRT the first time it scrolls
// into view, then stays static.
function CrtThumb({
  className,
  src,
  alt,
}: {
  className: string;
  src: string;
  alt: string;
}) {
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
      { threshold: 0.4 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={classNames([styles.thumb, className, isOn ? styles.on : ""])}
    >
      <Image src={`/${src}`} alt={alt} width={540} height={250} />
    </div>
  );
}
