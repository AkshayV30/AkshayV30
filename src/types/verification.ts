import type { LucideIcon } from "lucide-react";

export interface VerificationProfile {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  url: string;
  icon: LucideIcon;
  stats?: readonly string[];
  highlights?: readonly string[];
}

export type GcpSkillBadge = {
  id: string;
  name: string;
  issuer: "Google Cloud";
  category: "skill-badge";
  completed: string;
  description: string;
  skills: readonly string[];
  verificationUrl: string;
};
