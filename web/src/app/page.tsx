import Footer from "./(footer)/footer";
import AboutSection from "./(about)/about";
import AvailabilitySection from "./(availability)/availability";
import ExperienceSection from "./(experience)/experience";
import ProjectsSection from "./(projects)/projects";
import Header from "./(header)/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <AvailabilitySection />
      </main>
      <Footer />
    </>
  );
}
