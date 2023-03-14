// Imports
import Image from "next/image";
import { IProjectProps } from "./Projects.types";
import Link from "next/link";

// Functions
const Projects = () => {
  return (
    <section className="section-py flex bg-bgSecondary" id="projects">
      <div className="page-width flex w-full flex-col gap-16">
        <section className="flex flex-col gap-4">
          <h2>Projects</h2>
          <Link className="flex gap-4" href="#projects">
            <span>{"->"}</span>
            <span className="underline">View projects archive</span>
          </Link>
        </section>
        <section className="w-full">
          <ul className="grid gap-4 md:grid-cols-3">
            <p>Under construction</p>
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
  tags,
  date,
  link,
  github,
  website,
}: IProjectProps) => {
  return (
    <li className="relative aspect-square w-full">
      <Image src={"/images/about.jpg"} layout="fill" alt="Template image" />
    </li>
  );
};

// Exports
export default Projects;
