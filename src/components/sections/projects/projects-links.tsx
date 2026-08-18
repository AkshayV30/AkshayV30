import Link from "next/link";
import { ExternalLink } from "lucide-react";

import BrandIcon from "@/components/ui/brand-icon";

import { LOGOS } from "@/lib/logos";

import { getGithubRepoName, isLongRepoName } from "./projects-utils";

interface ProjectLinksProps {
  title: string;
  github?: string;
  liveLink?: string;
}

const githubLinkClasses = [
  "group/github flex min-w-0 items-center",
  "min-h-11",
  "rounded-xl",
  "border border-border/70",
  "bg-background/80",
  "px-3",
  "text-sm font-medium text-foreground",
  "shadow-sm",
  "transition-all duration-200",
  "hover:border-foreground/30",
  "hover:bg-muted",
  "hover:shadow-md",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-ring",
  "focus-visible:ring-offset-2",
  "dark:bg-background/50",
  "dark:hover:bg-muted/70",
].join(" ");

const demoLinkClasses = [
  "group/demo flex h-11 shrink-0 items-center justify-center",
  "rounded-xl",
  "border border-primary/30",
  "bg-primary/10",
  "px-4",
  "text-sm font-semibold text-primary",
  "shadow-sm",
  "transition-all duration-200",
  "hover:border-primary/50",
  "hover:bg-primary",
  "hover:text-primary-foreground",
  "hover:shadow-md",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-primary",
  "focus-visible:ring-offset-2",
  "dark:bg-primary/15",
  "dark:hover:bg-primary",
].join(" ");

function GithubLink({
  title,
  github,
  stacked,
}: {
  title: string;
  github: string;
  stacked: boolean;
}) {
  return (
    <Link
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} source code on GitHub`}
      title={`View ${title} on GitHub`}
      className={[githubLinkClasses, stacked ? "w-full" : "flex-1"].join(" ")}
    >
      <span
        className={[
          "flex h-7 w-7 shrink-0 items-center justify-center",
          "rounded-lg",
          "bg-muted",
          "transition-colors duration-200",
          "group-hover/github:bg-background",
          "dark:bg-muted/80",
          "dark:group-hover/github:bg-muted",
        ].join(" ")}
      >
        <BrandIcon
          icon={LOGOS.github}
          width={17}
          height={17}
          className="h-[17px] w-[17px] object-contain"
          aria-hidden="true"
        />
      </span>

      <span className="ml-2.5 min-w-0 flex-1 truncate">
        {getGithubRepoName(github)}
      </span>

      <ExternalLink
        className={[
          "ml-2 h-3.5 w-3.5 shrink-0",
          "text-muted-foreground",
          "transition-all duration-200",
          "group-hover/github:translate-x-0.5",
          "group-hover/github:-translate-y-0.5",
          "group-hover/github:text-foreground",
        ].join(" ")}
        aria-hidden="true"
      />
    </Link>
  );
}

function LiveDemoLink({
  title,
  liveLink,
  stacked,
}: {
  title: string;
  liveLink: string;
  stacked: boolean;
}) {
  return (
    <Link
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open live demo of ${title}`}
      title={`Open live demo of ${title}`}
      className={[
        demoLinkClasses,
        stacked ? "w-full" : "sm:w-auto sm:min-w-[120px]",
      ].join(" ")}
    >
      <span>Live Demo</span>

      <ExternalLink
        className={[
          "ml-2 h-4 w-4",
          "transition-transform duration-200",
          "group-hover/demo:translate-x-0.5",
          "group-hover/demo:-translate-y-0.5",
        ].join(" ")}
        aria-hidden="true"
      />
    </Link>
  );
}

export function ProjectLinks({ title, github, liveLink }: ProjectLinksProps) {
  if (!github && !liveLink) {
    return null;
  }

  const stacked = github ? isLongRepoName(github) : false;

  return (
    <div
      className={[
        "mt-auto flex flex-col",
        "border-t border-border/60",
        "bg-muted/20",
        "px-5 py-4 sm:px-6",
      ].join(" ")}
    >
      {/* Footer Header */}
      <div className="mb-3 flex w-full items-center gap-3">
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Project Links
        </span>

        <span className="h-px flex-1 bg-border/60" />
      </div>

      {/* Links */}
      <div
        className={[
          "flex w-full gap-2.5",
          stacked ? "flex-col" : "flex-col sm:flex-row",
        ].join(" ")}
      >
        {github && (
          <GithubLink title={title} github={github} stacked={stacked} />
        )}

        {liveLink && (
          <LiveDemoLink title={title} liveLink={liveLink} stacked={stacked} />
        )}
      </div>
    </div>
  );
}
