import type { DefaultTheme } from 'vitepress'

export function nav(): DefaultTheme.Config['nav'] {
  return [
    { text: 'Guide', link: '/guide/' },
    { text: 'Demo', link: '/demo/' },
    { text: 'Sponsors', link: 'https://sponsors.yunyoujun.cn' },
  ]
}
