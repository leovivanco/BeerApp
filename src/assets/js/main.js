import '../css/main.scss'
import $ from 'jquery'
import modal from './modal'
import { getBeers, getBeersById } from './http'
import ModalHtml from './ModalHtml'
import CardHtml from './CardHtml'

const onClickCard = () => {
  $('.card').on('click', function (event) {
    event.preventDefault()
    const t = $(this)
    const id = t.data('id')
    getBeersById(id)
      .then((success) => {
        const { image_url, ibu, abv, description, name } = success.data[0]
        modal(ibu ? ibu.toString()[0] : null)
          .setContent(ModalHtml({ image_url, ibu, abv, description, name }))
          .open()
      })
      .catch((err) => modal(1).setContent(`Failed: ${err}`).open())
  })
}

window.onload = async function () {
  const htmlCards = document.querySelector('.cards')
  getBeers()
    .then((result) => {
      const beersHtml = result.data
        .map(({ id, name, image_url, abv, ibu }) =>
          CardHtml({ id, name, image_url, abv, ibu })
        )
        .join('')

      htmlCards.innerHTML = beersHtml
      onClickCard()
    })
    .catch(
      (err) =>
        (htmlCards.innerHTML = `Something went wrong, try later: <strong>${err}</strong>`)
    )
}
