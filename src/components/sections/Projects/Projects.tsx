// Imports
import Link from "next/link";
import { IProjectProps } from "./Projects.types";

// Functions
const Projects = () => {
  return (
    <section className="section-py flex bg-bgSecondary">
      <div className="page-width flex w-full flex-col items-center gap-16">
        <section className="flex flex-col items-center gap-6">
          <h2>Projects</h2>
          <Link className="underline" href="/projects">
            View project archive
          </Link>
        </section>
        <section className="w-full">
          <ul className="grid grid-cols-3 gap-6">
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
              description="Project description lorem ipsum"
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
    <li>
      <article className="default-shadow bg-white p-6">
        <section>
          <h4>{title}</h4>
          <p className="text-gray-500">{description}</p>
        </section>
        <section>
          <ul>
            <li>
              <ul className="flex flex-wrap gap-4">
                {tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </li>
            <li>
              <p>{date}</p>
            </li>
          </ul>
        </section>
        <Link href="/" className="underline">
          More information
        </Link>
      </article>
    </li>
  );
};

// Exports
export default Projects;
