export const Section = (id, title, content) => `
<section class="l-section ${id}" id="${id}">
  <div class="l-container l-stack">
    <h2 class="c-heading">${title}</h2>
    ${content}
  </div>
</section>
`;
