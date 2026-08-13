import { GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface CourseCertificatesSummaryProps {
  count: number;
}

export function CourseCertificatesSummary({
  count,
}: CourseCertificatesSummaryProps) {
  return (
    <div className="shrink-0 border-b border-border/40 bg-background/80 px-4 py-3 backdrop-blur-xl sm:px-5">
      <div
        className={[
          "flex flex-wrap items-center gap-2",
          "rounded-xl",
          "border border-border/50",
          "bg-muted/25",
          "p-2.5",
        ].join(" ")}
      >
        <Badge
          variant="secondary"
          className="rounded-full px-2.5 py-1 text-[10px]"
        >
          <GraduationCap className="mr-1.5 h-3 w-3" aria-hidden="true" />
          {count} {count === 1 ? "course" : "courses"}
        </Badge>

        <span className="text-[11px] text-muted-foreground">
          Independently verifiable
        </span>
      </div>
    </div>
  );
}
