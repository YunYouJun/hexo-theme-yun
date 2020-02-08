module.exports = {
  head: [
    [
      'script',
      {
        'data-ad-client': 'ca-pub-2245427233262012',
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'hexo-theme-yun',
      description: 'A powerful & simple & fast theme for Hexo.'
      
    },
    '/en/': {
      lang: 'en-US',
      title: 'hexo-theme-yun',
      description: 'A powerful & simple & fast theme for Hexo.'
    }
  },
  themeConfig: {
    logo: '/yun.png',
    nextLinks: true,
    prevLinks: true,
    repo: 'YunYouJun/hexo-theme-yun',
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        editLinkText: '帮助改善此页面！( ￣□￣)/',
        nav: [
          { text: '使用指南', link: '/guide/' }
        ]
      },
      '/en/': {
        label: 'English',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Guide', link: '/guide/' }
        ]
      }
    }
  }
}