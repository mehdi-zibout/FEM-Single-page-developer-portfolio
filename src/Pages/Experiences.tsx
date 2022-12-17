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
    <div className="w-full">
      <div className="border-t-2 border-b-2 tablet:border-b-0 border-white text-center pt-10 pb-5 relative tablet:grid tablet:grid-cols-2 pc:grid-cols-3 ">
        {experiences.map((experience) => {
          return (
            <div
              className="pb-6 text-center tablet:text-left"
              key={experience[0]}
            >
              <div className="text-l text-[2rem] tablet:text-l">
                {experience[0]}
              </div>
              <div className="text-body text-[1rem] tablet:text-body text-grey">
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
