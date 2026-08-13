"use client";

import { Card, CardContent } from "@/components/ui/card";

import type { VerificationProfile } from "@/types/verification";

import VerifiedProfileHighlights from "./Highlights";
import VerifiedProfileHeader from "./Header";
import VerifiedProfileCTA from "./CTA";
import VerifiedProfileAccent from "./Accent";

interface VerifiedProfileCardProps {
  profile: VerificationProfile;
}

export default function VerifiedProfileCard({
  profile,
}: VerifiedProfileCardProps) {
  return (
    <Card
      className={[
        "group relative h-full overflow-hidden",
        "rounded-2xl",
        "border border-border/50",
        "bg-card/70",
        "shadow-sm",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        "hover:border-primary/15",
        "hover:bg-card/90",
        "hover:shadow-lg hover:shadow-primary/5",
      ].join(" ")}
    >
      <VerifiedProfileAccent />

      <CardContent className="flex h-full flex-col p-6">
        <VerifiedProfileHeader
          Icon={profile.icon}
          eyebrow={profile.eyebrow}
          name={profile.name}
        />

        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {profile.description}
        </p>

        <VerifiedProfileHighlights highlights={profile.highlights} />

        <VerifiedProfileCTA name={profile.name} url={profile.url} />
      </CardContent>
    </Card>
  );
}
