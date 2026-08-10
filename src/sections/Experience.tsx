import { BriefcaseBusiness } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Professional and independent engineering experience."
    >
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-border md:block" />

        <div className="space-y-8">
          {EXPERIENCE.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="relative md:pl-14"
            >
              <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border bg-background md:flex">
                <BriefcaseBusiness className="h-4 w-4 text-primary" />
              </div>

              <Card className="transition-shadow duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="mt-1 font-medium text-primary">
                        {item.company}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {item.duration}
                    </p>
                  </div>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  {item.technologies && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <Badge key={technology} variant="secondary">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
