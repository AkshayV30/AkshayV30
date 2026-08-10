import { Mail } from "lucide-react";

import { BrandIcon } from "@/components/ui/brandIcons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export function Contact() {
  return (
    <Section id="contact" className="py-24">
      <Card className="mx-auto w-full max-w-3xl">
        <CardContent className="flex flex-col items-center px-6 py-10 text-center sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Let&apos;s connect
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            I&apos;m interested in opportunities involving DevOps, cloud
            engineering, backend development, automation, and cloud-native
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button>
              <a href="mailto:your@email.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>

            <Button variant="outline">
              <a
                href="https://github.com/AkshayV30"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Akshay Minz on GitHub"
              >
                <BrandIcon name="github" className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button variant="outline">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Akshay Minz on LinkedIn"
              >
                <BrandIcon name="linkedin" className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}

export default Contact;
