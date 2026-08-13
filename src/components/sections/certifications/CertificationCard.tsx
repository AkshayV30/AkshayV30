"use client";

import { Award, CheckCircle2, ExternalLink, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotatingBorderCard } from "@/components/ui/rotating-border-card";

import { certificateIconVariants } from "@/app/motions";

import type { CertificationCardProps } from "@/types/certification";

import { CourseCertificatesPopover } from "./CourseCertificatesPopover";

export function CertificationCard({
  cert,
  courses,
  isCoursesOpen,
  reverse = false,
  onToggleCourses,
}: CertificationCardProps) {
  const Icon = cert.icon;

  return (
    <>
      <RotatingBorderCard
        active={isCoursesOpen}
        reverse={reverse}
        className="h-full"
        aria-label={`${cert.name} certification`}
      >
        <article
          className={[
            "relative flex h-full min-h-[440px] flex-col",
            "p-5 sm:p-6 lg:p-7",
          ].join(" ")}
        >
          {/* ============================================================ */}
          {/* HEADER — FIXED HEIGHT                                        */}
          {/* ============================================================ */}

          <header
            className={[
              "flex shrink-0 items-center",
              "h-[82px] sm:h-[88px] lg:h-[92px]",
              "gap-4 sm:gap-5",
            ].join(" ")}
          >
            {/* Certificate icon */}

            <motion.div
              variants={certificateIconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={[
                "relative flex h-12 w-12 shrink-0",
                "items-center justify-center",
                "rounded-2xl",
                "border border-primary/20",
                "bg-primary/8",
                "text-primary",
                "shadow-[0_0_25px_color-mix(in_oklab,var(--primary)_8%,transparent)]",
              ].join(" ")}
            >
              <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />

              <span
                className={[
                  "absolute -right-1 -top-1",
                  "flex h-4 w-4 items-center justify-center",
                  "rounded-full",
                  "border-2 border-card",
                  "bg-primary",
                  "text-primary-foreground",
                ].join(" ")}
              >
                <CheckCircle2 className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </motion.div>

            {/* Issuer + certification title */}

            <div
              className={[
                "flex min-w-0 flex-1 flex-col justify-center",
                "overflow-hidden",
              ].join(" ")}
            >
              <p
                className={[
                  "truncate",
                  "text-[10px] font-semibold uppercase",
                  "tracking-[0.18em]",
                  "text-muted-foreground",
                ].join(" ")}
              >
                {cert.issuer}
              </p>

              <h3
                className={[
                  "mt-2",
                  "line-clamp-2",
                  "text-base font-semibold leading-snug tracking-tight",
                  "sm:text-lg",
                ].join(" ")}
              >
                {cert.name}
              </h3>
            </div>
          </header>

          {/* ============================================================ */}
          {/* COMPLETION — FIXED ROW                                       */}
          {/* ============================================================ */}

          <div className="mt-5 flex h-[27px] shrink-0 items-center">
            {cert.completed ? (
              <Badge
                variant="secondary"
                className={[
                  "rounded-full",
                  "border border-primary/10",
                  "bg-primary/5",
                  "px-2.5 py-1",
                  "text-[10px] font-medium",
                  "text-muted-foreground",
                ].join(" ")}
              >
                Completed {cert.completed}
              </Badge>
            ) : (
              <span aria-hidden="true" className="invisible text-[10px]">
                Completed
              </span>
            )}
          </div>

          {/* ============================================================ */}
          {/* DESCRIPTION — NATURAL / RESPONSIVE HEIGHT                    */}
          {/* ============================================================ */}

          <section className="mt-4 shrink-0">
            <p className="text-sm leading-6 text-muted-foreground">
              {cert.description}
            </p>
          </section>

          {/* ============================================================ */}
          {/* CAPABILITIES — NATURAL HEIGHT                                */}
          {/* ============================================================ */}

          <section
            className="mt-6 shrink-0"
            aria-label={`${cert.name} capabilities`}
          >
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-full max-w-[60px] shrink-0 bg-primary/50" />

              <span
                className={[
                  "whitespace-nowrap",
                  "text-[10px] font-semibold uppercase",
                  "tracking-[0.18em]",
                  "text-muted-foreground",
                ].join(" ")}
              >
                Capability
              </span>

              <span className="h-px w-full max-w-[60px] shrink-0 bg-primary/50" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {cert.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={[
                    "rounded-lg",
                    "border border-border/60",
                    "bg-muted/35",
                    "px-2.5 py-1",
                    "text-xs font-medium",
                    "text-muted-foreground",
                    "transition-colors duration-200",
                    "hover:border-primary/20",
                    "hover:bg-primary/5",
                    "hover:text-foreground",
                  ].join(" ")}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* ============================================================ */}
          {/* FLEXIBLE SPACE                                                */}
          {/* ============================================================ */}

          <div className="min-h-6 flex-1" aria-hidden="true" />

          {/* ============================================================ */}
          {/* ACTIONS — FIXED STRUCTURAL HEIGHT                             */}
          {/* ============================================================ */}

          <section
            className={[
              "mt-6 shrink-0",
              "border-t border-border/50",
              "pt-5",
            ].join(" ")}
            aria-label="Certification actions"
          >
            <div
              className={[
                "flex min-h-[36px]",
                "flex-wrap items-center justify-center",
                "gap-2",
              ].join(" ")}
            >
              {/* Verification */}

              {cert.verificationUrl && (
                <Button
                  size="sm"
                  radius="lg"
                  className={[
                    "group",
                    "cursor-pointer",
                    "transition-transform duration-200",
                    "hover:-translate-y-0.5",
                    "hover:bg-primary",
                    "hover:text-primary-foreground",
                  ].join(" ")}
                >
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                    aria-label={`Verify ${cert.name}`}
                  >
                    <span>Verify credential</span>

                    <ExternalLink
                      className={[
                        "ml-2 h-3.5 w-3.5 shrink-0",
                        "transition-transform duration-200 ease-out",
                        "group-hover:translate-x-0.5",
                        "group-hover:-translate-y-0.5",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              )}

              {/* Course certificates */}

              {courses.length > 0 && (
                <Button
                  type="button"
                  size="sm"
                  radius="lg"
                  variant="outline"
                  onClick={onToggleCourses}
                  aria-expanded={isCoursesOpen}
                  aria-haspopup="dialog"
                  className={[
                    "cursor-pointer",
                    "transition-transform duration-200",
                    "hover:-translate-y-0.5",
                    "hover:border-primary/25",
                    "hover:bg-primary/5",
                  ].join(" ")}
                >
                  <GraduationCap
                    className="mr-2 h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                  {courses.length} {courses.length === 1 ? "course" : "courses"}
                </Button>
              )}
            </div>
          </section>

          {/* ============================================================ */}
          {/* FOOTER                         */}
          {/* ============================================================ */}

          <footer
            className={[
              "mt-5 shrink-0",
              "flex items-start gap-2",
              "h-[40px] sm:h-[44px]",
              "text-[10px] leading-4",
              "text-muted-foreground",
            ].join(" ")}
          >
            <Award
              className={[
                "mt-0.5 h-3.5 w-3.5 shrink-0",
                "text-primary/70",
              ].join(" ")}
              aria-hidden="true"
            />

            <span className="leading-4">
              Independently verifiable credential
            </span>
          </footer>
        </article>
      </RotatingBorderCard>

      <CourseCertificatesPopover
        courses={courses}
        open={isCoursesOpen}
        onClose={onToggleCourses}
      />
    </>
  );
}

export default CertificationCard;
