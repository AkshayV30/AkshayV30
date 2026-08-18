import { BrandLogo } from "./logo";

export interface VerificationProfile {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  url: `https://${string}`;
  icon: BrandLogo;
  highlights: readonly string[];
}
