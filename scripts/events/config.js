const { merge } = require('./utils')

/**
 * 合并语言
 * @param {*} hexo
 * @param {*} languages
 */
function mergeLanguages(hexo, languages) {
  const { language } = hexo.config
  const { i18n } = hexo.theme

  const mergeLang = (lang) => {
    i18n.set(lang, merge(i18n.get([lang]), languages[lang]))
  }

  if (Array.isArray(language)) {
    for (const lang of language)
      mergeLang(lang)
  }
  else {
    mergeLang(language)
  }
}

module.exports = (hexo) => {
  const data = hexo.locals.get('data')

  // config for test
  if (data.test && process.env.NODE_ENV === 'test')
    merge(hexo.theme.config, data.test)

  // merge languages
  if (data.languages)
    mergeLanguages(hexo, data.languages)
}
