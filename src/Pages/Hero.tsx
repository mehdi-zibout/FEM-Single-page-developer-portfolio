import githubImg from "../assets/images/icon-github.svg";
import frontendmentorImg from "../assets/images/icon-frontend-mentor.svg";
import linkedinImg from "../assets/images/icon-linkedin.svg";
import twitterImg from "../assets/images/icon-twitter.svg";
import mobileProfile from "../assets/images/image-profile-mobile.webp";
import patternRings from "../assets/images/pattern-rings.svg";
import patternCircle from "../assets/images/pattern-circle.svg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="w-screen relative">
      <div className="absolute mx-auto left-0 right-0 pt-5">
        <div className="flex flex-col tablet:flex-row items-center tablet:justify-between">
          <div className="text-m tablet:p-8 pc:pl-40 mb-5 tablet:mb-0">
            adamkeyes
          </div>
          <div className="flex justify-evenly tablet:p-8 pc:pr-44">
            <img src={githubImg} alt="Github" className=" px-3" />
            <img
              src={frontendmentorImg}
              alt="FrontendMentor"
              className="  px-3"
            />
            <img src={linkedinImg} alt="Linkedin" className="  px-3" />
            <img src={twitterImg} alt="twitter" className="  px-3" />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center z-50">
        <img
          src={mobileProfile}
          alt="Profile Picture"
          width={174}
          height={383}
        />
      </div>
      <div className="absolute top-36 -left-[360px] z-0">
        <img src={patternRings} alt="rings" className="overflow-hidden" />
      </div>
      <div className="absolute bottom-[365px] -right-[70px] z-0 ">
        <img src={patternCircle} alt="cercle" className="overflow-hidden" />
      </div>
      <div className="text-l text-[2.5rem]  text-center pb-6">
        Nice to meet you!{" "}
        <div>
          {" "}
          I’m
          <span className="border-b-4 border-green"> Adam Keyes</span>.
        </div>
      </div>
      <div className="text-body text-[1rem] text-center">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </div>
      <div className="flex justify-center pt-6">
        <Button className="text-m text-[1rem] tracking-[2.25px] mb-20">
          CONTACT ME
        </Button>
      </div>
    </div>
  );
};

export default Hero;
