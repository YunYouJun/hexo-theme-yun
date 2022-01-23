import * as utils from './utils'

window.Yun.utils = utils

function initPage() {
  window.Yun.utils.registerToggleSidebar()
  window.Yun.utils.registerScrollPercent()

  window.Yun.utils.insertCopyCodeBtn()
  window.Yun.utils.wrapTable()
}

utils.copyright()
document.addEventListener('DOMContentLoaded', initPage)
