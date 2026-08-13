import type { TargetAndTransition, Variants } from "framer-motion";

export const certificateSpring = [0.22, 1, 0.36, 1] as const;

export const certificateContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

export const certificateCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: certificateSpring,
    },
  },
};

export const certificateCardHover: TargetAndTransition = {
  y: -5,

  transition: {
    type: "spring",
    stiffness: 320,
    damping: 24,
    mass: 0.7,
  },
};

export const certificateIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    rotate: -8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 0.45,
      ease: certificateSpring,
    },
  },
};

export const certificatePopoverVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -18,
    scale: 0.96,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.32,
      ease: certificateSpring,
    },
  },

  exit: {
    opacity: 0,
    y: -12,
    scale: 0.97,
    filter: "blur(6px)",

    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export const certificateCourseItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: (index = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.28,
      delay: index * 0.045,
      ease: "easeOut",
    },
  }),
};
