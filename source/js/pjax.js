function initPjax() {
  new Pjax({
    selectors: ["title", ".js-Pjax", "main", "aside"],
  });
}

function onPjaxSuccessed() {
  isHome();
  toReaderLatexAgain();
}

// for sidebar
function isHome() {
  if (window.location.pathname === CONFIG.root) {
    document.body.classList.add("is-home");
  } else {
    document.body.classList.remove("is-home");
  }
}

function toReaderLatexAgain() {
  const post = document.querySelector("main #post");
  if ( post != null) {
    renderMathInElement(post, {
      delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError : false
    });
  }
}

document.addEventListener("DOMContentLoaded", initPjax);
document.addEventListener("DOMContentLoaded", isHome);
document.addEventListener("pjax:success", onPjaxSuccessed);





