"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  sectionContentVariants,
  sectionHeaderVariants,
  sectionVariants,
} from "@/app/configs/motion.config";

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  const hasHeader = Boolean(title || description);

  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className={cn("w-full scroll-mt-24 px-6 py-20 md:py-28", className)}
    >
      <div className="mx-auto w-full max-w-7xl">
        {hasHeader && (
          <motion.div
            variants={sectionHeaderVariants}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            {title && (
              <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 leading-7 text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <motion.div variants={sectionContentVariants}>{children}</motion.div>
      </div>
    </motion.section>
  );
}

export default Section;
