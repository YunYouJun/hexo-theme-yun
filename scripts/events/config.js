const { merge } = require("./utils");

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
    let { language } = hexo.config;
    let { i18n } = hexo.theme;

    const mergeLang = (lang) => {
      i18n.set(lang, merge(i18n.get([lang]), data.languages[lang]));
    };

    if (Array.isArray(language)) {
      for (let lang of language) {
        mergeLang(lang);
      }
    } else {
      mergeLang(language);
    }
  }
};
