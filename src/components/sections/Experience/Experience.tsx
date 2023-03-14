// Imports

import Link from "next/link";

// Functions
const Experience = () => {
  return (
    <section className="section-py flex flex-col gap-16" id="experience">
      <section className="page-width flex flex-col gap-8">
        <h2>Experience</h2>
        <Link
          href="https://www.linkedin.com/in/joeribreedveld/"
          className="flex gap-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{"->"}</span>
          <span className="underline">View LinkedIn</span>
        </Link>
      </section>
      <section className="page-width flex flex-col gap-16 md:flex-row md:gap-32">
        <section className="flex flex-col gap-8">
          <h3>Work</h3>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-4">
              <h4 className="font-medium">CanvasHeroes</h4>
              <p className="text-gray-500">November 2022 - March 2023</p>
              <p>Frontend Intern</p>
            </li>
            <li className="flex flex-col gap-4">
              <h4 className="font-medium">oorsprongsdocumenten.nl</h4>
              <p className="text-gray-500">June 2022 - now</p>
              <p>Junior Full Stack Developer</p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-8">
          <h3>School</h3>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-4">
              <h4 className="font-medium">Mediacollege Amsterdam</h4>
              <p className="text-gray-500">September 2021 - June 2023</p>
              <p>MBO, Software Developer</p>
            </li>
            <li className="flex flex-col gap-4">
              <h4 className="font-medium">De Amsterdamse MAVO</h4>
              <p className="text-gray-500">September 2017 - June 2021</p>
              <p>VMBO-T, cum laude</p>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

// Exports
export default Experience;
