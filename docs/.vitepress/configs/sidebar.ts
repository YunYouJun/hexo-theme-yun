import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {

  '/en/': [
    {
      text: 'Guide',
      items: [
        {
          text: 'User\'s Guidance',
          link: '/en/guide/',
        },
        {
          text: 'Theme Configuration',
          link: '/en/guide/config',
        },
        {
          text: 'Theme page',
          link: '/en/guide/page',
        },
        {
          text: 'Third-party support',
          link: '/en/guide/third-party-support',
        },
        {
          text: 'Additional Dependency Library Support',
          link: '/en/guide/additional-package-support',
        },
        {
          text: 'FAQ',
          link: '/en/guide/faq',
        },
        {
          text: 'Migration Guide',
          link: '/en/guide/migrate',
        },
      ],
    },
    {
      text: 'About',
      items: [
        {
          text: 'About Theme',
          link: '/en/about/',
        },
        {
          text: 'Icons',
          link: '/en/about/icon',
        },
      ],
    },
  ],

  '/': [
    {
      text: '指南',
      items: [
        {
          text: '使用指南',
          link: '/guide/',
        },
        {
          text: '主题配置',
          link: '/guide/config',
        },
        {
          text: '页面配置',
          link: '/guide/page',
        },
        {
          text: '第三方支持',
          link: '/guide/third-party-support',
        },
        {
          text: '额外依赖库支持',
          link: '/guide/additional-package-support',
        },
        {
          text: 'FAQ',
          link: '/guide/faq',
        },
        {
          text: '迁移指南',
          link: '/guide/migrate',
        },
      ],
    },
    {
      text: '关于',
      items: [
        {
          text: '关于主题',
          link: '/about/',
        },
        {
          text: '默认图标',
          link: '/about/icon',
        },
      ],
    },
  ],
}
