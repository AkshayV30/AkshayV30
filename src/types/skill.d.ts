import { LogoKey } from "./logo";

export interface Skill {
  name: string;
  logo?: LogoKey;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: readonly Skill[];
}
