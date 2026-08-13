"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { PROJECTS } from "@/data/projects";

import { GithubIcon } from "@/lib/icons/SocialIcons";

import {
  projectCardHover,
  projectCardVariants,
  projectContainerVariants,
  sectionHeaderVariants,
  sectionVariants,
} from "@/app/motions";

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
        {/* ---------------------------------------------------------------- */}
        {/* Section Header                                                   */}
        {/* ---------------------------------------------------------------- */}

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

        {/* ---------------------------------------------------------------- */}
        {/* Projects Grid                                                    */}
        {/* ---------------------------------------------------------------- */}

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
            <motion.article
              key={project.title}
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
                {/* -------------------------------------------------------- */}
                {/* Project Content                                          */}
                {/* -------------------------------------------------------- */}

                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  {/* ------------------------------------------------------ */}
                  {/* Technology Stack                                       */}
                  {/* ------------------------------------------------------ */}

                  <div className="mt-auto pt-8">
                    <div className="border-t border-border/60 pt-4">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Technology Stack
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <Badge
                            key={technology}
                            variant="secondary"
                            className={[
                              "rounded-md",
                              "border border-border/60",
                              "bg-muted/40",
                              "px-2.5 py-1",
                              "text-xs font-medium",
                              "text-muted-foreground",
                              "transition-all duration-200",
                              "hover:border-primary/30",
                              "hover:bg-primary/10",
                              "hover:text-foreground",
                            ].join(" ")}
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* -------------------------------------------------------- */}
                {/* Project Actions                                           */}
                {/* -------------------------------------------------------- */}

                {(project.github || project.liveLink) && (
                  <CardFooter
                    className={[
                      "mt-auto flex min-h-[73px] items-center",
                      "justify-between gap-3",
                      "border-t border-border/60",
                      "bg-muted/20",
                      "px-6 py-4",
                    ].join(" ")}
                  >
                    {/* ---------------------------------------------------- */}
                    {/* GitHub                                                */}
                    {/* ---------------------------------------------------- */}

                    {project.github ? (
                      <Button
                        variant="outline"
                        size="icon"
                        className={[
                          "h-11 w-11 shrink-0 rounded-full",
                          "border-border/70",
                          "bg-background",
                          "text-muted-foreground",
                          "shadow-sm",
                          "transition-all duration-200",
                          "hover:border-foreground",
                          "hover:bg-foreground",
                          "hover:text-background",
                          "hover:shadow-md",
                          "dark:hover:border-foreground",
                          "dark:hover:bg-foreground",
                          "dark:hover:text-background",
                          "focus-visible:ring-2",
                          "focus-visible:ring-ring",
                          "focus-visible:ring-offset-2",
                        ].join(" ")}
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          title={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </Button>
                    ) : (
                      <div />
                    )}

                    {/* ---------------------------------------------------- */}
                    {/* Live Demo                                             */}
                    {/* ---------------------------------------------------- */}

                    {project.liveLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className={[
                          "group/demo",
                          "h-10 rounded-lg",
                          "border-border/70",
                          "bg-background",
                          "px-4",
                          "font-medium",
                          "shadow-sm",
                          "transition-all duration-200",
                          "hover:border-primary/50",
                          "hover:bg-primary/10",
                          "hover:text-primary",
                          "hover:shadow-sm",
                        ].join(" ")}
                      >
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo of ${project.title}`}
                          className="flex"
                        >
                          <span>Live Demo</span>

                          <ExternalLink
                            className={[
                              "ml-2 h-4 w-4",
                              "transition-transform duration-200",
                              "group-hover/demo:translate-x-0.5",
                              "group-hover/demo:-translate-y-0.5",
                            ].join(" ")}
                            aria-hidden="true"
                          />
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
