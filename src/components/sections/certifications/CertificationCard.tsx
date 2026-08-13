"use client";

import * as React from "react";
import { Award, CheckCircle2, ExternalLink, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { CourseCertificatesPopover } from "./CourseCertificatesPopover";

import { certificateCardHover, certificateIconVariants } from "@/app/motions";

import type { CERTIFICATIONS } from "@/data/certificates";
import type { COURSE_CERTIFICATES } from "@/data/course-certificate";

type Certification = (typeof CERTIFICATIONS)[number];
type CourseCertificate = (typeof COURSE_CERTIFICATES)[number];

interface CertificationCardProps {
  cert: Certification;
  courses: CourseCertificate[];
  isCoursesOpen: boolean;
  onToggleCourses: () => void;
}

export function CertificationCard({
  cert,
  courses,
  isCoursesOpen,
  onToggleCourses,
}: CertificationCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const Icon = cert.icon;

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : certificateCardHover}
      className="h-full"
    >
      <Card
        className={[
          "group relative h-full overflow-visible",
          "rounded-3xl",
          "border-border/60",
          "bg-card/95",
          "shadow-sm",
          "transition-[border-color,box-shadow]",
          "duration-300",
          "hover:border-primary/25",
          "hover:shadow-xl",
        ].join(" ")}
      >
        {/* Top accent */}
        <div
          aria-hidden="true"
          className={[
            "pointer-events-none absolute inset-x-10 top-0 h-px",
            "bg-gradient-to-r",
            "from-transparent via-primary/60 to-transparent",
            "opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100",
          ].join(" ")}
        />

        {/* Soft background glow */}
        <div
          aria-hidden="true"
          className={[
            "pointer-events-none absolute -right-16 -top-16",
            "h-32 w-32 rounded-full",
            "bg-primary/5 blur-3xl",
            "opacity-0 transition-opacity duration-500",
            "group-hover:opacity-100",
          ].join(" ")}
        />

        <CardContent className="relative flex h-full flex-col p-6 sm:p-7">
          {/* Header */}
          <div className="flex items-start gap-4">
            <motion.div
              variants={certificateIconVariants}
              className={[
                "flex h-12 w-12 shrink-0 items-center justify-center",
                "rounded-2xl",
                "border border-primary/15",
                "bg-primary/10",
                "text-primary",
                "shadow-sm",
                "transition-all duration-300",
                "group-hover:border-primary/25",
                "group-hover:bg-primary/15",
              ].join(" ")}
            >
              <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </motion.div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <p className="truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {cert.issuer}
                </p>

                <CheckCircle2
                  className="h-3.5 w-3.5 shrink-0 text-primary"
                  aria-label="Verified credential"
                />
              </div>

              <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight">
                {cert.name}
              </h3>
            </div>
          </div>

          {/* Completion */}
          {cert.completed && (
            <div className="mt-5">
              <Badge
                variant="secondary"
                className={[
                  "rounded-full",
                  "border border-border/60",
                  "bg-muted/40",
                  "px-2.5 py-1",
                  "text-[11px] font-medium",
                ].join(" ")}
              >
                Completed {cert.completed}
              </Badge>
            </div>
          )}

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {cert.description}
          </p>

          {/* Skills */}
          <div className="mt-5">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Core skills
            </p>

            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={[
                    "rounded-lg",
                    "border border-border/50",
                    "bg-muted/40",
                    "px-2.5 py-1",
                    "text-xs font-medium",
                    "transition-colors duration-200",
                    "group-hover:border-primary/15",
                    "group-hover:bg-primary/5",
                  ].join(" ")}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex-1" />

          {/* Actions */}
          <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-border/50 pt-5">
            {cert.verificationUrl && (
              <Button size="sm" className="rounded-xl">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify credential
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            )}

            {courses.length > 0 && (
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={onToggleCourses}
                aria-expanded={isCoursesOpen}
                className="rounded-xl"
              >
                <GraduationCap className="mr-2 h-3.5 w-3.5" />
                {courses.length} courses
                <span
                  className={[
                    "ml-2 inline-block transition-transform duration-200",
                    isCoursesOpen ? "rotate-180" : "",
                  ].join(" ")}
                >
                  ↓
                </span>
              </Button>
            )}

            {/* Floating coursework panel */}
            {courses.length > 0 && (
              <CourseCertificatesPopover
                courses={courses}
                open={isCoursesOpen}
                onClose={onToggleCourses}
              />
            )}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center gap-2 text-[11px] text-muted-foreground">
            <Award className="h-3.5 w-3.5 text-primary/70" />

            <span>Independently verifiable credential</span>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
