/**
 * Typewriter Component
 *
 * - Lazy starts using IntersectionObserver
 * - Pauses on tab switch (Page Visibility API)
 * - Supports multiple instances
 * - Simulates human typing
 */

// Stores running instances (supports multiple typewriters)
const instances = new Map();

/**
 * UI component → returns HTML + schedules init after DOM update
 */
export const Typewriter = ({
  id = "typewriter",
  roles = [],
  subtitle = "",
  className = "",
}) => {
  // Ensure DOM is ready before querying element
  queueMicrotask(() => {
    setupTypewriter({ id, roles });
  });

  return `
    <div class="u-typing-effect ${className}">
      <h1 class="u-typing-effect__heading" id="${id}"></h1>
      ${subtitle ? `<p class="u-typing-effect__subtitle">${subtitle}</p>` : ""}
    </div>
  `;
};

/**
 * Controls lifecycle:
 * - start only when visible
 * - pause/resume on tab switch
 */
const setupTypewriter = ({ id, roles }) => {
  const el = document.getElementById(id);
  if (!el || !roles.length) return;

  let isRunning = false;

  const start = () => {
    if (isRunning) return; // prevent duplicate init
    isRunning = true;
    runTypewriter({ id, roles });
  };

  // Start only when element is visible (performance optimization)
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        start();
        observer.disconnect();
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(el);

  // Pause/resume when user switches tabs
  document.addEventListener("visibilitychange", () => {
    const instance = instances.get(id);
    if (!instance) return;

    if (document.hidden) {
      clearTimeout(instance.timeout);
      instance.paused = true;
    } else if (instance.paused) {
      instance.paused = false;
      instance.tick();
    }
  });
};

/**
 * Core typing engine
 */
function runTypewriter({
  id,
  roles,
  baseSpeed = 90,
  deleteSpeed = 50,
  pause = 1200,
}) {
  const el = document.getElementById(id);
  if (!el) return;

  let i = 0;
  let j = 0;
  let isDeleting = false;

  const instance = {
    timeout: null,
    paused: false,
    tick,
  };

  instances.set(id, instance);

  // Add randomness for human-like typing
  const slowDown = (speed) => speed + Math.random() * 60;

  function tick() {
    if (instance.paused) return;

    const current = roles[i];
    j = isDeleting ? j - 1 : j + 1;

    el.textContent = current.substring(0, j);

    let delay = slowDown(isDeleting ? deleteSpeed : baseSpeed);

    // Pause at full word before deleting
    if (!isDeleting && j === current.length) {
      isDeleting = true;
      delay = pause + Math.random() * 500;
    }

    // Move to next word after deletion
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      delay = 300;
    }

    instance.timeout = setTimeout(tick, delay);
  }

  tick();
}
