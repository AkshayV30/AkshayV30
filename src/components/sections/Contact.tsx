import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { GithubIcon, LinkedinIcon } from "@/lib/icons/SocialIcons";

export default function Contact() {
  return (
    <Section id="contact">
      <Card>
        <CardContent className="flex flex-col items-center p-8 text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Let&apos;s connect
          </h2>

          <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
            I&apos;m interested in opportunities involving DevOps, cloud
            engineering, backend development, automation and cloud-native
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button>
              <a href="mailto:your@email.com">
                <Mail className="h-4 w-4" />
                <span className="ml-2">Email Me</span>
              </a>
            </Button>

            <Button variant="outline">
              <a
                href="https://github.com/AkshayV30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                <span className="ml-2">GitHub</span>
              </a>
            </Button>

            <Button variant="outline">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
