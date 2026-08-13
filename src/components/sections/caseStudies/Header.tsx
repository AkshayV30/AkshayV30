import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import type { CaseStudy } from "@/types/caseStudies";

import { caseStudyArrowVariants } from "@/app/motions";

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/80">
          {caseStudy.category}
        </p>

        <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
          {caseStudy.title}
        </h3>
      </div>

      <motion.div
        variants={caseStudyArrowVariants}
        initial="rest"
        whileHover="hover"
        className="shrink-0 rounded-full border border-border/60 p-2 text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-primary"
      >
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </motion.div>
    </div>
  );
}
