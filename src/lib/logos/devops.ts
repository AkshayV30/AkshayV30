import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/devops.json";

type NestedRegistry = {
  [key: string]: BrandLogo | NestedRegistry;
};

const cast = <T extends NestedRegistry>(value: unknown) => value as T;

export const DEVOPS_LOGOS = cast<{
  infrastructureAsCode: Record<"ansible" | "terraform", BrandLogo>;

  containerizationAndOrchestration: Record<
    "dockerMark" | "kubernetes" | "redHatOpenShift",
    BrandLogo
  >;

  sourceCodeManagement: Record<"github", BrandLogo>;

  ciAndCd: Record<
    "githubActions" | "tekton" | "apacheMaven" | "jenkins",
    BrandLogo
  >;

  monitoring: Record<"grafana" | "prometheus", BrandLogo>;
}>(manifest);

export const DEVOPS_LOGO_MAP = {
  ansible: DEVOPS_LOGOS.infrastructureAsCode.ansible,
  terraform: DEVOPS_LOGOS.infrastructureAsCode.terraform,

  docker: DEVOPS_LOGOS.containerizationAndOrchestration.dockerMark,

  kubernetes: DEVOPS_LOGOS.containerizationAndOrchestration.kubernetes,

  openshift: DEVOPS_LOGOS.containerizationAndOrchestration.redHatOpenShift,

  github: DEVOPS_LOGOS.sourceCodeManagement.github,

  githubActions: DEVOPS_LOGOS.ciAndCd.githubActions,

  tekton: DEVOPS_LOGOS.ciAndCd.tekton,

  apacheMaven: DEVOPS_LOGOS.ciAndCd.apacheMaven,

  jenkins: DEVOPS_LOGOS.ciAndCd.jenkins,

  grafana: DEVOPS_LOGOS.monitoring.grafana,

  prometheus: DEVOPS_LOGOS.monitoring.prometheus,
} satisfies Record<string, BrandLogo>;
