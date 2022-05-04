import type { YouTheme } from 'vitepress-theme-you'

export const zh: YouTheme.SideBarConfig = [
  {
    text: '指南',
    children: [
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
    children: [
      {
        text: '关于主题',
        link: '/about/',
      },
      {
        text: '辅助图标',
        link: '/about/icon',
      },
    ],
  },
]
