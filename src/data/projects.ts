import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    title: "AI Talent Scouting & Engagement Agent",
    category: "AI Engineering",
    icon: "ai",
    highlights: [
      "Parses job descriptions and extracts role requirements.",
      "Matches candidate skills and produces a ranked shortlist.",
      "Uses local LLM inference through Ollama.",
      "Exposes recruitment workflows through a FastAPI REST API.",
    ],
    description:
      "End-to-end AI recruitment platform that parses job descriptions, discovers candidates, matches skills, simulates engagement, and produces an explainable ranked shortlist.",
    technologies: [
      "Python",
      "FastAPI",
      "LLM",
      "Ollama",
      "AI Agents",
      "REST API",
    ],
    github: "https://github.com/AkshayV30/catalyst-challenge",
    liveLink: "",
  },

  {
    title: "Apollonia Dental Employee Management",
    category: "Full-Stack & DevOps",
    icon: "clinic",
    highlights: [
      "Implements employee, department, and staff assignment workflows.",
      "Uses role-based access and authentication.",
      "Combines Angular, TypeScript, Express.js, and MongoDB.",
      "Includes Docker, Terraform, and GitHub Actions in the project stack.",
    ],
    description:
      "Full-stack clinic management system for employee, department, staff assignment, and patient record workflows, with authentication and role-based access.",
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "Terraform",
      "GitHub Actions",
    ],
    github: "https://github.com/AkshayV30/Apollonia_Dental_Employee_Management",
    liveLink: "",
  },

  {
    title: "IBM DevOps Capstone",
    category: "DevOps & Platform",
    icon: "devops",
    highlights: [
      "Applies test-driven development to a Python microservice.",
      "Uses Docker and Kubernetes/OpenShift deployment tooling.",
      "Includes Tekton and GitHub Actions CI/CD tooling.",
      "Explores infrastructure automation with Terraform.",
    ],
    description:
      "Cloud-native Python microservice developed with TDD and automated through CI/CD, containerization, Kubernetes, OpenShift, Tekton, and infrastructure automation.",
    technologies: [
      "Python",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Tekton",
      "Terraform",
      "GitHub Actions",
      "TDD",
    ],
    github: "https://github.com/AkshayV30/devops-capstone-project",
    liveLink: "",
  },

  {
    title: "AWS Node.js Application Deployment",
    category: "Cloud Infrastructure",
    icon: "cloud",
    highlights: [
      "Uses AWS EC2, RDS, and S3 services.",
      "Defines infrastructure with Terraform.",
      "Uses Ansible for deployment automation.",
      "Combines Node.js application deployment with container tooling.",
    ],
    description:
      "Cloud deployment project using AWS compute, database, and object-storage services with Terraform and Ansible for infrastructure provisioning and deployment automation.",
    technologies: [
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "Terraform",
      "Ansible",
      "Docker",
      "Node.js",
    ],
    github: "https://github.com/AkshayV30/NodeJS_App_Delpoy_on_AWS",
    liveLink: "",
  },

  {
    title: "Vision Defect Check",
    category: "AI & Manufacturing",
    icon: "vision",
    highlights: [
      "Explores computer-vision-based manufacturing inspection.",
      "Integrates Google Vertex AI inference.",
      "Connects a Node.js REST API to an Angular interface.",
      "Bridges AI inference with a manufacturing quality-control use case.",
    ],
    description:
      "AI-powered manufacturing quality inspection prototype using computer vision inference through Google Vertex AI and a Node.js REST API with an Angular interface.",
    technologies: [
      "Google Vertex AI",
      "Python",
      "Node.js",
      "Express.js",
      "Angular",
      "AI",
      "REST API",
    ],
    github: "https://github.com/AkshayV30/VisionDefectCheck",
    liveLink: "",
  },
  {
    title: "ATmega8 WS2812 LED Animations Firmware",
    category: "Embedded Systems",
    icon: "embedded",
    highlights: [
      "Targets the ATmega8A with 8 KB flash and 1 KB SRAM.",
      "Uses a flash-resident sine lookup table and integer-based animation math.",
      "Animates 10 pixels and clears the remaining 53 pixels.",
      "Includes PlatformIO configuration, Cppcheck, and a custom HID upload workflow.",
    ],
    description:
      "Modular embedded C++ firmware for the Robosapiens RSI-05 ATmega8A board, generating a smooth, full-spectrum breathing animation across 10 WS2812 LEDs while explicitly clearing the remaining pixels in a 63-LED chain. Designed for constrained microcontroller resources using flash-resident sine lookup tables, integer-based animation, configurable output limits, and a PlatformIO build and HID upload workflow.",
    technologies: [
      "C++11",
      "ATmega8A",
      "Arduino Framework",
      "WS2812",
      "PlatformIO",
      "AVR PROGMEM",
      "Cppcheck",
      "BootloadHID",
    ],
    github: "https://github.com/AkshayV30/atmega8",
    liveLink: "",
  },

  {
    title: "Frontend Mentor Challenges",
    category: "Frontend Engineering",
    icon: "frontend",
    highlights: [
      "Builds responsive interfaces from design specifications.",
      "Practices semantic HTML and maintainable CSS layouts.",
      "Implements JavaScript interactions and accessibility considerations.",
      "Includes a deployed GitHub Pages collection.",
    ],
    description:
      "Collection of responsive frontend implementations based on real-world design challenges, focused on semantic HTML, CSS layout, JavaScript interactions, accessibility, and responsive UI.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Accessibility",
    ],
    github: "https://github.com/AkshayV30/Front-End-Mentor-Challenges",
    liveLink: "https://akshayv30.github.io/Front-End-Mentor-Challenges/",
  },

  {
    title: "To-Do Application",
    category: "Full-Stack Development",
    icon: "tasks",
    highlights: [
      "Implements create, read, update, and delete workflows.",
      "Uses PostgreSQL persistence and RESTful APIs.",
      "Includes authentication and role-based access control.",
      "Automates frontend deployment with GitHub Actions.",
    ],
    description:
      "Full-stack CRUD application with authentication, role-based access control, RESTful APIs, PostgreSQL persistence, and automated frontend deployment.",
    technologies: [
      "PostgreSQL",
      "Express.js",
      "React",
      "Node.js",
      "REST API",
      "GitHub Actions",
    ],
    github: "https://github.com/AkshayV30/to-do-app",
    liveLink: "https://akshayv30.github.io/to-do-app/",
  },
];
