const pjax = new Pjax({
  selectors: ["title", ".js-Pjax", "main", "aside"],
});

// for sidebar
function isHome() {
  if (window.location.pathname === CONFIG.root) {
    document.body.classList.add("is-home");
  } else {
    document.body.classList.remove("is-home");
  }
}

document.addEventListener("DOMContentLoaded", isHome);
document.addEventListener("pjax:success", isHome);
