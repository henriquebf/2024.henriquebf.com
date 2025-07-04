import Container from "@/components/layout/Container";
import ProjectItem from "@/components/shared/ProjectItem";
import Cycling from "./(cycling)/cycling";
import styles from "./projects.module.css";

const projects = [
  {
    title: `Gear Alert`,
    description: `Experimental web application that keeps maintenance track of cycling gear by querying user's strava account.`,
    github: `https://github.com/henriquebf/gearalert.henriquebf.com`,
    link: `https://gearalert.henriquebf.com`,
  },
  {
    title: `AI Translation Workflow`,
    description: `Github workflow that automatically translates i18n files after commiting changes in the source language file.`,
    github: `https://github.com/henriquebf/ai-translation-workflow`,
  },
  {
    title: `XR Playground`,
    description: `I have experimented with Unity 3D framework, learning the fundamentals of VR interactions using Oculus Quest 2 device.`,
    github: `https://github.com/henriquebf/xr-playground`,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <Container>
        <div className={styles.content}>
          <h2>Projects & Interest</h2>
          <div className={styles.wrapper}>
            <div className={styles.list}>
              {projects.map((item, i) => (
                <ProjectItem key={i} item={item} />
              ))}
            </div>
            <Cycling />
          </div>
        </div>
      </Container>
    </section>
  );
}
