import type { TargetAndTransition, Variants } from "framer-motion";

export const projectContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

export const projectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export const projectCardHover: TargetAndTransition = {
  y: -5,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const getSlideVariants = (
  shouldReduceMotion: boolean | null,
): Variants => ({
  collapsed: {
    height: 0,
    opacity: 0,
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          height: { duration: 0.3, ease: "easeOut" },
          opacity: { duration: 0.2, delay: 0.05 },
        },
  },
});
