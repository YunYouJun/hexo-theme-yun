/* global hexo */

const pkg = require('../../package.json')

hexo.on('generateBefore', () => {
  require('./data')(hexo)
  // Merge config.
  require('./config')(hexo)
})

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  hexo.log.info(`Yun version ${version}. Guide: ${pkg.homepage}`)
})
