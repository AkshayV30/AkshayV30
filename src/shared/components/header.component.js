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
<header class="l-header">

  <nav class="c-nav">
    ${navItems.map(([href, label]) => navLink(href, label)).join("")}
  </nav>

  <button type="button" class="c-toggle-theme js-toggle-theme"> </button>
</header>
`;
