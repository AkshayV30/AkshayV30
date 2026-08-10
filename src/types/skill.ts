export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  description?: string;
  skills: Skill[];
}
