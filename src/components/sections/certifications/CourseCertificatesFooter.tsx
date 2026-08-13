import { CheckCircle2 } from "lucide-react";

export function CourseCertificatesFooter() {
  return (
    <footer
      className={[
        "shrink-0",
        "border-t border-border/50",
        "bg-background/90",
        "px-4 py-3",
        "backdrop-blur-xl",
        "sm:px-5",
      ].join(" ")}
    >
      <div className="flex items-start gap-2 text-[10px] leading-4 text-muted-foreground">
        <CheckCircle2
          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70"
          aria-hidden="true"
        />

        <p>
          Each course includes an independent credential link where available.
        </p>
      </div>
    </footer>
  );
}
