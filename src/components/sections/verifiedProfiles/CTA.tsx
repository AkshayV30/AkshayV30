import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

interface VerifiedProfileCTAProps {
  name: string;
  url: string;
}

export default function VerifiedProfileCTA({
  name,
  url,
}: VerifiedProfileCTAProps) {
  return (
    <div className="mt-auto pt-6">
      <div className="border-t border-border/60 pt-4">
        <Button
          size="sm"
          radius="lg"
          variant="outline"
          className={[
            "group/link w-full",
            "transition-all duration-200",
            "hover:-translate-y-0.5",
            "hover:border-primary/25",
            "hover:bg-primary/5",
          ].join(" ")}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center"
            aria-label={`View ${name} profile`}
          >
            <span>View {name}</span>

            <ExternalLink
              className={[
                "ml-2 h-3.5 w-3.5",
                "transition-transform duration-200",
                "group-hover/link:translate-x-0.5",
                "group-hover/link:-translate-y-0.5",
              ].join(" ")}
              aria-hidden="true"
            />
          </a>
        </Button>
      </div>
    </div>
  );
}
