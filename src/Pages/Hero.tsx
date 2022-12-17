import Socials from "../components/Socials";
import patternRings from "../assets/images/pattern-rings.svg";
import patternCircle from "../assets/images/pattern-circle.svg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div
      className={`relative w-screen px-4 tablet:px-7 pc:w-full bg-[url("./assets/images/image-profile-mobile.webp"),url("./assets/images/pattern-rings.svg"),url("./assets/images/pattern-circle.svg")] 
      tablet:bg-[url("./assets/images/pattern-circle.svg"),url("./assets/images/pattern-rings.svg"),url("./assets/images/image-profile-tablet.webp")] pc:bg-[url("./assets/images/pattern-circle.svg"),url("./assets/images/pattern-rings.svg"), url("./assets/images/image-profile-desktop.webp")] 
      bg-[position:top_center,_-320px_125px,_125%_40%]  bg-[size:174px_383px,_auto,_auto] tablet:bg-[size:auto,_auto,_322px_600px] pc:bg-[size:auto,_auto,_contain_445px_720px]   pc:bg-[position:_76%_75%,_-300px_65px,_top_right]  tablet:bg-[position:_110%_87%,_-300px_65px,_top_right]   bg-no-repeat`}
    >
      <Socials />

      <div className="mt-[300px] tablet:mt-0 text-center tablet:text-left">
        <div className="text-l text-[2.5rem] tablet:text-[4.73rem] pc:text-xl  pb-6">
          Nice to{" "}
          <div className="inline tablet:block pc:inline tablet:pb-6 tablet:pt-2 ">
            meet you!{" "}
            <span className="hidden tablet:inline pc:hidden">I’m</span>{" "}
          </div>
          <div className="pc:mt-4">
            <span className=" tablet:hidden pc:inline">I’m</span>{" "}
            <span className="border-b-4 border-green">Adam Keyes</span>.
          </div>
        </div>
        <div className="text-body text-[1rem] tablet:mt-10 tablet:text-body text-grey ">
          Based in the UK, I’m a front-end developer{" "}
          <div className="inline tablet:block">
            passionate about building accessible web apps
          </div>{" "}
          that users love.
        </div>
        <div className="flex justify-center tablet:justify-start pt-6 mb-12 tablet:mb-[9rem]">
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className="text-m text-[1rem] tracking-[2.25px] "
          >
            CONTACT ME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
