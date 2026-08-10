import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { siGithub } from "simple-icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { PROJECTS } from "@/data/projects";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className="mr-2 size-4 fill-current"
    >
      <path d={siGithub.path} />
    </svg>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Selected projects across software engineering, cloud, DevOps, automation, and AI."
    >
      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map(
          ({ title, description, technologies, featured, github, link }) => (
            <Card
              key={title}
              className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-1 flex-col p-6">
                {featured && (
                  <Badge variant="secondary" className="mb-4 w-fit">
                    Featured
                  </Badge>
                )}

                <h3 className="text-xl font-semibold tracking-tight">
                  {title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-muted-foreground">
                  {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <Badge key={technology} variant="outline">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {(github || link) && (
                <CardFooter className="flex flex-wrap gap-2 border-t px-6 py-4">
                  {github && (
                    <Button variant="ghost" size="sm">
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${title} source code on GitHub`}
                      >
                        <GithubIcon />
                        Source
                      </a>
                    </Button>
                  )}

                  {link && (
                    <Button variant="outline" size="sm">
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${title} live demo`}
                      >
                        <ExternalLink className="mr-2 size-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          ),
        )}
      </div>
    </Section>
  );
}

export default Projects;
