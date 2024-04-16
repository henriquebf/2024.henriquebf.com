import Container from "@/components/layout/Container";
import ProjectItem from "@/components/shared/ProjectItem";

const projects = [
  {
    title: `Gear Alert`,
    description: `Experimental web application that keeps maintenance track of cycling gear by querying user's strava account.`,
    github: `https://github.com/henriquebf/gearalert.henriquebf.com`,
    link: `https://gearalert.henriquebf.com`,
  },
  {
    title: `XR Playground`,
    description: `I have experimented with Unity 3D framework, learning the fundamentals of VR interactions using Oculus Quest 2 device.`,
    github: `https://github.com/henriquebf/xr-playground`,
  },
];

export default function Projects({ cycling }: { cycling: React.ReactNode }) {
  return (
    <section id="projects">
      <Container>
        <div className="content">
          <h2>Projects & Interest</h2>
          <div className="wrapper">
            <div className="projects">
              {projects.map((item, i) => (
                <ProjectItem key={i} item={item} />
              ))}
            </div>
            <div className="goals">{cycling}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
