import Button from "./Button";

type ProjectProps = {
  thumbnails: string[];
  technologies: string[];
  title: string;
};

const Project = ({ thumbnails, technologies, title }: ProjectProps) => {
  return (
    <div className="">
      <div className="relative w-[343px] h-[253px] desktop:w-[540px] desktop:h-[400px]">
        <img
          src={thumbnails[0]}
          alt={title}
          className="w-[343px] h-[253px] desktop:w-[540px] desktop:h-[400px] hover:opacity-25 cursor-pointer relative"
        ></img>
        <Button className="absolute top-[5rem] right-0 left-0 mx-auto">
          View Project
        </Button>
        <Button className="absolute top-32 right-0 left-0 mx-auto">
          View Code
        </Button>
      </div>
      <div className="pt-5 text-m uppercase">{title}</div>
      <div className="text-body pt-2 text-grey">
        {technologies.map((technology) => (
          <span className="pr-4 uppercase">{technology}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;
