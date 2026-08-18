import { Badge } from "@/components/ui/badge";

interface ProjectStackProps {
  technologies: string[];
}

export function ProjectStack({ technologies }: ProjectStackProps) {
  return (
    <div className="mt-auto pt-8">
      <div className="border-t border-border/60 pt-4">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Technology Stack
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
              className={[
                "rounded-md",
                "border border-border/60",
                "bg-muted/40",
                "px-2.5 py-1",
                "text-xs font-medium",
                "text-muted-foreground",
                "transition-all duration-200",
                "hover:border-primary/30",
                "hover:bg-primary/10",
                "hover:text-foreground",
              ].join(" ")}
            >
              {technology}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
