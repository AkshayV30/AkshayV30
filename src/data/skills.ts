import type { SkillGroup } from "@/types/skill";

export const SKILL_GROUPS = [
  {
    category: "DevOps",
    description:
      "Automation, containers, infrastructure, and delivery pipelines.",
    skills: [
      { name: "Docker", logo: "docker" },
      { name: "Kubernetes", logo: "kubernetes" },
      { name: "Terraform", logo: "terraform" },
      { name: "Ansible", logo: "ansible" },
      { name: "GitHub Actions", logo: "githubActions" },
      { name: "Jenkins", logo: "jenkins" },
      { name: "Tekton", logo: "tekton" },
      { name: "OpenShift", logo: "openshift" },
      { name: "Apache Maven", logo: "apacheMaven" },
      { name: "Grafana", logo: "grafana" },
      { name: "Prometheus", logo: "prometheus" },
    ],
  },

  {
    category: "Cloud",
    description: "Cloud infrastructure, services, identity, and networking.",
    skills: [
      { name: "AWS", logo: "awsCloud" },
      { name: "Google Cloud", logo: "googleCloud" },
      { name: "IBM Cloud", logo: "ibmCloud" },
      { name: "IAM" },
      { name: "Cloud Networking" },
      { name: "EC2" },
      { name: "RDS" },
      { name: "S3" },
      { name: "Auto Scaling" },
    ],
  },

  {
    category: "Backend",
    description:
      "API development, server-side applications, and backend services.",
    skills: [
      { name: "Node.js", logo: "nodejs" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Python", logo: "python" },
      { name: "FastAPI", logo: "fastapi" },
      { name: "JWT", logo: "jwt" },
      { name: "Prisma", logo: "prisma" },
      { name: "Express.js" },
      { name: "REST APIs" },
    ],
  },

  {
    category: "Frontend",
    description:
      "Modern web interfaces and responsive application development.",
    skills: [
      { name: "HTML5", logo: "html5" },
      { name: "CSS3", logo: "css3" },
      { name: "JavaScript", logo: "javascript" },
      { name: "SCSS", logo: "sass" },
      { name: "Tailwind CSS", logo: "tailwind" },
      { name: "TypeScript", logo: "typescript" },
      { name: "React", logo: "react" },
      { name: "Next.js", logo: "nextjs" },
      { name: "Angular", logo: "angular" },
    ],
  },

  {
    category: "Databases",
    description: "Relational, document, and in-memory data systems.",
    skills: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "MySQL", logo: "mysql" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Redis", logo: "redis" },
    ],
  },

  {
    category: "AI & Security",
    description:
      "AI integration, automation, and security-oriented engineering.",
    skills: [
      { name: "Ollama" },
      { name: "LLM Integration" },
      { name: "AI Agents" },
      { name: "Google Vertex AI", logo: "googleCloud" },
      { name: "Cybersecurity" },
      { name: "SIEM" },
      { name: "IAM" },
    ],
  },

  {
    category: "Languages",
    description:
      "Programming languages and scripting technologies used across application development.",
    skills: [
      { name: "Python", logo: "python" },
      { name: "TypeScript", logo: "typescript" },
      { name: "JavaScript", logo: "javascript" },
      { name: "C++", logo: "cplusplus" },
      { name: "Bash", logo: "bash" },
    ],
  },

  {
    category: "Systems & Servers",
    description:
      "Operating systems, server software, and application infrastructure.",
    skills: [
      { name: "Linux", logo: "linux" },
      { name: "Ubuntu", logo: "ubuntu" },
      { name: "Fedora", logo: "fedora" },
      { name: "NGINX", logo: "nginx" },
      { name: "Apache Tomcat", logo: "apacheTomcat" },
    ],
  },
] satisfies readonly SkillGroup[];
