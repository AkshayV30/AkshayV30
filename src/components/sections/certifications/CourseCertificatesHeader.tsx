"use client";

import * as React from "react";

import { Award, X } from "lucide-react";

interface CourseCertificatesHeaderProps {
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

export function CourseCertificatesHeader({
  closeButtonRef,
  onClose,
}: CourseCertificatesHeaderProps) {
  return (
    <header className="shrink-0 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="flex items-start gap-3 p-4 sm:p-5">
        <div
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center",
            "rounded-xl",
            "border border-primary/20",
            "bg-primary/10",
            "text-primary",
          ].join(" ")}
        >
          <Award className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Supporting credentials
          </p>

          <h2
            id="course-certificates-title"
            className="mt-1 text-base font-semibold tracking-tight sm:text-lg"
          >
            Course certificates
          </h2>

          <p
            id="course-certificates-description"
            className="mt-1 max-w-xl text-xs leading-5 text-muted-foreground"
          >
            Individual courses supporting the primary credential.
          </p>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close course certificates"
          className={[
            "flex h-9 w-9 shrink-0 items-center justify-center",
            "rounded-xl",
            "border border-border/60",
            "bg-background/70",
            "text-muted-foreground",
            "transition-all duration-200",
            "hover:border-primary/30",
            "hover:bg-primary/10",
            "hover:text-foreground",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-ring",
            "active:scale-95",
          ].join(" ")}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
