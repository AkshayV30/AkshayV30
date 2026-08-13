"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/ui/section";

import { CERTIFICATIONS } from "@/data/certificates";
import { COURSE_CERTIFICATES } from "@/data/course-certificate";

import {
  certificateCardVariants,
  certificateContainerVariants,
} from "@/app/motions";

import { CertificationCard } from "./Card";

export function Certificates() {
  const shouldReduceMotion = useReducedMotion();

  const [activeCertId, setActiveCertId] = React.useState<string | null>(null);

  const featuredCertifications = React.useMemo(
    () => CERTIFICATIONS.filter((cert) => cert.featured),
    [],
  );

  const handleToggleCourses = React.useCallback((certId: string) => {
    setActiveCertId((current) => (current === certId ? null : certId));
  }, []);

  return (
    <Section
      id="certifications"
      title="Certifications & Verified Skills"
      description="Professional credentials and independently verifiable learning across cybersecurity, DevOps, cloud infrastructure, and AI."
    >
      <motion.div
        variants={certificateContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className={[
          "mx-auto grid w-full max-w-6xl",
          "grid-cols-1 gap-5",
          "sm:gap-6",
          "md:grid-cols-2",
          "lg:grid-cols-3",
        ].join(" ")}
      >
        {featuredCertifications.map((cert, index) => {
          const courses = COURSE_CERTIFICATES.filter(
            (course) => course.parentCredentialId === cert.id,
          );

          return (
            <motion.div
              key={cert.id}
              variants={certificateCardVariants}
              layout={!shouldReduceMotion}
              className="relative h-full min-w-0"
            >
              <CertificationCard
                cert={cert}
                courses={courses}
                isCoursesOpen={activeCertId === cert.id}
                reverse={index % 2 === 1}
                onToggleCourses={() => handleToggleCourses(cert.id)}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

export default Certificates;
