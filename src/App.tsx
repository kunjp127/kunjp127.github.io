import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Credentials from "./components/Education";
import Contact from "./components/Contact";
import FloatingBricks from "./components/FloatingBricks";
import ScrollProgress from "./components/ScrollProgress";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <div className="font-nunito bg-baseplate min-h-screen relative">
      <ScrollProgress />
      <FloatingBricks />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </div>
    </div>
  );
}
