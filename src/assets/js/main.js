import '../css/main.scss'
import $ from 'jquery'
import modal from './modal'
import { getBeers, getBeersById } from './http'
import ModalHtml from './ModalHtml'
import CardHtml from './CardHtml'

window.onload = async function () {
  const htmlCards = document.querySelector('.cards')
  const beers = await getBeers()
  const beersHtml = beers
    .map(({ id, name, image_url, abv, ibu }) =>
      CardHtml({ id, name, image_url, abv, ibu })
    )
    .join('')

  htmlCards.innerHTML = beersHtml

  $('.card').on('click', async function (event) {
    event.preventDefault()
    const t = $(this)
    getBeersById(t.data('id'))
      .then((success) => {
        const { image_url, ibu, abv, description, name } = success[0]
        modal(ibu ? ibu.toString()[0] : null)
          .setContent(ModalHtml({ image_url, ibu, abv, description, name }))
          .open()
      })
      .catch((err) => modal(1).setContent(`Failed: ${err}`).open())
  })
}
