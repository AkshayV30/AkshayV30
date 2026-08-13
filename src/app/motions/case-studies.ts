import type { TargetAndTransition, Variants } from "framer-motion";

export const caseStudyListVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const caseStudyCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const caseStudyCardHover: TargetAndTransition = {
  y: -4,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const caseStudyArrowVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
  },

  hover: {
    x: 2,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};
