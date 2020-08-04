// '<div id="no-result"><svg class="icon"><use xlink:href="#icon-search-line"></use></svg></div>';
// } else if (resultItems.length === 0) {
// resultContent.innerHTML =
// '<div id="no-result"><svg class="icon"><use xlink:href="#icon-emotion-unhappy-line"></use></svg></div>';
//- local-search

let searchFunc = function(path, search_id, content_id) {
  "use strict";
  const req = new Request(path);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", path);
  xhr.responseType = "document";
  xhr.overrideMimeType("text/xml");
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      let xml = xhr.responseXML;
      let datas = [];
      xml.querySelectorAll("entry").forEach((entry) => {
        datas.push({
          title: entry.querySelector("title").innerHTML,
          content: entry.querySelector("content").innerHTML,
          url: entry.querySelector("url").innerHTML,
        });
      });
      let $input = document.getElementById(search_id);
      if (!$input) return;
      let $resultContent = document.getElementById(content_id);
      if (document.querySelectorAll("#local-search-input").length > 0) {
        $input.addEventListener("input", function() {
          let str = '<ul class="search-result-list">';
          let keywords = this.value;
          keywords = keywords
            .trim()
            .toLowerCase()
            .split(/[\s\-]+/);
          $resultContent.innerHTML = "";
          if (this.value.trim().length <= 0) {
            return;
          }
          // perform local searching
          datas.forEach(function(data) {
            let isMatch = true;
            let content_index = [];
            if (!data.title || data.title.trim() === "") {
              data.title = "Untitled";
            }
            let data_title = data.title.trim().toLowerCase();
            let data_content = data.content
              .trim()
              .replace(/<[^>]+>/g, "")
              .toLowerCase();
            let data_url = data.url;
            let index_title = -1;
            let index_content = -1;
            let first_occur = -1;
            // only match artiles with not empty contents
            if (data_content !== "") {
              keywords.forEach(function(keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);

                if (index_title < 0 && index_content < 0) {
                  isMatch = false;
                } else {
                  if (index_content < 0) {
                    index_content = 0;
                  }
                  if (i === 0) {
                    first_occur = index_content;
                  }
                  // content_index.push({index_content:index_content, keyword_len:keyword_len});
                }
              });
            } else {
              isMatch = false;
            }
            // show search results
            if (isMatch) {
              str +=
                "<li><a href='" +
                data_url +
                "' class='search-result-title'>" +
                data_title +
                "</a>";
              let content = data.content.trim().replace(/<[^>]+>/g, "");
              if (first_occur >= 0) {
                // cut out 100 characters
                let start = first_occur - 20;
                let end = first_occur + 80;

                if (start < 0) {
                  start = 0;
                }

                if (start === 0) {
                  end = 100;
                }

                if (end > content.length) {
                  end = content.length;
                }

                let match_content = content.substring(start, end);

                // highlight all keywords
                keywords.forEach(function(keyword) {
                  let regS = new RegExp(keyword, "gi");
                  match_content = match_content.replace(
                    regS,
                    '<em class="search-keyword">' + keyword + "</em>"
                  );
                });

                str += '<p class="search-result">' + match_content + "...</p>";
              }
              str += "</li>";
            }
          });
          str += "</ul>";
          $resultContent.innerHTML = str;
        });
      }
    }
  };
  xhr.send();
};

searchFunc(
  CONFIG.local_search.path,
  "local-search-input",
  "local-search-result"
);
