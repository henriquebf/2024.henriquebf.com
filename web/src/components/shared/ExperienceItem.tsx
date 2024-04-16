import Image from "next/image";
import { classNames } from "../../helpers/utilsHelper";

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
  return (
    <div className="experience-item">
      {item.thumb && (
        <div className={classNames(["thumb", direction])}>
          <Image
            src={`/${item.thumb}`}
            alt={item.title}
            width={540}
            height={250}
          />
        </div>
      )}
      <div className={classNames(["title", direction])}>
        <h3>{item.title}</h3>
      </div>
      <div className={classNames(["position", direction])}>{item.position}</div>
      <div className={classNames(["time", direction])}>
        {item.time} ({item.duration})
      </div>
      {item.description.map((paragraph, i) => (
        <div key={i} className={classNames(["description", direction])}>
          {paragraph}
        </div>
      ))}

      {item.link && (
        <div className={classNames(["link", direction])}>
          <a href={item.link.url} rel="noreferrer" target="_blank">
            {item.link.text}
          </a>
        </div>
      )}
      <ul className={classNames(["bullets", direction])}>
        {item.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className={classNames(["line", direction])}></div>
    </div>
  );
}
