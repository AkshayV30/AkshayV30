import { header } from "../components/header.component.js";
import { footer } from "../components/footer.component.js";

import { Hero } from "../../features/hero/hero.js";
import { Skills } from "../../features/skills/skills.js";
import { Experience } from "../../features/exp/exp.js";
import { Projects } from "../../features/projects/projects.js";
import { Contact } from "../../features/contact/contact.js";
import { Certificate } from "../../features/certs/certs.js";

export function renderApp() {
  const app = document.getElementById("vanilla-app");

  if (!app) {
    console.error("Root element #vanilla-app not found");
    return;
  }

  app.innerHTML = `
    ${header()}

    <main class="l-main">
      ${Hero()}
      ${Projects()}
      ${Skills()}
      ${Experience()}
      ${Certificate()}
      ${Contact()}
    </main>
    
    ${footer()}
  `;
}
