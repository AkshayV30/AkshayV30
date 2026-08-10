import type { SkillGroup } from "@/types/skill";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "DevOps",
    description: "Automation, containers and deployment infrastructure.",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Terraform", icon: "🌍" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "Jenkins", icon: "🔧" },
      { name: "Ansible", icon: "◆" },
    ],
  },
  {
    category: "Cloud",
    description: "Cloud infrastructure and cloud-native development.",
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "GCP", icon: "🌐" },
      { name: "IAM", icon: "🔐" },
      { name: "Cloud Networking", icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    description: "API development and server-side application engineering.",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "TypeScript", icon: "TS" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    category: "Frontend",
    description: "Modern web application development.",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "N" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML", icon: "◇" },
      { name: "CSS", icon: "#" },
    ],
  },
  {
    category: "AI & Security",
    description: "AI integration and security-oriented tooling.",
    skills: [
      { name: "Ollama", icon: "◉" },
      { name: "LLM Integration", icon: "AI" },
      { name: "SIEM", icon: "🛡️" },
      { name: "IAM", icon: "🔐" },
      { name: "Cybersecurity", icon: "🔒" },
    ],
  },
];
