import type { LucideIcon } from "lucide-react";

export interface CaseStudy {
  id: string;
  title: string;
  category: string;

  problem: string;
  approach: string;
  outcome: string;

  technologies: string[];

  github?: string;
  liveLink?: string;

  icon?: LucideIcon;
}
