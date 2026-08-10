import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { BrandIcon } from "@/components/ui/brandIcons";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/effects/Typewriter";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[calc(100vh-5rem)] items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Akshay Minz
          </h1>

          <div className="mt-4">
            <Typewriter
              roles={[
                "DevOps Engineer",
                "Cloud Engineer",
                "SRE",
                "Automation Engineer",
              ]}
            />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Building reliable software systems across frontend development,
            backend engineering, cloud infrastructure, CI/CD automation, and
            cloud-native technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg">
              <Link href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <a
                href="https://github.com/AkshayV30"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <BrandIcon name="github" className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <BrandIcon name="linkedin" className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
