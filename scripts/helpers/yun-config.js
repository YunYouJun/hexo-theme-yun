/* global hexo */
const { URL } = require('url')

hexo.extend.helper.register('yun_config', function() {
  const { config, theme, yun_version, __, url_for, page } = this
  const exportConfig = {
    hostname: new URL(config.url).hostname || config.url,
    root: config.root,
    title: theme.banner.title || config.title,
    version: yun_version,
    mode: theme.mode,
    copycode: theme.codeblock.copy_btn,
    page: {
      isPost: this.is_post(),
    },
    i18n: {
      placeholder: theme.search.placeholder || __('search.placeholder'),
      empty: __('search.empty'),
      hits: __('search.hits'),
      hits_time: __('search.hits_time'),
    },
  }

  // anonymous_image
  if (theme.anonymous_image)
    exportConfig.anonymous_image = theme.anonymous_image

  // say
  if (theme.say.enable) {
    if (theme.say.hitokoto.enable) {
      exportConfig.say = {
        api: theme.say.hitokoto.api,
        hitokoto: true,
      }
    }
    else {
      exportConfig.say = {
        api: theme.say.api,
      }
    }
  }

  // algolia
  if (theme.algolia_search.enable) {
    // avoid config.algolia is undefined
    config.algolia = Object.assign({}, config.algolia)
    exportConfig.algolia = {
      appID:
        process.env.ALGOLIA_APP_ID
        || config.algolia.appID
        || config.algolia.applicationID,
      apiKey: process.env.ALGOLIA_API_KEY || config.algolia.apiKey,
      indexName: process.env.ALGOLIA_INDEX_NAME || config.algolia.indexName,
      hits: theme.algolia_search.hits,
    }
  }

  // local search
  if (theme.local_search.enable) {
    const search_path = config.search.path || 'search.xml'
    exportConfig.local_search = {
      path: config.root + search_path,
    }
  }

  // 点击效果
  if (theme.fireworks && theme.fireworks.enable) {
    exportConfig.fireworks = {
      colors: theme.fireworks.colors,
    }
  }

  // waline
  if (theme.waline && theme.waline.enable) {
    exportConfig.waline = {
      config: Object.assign(theme.waline, {
        el: '#waline',
        lang: (theme.waline.lang || config.language || 'zh-CN'),
        path: url_for(page.path),
      }),
      cdn: theme.vendors.waline_js,
      dark: 'html.dark',
    }
  }

  // vendors
  exportConfig.vendors = {
    darken: theme.vendors.darken,
  }

  return `<script id="yun-config">
    window.Yun = {}
    window.CONFIG = ${JSON.stringify(exportConfig)};
  </script>`
})

// wordcloud
hexo.extend.helper.register('wordcloud_config', function(color) {
  const { config, theme } = this
  const wordcloud_config = {}
  const list = []
  const tags = hexo.locals.get('tags')
  tags.forEach((tag) => {
    list.push([tag.name, tag.length / 10 + 1, config.root + tag.path])
  })
  wordcloud_config.list = list
  wordcloud_config.fontFamily = theme.font.sans_serif.family
  wordcloud_config.fontWeight = theme.font.sans_serif.weight
  wordcloud_config.gridSize = 10
  wordcloud_config.weightFactor = 13
  wordcloud_config.backgroundColor = 'transparent'
  wordcloud_config.color = color
  return wordcloud_config
})
