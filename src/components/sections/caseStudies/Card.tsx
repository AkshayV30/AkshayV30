"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);

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

          {/* Primary View: Always Visible */}
          <div className="mt-6">
            <CaseStudySection label="Problem">
              {caseStudy.problem}
            </CaseStudySection>
          </div>

          {/* Collapsible Section: Slides smoothly open and closed */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.3, ease: "easeOut" },
                    opacity: { duration: 0.2, delay: 0.05 },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.25, ease: "easeIn" },
                    opacity: { duration: 0.15 },
                  },
                }}
                className="overflow-hidden"
              >
                <div className="mt-5 space-y-5 pt-1">
                  <CaseStudySection label="Approach">
                    <div className="space-y-3">
                      {caseStudy.approach.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CaseStudySection>

                  <CaseStudySection label="Outcome">
                    {caseStudy.outcome}
                  </CaseStudySection>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls & Footer Area */}
          <div className="mt-auto pt-4">
            {/* Interactive Slide Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group/btn mb-2 flex w-full items-center justify-between px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-transparent hover:text-primary"
            >
              <span>{isExpanded ? "Show Less" : "Read Full Case Study"}</span>
              <ChevronDown
                size={14}
                className={[
                  "transition-transform duration-300 ease-in-out",
                  isExpanded
                    ? "rotate-180 text-primary"
                    : "group-hover/btn:translate-y-0.5",
                ].join(" ")}
              />
            </Button>

            <div className="border-t border-border/50 pt-4">
              <CaseStudyTechnologies technologies={caseStudy.technologies} />

              {caseStudy.github && (
                <Button
                  size="sm"
                  variant="outline"
                  className={[
                    "mt-4 w-full rounded-xl",
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
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
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
