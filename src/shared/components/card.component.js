export const Card = ({ title, desc, extra }) => `
<div class="c-card">
  <h3 class="c-card__title">${title}</h3>
  <p class="c-card__desc">${desc}</p>
  ${extra ? `<div class="c-card__extra">${extra}</div>` : ""}
</div>
`;
