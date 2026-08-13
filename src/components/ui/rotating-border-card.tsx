"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type RotatingBorderCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: React.ReactNode;
  active?: boolean;
  reverse?: boolean;
};

export function RotatingBorderCard({
  children,
  active = false,
  reverse = false,
  className,
  ...props
}: RotatingBorderCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      className={[
        "rotating-border-card",
        active && "rotating-border-card-active",
        reverse && "rotating-border-card-reverse",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -5,
              rotateX: 0.8,
              rotateY: reverse ? -0.8 : 0.8,
            }
      }
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div aria-hidden="true" className="rotating-border-card__glow" />

      <div className="rotating-border-card__content">{children}</div>
    </motion.div>
  );
}
