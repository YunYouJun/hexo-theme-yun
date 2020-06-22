console.log(
  "%c ☁️ hexo-theme-yun %c https://github.com/YunYouJun/hexo-theme-yun",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);

// scroll
function scrollPercent(curTop) {
  const bodyHeight = document.body.clientHeight;
  const windowHeight = window.innerHeight;
  const circumference = progressCircle.r.baseVal.value * 2 * Math.PI;
  const offset =
    circumference - (curTop / (bodyHeight - windowHeight)) * circumference;
  progressCircle.setAttribute(
    "stroke-dasharray",
    `${circumference} ${circumference}`
  );
  progressCircle.setAttribute("stroke-dashoffset", offset);
}

function initPage() {
  // open sidebar
  const toggleBtns = document.querySelectorAll(".sidebar-toggle");
  toggleBtns.forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelector(".hamburger").classList.toggle("is-active");
      document.querySelector(".container").classList.toggle("sidebar-open");
    });
  });

  window.addEventListener("scroll", function() {
    goUp.classList.toggle("show", window.scrollY > 64);
    scrollPercent(window.scrollY);
  });

  // wrap
  Yun.utils.wrapTable();
}

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
