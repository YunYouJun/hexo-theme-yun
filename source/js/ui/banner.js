// https://github.com/YunYouJun/hexo-theme-yun
function random(min, max) {
  return Math.random() * (max - min) + min;
}

function generateBanner(title) {
  let sumH = 0;
  let lineTop = document.querySelector(".vertical-line-top");
  let lineBottom = document.querySelector(".vertical-line-bottom");
  for (let i = 0; i < title.length; i++) {
    let charBox = document.createElement("div");
    let rn = random(1.5, 3.5);
    charBox.innerHTML = "<span class='char'>" + title[i] + "</span>";
    let charSize = rn + "rem";
    banner.insertBefore(charBox, lineBottom);
    if (i % 2 == 0) {
      charBox.classList.add("char-left");
      charBox.style.setProperty("--banner-char-size", charSize);
      charBox.style.animationName = "char-move-left";
    } else {
      charBox.classList.add("char-right");
      charBox.style.setProperty("--banner-char-size", charSize);
      charBox.style.animationName = "char-move-right";
    }

    sumH += rn;
  }
  let height = "calc(50vh - " + sumH / 2 + "rem)";
  lineTop.style.setProperty("--banner-line-height", height);
  lineBottom.style.setProperty("--banner-line-height", height);

  // set animation name
  lineTop.style.animationName = "extend-line";
  lineBottom.style.animationName = "extend-line";
}

window.wheeling = false;
window.addEventListener("wheel", function(e) {
  if (window.banner) {
    if (window.scrollY < banner.clientHeight && e.deltaY > 0 && !wheeling) {
      wheeling = true;
      window.scrollTo(0, banner.clientHeight);
      setTimeout(function() {
        wheeling = false;
      }, 200);
    }
  }
});

function initBanner() {
  if (window.banner) {
    setTimeout(() => {
      generateBanner(CONFIG.title);
    }, 100);
  }
}

initBanner();
