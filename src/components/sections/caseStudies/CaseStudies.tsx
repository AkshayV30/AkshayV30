"use client";

import { Section } from "@/components/ui/section";

import { CASE_STUDIES } from "@/data/case-studies";

import CaseStudyList from "./List";

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      title="Engineering Case Studies"
      description="Selected projects showing how I approach practical problems across AI, cloud infrastructure, DevOps, full-stack engineering, and manufacturing technology."
    >
      <CaseStudyList caseStudies={CASE_STUDIES} />
    </Section>
  );
}

export default CaseStudies;
