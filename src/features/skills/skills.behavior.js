export function initSkillToggle() {
  document.querySelectorAll("[data-skill-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".c-skill-group");
      group.classList.toggle("is-open");
    });
  });
}
