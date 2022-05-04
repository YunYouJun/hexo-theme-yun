declare module '*.vue' {}

declare module 'vitepress-theme-you/config' {
  import type { UserConfig } from 'vitepress'
  const config: () => Promise<UserConfig>
  export default config
}
