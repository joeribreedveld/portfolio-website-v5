// Imports
import { BiRightArrow } from "react-icons/bi";
import Image from "next/image";
import { IAboutListItemProps } from "./About.types";

// Functions
const About = () => {
  return (
    <section className="section-py flex">
      <div className="page-width flex flex-col gap-16 md:flex-row">
        <section className="flex flex-col gap-8">
          <h2>About</h2>
          <p className="md:w-2/3">
            Hello, my name is Joeri Breedveld. I am 18 years old and live in
            Amsterdam. I have been programming since 2021 and am studying
            Software Development at Mediacollege Amsterdam. In my free time, I
            work on small projects a lot. I also follow many tutorials on
            YouTube and learn more about programming. I am a persevering person;
            I keep searching until I find the solution and I make time every day
            to learn something new. I also work very structured.
          </p>
        </section>
      </div>
    </section>
  );
};

// Export
export default About;
