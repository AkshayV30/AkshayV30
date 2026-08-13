import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { GithubIcon, LinkedinIcon } from "@/lib/icons/SocialIcons";

const CONTACT_LINKS = [
  {
    label: "Email Me",
    href: "mailto:akshayatwork.v30@gmail.com",
    icon: Mail,
    variant: "default" as const,
  },
  {
    label: "GitHub",
    href: "https://github.com/AkshayV30",
    icon: GithubIcon,
    variant: "outline" as const,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/minzakshaykumar03/",
    icon: LinkedinIcon,
    variant: "outline" as const,
    external: true,
  },
];

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
            {CONTACT_LINKS.map(
              ({ label, href, icon: Icon, variant, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`${buttonVariants({ variant })} gap-2 flex`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ),
            )}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
