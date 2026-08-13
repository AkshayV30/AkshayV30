import type { TargetAndTransition, Variants } from "framer-motion";

export const skillContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
};

export const skillCardVariants: Variants = {
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

export const skillCardHover: TargetAndTransition = {
  y: -4,

  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const skillContentVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: -6,
  },

  visible: {
    opacity: 1,
    height: "auto",
    y: 0,

    transition: {
      height: {
        duration: 0.3,
        ease: "easeOut",
      },

      opacity: {
        duration: 0.2,
        delay: 0.05,
      },

      y: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },

  exit: {
    opacity: 0,
    height: 0,
    y: -6,

    transition: {
      height: {
        duration: 0.25,
        ease: "easeIn",
      },

      opacity: {
        duration: 0.15,
      },

      y: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  },
};

export const skillBadgeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
};
