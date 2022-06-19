import 'uno.css'
import Theme from 'vitepress/theme'

import './styles/index.scss'

import { isClient } from '@vueuse/core'

export default {
  ...Theme,
  enhanceApp: () => {
    if (isClient) {
      // remove pwa
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations)
          registration.unregister()
      })
    }
  },
}
