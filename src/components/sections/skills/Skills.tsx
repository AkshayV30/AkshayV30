"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { skillContainerVariants } from "@/app/motions";
import { Section } from "@/components/ui/section";
import { SKILL_GROUPS } from "@/data/skills";

import { SkillGroupCard } from "./skill-group-card";

export function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    SKILL_GROUPS[0]?.category ?? null,
  );

  const toggleCategory = (category: string) => {
    setOpenCategory((current) => (current === category ? null : category));
  };

  return (
    <Section
      id="skills"
      title="Skills"
      description="Technologies and tools I use to build, automate, deploy, and operate modern software systems."
    >
      <motion.div
        variants={skillContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_GROUPS.map((group) => (
          <SkillGroupCard
            key={group.category}
            group={group}
            isOpen={openCategory === group.category}
            onToggle={() => toggleCategory(group.category)}
          />
        ))}
      </motion.div>
    </Section>
  );
}

export default Skills;
