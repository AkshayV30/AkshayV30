"use client";

import { motion } from "framer-motion";

import { CourseCertificateItem } from "./Item";

import type { COURSE_CERTIFICATES } from "@/data/course-certificate";

type CourseCertificate = (typeof COURSE_CERTIFICATES)[number];

interface CourseCertificatesListProps {
  courses: CourseCertificate[];
}

export function CourseCertificatesList({
  courses,
}: CourseCertificatesListProps) {
  return (
    <div
      className={[
        "min-h-0 flex-1",
        "overflow-y-auto",
        "overscroll-contain",
        "touch-pan-y",
        "[scrollbar-width:thin]",
        "[-webkit-overflow-scrolling:touch]",
      ].join(" ")}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
        className="grid gap-3 p-4 sm:p-5"
      >
        {courses.map((course, index) => (
          <CourseCertificateItem
            key={course.id}
            course={course}
            index={index}
          />
        ))}
      </motion.div>

      {/* Extra touch-friendly bottom space */}
      <div className="h-4 sm:h-5" aria-hidden="true" />
    </div>
  );
}
