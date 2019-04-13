/**
 * Note: configs in _data/starry.yml will replace configs in hexo.theme.config.
 */

const version = require('../package.json').version

hexo.extend.helper.register('version', function () {
  return version
})

hexo.on('generateBefore', function () {
  // const rootConfig = hexo.config
  if (hexo.locals.get) {
    const data = hexo.locals.get('data')
    data && data.starry && (hexo.theme.config = data.starry)
  }
  // hexo.theme.config.rootConfig = rootConfig
})