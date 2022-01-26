/**
 * 公共辅助函数
 */

// @ts-expect-error wrap
HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this)
  this.parentNode.removeChild(this)
  wrapper.appendChild(this)
}

/**
 * 显示版权
 */
export function copyright() {
  console.log(
    `%c ☁️ hexo-theme-yun ${window.CONFIG.version} %c https://github.com/YunYouJun/hexo-theme-yun`,
    'color: white; background: #0078E7; padding:5px 0;',
    'padding:4px;border:1px solid #0078E7;',
  )
}

/**
 * 是否为主页
 */
export const isHome = () => {
  return window.location.pathname === window.CONFIG.root
}

/**
   * 包裹表格，添加 class 以控制 table 样式
   */
export const wrapTable = () => {
  document.querySelectorAll('table').forEach((el) => {
    const container = document.createElement('div')
    container.className = 'table-container'
    // @ts-expect-error wrap
    el.wrap(container)
  })
}

/**
 * 动态获取脚本，并执行回调函数
 * @param {*} url
 * @param {*} callback
 * @param {*} condition 是否存在对应实例，判断是否加载脚本
 */
export function getScript(url: string, callback: () => void, condition: boolean) {
  if (condition) {
    callback()
  }
  else {
    const script = document.createElement('script')
    script.onload = () => {
      setTimeout(callback)
    }
    script.src = url
    document.head.appendChild(script)
  }
}

/**
   * click btn to copy codeblock
   */
export function insertCopyCodeBtn() {
  const codeblocks = document.querySelectorAll('pre[class*=\'language-\']')

  codeblocks.forEach((codeblock) => {
    if (!window.CONFIG.copycode) return

    const container = document.createElement('div')
    container.className = 'code-container'
    // @ts-expect-error wrap
    codeblock.wrap(container)

    container.insertAdjacentHTML(
      'beforeend',
      '<div class="copy-btn"><svg class="icon"><use xlink:href="#icon-file-copy-line" aria-label="copy"></use></svg></div>',
    )

    const copyBtn = container.querySelector('.copy-btn') as HTMLButtonElement
    copyBtn.addEventListener('click', () => {
      const lines
          = container.querySelector('code[class*=\'language-\']')
          || container.querySelector('.token')
      const code = lines.innerText
      const ta = document.createElement('textarea')
      ta.style.top = `${window.scrollY}px` // Prevent page scrolling
      ta.style.position = 'absolute'
      ta.style.opacity = '0'
      ta.readOnly = true
      ta.value = code
      document.body.append(ta)
      ta.select()
      ta.setSelectionRange(0, code.length)
      ta.readOnly = false
      // copy success
      // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API todo
      const result = document.execCommand('copy')
      const iconName = result ? '#icon-check-line' : '#icon-timer-line'
      const iconSvg = copyBtn.querySelector('svg use')
      iconSvg.setAttribute('xlink:href', iconName)
      iconSvg.setAttribute('color', result ? 'green' : 'red')

      ta.blur() // For iOS
      copyBtn.blur()
      document.body.removeChild(ta)
    })

    container.addEventListener('mouseleave', () => {
      setTimeout(() => {
        const iconSvg = copyBtn.querySelector('svg use')
        iconSvg.setAttribute('xlink:href', '#icon-file-copy-line')
        iconSvg.setAttribute('color', 'gray')
      }, 200)
    })
  })
}

/**
 * 使用 KaTeX 渲染公式
 * 须已引入 KaTeX CDN
 * https://github.com/KaTeX/KaTeX
 */
export function renderKatex() {
  if (typeof window.renderMathInElement !== 'undefined') {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
    })
  }
  else {
    console.error(
      'Please check if you have introduced KaTeX(https://github.com/KaTeX/KaTeX) CDN.',
    )
  }
}

/**
   * 注册监听滚动百分比事件
   */
export function registerScrollPercent() {
  const backToTop = document.querySelector('#back-to-top')
  const progressCircle = document.querySelector('#progressCircle') as SVGCircleElement

  if (!backToTop)
    return

  /**
   * 页面滚动百分比
   * @param {number} curTop
   */
  function scrollPercent(curTop: number) {
    const bodyHeight = document.body.clientHeight
    const windowHeight = window.innerHeight
    const circumference = progressCircle.r.baseVal.value * 2 * Math.PI
    const offset
        = circumference - (curTop / (bodyHeight - windowHeight)) * circumference
    progressCircle.setAttribute(
      'stroke-dasharray',
      `${circumference} ${circumference}`,
    )
    progressCircle.setAttribute('stroke-dashoffset', offset.toString())
  }

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 64)
    scrollPercent(window.scrollY)
  })
}

/**
 * 注册切换侧边栏按钮事件
 */
export function registerToggleSidebar() {
  const toggleBtns = document.querySelectorAll('.sidebar-toggle')
  toggleBtns.forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelector('.hamburger').classList.toggle('is-active')
      document.querySelector('.container').classList.toggle('sidebar-open')
    })
  })
}
