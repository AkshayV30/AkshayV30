export const render = (selector, content) => {
  document.querySelector(selector).innerHTML = content;
};
