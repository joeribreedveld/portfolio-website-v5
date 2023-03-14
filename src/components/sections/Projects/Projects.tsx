// Imports
import Image from "next/image";
import { IProjectProps, TProjectType } from "./Projects.types";
import Link from "next/link";
import projects from "../../../../public/json/projects.json";

// Functions
const Projects = () => {
  return (
    <section className="section-py flex bg-bgSecondary" id="projects">
      <div className="page-width flex w-full flex-col gap-16">
        <section className="flex flex-col gap-8">
          <h2>Projects</h2>
          <Link className="flex gap-4" href="#projects">
            <span>{"->"}</span>
            <span className="underline">View projects archive</span>
          </Link>
        </section>
        <section className="w-full">
          <ul className="grid gap-4 gap-y-16 md:grid-cols-3">
            {projects.map((project: TProjectType, index: number) => {
              return <Project key={index} {...project} />;
            })}
          </ul>
        </section>
      </div>
    </section>
  );
};

const Project = ({
  title,
  img,
  intro,
  description,
  github,
  live,
  skills,
  date,
  madeat,
  slug,
}: IProjectProps) => {
  return (
    <li className="flex w-full flex-col gap-4">
      <div className="relative aspect-[4/3] w-full">
        <Image src={img} layout="fill" alt={title} className="object-cover" />
      </div>
      <h4>{title}</h4>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill: string, index: number) => {
          return (
            <li key={index}>
              <p className="text-sm text-gray-500">{skill}</p>
            </li>
          );
        })}
      </ul>
      <p>{intro}</p>
    </li>
  );
};

// Exports
export default Projects;
