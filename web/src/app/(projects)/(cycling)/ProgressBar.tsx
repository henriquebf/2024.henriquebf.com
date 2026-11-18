"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./cycling.module.css";

// Fills from 0 up to `progress` (%) the first time the bar scrolls into view.
export default function ProgressBar({ progress }: { progress: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={styles.progress_bar}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <div
        className={styles.progress_fill}
        style={{ width: isVisible ? `${Math.min(progress, 100)}%` : 0 }}
      />
    </div>
  );
}
