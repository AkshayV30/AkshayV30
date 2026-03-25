import { renderApp } from "./shared/layouts/main.layout.js";
import { initSkillToggle } from "./features/skills/skills.behavior.js";
import { initThemeToggle } from "./core/theme.js";
import { initMotion } from "./core/motion.js";

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    renderApp();
    initSkillToggle();
    initThemeToggle();
    initMotion();
  });
}

init();
