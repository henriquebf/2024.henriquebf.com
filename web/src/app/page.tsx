import Footer from "./(footer)/footer";
import AboutSection from "./(about)/about";
import ServicesSection from "./(services)/services";
import ExperienceSection from "./(experience)/experience";
import ProjectsSection from "./(projects)/projects";
import Header from "./(header)/header";

export const revalidate = 1000 * 60 * 60 * 12; // Revalidate this route caching in 12 hours

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
