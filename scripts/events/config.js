const { merge } = require("./utils");

/**
 * 合并语言
 * @param {*} hexo
 * @param {*} languages
 */
function mergeLanguages(hexo, languages) {
  const { language } = hexo.config;
  const { i18n } = hexo.theme;

  const mergeLang = (lang) => {
    i18n.set(lang, merge(i18n.get([lang]), languages[lang]));
  };

  if (Array.isArray(language)) {
    for (let lang of language) {
      mergeLang(lang);
    }
  } else {
    mergeLang(language);
  }
}

module.exports = (hexo) => {
  const data = hexo.locals.get("data");

  /**
   * Merge configs from _data/yun.yml into hexo.theme.config.
   */
  if (data.yun) {
    merge(hexo.config, data.yun);
    merge(hexo.theme.config, data.yun);
    // hexo auto merge theme.config & config.theme_config
  }

  // config for test
  if (data.test && process.env.NODE_ENV === "test") {
    merge(hexo.theme.config, data.test);
  }

  // merge languages
  if (data.languages) {
    mergeLanguages(hexo, data.languages);
  }
};
