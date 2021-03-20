import tingle from 'tingle.js'

const modal = (bgNum) =>
  new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: [`bg${bgNum}`],
    onOpen: function (e) {
      console.log('modal open', e)
    },
    onClose: function (e) {
      console.log('modal closed', e)
    },
    beforeClose: function () {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true // close the modal
    }
  })

export default modal
