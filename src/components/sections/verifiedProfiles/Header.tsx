"use client";

import { BadgeCheck } from "lucide-react";

import BrandIcon from "@/components/ui/brand-icon";

import type { VerificationProfile } from "@/types/verification";

interface VerifiedProfileHeaderProps {
  profile: VerificationProfile;
}

export default function VerifiedProfileHeader({
  profile,
}: VerifiedProfileHeaderProps) {
  return (
    <div className="flex items-start gap-4">
      {/* Transparent branded logo area */}
      <div
        className={[
          "group/logo relative flex h-11 w-11 shrink-0 items-center justify-center",
          "transition-transform duration-300",
          "group-hover/logo:scale-[1.04]",
        ].join(" ")}
      >
        <BrandIcon
          icon={profile.icon}
          width={28}
          height={28}
          className={[
            "relative z-10 h-7 w-7",
            "object-contain",
            "transition-all duration-300",
            "group-hover/logo:scale-110",
          ].join(" ")}
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="mb-1 truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {profile.eyebrow}
        </p>

        <div className="flex items-center gap-2">
          <h3 className="min-w-0 truncate text-sm font-semibold tracking-tight sm:text-base">
            {profile.name}
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
