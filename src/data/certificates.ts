import type { Certification } from "@/types/certification";
import { Cloud, ShieldCheck, TerminalSquare } from "lucide-react";

export const CERTIFICATIONS: Certification[] = [
  {
    id: "google-cybersecurity",
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    category: "professional",
    completed: "September 2023",
    description:
      "Professional cybersecurity program covering security foundations, network security, Linux, SQL, Python automation, vulnerability management, threat detection, SIEM concepts, and incident response.",
    skills: [
      "Cybersecurity",
      "Threat Detection",
      "Network Security",
      "Linux",
      "SQL",
      "Python",
      "SIEM",
      "Vulnerability Management",
    ],
    icon: ShieldCheck,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/C7MJ7NNTXMPR",
    featured: true,
  },

  {
    id: "ibm-devops",
    name: "IBM DevOps and Software Engineering",
    issuer: "IBM / Coursera",
    category: "professional",
    completed: "May 2023",
    description:
      "DevOps-focused learning covering CI/CD, containers, Kubernetes, OpenShift, application security, test-driven development, Agile, and a hands-on DevOps capstone.",
    skills: [
      "DevOps",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "TDD",
      "Application Security",
      "Agile",
    ],
    icon: TerminalSquare,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/LF66EPAQ25KG",
    featured: true,
  },

  {
    id: "devops-engineer",
    name: "DevOps Engineer",
    issuer: "Edureka",
    category: "professional",
    completed: "August 2020",
    description:
      "DevOps training covering cloud infrastructure, deployment automation, and foundational DevOps practices.",
    skills: ["DevOps", "AWS", "Cloud Computing", "Infrastructure"],
    icon: Cloud,
    verificationUrl:
      "https://www.edureka.co/my-certificate/d4443e70d4551ec3a2163fd8b518b585",
    featured: true,
  },
];
