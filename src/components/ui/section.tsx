import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full scroll-mt-24 px-6 py-20 md:py-28", className)}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {(title || description) && (
          <div className="mb-12 max-w-2xl text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 leading-7 text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
