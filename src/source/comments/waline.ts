import { getScript } from '../utils'

function initWaline() {
  getScript(window.CONFIG.waline.cdn, () => {
    // eslint-disable-next-line no-new
    new window.Waline(window.CONFIG.waline.config)
  }, window.Waline)
}

document.addEventListener('DOMContentLoaded', initWaline)
document.addEventListener('pjax:success', initWaline)
