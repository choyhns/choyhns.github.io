import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import ProjectTabs from "../components/ProjectTabs.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectTabs />
      <Contact />
    </>
  );
}
