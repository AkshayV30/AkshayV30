export type ProjectCategory =
  | "Cloud & DevOps"
  | "DevOps & Platform"
  | "AI Engineering"
  | "AI & Manufacturing"
  | "AI & Simulation"
  | "Full-Stack & DevOps"
  | "Full-Stack Development"
  | "Embedded Systems"
  | "Frontend Engineering";


export type ProjectIcon =
  | "ai"
  | "clinic"
  | "devops"
  | "cloud"
  | "vision"
  | "embedded"
  | "frontend"
  | "tasks";

export interface Project {
  title: string;
  category: ProjectCategory;
  featured?: boolean;
  icon?: ProjectIcon;
  description: string;
  highlights?: string[];
  technologies: string[];
  github?: string;
  liveLink?: string;
}

export type FilterTab =
  | "Featured"
  | "Cloud & DevOps"
  | "AI & MLOps"
  | "Web Development"
  | "Embedded Systems"
  | "All Projects";
