// '<div id="no-result"><svg class="icon"><use xlink:href="#icon-search-line"></use></svg></div>';
// } else if (resultItems.length === 0) {
// resultContent.innerHTML =
// '<div id="no-result"><svg class="icon"><use xlink:href="#icon-emotion-unhappy-line"></use></svg></div>';
// - local-search

/* global CONFIG */
// ref https://github.com/next-theme/hexo-theme-next/blob/master/source/js/local-search.js

// Merge hits into slices
const mergeIntoSlice = (start, end, index) => {
  let item = index[0]
  let { position, word } = item
  const hits = []
  const count = new Set()
  while (position + word.length <= end && index.length !== 0) {
    count.add(word)
    hits.push({
      position,
      length: word.length,
    })
    const wordEnd = position + word.length

    // Move to next position of hit
    index.shift()
    while (index.length !== 0) {
      item = index[0]
      position = item.position
      word = item.word
      if (wordEnd > position)
        index.shift()

      else
        break
    }
  }
  return {
    hits,
    start,
    end,
    count: count.size,
  }
}

const getIndexByWord = (words, text, caseSensitive = false) => {
  const index = []
  const included = new Set()
  words.forEach((word) => {
    const wordLen = word.length
    if (wordLen === 0) return
    let startPosition = 0
    let position = -1
    if (!caseSensitive) {
      text = text.toLowerCase()
      word = word.toLowerCase()
    }
    while ((position = text.indexOf(word, startPosition)) > -1) {
      index.push({ position, word })
      included.add(word)
      startPosition = position + wordLen
    }
  })
  // Sort index by position of keyword
  index.sort((left, right) => {
    if (left.position !== right.position)
      return left.position - right.position

    return right.word.length - left.word.length
  })
  return [index, included]
}

// Highlight title and content
const highlightKeyword = (val, slice) => {
  let result = ''
  let index = slice.start
  for (const { position, length } of slice.hits) {
    result += val.substring(index, position)
    index = position + length
    result += `<mark class="search-keyword">${val.substr(
      position,
      length,
    )}</mark>`
  }
  result += val.substring(index, slice.end)
  return result
}

/**
 * 本地搜索函数
 * @param {*} path xml 文件路径
 * @param {*} searchId 搜索框元素 ID
 * @param {*} contentId 结果框元素 ID
 */
const localSearch = (path, searchId, contentId) => {
  if (!path) {
    // Search DB path
    console.warn('`hexo-generator-searchdb` plugin is not installed!')
    return
  }

  let datas = []
  const $input = document.getElementById(searchId) as HTMLInputElement
  const $resultContent = document.getElementById(contentId) as HTMLElement

  const getResultItems = (keywords) => {
    const resultItems = []
    // perform local searching
    datas.forEach(({ title, content, url }) => {
      const [indexOfTitle, keysOfTitle] = getIndexByWord(keywords, title)
      const [indexOfContent, keysOfContent] = getIndexByWord(keywords, content)
      const includedCount = new Set([...keysOfTitle, ...keysOfContent]).size

      // Show search results
      const hitCount = indexOfTitle.length + indexOfContent.length
      if (hitCount === 0) return

      const slicesOfTitle = []
      if (indexOfTitle.length !== 0)
        slicesOfTitle.push(mergeIntoSlice(0, title.length, indexOfTitle))

      const slicesOfContent = []
      while (indexOfContent.length !== 0) {
        const item = indexOfContent[0]
        const { position } = item
        // Cut out 100 characters. The maxlength of .search-input is 80.
        const start = Math.max(0, position - 20)
        const end = Math.min(content.length, position + 80)
        slicesOfContent.push(mergeIntoSlice(start, end, indexOfContent))
      }

      // Sort slices in content by included keywords' count and hits' count
      slicesOfContent.sort((left, right) => {
        if (left.count !== right.count)
          return right.count - left.count

        else if (left.hits.length !== right.hits.length)
          return right.hits.length - left.hits.length

        return left.start - right.start
      })

      let resultItem = ''

      url = new URL(url, location.origin)
      url.searchParams.append('highlight', keywords.join(' '))

      if (slicesOfTitle.length !== 0) {
        resultItem += `<li><a href="${
          url.href
        }" class="search-result-title">${highlightKeyword(
          title,
          slicesOfTitle[0],
        )}</a>`
      }
      else {
        resultItem += `<li><a href="${url.href}" class="search-result-title">${title}</a>`
      }

      slicesOfContent.forEach((slice) => {
        resultItem += `<a href="${
          url.href
        }"><p class="search-result">${highlightKeyword(
          content,
          slice,
        )}...</p></a>`
      })

      resultItem += '</li>'
      resultItems.push({
        item: resultItem,
        id: resultItems.length,
        hitCount,
        includedCount,
      })
    })

    return resultItems
  }

  const fetchData = () => {
    const isXml = !path.endsWith('json')
    fetch(path)
      .then(response => response.text())
      .then((res) => {
        // Get the contents from search data
        datas = isXml
          ? [
            ...new DOMParser()
              .parseFromString(res, 'text/xml')
              .querySelectorAll('entry'),
          ].map((element) => {
            return {
              title: element.querySelector('title').textContent,
              content: element.querySelector('content').textContent,
              url: element.querySelector('url').textContent,
            }
          })
          : JSON.parse(res)
        // Only match articles with non-empty titles
        datas = datas
          .filter(data => data.title)
          .map((data) => {
            data.title = data.title.trim()
            data.content = data.content
              ? data.content.trim().replace(/<[^>]+>/g, '')
              : ''
            data.url = decodeURIComponent(data.url).replace(/\/{2,}/g, '/')
            return data
          })

        if (!$input) return
        $input.addEventListener('input', () => {
          const searchText = $input.value.trim().toLowerCase()
          const keywords = searchText.split(/[-\s]+/)
          let resultItems = []
          if (searchText.length > 0)
            resultItems = getResultItems(keywords)

          resultItems.sort((left, right) => {
            if (left.includedCount !== right.includedCount)
              return right.includedCount - left.includedCount

            else if (left.hitCount !== right.hitCount)
              return right.hitCount - left.hitCount

            return right.id - left.id
          })
          const stats = window.CONFIG.i18n.hits.replace(
            /\$\{hits}/,
            resultItems.length,
          )
          $resultContent.innerHTML = `<div class="search-stats">${stats}</div>
            <ul class="search-result-list">${resultItems
    .map(result => result.item)
    .join('')}</ul>`
        })
      })
  }

  fetchData()
}

document.addEventListener('DOMContentLoaded', () => {
  localSearch(
    window.CONFIG.local_search.path,
    'local-search-input',
    'local-search-result',
  )
})
