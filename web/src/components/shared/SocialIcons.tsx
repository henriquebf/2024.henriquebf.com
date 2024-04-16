import SocialGithub from "../svg/SocialGithub";
import SocialInstagram from "../svg/SocialInstagram";
import SocialLinkedin from "../svg/SocialLinkedin";
import SocialStrava from "../svg/SocialStrava";
import SocialEmail from "../svg/SocialEmail";

export default function SocialIcons() {
  const size = "30px";
  return (
    <div className="social-icons">
      <div>
        <a
          href="https://github.com/henriquebf/"
          rel="noreferrer"
          target="_blank"
        >
          <SocialGithub size={size} />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/henrique-ferreira-21985b1b/"
          rel="noreferrer"
          target="_blank"
        >
          <SocialLinkedin size={size} />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/henriquebf/"
          rel="noreferrer"
          target="_blank"
        >
          <SocialInstagram size={size} />
        </a>
      </div>
      <div>
        <a
          href="https://www.strava.com/athletes/2498325"
          rel="noreferrer"
          target="_blank"
        >
          <SocialStrava size={size} />
        </a>
      </div>
      <div>
        <a href="mailto:henriquebf@gmail.com" rel="noreferrer" target="_blank">
          <SocialEmail size={size} />
        </a>
      </div>
    </div>
  );
}
