"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function Typewriter({
  roles,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 1200,
}: TypewriterProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!roles.length) return;

    const currentRole = roles[roleIndex];

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && text === currentRole) {
      delay = pauseDuration;
    }

    if (isDeleting && text === "") {
      delay = 300;
    }

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.slice(0, text.length + 1);
          setText(nextText);

          if (nextText === currentRole) {
            setIsDeleting(true);
          }
        } else {
          const nextText = currentRole.slice(0, text.length - 1);
          setText(nextText);

          if (nextText === "") {
            setIsDeleting(false);
            setRoleIndex((current) => (current + 1) % roles.length);
          }
        }
      },
      delay + Math.random() * 40,
    );

    return () => window.clearTimeout(timeout);
  }, [
    roles,
    roleIndex,
    text,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <div>
      <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {text}
        <span
          className="ml-1 inline-block animate-pulse text-primary"
          aria-hidden="true"
        >
          |
        </span>
      </h1>

      <p className="mt-5 text-base text-muted-foreground sm:text-lg">
        Frontend Development • Cloud • AWS • GCP • CI/CD • Automation
      </p>
    </div>
  );
}

export default Typewriter;
