"use client";

import { Award, CheckCircle2, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import {
  certificatePopoverVariants,
  certificateCourseItemVariants,
} from "@/app/motions";

import type { COURSE_CERTIFICATES } from "@/data/course-certificate";

type CourseCertificate = (typeof COURSE_CERTIFICATES)[number];

interface CourseCertificatesPopoverProps {
  courses: CourseCertificate[];
  open: boolean;
  onClose: () => void;
}

export function CourseCertificatesPopover({
  courses,
  open,
  onClose,
}: CourseCertificatesPopoverProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop for mobile / focus */}
          <motion.button
            type="button"
            aria-label="Close coursework"
            className="fixed inset-0 z-40 cursor-default bg-background/20 backdrop-blur-[2px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Floating panel */}
          <motion.div
            key="coursework"
            variants={certificatePopoverVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className={[
              "absolute bottom-[calc(100%+0.75rem)] left-0 z-50",
              "w-[min(100%,24rem)]",
              "rounded-2xl",
              "border border-border/70",
              "bg-background/95",
              "p-4",
              "shadow-2xl",
              "backdrop-blur-xl",
              "md:w-[25rem]",
            ].join(" ")}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-4 w-4" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">
                      Course certificates
                    </h4>

                    <p className="text-[11px] text-muted-foreground">
                      Supporting coursework
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className={[
                  "rounded-lg p-1.5",
                  "text-muted-foreground",
                  "transition-colors",
                  "hover:bg-muted",
                  "hover:text-foreground",
                ].join(" ")}
                aria-label="Close coursework"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Course count */}
            <div className="mt-4 flex items-center gap-2">
              <Badge
                variant="secondary"
                className="rounded-full px-2.5 py-1 text-[10px]"
              >
                {courses.length} course
                {courses.length !== 1 ? "s" : ""}
              </Badge>

              <span className="text-[11px] text-muted-foreground">
                Independently verifiable
              </span>
            </div>

            {/* Courses */}
            <motion.div
              className="mt-4 space-y-2"
              initial="hidden"
              animate="visible"
            >
              {courses.map((course) => (
                <motion.article
                  key={course.id}
                  variants={certificateCourseItemVariants}
                  className={[
                    "group rounded-xl",
                    "border border-border/60",
                    "bg-muted/20",
                    "p-3.5",
                    "transition-all duration-200",
                    "hover:border-primary/20",
                    "hover:bg-primary/5",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h5 className="text-sm font-medium leading-5">
                        {course.name}
                      </h5>

                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                        {course.completed && <span>{course.completed}</span>}

                        {course.grade && <span>Grade: {course.grade}</span>}
                      </div>
                    </div>

                    {course.verificationUrl && (
                      <a
                        href={course.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={[
                          "shrink-0 rounded-lg p-1.5",
                          "text-muted-foreground",
                          "transition-all duration-200",
                          "hover:bg-background",
                          "hover:text-primary",
                          "hover:shadow-sm",
                        ].join(" ")}
                        aria-label={`Verify ${course.name}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Footer */}
            <div className="mt-4 border-t border-border/50 pt-3 text-[10px] leading-4 text-muted-foreground">
              Each course can be independently verified using its credential
              link.
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
