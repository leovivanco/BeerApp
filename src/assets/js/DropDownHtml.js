import $ from 'jquery'

const DropDownHtml = () => `
  <div class="dropdown">
  <button class="dropdown__button">Order</button>

    <ul class="dropdown__list">
      <li class="dropdown__item"><a class="link" href="#">Test 1</a></li>
      <li class="dropdown__item dropdown--sub">
        <a class="link" href="#">Test 2</a>
        <ul>
          <li><a class="link" href="#">Sub1</a></li>
          <li><a class="link" href="#">Sub2</a></li>
          <li><a class="link" href="#">Sub3</a></li>
        </ul>
      </li>
      <li class="dropdown__item dropdown__item dropdown--sub">
        <a class="link" href="#">Test 3</a>
        <ul>
          <li><a class="link" href="#">Sub1</a></li>
          <li><a class="link" href="#">Sub2</a></li>
          <li><a class="link" href="#">Sub3</a></li>
        </ul>
      </li>
    </ul>
  </div>
`

$('body').on('click', '.dropdown__button', function (event) {
  event.preventDefault()
  const t = $(this)
  const parent = t.parent()
  parent.find('.dropdown__list').slideToggle()
})

$('body').on('click', '.dropdown__item', function (event) {
  const t = $(this)
  const ulChild = t.find('> ul')

  if (!ulChild.is(':visible')) {
    $('.dropdown__item ul').slideUp()
    ulChild.slideToggle()
  }
})

export default DropDownHtml
