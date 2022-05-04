import { isHome, renderKatex } from './utils'

function initPjax() {
  // eslint-disable-next-line no-new
  new window.Pjax({
    selectors: ['title', '.js-Pjax', 'main', 'aside'],
  })
}

/**
 * 使用 PJAX 成功时触发
 */
function onPjaxSuccess() {
  isHome()
  renderKatex()
}

document.addEventListener('DOMContentLoaded', initPjax)
document.addEventListener('DOMContentLoaded', isHome)
document.addEventListener('pjax:success', onPjaxSuccess)
