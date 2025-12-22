import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="container">
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
