import Footer from "./(footer)/footer";
import AboutSection from "./(about)/about";
import ServicesSection from "./(services)/services";
import ExperienceSection from "./(experience)/experience";
import ProjectsSection from "./(projects)/projects";
import Header from "./(header)/header";

export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
