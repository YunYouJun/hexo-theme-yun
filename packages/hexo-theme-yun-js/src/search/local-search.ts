// ref https://github.com/next-theme/hexo-theme-next/blob/master/source/js/third-party/search/local-search.js

/* global LocalSearch */

document.addEventListener('DOMContentLoaded', () => {
  const CONFIG = window.CONFIG
  const dbPath = window.CONFIG.local_search.path

  if (!dbPath) {
    // Search DB path
    console.warn('`hexo-generator-searchdb` plugin is not installed!')
    return
  }

  // @ts-expect-error global LocalSearch
  const localSearch = new LocalSearch({
    path: dbPath,
    top_n_per_article: CONFIG.localsearch.top_n_per_article,
    unescape: CONFIG.localsearch.unescape,
  })

  const input = document.querySelector('.search-input') as HTMLInputElement

  const inputEventFunction = () => {
    if (!localSearch.isfetched)
      return
    const searchText = input.value.trim().toLowerCase()
    const keywords = searchText.split(/[-\s]+/)
    const container = document.querySelector('.search-result-container')
    let resultItems = []
    if (searchText.length > 0) {
      // Perform local searching
      resultItems = localSearch.getResultItems(keywords)
    }
    if (keywords.length === 1 && keywords[0] === '') {
      container.classList.add('no-result')
      container.innerHTML = '<div class="search-result-icon"><i class="fa fa-search fa-5x"></i></div>'
    }
    else if (resultItems.length === 0) {
      container.classList.add('no-result')
      container.innerHTML = '<div class="search-result-icon"><i class="far fa-frown fa-5x"></i></div>'
    }
    else {
      resultItems.sort((left, right) => {
        if (left.includedCount !== right.includedCount)
          return right.includedCount - left.includedCount

        else if (left.hitCount !== right.hitCount)
          return right.hitCount - left.hitCount

        return right.id - left.id
      })
      const stats = CONFIG.i18n.hits.replace(/\$\{hits}/, resultItems.length)

      container.classList.remove('no-result')
      container.innerHTML = `<div class="search-stats">${stats}</div>
        <hr>
        <ul class="search-result-list">${resultItems.map(result => result.item).join('')}</ul>`
    }
  }

  localSearch.highlightSearchWords(document.querySelector('.post-body'))
  if (CONFIG.localsearch.preload)
    localSearch.fetchData()

  if (CONFIG.localsearch.trigger === 'auto') {
    input.addEventListener('input', inputEventFunction)
  }
  else {
    document.querySelector('.search-icon').addEventListener('click', inputEventFunction)
    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter')
        inputEventFunction()
    })
  }
  window.addEventListener('search:loaded', inputEventFunction)

  // Handle and trigger popup window
  document.querySelectorAll('.popup-trigger').forEach((element) => {
    element.addEventListener('click', () => {
      document.body.classList.add('search-active')
      // Wait for search-popup animation to complete
      setTimeout(() => input.focus(), 500)
      if (!localSearch.isfetched)
        localSearch.fetchData()
    })
  })
})
