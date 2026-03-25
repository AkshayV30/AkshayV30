import { projects } from "./projects.data.js";
import { Card } from "../../shared/components/card.component.js";
import { Section } from "../../shared/components/section.component.js";
import { renderList } from "../../core/utils.js";

export const Projects = () =>
  Section(
    "projects",
    "Projects",
    `<div class="l-projects__grid">
      ${renderList(projects, (p) =>
        Card({
          title: p.title,
          desc: p.desc,
          extra: `<small>${p.tech.join(", ")}</small>`,
        }),
      )}
    </div>`,
  );
