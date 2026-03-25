import { skills } from "./skills.data.js";
import { getSkillIcon } from "./skills.icons.js";

import { Section } from "../../shared/components/section.component.js";
import { renderList } from "../../core/utils.js";

export const Skills = () =>
  Section(
    "skills",
    "Skills",
    `
    <div class="l-skills">
      ${Object.entries(skills)
        .map(
          ([category, items]) => `
            <div class="c-skill-group">
              <button class="c-skill-group__toggle" data-skill-toggle>
                ${category}
              </button>

              <div class="c-skill-group__content">
                ${renderList(
                  items,
                  (s) => `
                    <span class="c-tag">
                      ${getSkillIcon(s)} ${s}
                    </span>
                  `,
                )}
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
    `,
  );
