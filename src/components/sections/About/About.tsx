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
          <div className="default-rounding default-shadow relative aspect-square w-full overflow-hidden">
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
            <h2>Over mij</h2>
            <p>
              Hallo, mijn naam is Joeri Breedveld. Ik ben 18 jaar oud en woon in
              Amsterdam. Ik programmeer sinds 2021 en studeer Software
              Development aan het Mediacollege Amsterdam. In mijn vrije tijd
              werk ik veel aan kleine projecten. Ook volg ik veel tutorials op
              YouTube en leer ik meer over programmeren. Ik ben een doorzetter;
              ik ga door met zoeken totdat ik de oplossing heb gevonden en ik
              maak elke dag tijd vrij om iets nieuws te leren. Ook werk ik erg
              gestructureerd.
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
