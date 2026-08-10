import { CaseStudy } from "@/types/caseStudies";

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Apollonia Dental Practice",
    problem:
      "Managing employee information and administrative workflows required a centralized application.",
    solution:
      "Built a TypeScript-based employee management system with a structured backend and database layer.",
    technologies: ["Node.js", "TypeScript", "MongoDB", "REST API"],
  },
  {
    title: "AI Talent Scouting",
    problem:
      "Recruitment workflows can involve repetitive candidate discovery and initial engagement tasks.",
    solution:
      "Developed an AI-assisted system using FastAPI and locally hosted LLMs to explore automated talent workflows.",
    technologies: ["Python", "FastAPI", "Ollama", "LLM"],
  },
  {
    title: "Cloud & CI/CD Automation",
    problem:
      "Manual deployment processes increase operational overhead and introduce inconsistency.",
    solution:
      "Designed automated build, containerization and deployment workflows using modern CI/CD and infrastructure tooling.",
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Terraform"],
  },
];
