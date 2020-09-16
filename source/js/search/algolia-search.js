/* global instantsearch, algoliasearch, CONFIG */

document.addEventListener("DOMContentLoaded", () => {
  const algoliaSettings = CONFIG.algolia;
  const { indexName, appID, apiKey } = algoliaSettings;

  const search = instantsearch({
    indexName,
    searchClient: algoliasearch(appID, apiKey),
    searchFunction: (helper) => {
      let searchInput = document.querySelector(".search-input");
      if (searchInput.value) {
        helper.search();
      }
    },
  });

  // Registering Widgets
  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: algoliaSettings.hits.per_page || 8,
    }),

    instantsearch.widgets.searchBox({
      container: ".search-input-container",
      placeholder: algoliaSettings.labels.input_placeholder,
      // Hide default icons of algolia search
      showReset: false,
      showSubmit: false,
      showLoadingIndicator: false,
      cssClasses: {
        input: "search-input",
      },
    }),

    instantsearch.widgets.stats({
      container: "#algolia-stats",
      templates: {
        text: (data) => {
          let stats = algoliaSettings.labels.hits_stats
            .replace(/\$\{hits}/, data.nbHits)
            .replace(/\$\{time}/, data.processingTimeMS);
          return `${stats}
            <span class="algolia-powered">
              <img src="https://algolia.com/icons/icon-48x48.png" alt="Algolia">
            </span>
            <hr>`;
        },
      },
    }),

    instantsearch.widgets.hits({
      container: "#algolia-hits",
      templates: {
        item: (data) => {
          let link = data.permalink ? data.permalink : CONFIG.root + data.path;
          return `<a href="${link}" class="algolia-hit-item-link">${data._highlightResult.title.value}</a>`;
        },
        empty: (data) => {
          return `<div id="algolia-hits-empty">
              ${algoliaSettings.labels.hits_empty.replace(
                /\$\{query}/,
                data.query
              )}
            </div>`;
        },
      },
      cssClasses: {
        item: "algolia-hit-item",
      },
    }),

    instantsearch.widgets.pagination({
      container: "#algolia-pagination",
      scrollTo: false,
      showFirst: false,
      showLast: false,
      templates: {
        first:
          '<svg class="icon"><use xlink:href="#icon-arrow-left-line"></use></svg>',
        last:
          '<svg class="icon"><use xlink:href="#icon-arrow-right-line"></use></svg>',
        previous:
          '<svg class="icon"><use xlink:href="#icon-arrow-left-s-line"></use></svg>',
        next:
          '<svg class="icon"><use xlink:href="#icon-arrow-right-s-line"></use></svg>',
      },
      cssClasses: {
        root: "pagination",
        item: "pagination-item",
        link: "page-number",
        selectedItem: "current",
        disabledItem: "disabled-item",
      },
    }),
  ]);

  search.start();
});
