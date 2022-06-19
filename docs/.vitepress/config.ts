import { defineConfig } from 'vitepress'

import { nav } from './configs/navbar'
import { sidebar } from './configs/sidebar'
import { head } from './configs/head'

export default defineConfig({
  head,
  lang: 'zh-CN',
  title: 'Hexo-Theme-Yun',
  description: 'A powerful & simple & fast theme for Hexo. 一个对可爱自以为是的 Hexo 主题。',
  lastUpdated: true,

  locales: {
    '/en/': {
      lang: 'en-US',
      label: 'English',
      description: 'A powerful & simple & fast theme for Hexo.',
      selectText: 'English',
    },
    '/': {
      lang: 'zh-CN',
      label: '简体中文',
      description: 'A powerful & simple & fast theme for Hexo. 一个对可爱自以为是的 Hexo 主题。',
      selectText: '简体中文',
    },
  },

  langs: {
    '/en/': {
      lang: 'en-US',
      label: 'English',
    },
    '/': {
      lang: 'zh-CN',
      label: '简体中文',
    },
  },

  themeConfig: {
    logo: '/logo.svg',

    // iconClass: "i-ri-cloud-line",
    // shortTitle: 'Yun',

    editLink: {
      pattern: 'https://github.com/YunYouJun/hexo-theme-yun/edit/dev/docs/:path',
      text: '帮助改善此页面！( ￣□￣)/',
    },

    socialLinks: [
      {
        icon: 'github', link: 'https://github.com/YunYouJun/hexo-theme-yun',
      },
      {
        icon: 'twitter', link: 'https://twitter.com/YunYouJun',
      },
      {
        icon: 'discord', link: 'https://discord.gg/99bK4CaBhQ',
      },
    ],

    nav: nav(),
    sidebar,

    algolia: {
      appId: 'N2XEWA4N6V',
      apiKey: '62c0b4aa58760ed3804e4fae0457c202',
      indexName: 'yunyoujun',
    },

    localeLinks: {
      // text: '选择语言',
      items: [
        { text: 'English', link: '/en/guide/' },
        { text: '简体中文', link: '/guide/' },
      ],
    },

    footer: {
      message: 'Released under the SATA | MIT License.',
      copyright: 'Copyright © 2020-PRESENT YunYouJun',
    },
  },

  // plugins: [
  //   [
  //     "@vuepress/google-analytics",
  //     {
  //       id: "UA-121354150-9",
  //     },
  //   ],
  // ],
})
