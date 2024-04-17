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
        <div className={classNames([styles.thumb, className])}>
          <Image
            src={`/${item.thumb}`}
            alt={item.title}
            width={540}
            height={250}
          />
        </div>
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
