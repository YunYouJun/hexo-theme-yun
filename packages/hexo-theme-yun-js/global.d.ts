declare interface Window {
  Yun: {
    boot: any
    utils: {
      registerToggleSidebar: () => void
      registerScrollPercent: () => void
      insertCopyCodeBtn: () => void
      wrapTable: () => void
    }
  }
  CONFIG: {
    version: string
    root: string
    title: string
    vendors: {
      host: string
      darken: string
    }

    i18n: any

    /**
     * 是否开启拷贝代码
     */
    copycode: boolean

    say: {
      api: any
      hitokoto: string
    }

    fireworks: any

    algolia: any

    // for theme config
    localsearch: any
    // for plugin config
    local_search: any

    waline: {
      config: any
      cdn: string
    }

    mode: string

    Darkmode: any
  }

  LocalSearch: (any) => void
  Pjax: (any) => void

  /**
   * katex
   */
  renderMathInElement: (el: HTMLElement, options: any) => void

  CryptoJS: any

  loadDisqus: () => void

  anime: any

  // algolia
  instantsearch: any
  algoliasearch: any

  Waline: any

  darken: any
}
