"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

import { CERTS } from "@/data/certificates";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import type { CertificationName } from "@/types/certification";

const INITIAL_LIKES: Record<CertificationName, boolean> = {
  "Google Cybersecurity": false,
  "IBM DevOps": false,
  "AWS Fundamentals": false,
};

export function Certificates() {
  const [likedCerts, setLikedCerts] =
    useState<Record<CertificationName, boolean>>(INITIAL_LIKES);

  const toggleLike = (cert: CertificationName) => {
    setLikedCerts((previous) => ({
      ...previous,
      [cert]: !previous[cert],
    }));
  };

  return (
    <Section
      id="certs"
      title="Certifications"
      description="Professional certifications supporting my cloud, DevOps and cybersecurity foundation."
    >
      <div className="grid w-full gap-4 md:grid-cols-3">
        {CERTS.map((cert) => {
          const isLiked = likedCerts[cert];

          return (
            <Card
              key={cert}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-semibold">{cert}</h3>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleLike(cert)}
                  className={`shrink-0 rounded-full transition-colors ${
                    isLiked
                      ? "bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 dark:bg-red-950/20 dark:hover:bg-red-950/40"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                  aria-label={isLiked ? `Unlike ${cert}` : `Like ${cert}`}
                  aria-pressed={isLiked}
                >
                  <Heart
                    className={`h-5 w-5 transition-transform active:scale-75 ${
                      isLiked ? "fill-current" : "fill-none"
                    }`}
                  />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default Certificates;
