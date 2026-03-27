export const Section = (id, title, content) => `
<section class="l-section ${id}" id="${id}">
  <div class="l-container ">
    ${title ? `<h2 class="c-heading">${title}</h2>` : ""}
    <div class="l-section-content">
      ${content}
    </div>
  </div>
</section>
`;
