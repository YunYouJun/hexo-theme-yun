import { getScript } from '../utils'

function initWaline() {
  getScript(window.CONFIG.waline.cdn, () => {
    window.Waline.init(window.CONFIG.waline.config)
  }, window.Waline)
}

document.addEventListener('DOMContentLoaded', initWaline)
document.addEventListener('pjax:success', initWaline)
