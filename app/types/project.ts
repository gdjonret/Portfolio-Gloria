export type Project = {
  id: string;
  title: string;
  subtitle?: string; // e.g. "Featured Project"
  description: string;
  tech: string[];
  image: string; // public path: "/images/projects/..."
  github?: string;
  external?: string; // live demo / article
  showDetailsButton?: boolean;
  techStack?: {
    backend?: string[];
    frontend?: string[];
    architecture?: string[];
  };
};
