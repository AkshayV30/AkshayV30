import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { PROJECTS } from "@/data/projects";

import { GithubIcon } from "@/lib/icons/SocialIcons";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <Card key={project.title} className="flex h-full flex-col">
            <CardContent className="flex flex-1 flex-col p-6">
              {project.featured && (
                <Badge className="mb-4 w-fit">Featured</Badge>
              )}

              <h3 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 leading-7 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology} variant="outline">
                    {technology}
                  </Badge>
                ))}
              </div>
            </CardContent>

            {(project.github || project.link) && (
              <CardFooter className="flex flex-wrap gap-2 border-t px-6 py-4">
                {project.github && (
                  <Button variant="ghost" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon className="mr-2 h-4 w-4" />
                      <span className="ml-2">Source</span>
                    </a>
                  </Button>
                )}

                {project.link && (
                  <Button variant="outline" size="sm">
                    <Link href={project.link}>
                      <ExternalLink className="h-4 w-4" />
                      <span className="ml-2">Live Demo</span>
                    </Link>
                  </Button>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
