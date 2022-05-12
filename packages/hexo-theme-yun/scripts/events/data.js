const fs = require('fs')
const path = require('path')

module.exports = (hexo) => {
  // set default config
  const aboutSite = path.resolve(process.cwd(), 'source/about/site.md')
  hexo.theme.config.hasAboutSite = fs.existsSync(aboutSite)
}
