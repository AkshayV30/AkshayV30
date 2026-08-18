import { LOGOS } from "@/lib/logos";
import type { VerificationProfile } from "@/types/verification";

export const EXTERNAL_PROFILES = [
  {
    id: "credly",
    name: "Credly",
    eyebrow: "Digital credentials",
    description:
      "Public credential profile with independently verifiable certifications and badges across cloud, Kubernetes, DevOps, Terraform, Python, cybersecurity, AI, and software engineering.",
    url: "https://www.credly.com/users/akshay-kumar-minz/badges/credly",
    icon: LOGOS.credly,
    highlights: [
      "Verified digital credentials",
      "Cloud & DevOps",
      "Cybersecurity",
      "AI & software engineering",
    ],
  },

  {
    id: "google-cloud-skills",
    name: "Google Cloud Skills",
    eyebrow: "Cloud skill badges",
    description:
      "Public Google Cloud profile showcasing hands-on skill badges across cloud infrastructure, Terraform, AI agents, Gemini, and multimodal generative AI.",
    url: "https://www.skills.google/public_profiles/2ef583cc-4bfc-4668-ab95-d10bf23bee13",
    icon: LOGOS.googleCloud,
    highlights: [
      "6 skill badges",
      "Terraform on Google Cloud",
      "AI agent development",
      "Gemini & multimodal RAG",
    ],
  },

  {
    id: "aws-skill-builder",
    name: "AWS Skill Builder",
    eyebrow: "Cloud skill badges",
    description:
      "Public AWS Skill Builder profile showcasing AWS learning achievements and hands-on cloud skills developed through AWS training and practical learning activities.",
    url: "https://skillsprofile.skillbuilder.aws/user/minzAkshayV30/certification-badges",
    icon: LOGOS.awsCloud,
    highlights: [
      "AWS cloud learning",
      "Verified skill badges",
      "Cloud infrastructure",
      "AWS fundamentals",
    ],
  },

  {
    id: "hackerrank",
    name: "HackerRank",
    eyebrow: "Coding profile",
    description:
      "Public coding profile providing an independent view of programming practice, problem solving, and technical challenge activity.",
    url: "https://www.hackerrank.com/profile/akshayatwork_v30",
    icon: LOGOS.hackerRank,
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
      "Public coding profile showcasing algorithmic problem solving and continued practice with data structures and programming challenges.",
    url: "https://leetcode.com/u/Akshayv30/",
    icon: LOGOS.leetCode,
    highlights: ["Algorithm practice", "Data structures", "Problem solving"],
  },

  {
    id: "frontend-mentor",
    name: "Frontend Mentor",
    eyebrow: "Frontend challenges",
    description:
      "Public profile showcasing practical frontend implementation through UI challenges, responsive layouts, and modern web development.",
    url: "https://www.frontendmentor.io/profile/AkshayV30",
    icon: LOGOS.frontendMentor,
    highlights: [
      "Frontend implementation",
      "UI development",
      "Responsive interfaces",
    ],
  },

  {
    id: "css-battles",
    name: "CSS Battle",
    eyebrow: "CSS & visual implementation",
    description:
      "Public profile showcasing CSS problem solving through compact visual challenges that emphasize precision, layout, and efficient implementation.",
    url: "https://cssbattle.dev/player/Azk4NxcEAKaAJkhKtJoSL5GyoTs1",
    icon: LOGOS.cssBattle,
    highlights: [
      "CSS problem solving",
      "Pixel-precise layouts",
      "Visual implementation",
    ],
  },

  {
    id: "github",
    name: "GitHub",
    eyebrow: "Engineering work",
    description:
      "Public source-code profile providing direct evidence of projects, implementation work, automation, and software engineering activity.",
    url: "https://github.com/AkshayV30",
    icon: LOGOS.github,
    highlights: [
      "Source code",
      "Projects",
      "DevOps automation",
      "Engineering work",
    ],
  },
] satisfies readonly VerificationProfile[];
