"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/ui/section";

import { PROJECTS } from "@/data/projects";

import {
  projectContainerVariants,
  sectionHeaderVariants,
  sectionVariants,
} from "@/app/motions";

import { ProjectCard } from "./projects-card";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

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
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-primary">
            Engineering Work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Selected projects demonstrating hands-on experience across
            cloud-native development, DevOps automation, AI integration, and
            modern web engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}

        <motion.div
          variants={projectContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
