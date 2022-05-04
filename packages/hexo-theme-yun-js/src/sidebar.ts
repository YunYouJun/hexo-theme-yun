/**
 * 切换侧边栏导航面板
 * toggle sidebar nav and panel
 * @author YunYouJun <me@yunyoujun.cn>
 * @description https://github.com/YunYouJun/hexo-theme-yun
 */

/**
 * 根据目标激活索引
 * @param {*} target
 */
function activateNavByIndex(target) {
  if (target.classList.contains('active-current')) return

  document.querySelectorAll('.post-toc .active').forEach((element) => {
    element.classList.remove('active', 'active-current')
  })
  target.classList.add('active', 'active-current')
  let parent = target.parentNode
  while (!parent.matches('.post-toc')) {
    if (parent.matches('li')) parent.classList.add('active')
    parent = parent.parentNode
  }
}

/**
 * 监听侧边栏目录
 */
function listenSidebarTOC() {
  const navItems = document.querySelectorAll('.post-toc li') as NodeListOf<HTMLLIElement>
  if (!navItems.length) return
  const sections = [...navItems].map((element) => {
    const link = element.querySelector('.toc-link')
    const target = document.getElementById(
      decodeURI(link.getAttribute('href')).replace('#', ''),
    )
    link.addEventListener('click', (event) => {
      event.preventDefault()
      window.scrollTo(0, target.offsetTop + 1)
    })
    return target
  })

  function findIndex(entries) {
    let index = 0
    let entry = entries[index]
    if (entry.boundingClientRect.top > 0) {
      index = sections.indexOf(entry.target)
      return index === 0 ? 0 : index - 1
    }
    for (; index < entries.length; index++) {
      if (entries[index].boundingClientRect.top <= 0)
        entry = entries[index]

      else
        return sections.indexOf(entry.target)
    }
    return sections.indexOf(entry.target)
  }

  function createIntersectionObserver(marginTop) {
    marginTop = Math.floor(marginTop + 10000)
    const intersectionObserver = new IntersectionObserver(
      (entries, observe) => {
        const scrollHeight = document.documentElement.scrollHeight + 100
        if (scrollHeight > marginTop) {
          observe.disconnect()
          createIntersectionObserver(scrollHeight)
          return
        }
        const index = findIndex(entries)
        activateNavByIndex(navItems[index])
      },
      {
        rootMargin: `${marginTop}px 0px -100% 0px`,
        threshold: 0,
      },
    )
    sections.forEach((element) => {
      element && intersectionObserver.observe(element)
    })
  }

  createIntersectionObserver(document.documentElement.scrollHeight)
}

function initSidebar() {
  const activeTabClass = 'sidebar-nav-active'
  const activePanelClass = 'sidebar-panel-active'

  /**
   * 切换侧边栏目录列表数字显示
   */
  function toggleTocNumber() {
    const tocBtn = document.querySelector('.sidebar-nav-toc')
    const orderedIcon = '#icon-list-ordered'
    const unorderedIcon = '#icon-list-unordered'

    if (!tocBtn)
      return

    tocBtn.addEventListener('click', () => {
      // 被激活时才可切换
      const isActived = tocBtn.classList.contains(activeTabClass)
      if (isActived) {
        const useTag = tocBtn.querySelector('use')

        useTag.setAttribute(
          'xlink:href',
          useTag.getAttribute('xlink:href') === orderedIcon
            ? unorderedIcon
            : orderedIcon,
        )

        document.querySelectorAll('.toc-number').forEach((el) => {
          el.classList.toggle('hidden')
        })
      }
    })
  }

  /**
   * 切换侧边栏导航
   */
  function toggleSidebarNav() {
    const list = document.querySelectorAll('.sidebar-nav li') as NodeListOf<HTMLLIElement>
    list.forEach((el) => {
      el.onclick = function() {
        if (this.classList.contains(activeTabClass))
          return

        document
          .querySelector(`.${activePanelClass}`)
          .classList.remove(activePanelClass)
        document
          .querySelector(`#${this.dataset.target}`)
          .classList.add(activePanelClass)
        document
          .querySelector(`.${activeTabClass}`)
          .classList.remove(activeTabClass)
        this.classList.add(activeTabClass)
      }
    })
  }

  toggleTocNumber()
  toggleSidebarNav()
  listenSidebarTOC()
}

document.addEventListener('DOMContentLoaded', initSidebar)
document.addEventListener('pjax:success', initSidebar)
