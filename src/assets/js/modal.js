import tingle from 'tingle.js'

const modal = (bgNum = null) =>
  new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: [`bg${bgNum}`]
  })

export default modal
