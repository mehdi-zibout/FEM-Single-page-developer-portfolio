import Button from "./components/Button";
import Project from "./components/Project";
import TextAreaInput from "./components/TextAreaInput";
import TextInput from "./components/TextInput";
import imgUrl from "./assets/images/thumbnail-project-1-large.webp";
function App() {
  return (
    <div>
      <Button>contact me</Button>
      <br />
      <TextInput fieldName="name" />
      <TextAreaInput fieldName="message" />
      <div className="">
        <Project
          thumbnails={[imgUrl]}
          title="design portfolio"
          technologies={["html", "css"]}
        />
      </div>
    </div>
  );
}

export default App;
