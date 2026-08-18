import { LOGOS } from "@/lib/logos";

export interface BrandLogo {
  light: string;
  dark: string;
  alt: string;
}

export type LogoKey = keyof typeof LOGOS;
