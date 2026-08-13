import type { TargetAndTransition, Variants } from "framer-motion";

export const buttonHover: {
  whileHover: TargetAndTransition;
  whileTap: TargetAndTransition;
} = {
  whileHover: {
    scale: 1.03,
  },

  whileTap: {
    scale: 0.97,
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const cardHover: TargetAndTransition = {
  y: -4,

  transition: {
    duration: 0.22,
    ease: "easeOut",
  },
};
