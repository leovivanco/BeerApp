const ModalHtml = ({ image_url, ibu, abv, description, name }) => {
  const imgHtml = `<img class="modal__img" src="${image_url}" />`
  console.log(imgHtml)
  return `
<div class="modal">
  ${image_url ? imgHtml : 'No Image availlable'}

  <h3>${name}</h3>
  <div>${ibu}</div>
  <div>${abv}</div>
  <div>
    <p>${description}</p>
  </div>
</div>
`
}

export default ModalHtml
