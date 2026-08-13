import { Badge } from "@/components/ui/badge";

interface CaseStudyTechnologiesProps {
  technologies: string[];
}

export default function CaseStudyTechnologies({
  technologies,
}: CaseStudyTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {technologies.map((technology) => (
        <Badge
          key={technology}
          variant="outline"
          className={[
            "rounded-full",
            "border-border/50",
            "bg-muted/20",
            "px-2.5 py-1",
            "text-[10px] font-medium",
            "text-muted-foreground",
            "transition-all duration-200",
            "group-hover:border-primary/15",
            "group-hover:bg-primary/5",
            "group-hover:text-foreground",
          ].join(" ")}
        >
          {technology}
        </Badge>
      ))}
    </div>
  );
}
