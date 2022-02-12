import * as utils from './utils'

window.Yun.utils = utils

function initPage() {
  window.Yun.utils.registerToggleSidebar()
  window.Yun.utils.registerScrollPercent()

  window.Yun.utils.insertCopyCodeBtn()
  window.Yun.utils.wrapTable()

  // dark mode
  utils.getScript(window.CONFIG.vendors.darken, () => {
    // eslint-disable-next-line new-cap, no-new
    new window.darken({
      container: 'html',
      class: 'dark',
      toggle: '#toggle-mode-btn',
    })
  }, window.darken)
}

utils.copyright()
document.addEventListener('DOMContentLoaded', initPage)
