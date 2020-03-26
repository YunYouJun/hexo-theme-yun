console.log(
  "%c ☁️ hexo-theme-yun %c https://github.com/YunYouJun/hexo-theme-yun",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);

function initPage() {
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".post-card");
  }

  // open sidebar
  document.querySelector(".sidebar-toggle").onclick = function() {
    this.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".container").classList.toggle("sidebar-open");
  };

  window.addEventListener("scroll", function() {
    goUp.classList.toggle("show", window.scrollY > 64);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
