import IconExternalLink from "../svg/IconExternalLink";
import IconGithub from "../svg/IconGithub";
import styles from "./ProjectItem.module.css";

type Item = {
  title: string;
  description: string;
  github?: string;
  link?: string;
};

export default function ProjectItem({ item }: { item: Item }) {
  return (
    <div>
      <h4>{item.title}</h4>
      <p className={styles.text}>{item.description}</p>
      <div className={styles.icons}>
        {item.github && (
          <div>
            <a href={item.github} target="_blank" rel="noreferrer">
              <IconGithub size="20px" />
            </a>
          </div>
        )}
        {item.link && (
          <div>
            <a href={item.link} target="_blank" rel="noreferrer">
              <IconExternalLink size="20px" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
