import type { Variants } from "framer-motion";

export const typewriterTextVariants: Variants = {
  initial: {
    opacity: 0,
    y: 3,
  },

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.16,
      ease: "easeOut",
    },
  },
};

export const typewriterCursorVariants: Variants = {
  visible: {
    opacity: 1,
  },

  blinking: {
    opacity: [1, 0.2, 1],

    transition: {
      duration: 0.9,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
