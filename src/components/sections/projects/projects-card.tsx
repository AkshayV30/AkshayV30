import { motion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Eye,
  ListTodo,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projectCardHover, projectCardVariants } from "@/app/motions";
import { ProjectStack } from "./projects-stack";
import { ProjectLinks } from "./projects-links";
import "./projects-style.css";

import type { Project, ProjectIcon } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  shouldReduceMotion: boolean | null;
}

const PROJECT_ICONS: Record<ProjectIcon, LucideIcon> = {
  ai: BrainCircuit,
  clinic: Building2,
  devops: Workflow,
  cloud: Cloud,
  vision: Eye,
  embedded: Cpu,
  frontend: Code2,
  tasks: ListTodo,
};

export function ProjectCard({ project, shouldReduceMotion }: ProjectCardProps) {
  const Icon = project.icon ? PROJECT_ICONS[project.icon] : Code2;

  return (
    <motion.article
      variants={projectCardVariants}
      whileHover={shouldReduceMotion ? undefined : projectCardHover}
      className="h-full"
    >
      <Card
        className={[
          "project-glow-card group relative isolate flex h-full flex-col",
          "overflow-hidden rounded-2xl border border-border/60 bg-card",
          "shadow-sm transition-[border-color,box-shadow] duration-300",
          "hover/40 hover",
          "dark/80",
        ].join(" ")}
      >
        {/* Animated perimeter glow */}
        {!shouldReduceMotion && (
          <div
            aria-hidden="true"
            className="project-glow-trail pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}

        {/* Inner surface keeps the content above the glow */}
        <div className="pointer-events-none absolute inset-px z-0 rounded-[calc(1rem-1px)] bg-card dark:bg-card/95" />

        <CardContent className="relative z-10 flex flex-1 flex-col p-6">
          {/* Icon and category */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
              <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
            </div>

            {project.category && (
              <Badge
                variant="outline"
                className="max-w-[65%] rounded-full border-border/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {project.category}
              </Badge>
            )}
          </div>

          {/* Project title */}
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>

          {/* Key highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-5">
              <div className="mb-3 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-4 w-1 rounded-full bg-primary"
                />
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                  Key Highlights
                </h4>
              </div>

              <ul className="space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-5 text-muted-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-primary/80"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology stack */}
          <div className="mt-auto pt-6">
            <ProjectStack technologies={project.technologies} />
          </div>
        </CardContent>

        {/* Existing GitHub and demo links */}
        <div className="relative z-10">
          <ProjectLinks
            title={project.title}
            github={project.github}
            liveLink={project.liveLink}
          />
        </div>
      </Card>
    </motion.article>
  );
}
