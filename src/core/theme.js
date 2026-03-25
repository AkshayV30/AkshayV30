export function initThemeToggle() {
  const btn = document.querySelector(".js-toggle-theme");
  const root = document.documentElement;

  if (!btn) return;

  const THEMES = {
    light: "./../../assets/icons/sun.png",
    dark: "./../../assets/icons/moon.png",
  };

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    btn.innerHTML = `
      <img class="c-theme__icon" src="${THEMES[theme]}" alt="${theme}-icon" />
      
    `;
  }

  // init
  let currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme);

  btn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
  });
}
