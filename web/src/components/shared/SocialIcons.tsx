import styles from "./SocialIcons.module.css";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/henriquebf/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/henrique-bf" },
  { label: "Instagram", href: "https://www.instagram.com/henriquebf/" },
  { label: "Strava", href: "https://www.strava.com/athletes/2498325" },
];

export default function SocialIcons() {
  return (
    <nav aria-label="Social profiles">
      <ul className={styles.social_links}>
        {socialLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              className={styles.link}
            >
              {label}
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
