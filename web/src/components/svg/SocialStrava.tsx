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
      <circle cx="50" cy="50" r="50" mask="url(#stravaMask)"></circle>
      <mask id="stravaMask">
        <rect x="0" y="0" width="100" height="100" fill="white" />
        <g id="Layer_1" transform="translate(0, 0)">
          <path
            d="M45.961,38.945 L52.424,54.695 L63.734,54.695 L45.961,14.445 L28.189,54.695 L39.499,54.695 L45.961,38.945"
            fill="black"
          ></path>
          <path
            d="M58.887,84.445 L45.961,54.695 L54.04,54.695 L58.887,66.945 L63.734,54.695 L71.812,54.695 L58.887,84.445"
            fill="black"
          ></path>
        </g>
      </mask>
    </svg>
  );
}
