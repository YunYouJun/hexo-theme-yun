import { getScript } from '../utils'

getScript(window.CONFIG.waline.cdn, () => {
  // eslint-disable-next-line no-new
  new window.Waline(window.CONFIG.waline.config)
}, window.Waline)
