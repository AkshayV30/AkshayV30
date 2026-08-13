"use client";

import * as React from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { certificatePopoverVariants } from "@/app/motions";

import { useCertificateDialog } from "./use-certificates-dialog";

import { CourseCertificatesHeader } from "./CourseCertificatesHeader";
import { CourseCertificatesSummary } from "./CourseCertificatesSummary";
import { CourseCertificatesList } from "./CourseCertificatesList";
import { CourseCertificatesFooter } from "./CourseCertificatesFooter";

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

  const dialogRef = React.useRef<HTMLElement | null>(null);

  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);

  useCertificateDialog({
    open,
    onClose,
    closeButtonRef,
    dialogRef,
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.button
            type="button"
            aria-label="Close course certificates"
            tabIndex={-1}
            onClick={onClose}
            className={[
              "fixed inset-0 z-[90]",
              "cursor-default",
              "bg-background/65",
              "backdrop-blur-sm",
              "touch-none",
            ].join(" ")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }
            }
          />

          {/* Dialog */}

          <motion.aside
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-certificates-title"
            aria-describedby="course-certificates-description"
            variants={certificatePopoverVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={[
              "fixed z-[100]",

              /*
               * Mobile
               */
              "inset-x-2 top-2 bottom-2",

              /*
               * Tablet
               */
              "sm:inset-x-5",
              "sm:top-5",
              "sm:bottom-5",

              /*
               * Desktop
               */
              "lg:left-1/2",
              "lg:right-auto",
              "lg:top-10",
              "lg:bottom-10",
              "lg:w-[min(90vw,48rem)]",
              "lg:-translate-x-1/2",

              "mx-auto",

              "overflow-hidden",
              "rounded-2xl",
              "border border-border/70",
              "bg-background/95",
              "shadow-2xl",
              "backdrop-blur-2xl",

              "sm:rounded-[1.75rem]",

              /*
               * Important for mobile browsers.
               */
              "touch-auto",
            ].join(" ")}
          >
            {/* Accent */}

            <div
              aria-hidden="true"
              className={[
                "pointer-events-none",
                "absolute inset-x-10 top-0 z-20 h-px",
                "bg-gradient-to-r",
                "from-transparent",
                "via-primary",
                "to-transparent",
              ].join(" ")}
            />

            <div className="flex h-full min-h-0 flex-col">
              <CourseCertificatesHeader
                closeButtonRef={closeButtonRef}
                onClose={onClose}
              />

              <CourseCertificatesSummary count={courses.length} />

              <CourseCertificatesList courses={courses} />

              <CourseCertificatesFooter />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CourseCertificatesPopover;
