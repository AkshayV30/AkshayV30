import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/lib/icons/SocialIcons";

import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/effects/Typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center"
    >
      <div className="w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">Hello, I&apos;m</p>

          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Akshay Minz
          </h1>

          <div className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
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
            <Button size="lg" radius="full">
              <Link href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" radius="full">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <a
                href="https://github.com/AkshayV30"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
