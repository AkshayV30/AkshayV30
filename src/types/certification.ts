import { LucideIcon } from "lucide-react";

export type CertificationName =
  | "Google Cybersecurity"
  | "IBM DevOps"
  | "AWS Fundamentals";

export type CredentialUrl = `https://credly.com{string}` | `https://${string}`;
export type ProfileUrl = `https://${string}`;

export type CertificationCategory = "professional" | "skill-badge" | "course";

export type CourseCertificate = {
  id: string;
  name: string;
  issuer: string;
  completed: string;
  grade?: string;
  verificationUrl: string;
  parentCredentialId: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  category: CertificationCategory;
  completed?: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
  verificationUrl?: string;

  featured?: boolean;
};

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

export type Certification = (typeof CERTIFICATIONS)[number];
export type CourseCertificate = (typeof COURSE_CERTIFICATES)[number];

export interface CertificationCardProps {
  cert: Certification;
  courses: CourseCertificate[];
  isCoursesOpen: boolean;
  reverse?: boolean;
  onToggleCourses: () => void;
}
