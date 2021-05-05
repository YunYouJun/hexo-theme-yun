/**
 * @file 生成首页标语动画
 * @author YunYouJun <me@yunyoujun.cn>
 * @description https://github.com/YunYouJun/hexo-theme-yun
 */

/**
 * 生成介于 min 与 max 之间的随机数
 * @param {number} min
 * @param {number} max
 * @returns
 */
function random(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * 生成标语
 * @param {string} title
 */
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
    if (i % 2 === 0) {
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

/**
 * 初始化 banner
 */
function initBanner() {
  if (window.banner) {
    setTimeout(() => {
      generateBanner(CONFIG.title);
    }, 100);
  }
}

document.addEventListener("DOMContentLoaded", initBanner);
