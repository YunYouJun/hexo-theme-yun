// https://github.com/YunYouJun/hexo-theme-yun
// YunYouJun <me@yunyoujun.cn>

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function generateBanner(title) {
  let sumH = 0;
  let lineTop = document.querySelector(".vertical-line-top");
  let lineBottom = document.querySelector(".vertical-line-bottom");
  for (let i = 0; i < title.length; i++) {
    const char = title[i];
    let charBox = document.createElement("div");
    let rn = random(1.5, 3.5);
    charBox.innerHTML = "<span class='char'>" + char + "</span>";
    let charSize = rn + "rem";
    banner.insertBefore(charBox, lineBottom);
    charBox.classList.add("char-box");
    if (i % 2 == 0) {
      charBox.classList.add("char-left");
      charBox.style.animationName = "char-move-left";
    } else {
      charBox.classList.add("char-right");
      charBox.style.animationName = "char-move-right";
    }
    charBox.style.setProperty("--banner-char-size", charSize);

    const width = window
      .getComputedStyle(document.getElementsByClassName("char-box")[i])
      .getPropertyValue("width");
    charBox.style.setProperty("--banner-empty-border-size", width);

    sumH += rn;
  }
  let height = "calc(50vh - " + sumH / 2 + "rem)";
  lineTop.style.setProperty("--banner-line-height", height);
  lineBottom.style.setProperty("--banner-line-height", height);

  // set animation name
  lineTop.style.animationName = "extend-line";
  lineBottom.style.animationName = "extend-line";
}

function initBanner() {
  if (window.banner) {
    setTimeout(() => {
      generateBanner(CONFIG.title);
    }, 100);
  }
}

initBanner();
