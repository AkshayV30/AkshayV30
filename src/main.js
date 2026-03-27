import "./style.css";

import { renderApp } from "./shared/layouts/main.layout.js";
import { initSkillToggle } from "./features/skills/skills.behavior.js";
import { initThemeToggle } from "./core/theme.js";

async function initMotionSafe() {
  const { initMotion } = await import("./core/motion.js");
  initMotion();
}

async function initApp() {
  renderApp();

  initSkillToggle();
  initThemeToggle();

  await initMotionSafe();
}

document.addEventListener("DOMContentLoaded", initApp);

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    // console.log("[HMR] main.js updated");
    initApp();
  });
}
