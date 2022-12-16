import Button from "./components/Button";
import Project from "./components/Project";
import TextAreaInput from "./components/TextAreaInput";
import TextInput from "./components/TextInput";
import imgUrl from "./assets/images/thumbnail-project-1-large.webp";
import imgUrl2 from "./assets/images/thumbnail-project-1-small.webp";
import Hero from "./Pages/Hero";
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div>
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
      {/* <Button>contact me</Button>
      <br />
      <TextInput fieldName="name" />
      <TextAreaInput fieldName="message" />
      <div className="">
        <Project
          thumbnails={[imgUrl, imgUrl2]}
          title="design portfolio"
          technologies={["html", "css"]}
        />
      </div> */}
    </div>
  );
}

export default App;
