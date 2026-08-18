import { Badge } from "@/components/ui/badge";
import BrandIcon from "@/components/ui/brand-icon";

import { LOGOS } from "@/lib/logos";

import type { Skill } from "@/types/skill";

interface SkillBadgeProps {
  skill: Skill;
  interactive?: boolean;
}

export function SkillBadge({ skill, interactive = true }: SkillBadgeProps) {
  const logo = skill.logo ? LOGOS[skill.logo] : undefined;

  return (
    <Badge
      variant="secondary"
      className={[
        "inline-flex items-center gap-2",
        "rounded-lg",
        "border border-border/60",
        "bg-muted/40",
        "px-3 py-1.5",
        "text-xs font-medium",
        "text-muted-foreground",
        "shadow-none",
        "transition-all duration-200",
        interactive
          ? [
              "hover:border-primary/30",
              "hover:bg-primary/10",
              "hover:text-foreground",
            ].join(" ")
          : "",
      ].join(" ")}
    >
      {logo && (
        <BrandIcon
          icon={logo}
          width={16}
          height={16}
          className="h-4 w-4 shrink-0 object-contain"
          aria-hidden="true"
        />
      )}

      <span>{skill.name}</span>
    </Badge>
  );
}
