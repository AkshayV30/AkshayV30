export interface Experience {
  role: string;
  company: string;

  /* ISO month format: YYYY-MM */
  startMonth: string;
  endMonth?: string;

  description: string;
  technologies?: string[];
}
