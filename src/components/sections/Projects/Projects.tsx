// Imports
import Link from "next/link";
import Image from "next/image";
import { IProjectProps } from "./Projects.types";

// Functions
const Projects = () => {
  return (
    <section className="section-py flex">
      <div className="page-width flex w-full flex-col gap-16">
        <section className="flex flex-col gap-6">
          <h2>Projects</h2>
          <Link className="underline" href="/projects">
            View project archive
          </Link>
        </section>
        <section className="w-full">
          <ul className="grid gap-4 md:grid-cols-3">
            <Project
              title="Project Title"
              description="Project description lorem ipsum"
              tags={["tag1", "tag2"]}
              date="2021-01-01"
              link="https://example.com"
              github="https://github.com"
              website="https://example.com"
            />
            <Project
              title="Project Title"
              description="Project description lorem ipsum"
              tags={["tag1", "tag2"]}
              date="2021-01-01"
              link="https://example.com"
              github="https://github.com"
              website="https://example.com"
            />
            <Project
              title="Project Title"
              description="Project description lorem ipsum"
              tags={["tag1", "tag2"]}
              date="2021-01-01"
              link="https://example.com"
              github="https://github.com"
              website="https://example.com"
            />
            <Project
              title="Project Title"
              description="Project description lorem ipsum"
              tags={["tag1", "tag2"]}
              date="2021-01-01"
              link="https://example.com"
              github="https://github.com"
              website="https://example.com"
            />
            <Project
              title="Project Title"
              description="Project description lorem ipsum"
              tags={["tag1", "tag2"]}
              date="2021-01-01"
              link="https://example.com"
              github="https://github.com"
              website="https://example.com"
            />
            <Project
              title="Project Title"
              description="Project description awdawdawdawdawlorem ipsum"
              tags={["tag1", "tag2"]}
              date="2021-01-01"
              link="https://example.com"
              github="https://github.com"
              website="https://example.com"
            />
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
      <Image src={"/images/about.jpg"} layout="fill" alt="wa" />
    </li>
  );
};

// Exports
export default Projects;
