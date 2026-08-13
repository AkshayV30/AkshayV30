import { BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { verifiedProfileIconVariants } from "@/app/motions";

import { motion } from "framer-motion";

interface VerifiedProfileHeaderProps {
  Icon: LucideIcon;
  eyebrow?: string;
  name: string;
}

export default function VerifiedProfileHeader({
  Icon,
  eyebrow,
  name,
}: VerifiedProfileHeaderProps) {
  return (
    <div className="flex items-start gap-4">
      <motion.div
        variants={verifiedProfileIconVariants}
        className={[
          "relative flex h-11 w-11 shrink-0",
          "items-center justify-center",
          "rounded-xl",
          "border border-primary/15",
          "bg-primary/8 text-primary",
        ].join(" ")}
      >
        <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
      </motion.div>

      <div className="min-w-0 flex-1">
        {eyebrow && (
          <p className="mb-1 truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </p>
        )}

        <div className="flex items-center gap-2">
          <h3 className="min-w-0 truncate text-sm font-semibold tracking-tight sm:text-base">
            {name}
          </h3>

          <BadgeCheck
            className="h-4 w-4 shrink-0 text-primary"
            strokeWidth={1.8}
            aria-label="Verified public profile"
          />
        </div>
      </div>
    </div>
  );
}
