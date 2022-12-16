import Button from "./Button";
type ProjectProps = {
  thumbnails: string[];
  technologies: string[];
  title: string;
};

const Project = ({ thumbnails, technologies, title }: ProjectProps) => {
  return (
    <div className="pc:relative w-[343px]  pc:w-[540px]  group mb-10">
      <img
        src={window.innerWidth >= 1280 ? thumbnails[0] : thumbnails[1]}
        alt={title}
        className="w-[343px] h-[253px] pc:w-[540px] pc:h-[400px] pc:group-hover:opacity-25  cursor-pointer "
      ></img>
      <div className="pt-5 text-m uppercase">{title}</div>
      <div className="text-body pt-1 text-grey">
        {technologies.map((technology) => (
          <span className="pr-4 uppercase" key={technology}>
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-5 pc:mt-0">
        <Button className="pc:absolute top-[9rem] right-0 left-0 pc:mx-auto pc:hidden pc:group-hover:block mr-8 ">
          View Project
        </Button>
        <Button className="pc:absolute top-[13rem] right-0 left-0 pc:mx-auto pc:hidden pc:group-hover:block ">
          View Code
        </Button>
      </div>
    </div>
  );
};

export default Project;
