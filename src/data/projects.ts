import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    title: "CI/CD Pipeline",
    description:
      "Automated application build and deployment pipeline using GitHub Actions and Docker.",
    technologies: ["GitHub Actions", "Docker", "CI/CD"],
    github: "https://github.com/AkshayV30",
    featured: true,
  },
  {
    title: "Full Stack Application",
    description:
      "Scalable full-stack application with a TypeScript backend, PostgreSQL database and modern React frontend.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/AkshayV30",
    featured: true,
  },
  {
    title: "FFT Audio Visualizer",
    description:
      "Arduino-based audio analysis project using Fast Fourier Transform concepts for real-time signal visualization.",
    technologies: ["Arduino", "C++", "DSP", "FFT"],
    github: "https://github.com/AkshayV30",
  },
  {
    title: "Apollonia Dental Practice",
    description:
      "Employee management system designed for managing staff information and administrative workflows.",
    technologies: ["Node.js", "TypeScript", "MongoDB", "REST API"],
    github: "https://github.com/AkshayV30",
    featured: true,
  },
  {
    title: "AI Talent Scouting Agent",
    description:
      "AI-assisted talent discovery and engagement system using FastAPI and locally hosted language models.",
    technologies: ["Python", "FastAPI", "Ollama", "AI", "LLM"],
    github: "https://github.com/AkshayV30",
  },
];
