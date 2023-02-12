// Imports
import Link from "next/link";
import { IProjectProps } from "./Projects.types";

// Functions
const Projects = () => {
  return (
    <section className="section-py flex bg-bgSecondary">
      <div className="page-width flex w-full flex-col items-center gap-16">
        <section className="flex flex-col items-center gap-6">
          <h2>Mijn projecten</h2>
          <Link className="underline" href="/projects">
            Bekijk alle projecten
          </Link>
        </section>
        <section className="w-full">
          <ul className="grid grid-cols-3 gap-6">
            <Project title="Project Title" />
            <Project title="Project Title" />
            <Project title="Project Title" />
          </ul>
        </section>
      </div>
    </section>
  );
};

const Project = ({
  emoji,
  title,
  description,
  languages,
  date,
  link,
  github,
  website,
}: IProjectProps) => {
  return (
    <li>
      <article className="default-shadow bg-white p-6">
        <h4>{title}</h4>
      </article>
    </li>
  );
};

// Exports
export default Projects;
