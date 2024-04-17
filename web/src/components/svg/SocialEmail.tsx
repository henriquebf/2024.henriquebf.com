import React from "react";
import styles from "./Social.module.css";

export default function Svg({ size }: { size: string }) {
  return (
    <svg
      x="0"
      y="0"
      width={size}
      height={size}
      viewBox="0, 0, 100, 100"
      className={styles.social}
    >
      <circle cx="50" cy="50" r="50" mask="url(#emailMask)"></circle>
      <mask id="emailMask">
        <rect x="0" y="0" width="100" height="100" fill="white" />
        <g transform="translate(10, 10) scale(2.5 2.5)">
          <path
            stroke="black"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 9a2 2 0 012-2h22a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            fill="white"
          />
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 9l11.862 8.212a2 2 0 002.276 0L29 9"
            fill="black"
          />
        </g>
      </mask>
    </svg>
  );
}
