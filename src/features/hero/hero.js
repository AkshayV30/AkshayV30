import { Section } from "../../shared/components/section.component.js";
import { Typewriter } from "./typewriter.js";

export const Hero = () =>
  Section(
    "hero",
    "", // no heading needed
    `
      ${Typewriter({
        id: "hero-typewriter",
        roles: [
          "DevOps Engineer",
          "Cloud Engineer",
          "SRE",
          "Automation Engineer",
        ],
        subtitle:
          "Front End Development • Cloud • AWS • GCP • CI/CD • Automation",
        className: "c-hero",
      })}
    `,
  );
