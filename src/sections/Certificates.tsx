"use client";

import * as React from "react";
import { Award, Heart } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import type { CertificationName } from "@/types/certification";
import { CERTIFICATIONS, INITIAL_LIKES } from "@/app/configs/certs.config";

export function Certificates() {
  const [likedCerts, setLikedCerts] =
    React.useState<Record<CertificationName, boolean>>(INITIAL_LIKES);

  const handleToggleLike = React.useCallback((cert: CertificationName) => {
    setLikedCerts((previous) => ({
      ...previous,
      [cert]: !previous[cert],
    }));
  }, []);

  return (
    <Section
      id="certifications"
      title="Certifications"
      description="Professional certifications supporting my work across cybersecurity, DevOps, and cloud engineering."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert) => {
          const isLiked = likedCerts[cert.name];
          const Icon = cert.icon;

          return (
            <Card
              key={cert.name}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <h3 className="font-semibold leading-tight">
                        {cert.name}
                      </h3>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    radius="full"
                    onClick={() => handleToggleLike(cert.name)}
                    className={`shrink-0 cursor-pointer transition-colors duration-200 ${
                      isLiked
                        ? "bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 dark:bg-red-950/20 dark:hover:bg-red-950/40"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                    aria-label={
                      isLiked ? `Unlike ${cert.name}` : `Like ${cert.name}`
                    }
                    aria-pressed={isLiked}
                  >
                    <Heart
                      className={`h-5 w-5 transition-transform duration-200 active:scale-75 ${
                        isLiked ? "fill-current" : "fill-none"
                      }`}
                      aria-hidden="true"
                    />
                  </Button>
                </div>

                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {cert.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t pt-4 text-xs text-muted-foreground">
                  <Award className="h-4 w-4" aria-hidden="true" />
                  <span>Professional Certification</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default Certificates;
