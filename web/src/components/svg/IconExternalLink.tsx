import React from "react";
import styles from "./Icon.module.css";

export default function Svg({ size }: { size: string }) {
  return (
    <svg
      x="0"
      y="0"
      width={size}
      height={size}
      viewBox="0, 0, 24, 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.icon}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
