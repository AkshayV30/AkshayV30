"use client";

import { Section } from "@/components/ui/section";

import { EXTERNAL_PROFILES } from "@/data/external-profiles";

import VerifiedProfileList from "./List";

export function VerifiedProfiles() {
  return (
    <Section
      id="verified-profiles"
      title="Verified Profiles & Technical Evidence"
      description="Explore my public technical profiles, verified credentials, cloud learning, coding practice, and engineering work."
    >
      <VerifiedProfileList profiles={EXTERNAL_PROFILES} />
    </Section>
  );
}

export default VerifiedProfiles;
