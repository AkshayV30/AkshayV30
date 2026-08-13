import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { CASE_STUDIES } from "@/data/case-studies";

export function CaseStudies() {
  return (
    <Section
      id="caseStudies"
      title="Case Studies"
      description="A closer look at the engineering problems, approaches and technologies behind selected projects."
    >
      <div className="grid w-full gap-6 lg:grid-cols-3">
        {CASE_STUDIES.map((caseStudy) => (
          <Card
            key={caseStudy.title}
            className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <CardContent className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  Case Study
                </span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <h3 className="text-xl font-semibold">{caseStudy.title}</h3>

              <div className="mt-5 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide">
                    Problem
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide">
                    Solution
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.technologies.map((technology) => (
                  <Badge key={technology} variant="outline">
                    {technology}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default CaseStudies;
