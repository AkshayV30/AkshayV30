"use client";

import { BadgeCheck, Cog, GraduationCap, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

import { EDUCATION } from "@/data/education";

import {
  educationCardHover,
  educationCardVariants,
  educationContainerVariants,
  educationIconVariants,
  educationTimelineVariants,
} from "@/app/motions";

const educationIcons = {
  "M.Tech": BadgeCheck,
  "B.E.": Cog,
} as const;

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="education"
      title="Education"
      description="Academic background in engineering, product design, and manufacturing."
    >
      <motion.div
        variants={educationContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="relative mx-auto w-full max-w-5xl"
      >
        {/* ---------------------------------------------------------------- */}
        {/* Central Timeline                                                  */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          aria-hidden="true"
          variants={educationTimelineVariants}
          className={[
            "absolute bottom-6 left-1/2 top-6 hidden w-px",
            "-translate-x-1/2 md:block",
            "bg-gradient-to-b",
            "from-transparent via-border/80 to-transparent",
          ].join(" ")}
        />

        {/* ---------------------------------------------------------------- */}
        {/* Timeline Items                                                    */}
        {/* ---------------------------------------------------------------- */}

        <div className="space-y-10 md:space-y-16">
          {EDUCATION.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon =
              educationIcons[item.degree as keyof typeof educationIcons];

            return (
              <motion.article
                key={`${item.degree}-${item.field}`}
                variants={educationCardVariants}
                whileHover={shouldReduceMotion ? undefined : educationCardHover}
                className="relative"
              >
                {/* -------------------------------------------------------- */}
                {/* Central Timeline Node                                     */}
                {/* -------------------------------------------------------- */}

                <motion.div
                  variants={educationIconVariants}
                  className={[
                    "absolute left-1/2 top-1/2 z-20 hidden",
                    "h-12 w-12 -translate-x-1/2 -translate-y-1/2",
                    "items-center justify-center",
                    "rounded-full",
                    "border border-primary/20",
                    "bg-background",
                    "shadow-sm",
                    "md:flex",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "flex h-9 w-9 items-center justify-center",
                      "rounded-full",
                      "bg-primary/10",
                      "text-primary",
                    ].join(" ")}
                  >
                    <GraduationCap
                      className="h-4 w-4"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>
                </motion.div>

                {/* -------------------------------------------------------- */}
                {/* Connector                                                 */}
                {/* -------------------------------------------------------- */}

                <div
                  aria-hidden="true"
                  className={[
                    "absolute top-1/2 hidden h-px w-14",
                    "bg-border/70 md:block",
                    isLeft ? "right-[50%] mr-6" : "left-[50%] ml-6",
                  ].join(" ")}
                />

                {/* -------------------------------------------------------- */}
                {/* Desktop Layout                                            */}
                {/* -------------------------------------------------------- */}

                <div
                  className={[
                    "hidden md:flex md:w-1/2",
                    isLeft
                      ? "justify-end pr-14"
                      : "ml-auto justify-start pl-14",
                  ].join(" ")}
                >
                  <EducationCard item={item} icon={Icon} />
                </div>

                {/* -------------------------------------------------------- */}
                {/* Mobile Layout                                             */}
                {/* -------------------------------------------------------- */}

                <div className="relative pl-12 md:hidden">
                  {/* Mobile timeline */}
                  <div
                    aria-hidden="true"
                    className={[
                      "absolute bottom-0 left-[17px] top-0 w-px",
                      "bg-border/70",
                    ].join(" ")}
                  />

                  {/* Mobile node */}
                  <div
                    aria-hidden="true"
                    className={[
                      "absolute left-0 top-1/2 z-10",
                      "flex h-9 w-9 -translate-y-1/2",
                      "items-center justify-center",
                      "rounded-full",
                      "border border-primary/20",
                      "bg-background",
                      "shadow-sm",
                    ].join(" ")}
                  >
                    <GraduationCap
                      className="h-4 w-4 text-primary"
                      strokeWidth={1.8}
                    />
                  </div>

                  <EducationCard item={item} icon={Icon} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Education Card                                                             */
/* -------------------------------------------------------------------------- */

interface EducationCardProps {
  item: (typeof EDUCATION)[number];
  icon: typeof BadgeCheck;
}

function EducationCard({ item, icon: Icon }: EducationCardProps) {
  return (
    <Card
      className={[
        "group relative w-full max-w-md overflow-hidden",
        "rounded-3xl",
        "border-border/60",
        "bg-card/95",
        "shadow-sm",
        "backdrop-blur-sm",
        "transition-all duration-300",
        "hover:border-primary/25",
        "hover:shadow-lg",
      ].join(" ")}
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        className={[
          "absolute inset-x-8 top-0 h-px",
          "bg-gradient-to-r",
          "from-transparent via-primary/50 to-transparent",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100",
        ].join(" ")}
      />

      <CardContent
        className={[
          "flex flex-col items-center",
          "p-6 text-center sm:p-7",
        ].join(" ")}
      >
        {/* -------------------------------------------------------------- */}
        {/* Degree Icon                                                     */}
        {/* -------------------------------------------------------------- */}

        <div
          className={[
            "flex h-14 w-14 items-center justify-center",
            "rounded-2xl",
            "border border-primary/15",
            "bg-primary/5",
            "text-primary",
            "shadow-sm",
            "transition-all duration-300",
            "group-hover:border-primary/30",
            "group-hover:bg-primary/10",
            "group-hover:shadow-md",
          ].join(" ")}
        >
          <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Degree + Year                                                   */}
        {/* -------------------------------------------------------------- */}

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <h3 className="text-xl font-semibold tracking-tight">
            {item.degree}
          </h3>

          {item.year && (
            <Badge
              variant="secondary"
              className={[
                "rounded-full",
                "border border-border/60",
                "bg-muted/40",
                "px-2.5 py-1",
                "text-[11px] font-medium",
                "text-muted-foreground",
              ].join(" ")}
            >
              {item.year}
            </Badge>
          )}
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Field                                                           */}
        {/* -------------------------------------------------------------- */}

        <p className="mt-2 max-w-sm text-sm font-medium leading-6 text-primary">
          {item.field}
        </p>

        {/* -------------------------------------------------------------- */}
        {/* Institution + Location                                          */}
        {/* -------------------------------------------------------------- */}

        <div
          className={["mt-5 w-full border-t border-border/50", "pt-4"].join(
            " ",
          )}
        >
          <p className="text-sm font-medium text-foreground">
            {item.institution}
          </p>

          {item.location && (
            <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />

              <span>{item.location}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Education;
