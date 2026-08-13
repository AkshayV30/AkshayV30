import type { TargetAndTransition, Variants } from "framer-motion";

const springEase = [0.22, 1, 0.36, 1] as const;

export const certificateContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

export const certificateCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: springEase,
    },
  },
};

export const certificateCardHover: TargetAndTransition = {
  y: -5,

  transition: {
    duration: 0.25,
    ease: springEase,
  },
};

export const certificateIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.4,
      ease: springEase,
    },
  },
};

/**
 * Coursework popup / floating panel.
 */
export const certificatePopoverVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.22,
      ease: springEase,
    },
  },

  exit: {
    opacity: 0,
    y: 6,
    scale: 0.98,

    transition: {
      duration: 0.16,
      ease: "easeIn",
    },
  },
};

export const certificateCourseItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};
