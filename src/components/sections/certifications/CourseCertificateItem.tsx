"use client";

import { CalendarDays, CheckCircle2, ExternalLink } from "lucide-react";

import { motion } from "framer-motion";

import { certificateCourseItemVariants } from "@/app/motions";

import type { COURSE_CERTIFICATES } from "@/data/course-certificate";

type CourseCertificate = (typeof COURSE_CERTIFICATES)[number];

interface CourseCertificateItemProps {
  course: CourseCertificate;
  index: number;
}

export function CourseCertificateItem({
  course,
  index,
}: CourseCertificateItemProps) {
  return (
    <motion.article
      custom={index}
      variants={certificateCourseItemVariants}
      className={[
        "group relative",
        "rounded-2xl",
        "border border-border/60",
        "bg-card/75",
        "p-4",
        "transition-all duration-200",
        "hover:border-primary/25",
        "hover:bg-primary/[0.035]",
        "hover:shadow-sm",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        {/* Status */}

        <div
          className={[
            "mt-0.5 flex h-8 w-8 shrink-0",
            "items-center justify-center",
            "rounded-lg",
            "border border-primary/15",
            "bg-primary/8",
            "text-primary",
          ].join(" ")}
        >
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        </div>

        {/* Information */}

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold leading-5">{course.name}</h3>

          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
            {course.completed && (
              <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <CalendarDays className="h-3 w-3" aria-hidden="true" />

                {course.completed}
              </span>
            )}

            {course.grade && (
              <span className="text-[11px] text-muted-foreground">
                Grade:{" "}
                <span className="font-medium text-foreground">
                  {course.grade}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Verification */}

        {course.verificationUrl && (
          <a
            href={course.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${course.name}`}
            className={[
              "flex h-9 w-9 shrink-0",
              "items-center justify-center",
              "rounded-lg",
              "border border-border/60",
              "text-muted-foreground",
              "transition-all duration-200",
              "hover:border-primary/30",
              "hover:bg-primary/10",
              "hover:text-primary",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-ring",
              "active:scale-95",
            ].join(" ")}
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
