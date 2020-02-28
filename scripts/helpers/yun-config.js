hexo.extend.helper.register("yun_config", function() {
  let { config, theme, yun_version, __ } = this;
  let exportConfig = {
    root: config.root,
    title: theme.banner.title || config.title,
    version: yun_version
  };

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
        input_placeholder: __("algolia_search.input_placeholder"),
        hits_empty: __("algolia_search.hits_empty"),
        hits_stats: __("algolia_search.hits_stats")
      }
    };
  }

  // valine
  if (theme.valine.enable) {
    let valine_lang = config.language || "zh-cn";
    let GUEST_INFO = ["nick", "mail", "link"];
    let meta = theme.valine.meta;
    meta = meta.split(",").filter(function(item) {
      return GUEST_INFO.indexOf(item) > -1;
    });
    exportConfig.valine = {
      el: "#valine-container",
      verify: theme.valine.verify,
      notify: theme.valine.notify,
      appId: theme.valine.appId,
      appKey: theme.valine.appKey,
      serverURLs: theme.valine.serverURLs,
      placeholder: theme.valine.placeholder,
      avatar: theme.valine.avatar,
      meta: meta,
      pageSize: theme.valine.pageSize,
      lang: valine_lang.toLowerCase(),
      visitor: theme.valine.visitor
    };
  }
  return `<script id="yun-config">
    let Yun = window.Yun || {};
    let CONFIG = ${JSON.stringify(exportConfig)};
  </script>`;
});
