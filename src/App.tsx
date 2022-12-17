import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
function App() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Experiences />
      <Projects />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
