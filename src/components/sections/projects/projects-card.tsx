import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

import { projectCardHover, projectCardVariants } from "@/app/motions";

import { ProjectStack } from "./projects-stack";
import { ProjectLinks } from "./projects-links";

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  shouldReduceMotion: boolean | null;
}

export function ProjectCard({ project, shouldReduceMotion }: ProjectCardProps) {
  return (
    <motion.article
      variants={projectCardVariants}
      whileHover={shouldReduceMotion ? undefined : projectCardHover}
      className="h-full"
    >
      <Card
        className={[
          "group flex h-full flex-col overflow-hidden",
          "rounded-2xl",
          "border-border/60 bg-card",
          "shadow-sm",
          "transition-[border-color,box-shadow] duration-300",
          "hover:border-primary/25 hover:shadow-lg",
          "dark:bg-card/80",
        ].join(" ")}
      >
        <CardContent className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>

          <ProjectStack technologies={project.technologies} />
        </CardContent>

        <ProjectLinks
          title={project.title}
          github={project.github}
          liveLink={project.liveLink}
        />
      </Card>
    </motion.article>
  );
}
