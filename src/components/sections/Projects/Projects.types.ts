// Interfaces
interface IProjectProps {
  id: string;
  title: string;
  img: string;
  intro: string;
  description?: string;
  github: string;
  live: string;
  skills: string[];
  date: string;
  madeat: string;
  slug: string;
}

type TProjectType = {
  id: string;
  title: string;
  img: string;
  intro: string;
  description?: string;
  github: string;
  live: string;
  skills: string[];
  date: string;
  madeat: string;
  slug: string;
};

// Exports
export type { IProjectProps, TProjectType };
