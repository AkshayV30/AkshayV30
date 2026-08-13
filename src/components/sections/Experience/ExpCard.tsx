"use client";

import { BriefcaseBusiness, CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import type { Experience } from "@/types/experience";

import { calculateDuration, formatDateRange } from "./exp.utils";

interface ExperienceCardProps {
  item: Experience;
  align?: "left" | "right";
}

export function ExperienceCard({ item, align = "left" }: ExperienceCardProps) {
  const technologies = item.technologies ?? [];
  const isRightAligned = align === "right";

  return (
    <Card
      className={[
        "group relative w-full max-w-md overflow-hidden",
        "rounded-2xl",
        "border-border/60 bg-card",
        "shadow-sm",
        "transition-all duration-300",
        "hover:border-primary/25",
        "hover:shadow-md",
      ].join(" ")}
    >
      {/* Hover accent */}
      <div
        aria-hidden="true"
        className={[
          "absolute inset-x-0 top-0 h-px",
          "bg-gradient-to-r",
          "from-transparent via-primary/50 to-transparent",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100",
        ].join(" ")}
      />

      <CardContent className="p-6 sm:p-7">
        {/* Header */}
        <div
          className={[
            "flex items-start gap-4",
            isRightAligned ? "flex-row-reverse text-right" : "",
          ].join(" ")}
        >
          {/* Standard experience icon */}
          <div
            className={[
              "flex h-11 w-11 shrink-0 items-center justify-center",
              "rounded-xl",
              "border border-border/60",
              "bg-muted/40",
              "text-primary",
              "transition-all duration-300",
              "group-hover:border-primary/25",
              "group-hover:bg-primary/5",
            ].join(" ")}
          >
            <BriefcaseBusiness
              className="h-5 w-5"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          {/* Role */}
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold tracking-tight">
              {item.role}
            </h3>

            <p className="mt-1 font-medium text-primary">{item.company}</p>
          </div>
        </div>

        {/* Date */}
        <div
          className={[
            "mt-5 flex flex-wrap items-center gap-x-3 gap-y-2",
            "border-t border-border/50 pt-4",
            isRightAligned ? "justify-end" : "",
          ].join(" ")}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />

            <span>{formatDateRange(item.startMonth, item.endMonth)}</span>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-1 w-1 rounded-full bg-border sm:block"
          />

          <span className="text-xs font-medium text-muted-foreground">
            {calculateDuration(item.startMonth, item.endMonth)}
          </span>
        </div>

        {/* Description */}
        <p
          className={[
            "mt-5 text-sm leading-7 text-muted-foreground",
            isRightAligned ? "text-right" : "",
          ].join(" ")}
        >
          {item.description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div
            className={[
              "mt-6 border-t border-border/50 pt-5",
              isRightAligned ? "text-right" : "",
            ].join(" ")}
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Technologies
            </p>

            <div
              className={[
                "flex flex-wrap gap-2",
                isRightAligned ? "justify-end" : "",
              ].join(" ")}
            >
              {technologies.map((technology) => (
                <Badge
                  key={technology}
                  variant="secondary"
                  className={[
                    "rounded-lg",
                    "border border-border/60",
                    "bg-muted/40",
                    "px-2.5 py-1",
                    "text-xs font-medium",
                    "text-muted-foreground",
                    "transition-colors duration-200",
                    "group-hover:border-primary/20",
                    "group-hover:bg-primary/5",
                    "group-hover:text-foreground",
                  ].join(" ")}
                >
                  {technology}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
