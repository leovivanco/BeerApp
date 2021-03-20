import DropDownHtml from './DropDownHtml'

const ModalHtml = ({ image_url, ibu, abv, description, name }) => {
  const imgHtml = `<img class="modal__img" src="${image_url}" />`
  return `
    <div class="modal">
      <div class="col">
       <div class="modal__container">
        ${image_url ? imgHtml : 'No Image availlable'}
          <span class="modal__ibu">IBU: ${ibu}</span>
          <span class="modal__abv">ABV: ${abv}</span>
        </div>
        <h3 class="modal__title">${name}</h3>
      </div>
      <div class="col">
        <div class="modal__description">
        <p>${description}</p></div>
        ${DropDownHtml()}
      </div>
    </div>
  `
}

export default ModalHtml
