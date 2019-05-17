var algolia = GLOBAL_CONFIG.algolia
var isAlgoliaValid = algolia.appId && algolia.apiKey && algolia.indexName
if (!isAlgoliaValid) {
  console.error('Algolia setting is invalid!')
}
var algoliasearch = instantsearch({
  appId: algolia.appId,
  apiKey: algolia.apiKey,
  indexName: algolia.indexName,
  searchParameters: {
    hitsPerPage: algolia.hits.per_page || 10
  },
  searchFunction: function (helper) {
    var searchInput = $('#algolia-search-input').find('input')
    if (searchInput.val()) {
      helper.search()
    }
  }
})

algoliasearch.addWidget(
  instantsearch.widgets.searchBox({
    container: '#algolia-search-input',
    reset: false,
    magnifier: false,
    placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder
  })
)

algoliasearch.addWidget(
  instantsearch.widgets.hits({
    container: '#algolia-hits',
    templates: {
      item: function (data) {
        var link = data.permalink ? data.permalink : (GLOBAL_CONFIG.root + data.path)
        return (
          '<a href="' + link + '" class="algolia-hit-item-link">' +
          data._highlightResult.title.value +
          '</a>'
        )
      },
      empty: function (data) {
        return (
          '<div id="algolia-hits-empty">' +
          GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/, data.query) +
          '</div>'
        )
      }
    },
    cssClasses: {
      item: 'algolia-hit-item'
    }
  })
)

algoliasearch.addWidget(
  instantsearch.widgets.stats({
    container: '#algolia-stats',
    templates: {
      body: function (data) {
        var stats = GLOBAL_CONFIG.algolia.languages.hits_stats
          .replace(/\$\{hits}/, data.nbHits)
          .replace(/\$\{time}/, data.processingTimeMS)
        return (
          stats +
          '<span class="algolia-powered">' +
          '  <img src="' + GLOBAL_CONFIG.root + 'images/logo/algolia.svg" alt="Algolia" />' +
          '</span>'
        )
      }
    }
  })
)

algoliasearch.addWidget(
  instantsearch.widgets.pagination({
    container: '#algolia-pagination',
    scrollTo: false,
    showFirstLast: false,
    labels: {
      first: '<i class="fa fa-angle-double-left"></i>',
      last: '<i class="fa fa-angle-double-right"></i>',
      previous: '<i class="fa fa-angle-left"></i>',
      next: '<i class="fa fa-angle-right"></i>'
    },
    cssClasses: {
      root: 'pagination',
      item: 'pagination-item',
      link: 'page-number',
      active: 'current',
      disabled: 'disabled-item'
    }
  })
)

function search() {
  algoliasearch.start()
}