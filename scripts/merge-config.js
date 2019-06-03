/**
 * Note: configs.xxx in _data/starry.yml will replace configs in hexo.theme.config.xxx.
 */

const version = require('../package.json').version

hexo.extend.helper.register('version', function () {
  return version
})

hexo.on('generateBefore', function () {
  if (hexo.locals.get) {
    const data = hexo.locals.get('data')
    if (hexo.config && hexo.theme.config && data.starry) {
      hexo.theme.config = Object.assign(hexo.theme.config, data.starry)
    }
  }
})