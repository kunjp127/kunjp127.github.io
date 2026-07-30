import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Credentials from "./components/Education";
import FloatingBricks from "./components/FloatingBricks";

export default function App() {
  return (
    <div className="font-nunito bg-baseplate min-h-screen relative">
      <FloatingBricks />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </div>
    </div>
  );
}
