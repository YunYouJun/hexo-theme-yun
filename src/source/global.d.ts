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

    /**
     * 是否开启拷贝代码
     */
    copycode: boolean
  }

  /**
   * katex
   */
  renderMathInElement: (el: HTMLElement, options: any) => void
}
