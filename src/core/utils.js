export const renderList = (items, cb) => {
  if (!Array.isArray(items)) {
    console.error("renderList expected array but got:", items);
    return "";
  }
  return items.map(cb).join("");
};

export const navLink = (href, label) => `
  <a class="c-nav__link" href="${href}">${label}</a>
`;
