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
    let search_path = config.search.path || "search.xml";
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
    const Yun = window.Yun || {};
    window.CONFIG = ${JSON.stringify(exportConfig)};
  </script>`;
});

// wordcloud
hexo.extend.helper.register("wordcloud_config", function(color) {
  let { config, theme } = this;
  const wordcloud_config = {};
  let list = [];
  const tags = hexo.locals.get("tags");
  tags.forEach((tag) => {
    list.push([tag.name, tag.length / 10 + 1, config.root + tag.path]);
  });
  wordcloud_config.list = list;
  wordcloud_config.fontFamily = theme.font.sans_serif.family;
  wordcloud_config.fontWeight = theme.font.sans_serif.weight;
  wordcloud_config.gridSize = 10;
  wordcloud_config.weightFactor = 13;
  wordcloud_config.backgroundColor = "transparent";
  wordcloud_config.color = color;
  return wordcloud_config;
});
