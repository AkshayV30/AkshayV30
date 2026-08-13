"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  typewriterCursorVariants,
  typewriterTextVariants,
} from "@/app/motions";

interface TypewriterProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function Typewriter({
  roles,
  typingSpeed = 85,
  deletingSpeed = 45,
  pauseDuration = 1400,
}: TypewriterProps) {
  const shouldReduceMotion = useReducedMotion();

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const longestRole = useMemo(
    () =>
      roles.reduce(
        (longest, role) => (role.length > longest.length ? role : longest),
        "",
      ),
    [roles],
  );

  useEffect(() => {
    if (!roles.length) return;

    const currentRole = roles[roleIndex];

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && text === currentRole) {
      delay = pauseDuration;
    }

    if (isDeleting && text === "") {
      delay = 350;
    }

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.slice(0, text.length + 1);

          setText(nextText);

          if (nextText === currentRole) {
            setIsDeleting(true);
          }

          return;
        }

        const nextText = currentRole.slice(0, text.length - 1);

        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((current) => (current + 1) % roles.length);
        }
      },
      delay + Math.random() * 30,
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

  if (!roles.length) {
    return null;
  }

  return (
    <div
      className="relative inline-flex max-w-full items-center whitespace-nowrap"
      aria-live="polite"
      aria-label={text}
    >
      {/* Stable width prevents layout shifting between roles */}
      <span
        aria-hidden="true"
        className="invisible whitespace-nowrap font-mono text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {longestRole}
      </span>

      {/* Animated text */}
      <motion.span
        className="absolute left-0 inline-flex items-center whitespace-nowrap font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        initial={false}
      >
        <motion.span
          variants={typewriterTextVariants}
          initial={shouldReduceMotion ? false : "initial"}
          animate="animate"
        >
          {text}
        </motion.span>

        {/* Cursor */}
        <motion.span
          aria-hidden="true"
          className="ml-1 inline-block h-[1.15em] w-[2px] rounded-full bg-primary"
          variants={typewriterCursorVariants}
          initial="visible"
          animate={shouldReduceMotion ? "visible" : "blinking"}
        />
      </motion.span>
    </div>
  );
}

export default Typewriter;
