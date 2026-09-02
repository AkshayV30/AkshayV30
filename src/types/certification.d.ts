import type { LucideIcon } from "lucide-react";

export type CertificationCategory =
  | "professional"
  | "skill-badge"
  | "course";

export type ProfileUrl = `https://${string}`;

export interface CourseCertificate {
  id: string;
  name: string;
  issuer: string;
  completed: string;
  grade?: string;
  verificationUrl: ProfileUrl;
  parentCredentialId: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: CertificationCategory;
  completed?: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
  verificationUrl?: ProfileUrl;
  featured?: boolean;
}

export interface LearningMilestone {
  name: string;
  provider: string;
  description: string;
  metric?: string | number;
  metricLabel?: string;
  icon: LucideIcon;
  profileUrl: ProfileUrl;
}

export interface StatItem {
  label: string;
  value: string | number;
}

export interface CodingProfile {
  platform: "HackerRank" | "LeetCode";
  username: string;
  description: string;
  stats: readonly StatItem[];
  icon: LucideIcon;
  profileUrl: ProfileUrl;
}