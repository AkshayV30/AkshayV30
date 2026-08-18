"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Typewriter } from "@/components/effects/Typewriter";
import { Button } from "@/components/ui/button";

import { HERO_ROLES } from "@/data/hero";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center"
    >
      <div className="w-full">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            Software Engineering · Cloud · DevOps
          </p>

          {/* Name */}
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Akshay Minz
          </h1>

          {/* Animated Role */}
          <div className="mt-5 min-h-[2.25rem] sm:min-h-[2.75rem]">
            <Typewriter roles={HERO_ROLES} />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg md:text-xl">
            Building production-oriented software systems across backend
            engineering, cloud infrastructure, CI/CD automation, and
            cloud-native technologies.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="flex items-center cursor-pointer rounded-xl px-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Link href="#projects">View Projects</Link>
              <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="flex items-center cursor-pointer rounded-xl px-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href="#contact">Get In Touch</Link>
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
