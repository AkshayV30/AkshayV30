import { navLink } from "../../core/utils.js";

const navItems = [
  ["#projects", "Projects"],
  ["#skills", "Skills"],
  ["#certs", "Certification"],
  ["#exp", "Experience"],
  ["#caseStudies", "Case Studies"],
  ["#contact", "Contact"],
];

export const header = () => `
<header class="l-header c-header u-flex u-items-center u-justify-end">
  <nav class="c-nav u-flex u-justify-between u-items-center u-gap-lg">
    ${navItems.map(([href, label]) => navLink(href, label)).join("")}
  </nav>
  <button type="button" class="c-toggle-theme js-toggle-theme "> </button>
</header>
`;
