"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SKILL_GROUPS } from "@/data/skills";

export function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    SKILL_GROUPS[0]?.category ?? null,
  );

  return (
    <Section
      id="skills"
      title="Skills"
      description="Technologies and tools I use to build, automate and operate software systems."
    >
      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => {
          const isOpen = openCategory === group.category;

          return (
            <Card
              key={group.category}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => setOpenCategory(isOpen ? null : group.category)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={isOpen}
              >
                <div>
                  <h3 className="text-lg font-semibold">{group.category}</h3>

                  {group.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  )}
                </div>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <CardContent className="border-t pt-5">
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="gap-1.5 px-3 py-1.5"
                        >
                          <span aria-hidden="true">{skill.icon}</span>
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
