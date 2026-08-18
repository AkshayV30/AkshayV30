import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/challenges.json";

type ChallengeManifest = {
  competitiveProgramming: {
    codeChef: BrandLogo;
    hackerRank: BrandLogo;
    leetCode: BrandLogo;
  };
  frontendChallenges: {
    cssBattle: BrandLogo;
    frontendMentor: BrandLogo;
  };
};

const challenges = manifest as ChallengeManifest;

export const CHALLENGE_LOGO_MAP = {
  codeChef: challenges.competitiveProgramming.codeChef,
  hackerRank: challenges.competitiveProgramming.hackerRank,
  leetCode: challenges.competitiveProgramming.leetCode,
  cssBattle: challenges.frontendChallenges.cssBattle,
  frontendMentor: challenges.frontendChallenges.frontendMentor,
} satisfies Record<string, BrandLogo>;
