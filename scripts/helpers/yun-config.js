hexo.extend.helper.register("yun_config", function() {
  let { config, theme, yun_version, __ } = this;
  let exportConfig = {
    root: config.root,
    title: theme.banner.title || config.title,
    version: yun_version,
  };

  // anonymous_image
  if (theme.anonymous_image) {
    exportConfig.anonymous_image = theme.anonymous_image;
  }
  // say
  if (theme.say.enable) {
    if (theme.say.hitokoto.enable) {
      exportConfig.say = {
        api: theme.say.hitokoto.api,
        hitokoto: true,
      };
    } else {
      exportConfig.say = {
        api: theme.say.api,
      };
    }
  }

  // algolia
  if (theme.algolia_search.enable) {
    exportConfig.algolia = {
      appID:
        process.env.ALGOLIA_APP_ID ||
        config.algolia.appID ||
        config.algolia.applicationID,
      apiKey: process.env.ALGOLIA_API_KEY || config.algolia.apiKey,
      indexName: process.env.ALGOLIA_INDEX_NAME || config.algolia.indexName,
      hits: theme.algolia_search.hits,
      labels: {
        input_placeholder:
          theme.search.placeholder || __("algolia_search.input_placeholder"),
        hits_empty: __("algolia_search.hits_empty"),
        hits_stats: __("algolia_search.hits_stats"),
      },
    };
  }

  // local search
  if (theme.local_search.enable) {
    let search_path = config.search.path;
    if (search_path.length === 0) {
      search_path = "search.xml";
    }
    exportConfig.local_search = {
      path: config.root + search_path,
    };
  }

  if (theme.fireworks && theme.fireworks.enable) {
    exportConfig.fireworks = {
      colors: theme.fireworks.colors,
    };
  }
  return `<script id="yun-config">
    let Yun = window.Yun || {};
    let CONFIG = ${JSON.stringify(exportConfig)};
  </script>`;
});

hexo.extend.helper.register("valine_config", function() {
  let { config, theme } = this;
  let valine_lang = theme.valine.lang || config.language || "zh-cn";
  const valineConfig = {
    el: "#valine-container",
    appId: theme.valine.appId,
    appKey: theme.valine.appKey,
    placeholder: theme.valine.placeholder,
    avatar: theme.valine.avatar,
    meta: Array.isArray(theme.valine.meta)
      ? theme.valine.meta
      : ["nick", "mail", "link"],
    pageSize: theme.valine.pageSize,
    lang: valine_lang.toLowerCase(),
    visitor: theme.valine.visitor,
    highlight: theme.valine.highlight,
    recordIP: theme.valine.recordIP,
    serverURLs: theme.valine.serverURLs,
    emojiCDN: theme.valine.emojiCDN,
    emojiMaps: theme.valine.emojiMaps,
    enableQQ: theme.valine.enableQQ,
    requiredFields: theme.valine.requiredFields,
  };
  return JSON.stringify(valineConfig);
});

hexo.extend.helper.register("minivaline_config", function() {
  const minivalineConfig = {
    el: "#minivaline-container",
    appId: theme.minivaline.appId,
    appKey: theme.minivaline.appKey,
    placeholder: theme.minivaline.placeholder,
    lang: theme.minivaline.lang,
    adminEmailMd5: theme.minivaline.adminEmailMd5,
    math: theme.minivaline.math,
    md: theme.minivaline.md,
  };
  return JSON.stringify(minivalineConfig);
});
