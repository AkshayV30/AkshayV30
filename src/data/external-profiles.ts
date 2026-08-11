import { Award, Cloud, Code2, GitBranch, TerminalSquare } from "lucide-react";

import type { VerificationProfile } from "@/types/verification";

export const EXTERNAL_PROFILES: VerificationProfile[] = [
  {
    id: "credly",
    name: "Credly",
    eyebrow: "Digital credentials",
    description:
      "Public credential profile containing independently verifiable badges and demonstrated skills across cloud, Kubernetes, DevOps, Terraform, Python, cybersecurity, AI, and software engineering.",
    url: "https://www.credly.com/users/akshay-kumar-minz/badges/credly",
    icon: Award,
    stats: [
      "Cloud Computing",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Python",
      "DevOps",
      "Cybersecurity",
      "AI Agents",
    ],
    highlights: [
      "Verified digital credentials",
      "Cloud & DevOps skills",
      "Cybersecurity",
      "AI & software engineering",
    ],
  },

  {
    id: "google-cloud-skills",
    name: "Google Cloud Skills",
    eyebrow: "Cloud skill badges",
    description:
      "Public Google Cloud Skills profile containing independently verifiable skill badges earned through hands-on Google Cloud learning activities.",
    url: "https://www.skills.google/profile/badges?credential_type=skill_badge",
    icon: Cloud,
    stats: [
      "AI Agents",
      "Terraform",
      "Gemini",
      "Multimodal RAG",
      "Cloud Infrastructure",
    ],
    highlights: [
      "6 selected skill badges",
      "Terraform on Google Cloud",
      "AI agent development",
      "Gemini & multimodal RAG",
    ],
  },

  {
    id: "hackerrank",
    name: "HackerRank",
    eyebrow: "Coding profile",
    description:
      "Public coding profile providing an independent view of programming practice and technical problem-solving activity.",
    url: "https://www.hackerrank.com/profile/akshayatwork_v30",
    icon: Code2,
    highlights: [
      "Programming practice",
      "Problem solving",
      "Technical challenges",
    ],
  },

  {
    id: "leetcode",
    name: "LeetCode",
    eyebrow: "Algorithmic problem solving",
    description:
      "Public profile showcasing algorithmic problem-solving practice and coding activity.",
    url: "https://leetcode.com/u/Akshayv30/",
    icon: Code2,
    highlights: ["Algorithm practice", "Data structures", "Problem solving"],
  },

  {
    id: "frontend-mentor",
    name: "Frontend Mentor",
    eyebrow: "Frontend challenges",
    description:
      "Public profile showcasing frontend implementation work through practical UI and web-development challenges.",
    url: "https://www.frontendmentor.io/profile/AkshayV30",
    icon: TerminalSquare,
    highlights: [
      "Frontend implementation",
      "UI development",
      "Responsive interfaces",
    ],
  },

  {
    id: "github",
    name: "GitHub",
    eyebrow: "Engineering work",
    description:
      "Public source-code profile providing direct evidence of projects, implementation work, automation, and software engineering activity.",
    url: "https://github.com/AkshayV30",
    icon: GitBranch,
    highlights: [
      "Source code",
      "Projects",
      "DevOps automation",
      "Engineering work",
    ],
  },
] as const;
