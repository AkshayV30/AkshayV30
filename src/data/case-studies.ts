import type { CaseStudy } from "@/types/caseStudies";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ai-talent-scouting",
    title: "AI Talent Scouting & Engagement Agent",
    category: "AI / Backend Engineering",

    problem:
      "Recruitment workflows involve repetitive job-description analysis, candidate filtering, skill matching, ranking, and initial engagement.",

    approach: [
      "Built a modular AI-assisted recruitment pipeline with FastAPI, local LLMs, candidate matching, scoring, ranking, and explainable shortlist generation.",
    ],
    outcome:
      "Demonstrates practical LLM orchestration, backend architecture, structured scoring, and explainable AI through an end-to-end recruitment workflow.",

    technologies: [
      "Python",
      "FastAPI",
      "Ollama",
      "LLMs",
      "AI Agents",
      "REST API",
    ],

    github: "https://github.com/AkshayV30/catalyst-challenge",
  },

  {
    id: "apollonia",
    title: "Apollonia Dental Practice",
    category: "Full-Stack Engineering",

    problem:
      "Manual employee and department tracking makes staff administration difficult to organize and extend.",

    approach: [
      "Developed a full-stack management platform with authentication, role-based access, employee records, departments, staff assignments, and patient records.",
    ],
    outcome:
      "Established a typed, database-backed foundation for a future clinic management and E-CRM platform.",

    technologies: [
      "Angular",
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Docker",
    ],

    github: "https://github.com/AkshayV30/Apollonia_Dental_Employee_Management",
  },

  {
    id: "devops-capstone",
    title: "IBM DevOps Capstone",
    category: "DevOps / Cloud",

    problem:
      "Reliable software delivery requires automated testing, containerization, deployment, and infrastructure workflows instead of manual releases.",

    approach: [
      "Implemented a cloud-native microservice workflow using GitHub Actions, Docker, Kubernetes, OpenShift, Tekton, Terraform, and test-driven development.",
    ],

    outcome:
      "Demonstrates an end-to-end DevOps workflow covering CI/CD, container orchestration, infrastructure automation, testing, and cloud-native deployment.",

    technologies: [
      "Kubernetes",
      "OpenShift",
      "Tekton",
      "GitHub Actions",
      "Docker",
      "Terraform",
      "Python",
      "TDD",
    ],

    github: "https://github.com/AkshayV30/devops-capstone-project",
  },

  {
    id: "vision-defect-check",
    title: "Vision Defect Check",
    category: "AI / Computer Vision",

    problem:
      "Manual inspection of manufactured components can be inconsistent and difficult to scale across inspection workflows.",

    approach: [
      "Developed an AI-assisted inspection prototype integrating image analysis with Google Vertex AI and a Node.js REST API, with an Angular interface for inspection requests and results.",
    ],
    outcome:
      "Demonstrates how cloud AI inference can be integrated into a practical manufacturing quality-control workflow.",

    technologies: [
      "Google Vertex AI",
      "Angular",
      "Node.js",
      "Express",
      "Python",
      "AI",
    ],

    github: "https://github.com/AkshayV30/VisionDefectCheck",
  },

  {
    id: "aws-node-deployment",
    title: "AWS Node.js Service on ECS Fargate",
    category: "Cloud / DevOps",

    problem:
      "While simple application setups are trivial to spin up locally, translating microservices into highly available, secure, and production-ready cloud applications demands deterministic environment configurations. A professional cloud deployment architecture must address the missing gaps of manual local setups: repeatable infrastructure blueprints, runtime health visibility, hardened container isolation, and cryptographically sound release deployment hooks.",

    approach: [
      "Application Hardening: Scaled an Express 5 codebase with robust lifecycle mechanisms. Implemented deterministic network routing via distinct liveness/readiness indicators, isolated service metadata reporting channels, and automatic request tracing strings. Integrated structural log objects, data parsing constraints, and graceful OS close handling.",
      "Container Security: Wrapped the service runtime into an optimized Docker layer utilizing strict user-privilege boundaries (non-root isolation profiles).",
      "CI/CD Engineering: Designed a continuous deployment loop utilizing GitHub Actions. Configured pull request status verification workflows before trigger merges target the trunk repository. Implemented temporary, short-lived AWS IAM sessions via OpenID Connect (OIDC tokens), replacing brittle hardcoded API credentials. The automated runner orchestrates compilation, delivers uniquely tracked images straight into Amazon ECR, updates target ECS definitions, and holds execution pools until the cloud service stabilizes.",
      "Infrastructure-as-Code: Assembled highly modular Terraform profiles declaring strict network topologies, cluster runtime frameworks, traffic balancers, and asset storage backends.",
    ],
    outcome:
      "Delivered an end-to-end cloud reference framework modeling modern web server standards. The final footprint stands as a stateless architectural pattern emphasizing decoupled persistence setups, immutable build pipelines, and strict separation between codebase evolution and infrastructure lifecycles.",
    technologies: [
      "Node.js",
      "Express.js",
      "Docker",
      "AWS ECS Fargate",
      "Amazon ECR",
      "Application Load Balancer",
      "VPC",
      "Terraform",
      "GitHub Actions",
    ],

    github: "https://github.com/AkshayV30/NodeJS_App_Delpoy_on_AWS",
  },

  {
    id: "frontend-mentor",
    title: "Frontend Mentor Challenge Portfolio",
    category: "Frontend Engineering",

    problem:
      "Building strong frontend interfaces requires repeated practice with responsive layouts, accessibility, interaction, and translating designs into working interfaces.",

    approach: [
      "Completed a broad collection of frontend challenges covering responsive components, interactive applications, API integration, and design-to-code implementation.",
    ],
    outcome:
      "Demonstrates hands-on frontend fundamentals across HTML, CSS, JavaScript, responsive design, accessibility, and API-driven interfaces.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "REST APIs",
    ],

    github: "https://github.com/AkshayV30/Front-End-Mentor-Challenges",
  },
];
