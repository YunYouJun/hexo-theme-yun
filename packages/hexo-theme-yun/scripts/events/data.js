const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')

module.exports = (hexo) => {
  // set default config
  const aboutSite = path.resolve(process.cwd(), 'source/about/site.md')
  hexo.theme.config.hasAboutSite = fs.existsSync(aboutSite)
}
