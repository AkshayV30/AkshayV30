export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  github?: string;

  // Presentation metadata
  category?: string;
  icon?: ProjectIcon;
  highlights?: string[];
}

export type ProjectIcon =
  | "ai"
  | "clinic"
  | "devops"
  | "cloud"
  | "vision"
  | "embedded"
  | "frontend"
  | "tasks";
