function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function merge(target, source) {
  for (const key in source) {
    if (isObject(target[key]) && isObject(source[key])) {
      merge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

module.exports = (hexo) => {
  if (!hexo.locals.get) return;

  let data = hexo.locals.get("data");
  if (!data) return;

  /**
   * Merge configs from _data/yun.yml into hexo.theme.config.
   */
  if (data.yun) {
    merge(hexo.config, data.yun);
    merge(hexo.theme.config, data.yun);
  } else {
    merge(hexo.theme.config, hexo.config.theme_config);
  }

  // config for test
  if (data.test && process.env.NODE_ENV === "test") {
    merge(hexo.theme.config, data.test);
  }

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
