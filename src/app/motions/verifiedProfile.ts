import type { TargetAndTransition, Variants } from "framer-motion";

export const verifiedProfileSpring = [0.22, 1, 0.36, 1] as const;

export const verifiedProfilesContainerVariants: Variants = {
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

export const verifiedProfileCardVariants: Variants = {
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
      duration: 0.5,
      ease: verifiedProfileSpring,
    },
  },
};

export const verifiedProfileCardHover: TargetAndTransition = {
  y: -5,

  transition: {
    type: "spring",
    stiffness: 320,
    damping: 24,
    mass: 0.7,
  },
};

export const verifiedProfileIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.78,
    rotate: -8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 0.42,
      ease: verifiedProfileSpring,
    },
  },
};

export const verifiedProfileBadgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.3,
      delay: 0.12,
      ease: verifiedProfileSpring,
    },
  },
};
