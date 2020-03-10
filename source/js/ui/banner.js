function random(min, max) {
  return Math.random() * (max - min) + min;
}

function generateBanner(banner) {
  let sumH = 0;
  let bannerContainer = document.querySelector(".banner");
  let lineTop = document.querySelector(".vertical-line-top");
  let lineBottom = document.querySelector(".vertical-line-bottom");
  for (let i = 0; i < banner.length; i++) {
    let charBox = document.createElement("div");
    let rn = random(1.5, 3.5);
    charBox.innerHTML = "<span class='char'>" + banner[i] + "</span>";
    let charSize = rn + "rem";
    bannerContainer.insertBefore(charBox, lineBottom);
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
// execute
generateBanner(CONFIG.title);
