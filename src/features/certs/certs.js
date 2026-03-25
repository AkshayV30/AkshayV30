import { certs } from "./certs.data.js";
import { Section } from "../../shared/components/section.component.js";
import { renderList } from "../../core/utils.js";

export const Certificate = () =>
  Section(
    "certs",
    "Certifications",
    `<ul class="certs__list">
      ${renderList(certs, (c) => `<li class="c-cert">${c}</li>`)}
    </ul>`,
  );
