"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { Section } from "@/components/ui/section";
import { PROJECTS } from "@/data/projects";
import {
  projectContainerVariants,
  sectionHeaderVariants,
  sectionVariants,
} from "@/app/motions";

import { ProjectCard } from "./projects-card";
import type { FilterTab, ProjectCategory } from "@/types/project";

const PROFILE_GROUPS: Record<
  Exclude<FilterTab, "Featured" | "All Projects">,
  ProjectCategory[]
> = {
  "Cloud & DevOps": ["Cloud & DevOps", "DevOps & Platform"],
  "AI & MLOps": ["AI Engineering", "AI & Manufacturing", "AI & Simulation"],
  "Web Development": [
    "Full-Stack & DevOps",
    "Full-Stack Development",
    "Frontend Engineering",
  ],
  "Embedded Systems": ["Embedded Systems"],
};

const FILTER_TABS: FilterTab[] = [
  "Featured",
  "Cloud & DevOps",
  "AI & MLOps",
  "Web Development",
  "Embedded Systems",
  "All Projects",
];

function getProjectsByTab(tab: FilterTab) {
  if (tab === "All Projects") return PROJECTS;
  if (tab === "Featured") {
    return PROJECTS.filter((project) => project.featured);
  }
  return PROJECTS.filter((project) =>
    PROFILE_GROUPS[tab].includes(project.category),
  );
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  // Guarantees a non-empty tab is always active on initial load
  const [activeTab, setActiveTab] = useState<FilterTab>(() => {
    const firstAvailableTab = FILTER_TABS.find(
      (tab) => getProjectsByTab(tab).length > 0,
    );
    return firstAvailableTab ?? "All Projects";
  });

  const filteredProjects = getProjectsByTab(activeTab);

  return (
    <Section id="projects">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Engineering Work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
        </motion.div>

        {/* Role-Based Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by engineering profile"
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
          {FILTER_TABS.map((tab) => {
            const count = getProjectsByTab(tab).length;
            if (count === 0) return null;

            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab)}
                className={[
                  "group inline-flex select-none items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  isActive
                    ? "cursor-default border-primary bg-primary text-primary-foreground shadow-sm"
                    : "cursor-pointer border-border/70 bg-card/60 text-muted-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:text-foreground hover:shadow-sm active:translate-y-0",
                ].join(" ")}
              >
                <span>{tab}</span>
                <span
                  className={[
                    "rounded-full px-1.5 py-0.5 text-[10px] font-bold transition-colors duration-200",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary",
                  ].join(" ")}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filtered Projects Grid */}
        <motion.div
          key={activeTab}
          variants={projectContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Section>
  );
}
