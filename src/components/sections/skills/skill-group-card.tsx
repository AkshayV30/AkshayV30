"use client";

import { useId } from "react";
import { ChevronDown, Layers3 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

import {
  skillBadgeVariants,
  skillCardHover,
  skillCardVariants,
  skillContentVariants,
} from "@/app/motions";

import type { SkillGroup } from "@/types/skill";

import { SkillBadge } from "./skill-badge";

interface SkillGroupCardProps {
  group: SkillGroup;
  isOpen: boolean;
  onToggle: () => void;
}

export function SkillGroupCard({
  group,
  isOpen,
  onToggle,
}: SkillGroupCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const id = useId();

  const categoryId = `${id}-category`;
  const contentId = `${id}-content`;

  const cardClassName = [
    "group flex h-full flex-col overflow-hidden",
    "rounded-2xl border-border/60 bg-card shadow-sm",
    "transition-[border-color,box-shadow,background-color] duration-300",
    isOpen
      ? "border-primary/25 shadow-md"
      : "hover:border-primary/20 hover:shadow-md",
  ].join(" ");

  return (
    <motion.div
      variants={skillCardVariants}
      whileHover={shouldReduceMotion ? undefined : skillCardHover}
      className="h-full"
    >
      <Card className={cardClassName}>
        <button
          id={categoryId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className={[
            "flex w-full items-center gap-4 p-5 text-left",
            "transition-colors duration-200",
            "focus-visible:outline-none",
            "focus-visible:ring-2 focus-visible:ring-primary/40",
            "focus-visible:ring-inset",
          ].join(" ")}
        >
          <span
            className={[
              "flex  h-11 w-11 shrink-0 items-center justify-center",
              "rounded-xl border",
              "transition-all duration-300",
              isOpen
                ? "border-primary/25 bg-primary/10 text-primary"
                : "border-border/60 bg-muted/50 text-muted-foreground",
              !isOpen
                ? "group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary"
                : "",
            ].join(" ")}
          >
            <Layers3 className="h-5 w-5" aria-hidden="true" />
          </span>

          <span className="min-w-0 flex-1 cursor-pointer">
            <span className="block text-base font-semibold tracking-tight">
              {group.category}
            </span>

            <span className="mt-1 block text-sm leading-6 text-muted-foreground">
              {group.description}
            </span>
          </span>

          <motion.span
            animate={
              shouldReduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
            aria-hidden="true"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={contentId}
              role="region"
              aria-labelledby={categoryId}
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
                      {group.skills.length}{" "}
                      {group.skills.length === 1 ? "skill" : "skills"}
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
                        <SkillBadge skill={skill} />
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
}
