// search function
var searchFunc = function(path, search_id, content_id) {
  $.ajax({
    url: path,
    dataType: isXml ? "xml" : "json",
    async: true,
    success: function(res) {
      var datas = isXml ? $("entry", res).map(function() {
        return {
          title: $("title", this).text(),
          content: $("content",this).text(),
          url: $("url" , this).text()
        };
      }).get() : res;
      var input = $('#' + search_id)[0];
      var resultContent = $('#' + content_id)[0];
      var inputEventFunction = function() {
        var searchText = input.value.trim().toLowerCase();
        var keywords = searchText.split(/[\s\-]+/);
        if (keywords.length > 1) {
          keywords.push(searchText);
        }
        var resultItems = [];
        if (searchText.length > 0) {
          // perform local searching
          datas.forEach(function(data) {
            var isMatch = false;
            var hitCount = 0;
            var searchTextCount = 0;
            var title = data.title.trim();
            var titleInLowerCase = title.toLowerCase();
            var content = data.content.trim().replace(/<[^>]+>/g,"");
            var contentInLowerCase = content.toLowerCase();
            var articleUrl = decodeURIComponent(data.url).replace(/\/{2,}/g, '/');
            var indexOfTitle = [];
            var indexOfContent = [];
            // only match articles with not empty titles
            if(title != '') {
              keywords.forEach(function(keyword) {
                function getIndexByWord(word, text, caseSensitive) {
                  var wordLen = word.length;
                  if (wordLen === 0) {
                    return [];
                  }
                  var startPosition = 0, position = [], index = [];
                  if (!caseSensitive) {
                    text = text.toLowerCase();
                    word = word.toLowerCase();
                  }
                  while ((position = text.indexOf(word, startPosition)) > -1) {
                    index.push({position: position, word: word});
                    startPosition = position + wordLen;
                  }
                  return index;
                }

                indexOfTitle = indexOfTitle.concat(getIndexByWord(keyword, titleInLowerCase, false));
                indexOfContent = indexOfContent.concat(getIndexByWord(keyword, contentInLowerCase, false));
              });
              if (indexOfTitle.length > 0 || indexOfContent.length > 0) {
                isMatch = true;
                hitCount = indexOfTitle.length + indexOfContent.length;
              }
            }

            // show search results

            if (isMatch) {
              // sort index by position of keyword
              [indexOfTitle, indexOfContent].forEach(function (index) {
                index.sort(function (itemLeft, itemRight) {
                  if (itemRight.position !== itemLeft.position) {
                    return itemRight.position - itemLeft.position;
                  } else {
                    return itemLeft.word.length - itemRight.word.length;
                  }
                });
              });

              // merge hits into slices
              function mergeIntoSlice(text, start, end, index) {
                var item = index[index.length - 1];
                var position = item.position;
                var word = item.word;
                var hits = [];
                var searchTextCountInSlice = 0;
                while (position + word.length <= end && index.length != 0) {
                  if (word === searchText) {
                    searchTextCountInSlice++;
                  }
                  hits.push({position: position, length: word.length});
                  var wordEnd = position + word.length;

                  // move to next position of hit
                  index.pop();
                  while (index.length != 0) {
                    item = index[index.length - 1];
                    position = item.position;
                    word = item.word;
                    if (wordEnd > position) {
                      index.pop();
                    } else {
                      break;
                    }
                  }
                }
                searchTextCount += searchTextCountInSlice;
                return {
                  hits: hits,
                  start: start,
                  end: end,
                  searchTextCount: searchTextCountInSlice
                };
              }

              var slicesOfTitle = [];
              if (indexOfTitle.length != 0) {
                slicesOfTitle.push(mergeIntoSlice(title, 0, title.length, indexOfTitle));
              }

              var slicesOfContent = [];
              while (indexOfContent.length != 0) {
                var item = indexOfContent[indexOfContent.length - 1];
                var position = item.position;
                var word = item.word;
                // cut out 100 characters
                var start = position - 20;
                var end = position + 80;
                if(start < 0){
                  start = 0;
                }
                if (end < position + word.length) {
                  end = position + word.length;
                }
                if(end > content.length){
                  end = content.length;
                }
                slicesOfContent.push(mergeIntoSlice(content, start, end, indexOfContent));
              }

              // sort slices in content by search text's count and hits' count
              slicesOfContent.sort(function (sliceLeft, sliceRight) {
                if (sliceLeft.searchTextCount !== sliceRight.searchTextCount) {
                  return sliceRight.searchTextCount - sliceLeft.searchTextCount;
                } else if (sliceLeft.hits.length !== sliceRight.hits.length) {
                  return sliceRight.hits.length - sliceLeft.hits.length;
                } else {
                  return sliceLeft.start - sliceRight.start;
                }
              });

              // highlight title and content
              function highlightKeyword(text, slice) {
                var result = '';
                var prevEnd = slice.start;
                slice.hits.forEach(function (hit) {
                  result += text.substring(prevEnd, hit.position);
                  var end = hit.position + hit.length;
                  result += '<b class="search-keyword">' + text.substring(hit.position, end) + '</b>';
                  prevEnd = end;
                });
                result += text.substring(prevEnd, slice.end);
                return result;
              }

              var resultItem = '';
              if (slicesOfTitle.length != 0) {
                resultItem += "<li><a href='" + articleUrl + "' class='search-result-title'>" + highlightKeyword(title, slicesOfTitle[0]) + "</a>";
              } else {
                resultItem += "<li><a href='" + articleUrl + "' class='search-result-title'>" + title + "</a>";
              }

              slicesOfContent.forEach(function (slice) {
                resultItem += "<a href='" + articleUrl + "'>" +
                  "<p class=\"search-result\">" + highlightKeyword(content, slice) +
                  "...</p>" + "</a>";
              });

              resultItem += "</li>";
              resultItems.push({
                item: resultItem,
                searchTextCount: searchTextCount,
                hitCount: hitCount,
                id: resultItems.length
              });
            }
          })
        };
        if (keywords.length === 1 && keywords[0] === "") {
          resultContent.innerHTML = '<div id="no-result"><i class="fas fa-search fa-5x"></i></div>'
        } else if (resultItems.length === 0) {
          resultContent.innerHTML = '<div id="no-result"><i class="far fa-frown fa-5x"></i></div>'
        } else {
          resultItems.sort(function (resultLeft, resultRight) {
            if (resultLeft.searchTextCount !== resultRight.searchTextCount) {
              return resultRight.searchTextCount - resultLeft.searchTextCount;
            } else if (resultLeft.hitCount !== resultRight.hitCount) {
              return resultRight.hitCount - resultLeft.hitCount;
            } else {
              return resultRight.id - resultLeft.id;
            }
          });
          var searchResultList = '<ul class=\"search-result-list\">';
          resultItems.forEach(function (result) {
            searchResultList += result.item;
          })
          searchResultList += "</ul>";
          resultContent.innerHTML = searchResultList;
        }
      }
      input.addEventListener('input', inputEventFunction);
    }
  });
}

//- local-search
function search() {
  searchFunc(path, 'local-search-input', 'local-search-result');
}