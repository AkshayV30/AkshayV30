import { experience } from "./exp.data.js";
import { Section } from "../../shared/components/section.component.js";
import { renderList } from "../../core/utils.js";

export const Experience = () =>
  Section(
    "experience",
    "Experience",
    renderList(
      experience,
      (e) => `
        <div class="c-exp">
          <h3>${e.role}</h3>
          <p>${e.company}</p>
          <small>${e.duration}</small>
        </div>
      `,
    ),
  );
