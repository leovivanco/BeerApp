const CardHtml = ({ id, image_url, name, abv, ibu }) => `
  <div class="card" data-id="${id}">
    <div class="beer">
      <img class="beer__img" src="${image_url}" />
      <h3 class="beer__name">${name}</h3>
    </div>
    <div class="beer__info">
      <div class="beer__abv"><span>${abv}%</span></div>
      ${ibu ? `<div class="beer__ibu">IBU: ${ibu}</div>` : ""}
    </div>
  </div>
`;

export default CardHtml;
