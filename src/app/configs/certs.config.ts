import * as React from "react";
import { Cloud, Code2, ShieldCheck } from "lucide-react";
import type { CertificationName } from "@/types/certification";

export type Certification = {
  name: CertificationName;
  issuer: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
};

export const CERTS: readonly CertificationName[] = [
  "Google Cybersecurity",
  "IBM DevOps",
  "AWS Fundamentals",
] as const;

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Cybersecurity",
    issuer: "Google",
    description:
      "Professional training focused on cybersecurity fundamentals, security operations, threat detection, and incident response.",
    skills: [
      "Cybersecurity",
      "Security Operations",
      "Threat Detection",
      "Incident Response",
    ],
    icon: ShieldCheck,
  },
  {
    name: "IBM DevOps",
    issuer: "IBM",
    description:
      "Hands-on DevOps training covering CI/CD, containers, Kubernetes, automation, Agile practices, and cloud-native development.",
    skills: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Automation"],
    icon: Code2,
  },
  {
    name: "AWS Fundamentals",
    issuer: "Amazon Web Services",
    description:
      "Foundational cloud training covering AWS core services, cloud concepts, security, architecture, and infrastructure.",
    skills: ["AWS", "Cloud Computing", "IAM", "Infrastructure"],
    icon: Cloud,
  },
];

// Generates initial state automatically regardless of how long the CERTS tuple grows
export const INITIAL_LIKES = CERTS.reduce(
  (acc, cert) => {
    acc[cert] = false;
    return acc;
  },
  {} as Record<CertificationName, boolean>,
);
