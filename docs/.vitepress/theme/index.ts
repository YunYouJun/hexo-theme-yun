import type { Theme } from 'vitepress'
import { VPTheme } from 'vitepress-theme-you'

import 'uno.css'

import Badge from './components/Badge.vue'
import CustomToast from './components/CustomToast.vue'
import DisplayIcon from './components/DisplayIcon.vue'
import DemoSites from './components/DemoSites.vue'

const theme: Theme = Object.assign({}, VPTheme, {
  enhanceApp: ({ app }) => {
    // unplugin-vue-components seems have some issues
    app.component('Badge', Badge)
    app.component('CustomToast', CustomToast)
    app.component('DisplayIcon', DisplayIcon)
    app.component('DemoSites', DemoSites)
  },
} as Theme)

export default theme
