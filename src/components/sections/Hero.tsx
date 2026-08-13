"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/effects/Typewriter";
import { GithubIcon, LinkedinIcon } from "@/lib/icons/SocialIcons";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AkshayV30",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: LinkedinIcon,
  },
];

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
            <Typewriter
              roles={[
                "DevOps & Cloud Engineer",
                "Backend Engineer",
                "Cloud-Native Engineer",
                "DevOps Automation Engineer",
              ]}
            />
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
              className="rounded-xl px-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Link href="#projects" className="flex">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href="#contact" className="flex">
                Get In Touch
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Social Links */}
            <div className="ml-1 flex items-center gap-2 border-l border-border/60 pl-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Button
                  key={label}
                  variant="outline"
                  size="icon"
                  className={[
                    "h-11 w-11 rounded-full",
                    "border-border/70 bg-background",
                    "text-muted-foreground",
                    "shadow-sm",
                    "transition-all duration-200",
                    "hover:-translate-y-0.5",
                    "hover:border-foreground/30",
                    "hover:bg-foreground",
                    "hover:text-background",
                    "hover:shadow-md",
                  ].join(" ")}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
