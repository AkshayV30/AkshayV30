"use client";

import { useId, useState } from "react";
import { ChevronDown, Layers3 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SKILL_GROUPS } from "@/data/skills";

import {
  skillBadgeVariants,
  skillCardHover,
  skillCardVariants,
  skillContainerVariants,
  skillContentVariants,
} from "@/app/motions";

export function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    SKILL_GROUPS[0]?.category ?? null,
  );

  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <Section
      id="skills"
      title="Skills"
      description="Technologies and tools I use to build, automate, deploy, and operate modern software systems."
    >
      <motion.div
        variants={skillContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_GROUPS.map((group) => {
          const isOpen = openCategory === group.category;

          const categoryId = `${baseId}-${group.category
            .toLowerCase()
            .replace(/\s+/g, "-")}`;

          const contentId = `${categoryId}-content`;

          return (
            <motion.div
              key={group.category}
              variants={skillCardVariants}
              whileHover={shouldReduceMotion ? undefined : skillCardHover}
              className="h-full"
            >
              <Card
                className={[
                  "group flex h-full flex-col overflow-hidden",
                  "rounded-2xl",
                  "border-border/60 bg-card",
                  "shadow-sm",
                  "transition-[border-color,box-shadow,background-color]",
                  "duration-300",
                  isOpen
                    ? "border-primary/25 shadow-md"
                    : "hover:border-primary/20 hover:shadow-md",
                ].join(" ")}
              >
                {/* -------------------------------------------------------- */}
                {/* Category Header                                          */}
                {/* -------------------------------------------------------- */}

                <button
                  type="button"
                  onClick={() =>
                    setOpenCategory(isOpen ? null : group.category)
                  }
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className={[
                    "flex w-full items-center gap-4",
                    "p-5 text-left",
                    "transition-colors duration-200",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-primary/40",
                    "focus-visible:ring-inset",
                  ].join(" ")}
                >
                  {/* Category Icon */}
                  <span
                    className={[
                      "flex h-11 w-11 shrink-0 items-center justify-center",
                      "rounded-xl",
                      "border border-border/60",
                      "bg-muted/50",
                      "text-muted-foreground",
                      "transition-all duration-300",
                      isOpen
                        ? "border-primary/25 bg-primary/10 text-primary"
                        : "group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary",
                    ].join(" ")}
                  >
                    <Layers3 className="h-5 w-5" aria-hidden="true" />
                  </span>

                  {/* Category Information */}
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold tracking-tight text-foreground">
                      {group.category}
                    </span>

                    {group.description && (
                      <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                        {group.description}
                      </span>
                    )}
                  </span>

                  {/* Expand Icon */}
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { rotate: isOpen ? 180 : 0 }
                    }
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="shrink-0 cursor-pointer text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>

                {/* -------------------------------------------------------- */}
                {/* Skills                                                   */}
                {/* -------------------------------------------------------- */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      key="content"
                      variants={skillContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <CardContent className="px-5 pb-5 pt-0">
                        <div className="border-t border-border/60 pt-4">
                          <div className="mb-3 flex items-center justify-between">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                              Technologies
                            </p>

                            <span className="text-[10px] font-medium text-muted-foreground/70">
                              {group.skills.length} skills
                            </span>
                          </div>

                          <motion.div
                            variants={skillBadgeVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-2"
                          >
                            {group.skills.map((skill) => (
                              <motion.div
                                key={skill.name}
                                variants={skillBadgeVariants}
                                whileHover={
                                  shouldReduceMotion
                                    ? undefined
                                    : {
                                        y: -2,
                                        scale: 1.02,
                                      }
                                }
                                transition={{
                                  duration: 0.18,
                                  ease: "easeOut",
                                }}
                              >
                                <Badge
                                  variant="secondary"
                                  className={[
                                    "inline-flex items-center gap-2",
                                    "rounded-lg",
                                    "border border-border/60",
                                    "bg-muted/40",
                                    "px-3 py-1.5",
                                    "text-xs font-medium",
                                    "text-muted-foreground",
                                    "shadow-none",
                                    "transition-all duration-200",
                                    "hover:border-primary/30",
                                    "hover:bg-primary/10",
                                    "hover:text-foreground",
                                  ].join(" ")}
                                >
                                  <span
                                    className="text-sm leading-none"
                                    aria-hidden="true"
                                  >
                                    {skill.icon}
                                  </span>

                                  <span>{skill.name}</span>
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

export default Skills;
