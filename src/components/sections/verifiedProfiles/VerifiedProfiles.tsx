"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";

import { EXTERNAL_PROFILES } from "@/data/external-profiles";

import VerifiedProfileList from "./List";

export function VerifiedProfiles() {
  return (
    <Section
      id="verified-profiles"
      title="Verified Profiles & Technical Evidence"
      description="A closer look at my hands-on work, technical learning, 
      and 
      verified credentials across software engineering,
       cloud, DevOps, and AI.
        "
    >
      <VerifiedProfileList profiles={EXTERNAL_PROFILES} />
    </Section>
  );
}

export default VerifiedProfiles;
