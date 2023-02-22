// Imports
import { BiRightArrow } from "react-icons/bi";
import Image from "next/image";
import { IAboutListItemProps } from "./Hero.types";

// Functions
const About = () => {
  return (
    <section className="section-py flex">
      <div className="page-width flex gap-16">
        <section className="w-1/3">
          <div className="default-rounding default-shadow relative z-[-1] aspect-square w-full overflow-hidden">
            <Image
              src="/images/about.jpg"
              fill
              alt="About image of Joeri Breedveld"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
        <section className="page-width flex w-2/3 flex-col gap-8">
          <section className="flex flex-col gap-4">
            <h2>About</h2>
            <p>
              Hello, my name is Joeri Breedveld. I am 18 years old and live in
              Amsterdam. I have been programming since 2021 and am studying
              Software Development at Mediacollege Amsterdam. In my free time, I
              work on small projects a lot. I also follow many tutorials on
              YouTube and learn more about programming. I am a persevering
              person; I keep searching until I find the solution and I make time
              every day to learn something new. I also work very structured.
            </p>
          </section>
          <section>
            <ul className="grid grid-cols-3 gap-4">
              <AboutListItem title="TailwindCSS" />
              <AboutListItem title="React.js" />
              <AboutListItem title="TypeScript" />
              <AboutListItem title="Redux" />
              <AboutListItem title="Next.js" />
              <AboutListItem title="React Native" />
            </ul>
          </section>
        </section>
      </div>
    </section>
  );
};

const AboutListItem = ({ title }: IAboutListItemProps) => {
  return (
    <li className="flex items-center gap-4">
      <BiRightArrow size={16} color="purple" />
      <p>{title}</p>
    </li>
  );
};

// Export
export default About;
