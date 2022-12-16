import patternRings from "../assets/images/pattern-rings.svg";

const experiences = [
  ["HTML", "4 Years experience"],
  ["CSS", "4 Years experience"],
  ["Javascript", "4 Years experience"],
  ["Accessibility", "4 Years Experience"],
  ["React", "3 Years experience"],
  ["Sass", "3 Years experience"],
];
const Experiences = () => {
  return (
    <div className="w-screen">
      <div className="mx-4 border-t-2 border-b-2 border-white text-center pt-10 pb-5 relative">
        {experiences.map((experience) => {
          return (
            <div className="pb-6" key={experience[0]}>
              <div className="text-l text-[2rem]">{experience[0]}</div>
              <div className="text-body text-[1rem] text-grey">
                {experience[1]}
              </div>
            </div>
          );
        })}
        <div className="absolute -bottom-16 -right-[355px] z-0">
          <img src={patternRings} alt="rings" className="overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
