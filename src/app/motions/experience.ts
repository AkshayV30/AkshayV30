import type { TargetAndTransition, Variants } from "framer-motion";

export const experienceContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

export const experienceTimelineVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },

  visible: {
    opacity: 1,
    scaleY: 1,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const experienceCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export const experienceIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -10,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export const experienceCardHover: TargetAndTransition = {
  y: -4,

  transition: {
    duration: 0.22,
    ease: "easeOut",
  },
};
