"use client";

import * as React from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

import { EXTERNAL_PROFILES } from "@/data/external-profiles";
import { GCP_SKILL_BADGES, GCP_PROFILE_URL } from "@/data/gcp-skill-badges";

export function VerifiedProfiles() {
  const [showGcpBadges, setShowGcpBadges] = React.useState(false);

  return (
    <Section
      id="verified-profiles"
      title="Verified Profiles & Technical Evidence"
      description="Independent profiles and verifiable credentials that give recruiters direct evidence of technical skills, coding activity, cloud learning, and engineering work."
    >
      {/* Profile cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EXTERNAL_PROFILES.map((profile) => {
          const Icon = profile.icon;

          return (
            <Card
              key={profile.id}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex h-full flex-col p-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    {profile.eyebrow && (
                      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {profile.eyebrow}
                      </p>
                    )}

                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold leading-tight text-foreground">
                        {profile.name}
                      </h3>

                      <BadgeCheck
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-label="Public verification profile"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {profile.description}
                </p>

                {/* Highlights */}
                {profile.highlights?.length ? (
                  <div className="mt-5 space-y-2">
                    {profile.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />

                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Skills */}
                {profile.stats?.length ? (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {profile.stats.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <div className="border-t pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full cursor-pointer"
                    >
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify ${profile.name} profile`}
                      >
                        <ExternalLink
                          className="mr-2 h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        Verify on {profile.name}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Google Cloud evidence */}
      <div className="mt-10">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">Google Cloud Skill Badges</h3>

                    <span className="rounded-full border bg-muted/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      {GCP_SKILL_BADGES.length} badges
                    </span>
                  </div>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                    Selected hands-on Google Cloud achievements covering
                    infrastructure, Terraform, AI agents, Gemini, multimodality,
                    networking, and cloud application services.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2">
                <Button size="sm" variant="outline" className="cursor-pointer">
                  <a
                    href={GCP_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View public profile
                    <ArrowUpRight
                      className="ml-1.5 h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                  </a>
                </Button>

                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowGcpBadges((previous) => !previous)}
                  aria-expanded={showGcpBadges}
                  aria-controls="gcp-skill-badges"
                  className="cursor-pointer"
                >
                  {showGcpBadges ? "Hide badges" : "View badges"}

                  <ChevronDown
                    className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${
                      showGcpBadges ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </div>

            {showGcpBadges && (
              <div id="gcp-skill-badges" className="border-t bg-muted/10 p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {GCP_SKILL_BADGES.map((badge) => (
                    <Card
                      key={badge.id}
                      className="bg-background transition-shadow hover:shadow-md"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                              {badge.issuer}
                            </p>

                            <h4 className="mt-1 font-semibold leading-tight">
                              {badge.name}
                            </h4>

                            <p className="mt-2 text-xs text-muted-foreground">
                              Earned {badge.completed}
                            </p>
                          </div>

                          <BadgeCheck
                            className="h-5 w-5 shrink-0 text-primary"
                            aria-label="Verified Google Cloud skill badge"
                          />
                        </div>

                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                          {badge.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {badge.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border bg-muted/40 px-2 py-1 text-[11px] font-medium text-muted-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 border-t pt-4">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-auto cursor-pointer px-0 text-xs"
                          >
                            <a
                              href={badge.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Verify this badge
                              <ExternalLink
                                className="ml-1.5 h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export default VerifiedProfiles;
