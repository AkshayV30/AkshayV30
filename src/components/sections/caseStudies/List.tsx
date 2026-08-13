"use client";

import { motion } from "framer-motion";

import type { CaseStudy } from "@/types/caseStudies";

import { caseStudyCardVariants, caseStudyListVariants } from "@/app/motions";

import CaseStudyCard from "./Card";

interface CaseStudyListProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyList({ caseStudies }: CaseStudyListProps) {
  return (
    <motion.div
      variants={caseStudyListVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {caseStudies.map((caseStudy) => (
        <motion.div
          key={caseStudy.id}
          variants={caseStudyCardVariants}
          className="h-full"
        >
          <CaseStudyCard caseStudy={caseStudy} />
        </motion.div>
      ))}
    </motion.div>
  );
}
