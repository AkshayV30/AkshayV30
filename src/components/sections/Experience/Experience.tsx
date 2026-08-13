"use client";

import { BriefcaseBusiness } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/ui/section";

import { EXPERIENCE } from "@/data/experience";

import {
  experienceCardHover,
  experienceCardVariants,
  experienceContainerVariants,
  experienceIconVariants,
} from "@/app/motions";

import { ExperienceCard } from "./ExpCard";
import { sortExperiencesByRecent } from "./exp.utils";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const experiences = sortExperiencesByRecent(EXPERIENCE);

  return (
    <Section
      id="experience"
      title="Experience"
      description="Professional, independent, and hands-on engineering experience."
    >
      <motion.div
        variants={experienceContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="relative mx-auto w-full max-w-5xl"
      >
        {/* Central timeline */}
        <div
          aria-hidden="true"
          className={[
            "absolute bottom-6 left-1/2 top-6 hidden w-px",
            "-translate-x-1/2",
            "bg-gradient-to-b",
            "from-transparent via-border/80 to-transparent",
            "md:block",
          ].join(" ")}
        />

        <div className="space-y-10 md:space-y-14">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={`${item.role}-${item.company}-${item.startMonth}`}
                variants={experienceCardVariants}
                whileHover={
                  shouldReduceMotion ? undefined : experienceCardHover
                }
                className="relative"
              >
                {/* Desktop node */}
                <motion.div
                  variants={experienceIconVariants}
                  className={[
                    "absolute left-1/2 top-1/2 z-10 hidden",
                    "h-11 w-11 -translate-x-1/2 -translate-y-1/2",
                    "items-center justify-center",
                    "rounded-full",
                    "border border-primary/20",
                    "bg-background",
                    "shadow-sm",
                    "md:flex",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "flex h-8 w-8 items-center justify-center",
                      "rounded-full",
                      "bg-primary/10",
                      "text-primary",
                    ].join(" ")}
                  >
                    <BriefcaseBusiness
                      className="h-4 w-4"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>
                </motion.div>

                {/* Desktop */}
                <div
                  className={[
                    "hidden md:flex md:w-1/2",
                    isEven
                      ? "justify-end pr-14"
                      : "ml-auto justify-start pl-14",
                  ].join(" ")}
                >
                  <ExperienceCard
                    item={item}
                    align={isEven ? "right" : "left"}
                  />
                </div>

                {/* Mobile */}
                <div className="relative pl-12 md:hidden">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-[17px] top-0 w-px bg-border/70"
                  />

                  <div
                    aria-hidden="true"
                    className={[
                      "absolute left-0 top-6 z-10",
                      "flex h-9 w-9 items-center justify-center",
                      "rounded-full",
                      "border border-primary/20",
                      "bg-background",
                      "shadow-sm",
                    ].join(" ")}
                  >
                    <BriefcaseBusiness
                      className="h-4 w-4 text-primary"
                      strokeWidth={1.8}
                    />
                  </div>

                  <ExperienceCard item={item} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}

export default Experience;
