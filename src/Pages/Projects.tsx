import Button from "../components/Button";
import Project from "../components/Project";
import thumbnailProject1L from "../assets/images/thumbnail-project-1-large.webp";
import thumbnailProject1S from "../assets/images/thumbnail-project-1-small.webp";
import thumbnailProject2L from "../assets/images/thumbnail-project-2-large.webp";
import thumbnailProject2S from "../assets/images/thumbnail-project-2-small.webp";
import thumbnailProject3L from "../assets/images/thumbnail-project-3-large.webp";
import thumbnailProject3S from "../assets/images/thumbnail-project-3-small.webp";
import thumbnailProject4L from "../assets/images/thumbnail-project-4-large.webp";
import thumbnailProject4S from "../assets/images/thumbnail-project-4-small.webp";
import thumbnailProject5L from "../assets/images/thumbnail-project-5-large.webp";
import thumbnailProject5S from "../assets/images/thumbnail-project-5-small.webp";
import thumbnailProject6L from "../assets/images/thumbnail-project-6-large.webp";
import thumbnailProject6S from "../assets/images/thumbnail-project-6-small.webp";

type projectType = [number, string, string[], string[]];
const projects: projectType[] = [
  [
    1,
    "design portfolio",
    [thumbnailProject1S, thumbnailProject1L],
    ["HTML", "CSS"],
  ],
  [
    2,
    "e-learning landing page",
    [thumbnailProject2S, thumbnailProject2L],
    ["HTML", "CSS"],
  ],
  [
    3,
    "todo web app",
    [thumbnailProject3S, thumbnailProject3L],
    ["HTML", "CSS", "JAVASCRIPT"],
  ],
  [
    4,
    "entertainment web app",
    [thumbnailProject4S, thumbnailProject4L],
    ["HTML", "CSS", "JAVASCRIPT"],
  ],
  [
    5,
    "memory game",
    [thumbnailProject5S, thumbnailProject5L],
    ["HTML", "CSS", "JAVASCRIPT"],
  ],
  [
    6,
    "art gallery showcase",
    [thumbnailProject6S, thumbnailProject6L],
    ["HTML", "CSS", "JAVASCRIPT"],
  ],
];
const Projects = () => {
  return (
    <div className="w-full">
      <div className="">
        <div className="flex  justify-between items-center ">
          <div className="text-l text-[40px]">Projects</div>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className="pt-20 text-m text-[1rem] tracking-[2.25px] mb-20"
          >
            CONTACT ME
          </Button>
        </div>
        <div className="flex items-center flex-col tablet:grid tablet:grid-cols-2">
          {projects.map((project) => {
            return (
              <Project
                key={project[0]}
                thumbnails={project[2]}
                title={project[1]}
                technologies={project[3]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
