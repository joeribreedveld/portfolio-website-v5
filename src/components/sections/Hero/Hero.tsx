// Imports
import CustomLink from "../../common/CustomLink/CustomLink";
import { Link, animateScroll as scroll } from "react-scroll";

// Functions
const Hero = () => {
  return (
    <div className="relative" id="hero">
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 z-10 h-full w-full backdrop-blur-md backdrop-filter"></div>
      <div className="absolute top-0 left-0 z-0 h-full w-full bg-[url('/images/hero-background.jpg')] bg-cover"></div>
      <section className="section-py relative z-20 flex min-h-screen w-full flex-col justify-center gap-16 text-white">
        <section className="page-width flex flex-col gap-8">
          <h1>
            Frontend developer who <br /> loves learning and challenge
          </h1>
          <p>
            I like to build clean and structured websites for the ultimate user
            experience.
          </p>
          <Link
            className="hover:cursor-pointer hover:underline"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {"-> Get to know me"}
          </Link>
        </section>
      </section>
    </div>
  );
};

// Exports
export default Hero;
