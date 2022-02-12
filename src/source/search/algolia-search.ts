document.addEventListener('DOMContentLoaded', () => {
  const algoliaSettings = window.CONFIG.algolia
  const { indexName, appID, apiKey } = algoliaSettings

  const search = window.instantsearch({
    indexName,
    searchClient: window.algoliasearch(appID, apiKey),
    searchFunction: (helper) => {
      const searchInput = document.querySelector('.search-input') as HTMLInputElement
      if (searchInput.value)
        helper.search()
    },
  })

  // Registering Widgets
  search.addWidgets([
    window.instantsearch.widgets.configure({
      hitsPerPage: algoliaSettings.hits.per_page || 8,
    }),

    window.instantsearch.widgets.searchBox({
      container: '.search-input-container',
      placeholder: window.CONFIG.i18n.placeholder,
      // Hide default icons of algolia search
      showReset: false,
      showSubmit: false,
      showLoadingIndicator: false,
      cssClasses: {
        input: 'search-input',
      },
    }),

    window.instantsearch.widgets.stats({
      container: '#algolia-stats',
      templates: {
        text: (data) => {
          const stats = window.CONFIG.i18n.hits_time
            .replace(/\$\{hits}/, data.nbHits)
            .replace(/\$\{time}/, data.processingTimeMS)
          return `<span>${stats}</span>
            <span class="algolia-powered">
              <a href="https://www.algolia.com/" target="_blank"><img src="https://simpleicons.org/icons/algolia.svg" alt="Algolia"></a>
            </span>
            <hr>`
        },
      },
    }),

    window.instantsearch.widgets.hits({
      container: '#algolia-hits',
      templates: {
        item: (data) => {
          const link = data.permalink ? data.permalink : window.CONFIG.root + data.path
          return `<a href="${link}" class="algolia-hit-item-link">${data._highlightResult.title.value}</a>`
        },
        empty: (data) => {
          return `<div id="algolia-hits-empty">
              ${window.CONFIG.i18n.empty.replace(/\$\{query}/, data.query)}
            </div>`
        },
      },
      cssClasses: {
        item: 'algolia-hit-item',
      },
    }),

    window.instantsearch.widgets.pagination({
      container: '#algolia-pagination',
      scrollTo: false,
      showFirst: false,
      showLast: false,
      templates: {
        first:
          '<svg class="icon"><use xlink:href="#icon-arrow-left-line"></use></svg>',
        last: '<svg class="icon"><use xlink:href="#icon-arrow-right-line"></use></svg>',
        previous:
          '<svg class="icon"><use xlink:href="#icon-arrow-left-s-line"></use></svg>',
        next: '<svg class="icon"><use xlink:href="#icon-arrow-right-s-line"></use></svg>',
      },
      cssClasses: {
        root: 'pagination',
        item: 'pagination-item',
        link: 'page-number',
        selectedItem: 'current',
        disabledItem: 'disabled-item',
      },
    }),
  ])

  search.start()
})
