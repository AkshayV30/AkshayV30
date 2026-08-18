import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BrandIcon from "@/components/ui/brand-icon";
import { Section } from "@/components/ui/section";

import { CONTACT_LINKS } from "@/data/contacts";

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
              ({ label, href, icon: Icon, logo, variant, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`${buttonVariants({ variant })} gap-2 items-center flex`}
                >
                  {logo ? (
                    <BrandIcon
                      icon={logo}
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  ) : Icon ? (
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  ) : null}
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
