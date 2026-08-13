"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import type { CaseStudy } from "@/types/caseStudies";

import { caseStudyCardHover } from "@/app/motions";
import CaseStudyHeader from "./Header";
import CaseStudySection from "./Section";
import CaseStudyTechnologies from "./Technologies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <motion.div whileHover={caseStudyCardHover} className="h-full">
      <Card
        className={[
          "group relative h-full overflow-hidden",
          "rounded-2xl",
          "border-border/60",
          "bg-card/70",
          "transition-colors duration-300",
          "hover:border-primary/20",
          "hover:bg-card",
          "hover:shadow-lg hover:shadow-primary/5",
        ].join(" ")}
      >
        <span
          aria-hidden="true"
          className={[
            "absolute inset-x-8 top-0 h-px",
            "bg-gradient-to-r",
            "from-transparent via-primary/40 to-transparent",
            "opacity-0",
            "transition-opacity duration-300",
            "group-hover:opacity-100",
          ].join(" ")}
        />

        <CardContent className="flex h-full flex-col p-6">
          <CaseStudyHeader caseStudy={caseStudy} />

          <div className="mt-6 space-y-5">
            <CaseStudySection label="Problem">
              {caseStudy.problem}
            </CaseStudySection>

            <CaseStudySection label="Approach">
              {caseStudy.approach}
            </CaseStudySection>

            <CaseStudySection label="Outcome">
              {caseStudy.outcome}
            </CaseStudySection>
          </div>

          <div className="mt-auto pt-6">
            <div className="border-t border-border/50 pt-5">
              <CaseStudyTechnologies technologies={caseStudy.technologies} />

              {caseStudy.github && (
                <Button
                  size="sm"
                  variant="outline"
                  className={[
                    "mt-5 w-full rounded-xl",
                    "border-border/60",
                    "transition-all duration-200",
                    "hover:border-primary/25",
                    "hover:bg-primary/5",
                  ].join(" ")}
                >
                  <a
                    href={caseStudy.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${caseStudy.title} project on GitHub`}
                    className="flex items-center gap-4"
                  >
                    <ExternalLink
                      className="mr-2 h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                    View project
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
