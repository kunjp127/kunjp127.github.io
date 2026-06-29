import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="font-nunito bg-baseplate min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <Contact />
    </div>
  );
}