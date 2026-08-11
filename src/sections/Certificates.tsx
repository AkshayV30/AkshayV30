"use client";

import * as React from "react";
import { Award, CheckCircle2, ChevronDown, ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { CERTIFICATIONS } from "@/data/certificates";
import { COURSE_CERTIFICATES } from "@/data/course-certificate";

export function Certificates() {
  const [expandedCert, setExpandedCert] = React.useState<string | null>(null);

  const handleToggleCourses = React.useCallback((certId: string) => {
    setExpandedCert((previous) => (previous === certId ? null : certId));
  }, []);

  const featuredCertifications = React.useMemo(
    () => CERTIFICATIONS.filter((cert) => cert.featured),
    [],
  );

  return (
    <Section
      id="certifications"
      title="Certifications & Verified Skills"
      description="Professional credentials and independently verifiable learning across cybersecurity, DevOps, cloud infrastructure, and AI."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredCertifications.map((cert) => {
          const Icon = cert.icon;

          const isExpanded = expandedCert === cert.id;

          const courseCertificates = COURSE_CERTIFICATES.filter(
            (course) => course.parentCredentialId === cert.id,
          );

          return (
            <Card
              key={cert.id}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {cert.issuer}
                        </p>

                        <CheckCircle2
                          className="h-3.5 w-3.5 text-primary"
                          aria-label="Verified credential"
                        />
                      </div>

                      <h3 className="font-semibold leading-tight">
                        {cert.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Completion */}
                {cert.completed && (
                  <p className="mt-4 text-xs text-muted-foreground">
                    Completed {cert.completed}
                  </p>
                )}

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t pt-4">
                  {cert.verificationUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="cursor-pointer"
                    >
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink
                          className="mr-2 h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        Verify credential
                      </a>
                    </Button>
                  )}

                  {courseCertificates.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => handleToggleCourses(cert.id)}
                      className="cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded
                        ? "Hide coursework"
                        : `View ${courseCertificates.length} courses`}

                      <ChevronDown
                        className={`ml-1.5 h-4 w-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </Button>
                  )}
                </div>

                {/* Course Certificates */}
                {isExpanded && courseCertificates.length > 0 && (
                  <div className="mt-5 border-t pt-5">
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold">
                        Course certificates
                      </h4>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Individual course completions supporting this
                        credential.
                      </p>
                    </div>

                    <div className="space-y-2">
                      {courseCertificates.map((course) => (
                        <div
                          key={course.id}
                          className="rounded-lg border bg-muted/20 p-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-sm font-medium">
                                {course.name}
                              </p>

                              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                                <span>{course.completed}</span>

                                {course.grade && (
                                  <span>Grade: {course.grade}</span>
                                )}
                              </div>
                            </div>

                            <a
                              href={course.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                              aria-label={`Verify ${course.name}`}
                            >
                              <ExternalLink
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="h-4 w-4" aria-hidden="true" />

                  <span>Independently verifiable credential</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default Certificates;
