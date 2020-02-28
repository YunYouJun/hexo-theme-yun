function random(min, max) {
  return Math.random() * (max - min) + min;
}

function generateBanner(banner, duration) {
  let sumH = 0;
  let bannerContainer = document.querySelector(".banner");
  let lineTop = document.querySelector(".vertical-line-top");
  let lineBottom = document.querySelector(".vertical-line-bottom");
  for (let i = 0; i < banner.length; i++) {
    let charBox = document.createElement("div");
    let rn = random(1.5, 3.5);
    charBox.innerHTML = "<span class='char'>" + banner[i] + "</span>";
    let charSize = rn + "rem";
    charBox.style.fontSize = charSize;
    bannerContainer.insertBefore(charBox, lineBottom);
    if (i % 2 == 0) {
      charBox.classList.add("char-left");
      charBox.animate(
        [
          {
            borderRightWidth: 0
          },
          {
            borderRightWidth: charSize
          }
        ],
        {
          duration: 600,
          fill: "forwards",
          delay: 400,
          easing: "ease-out"
        }
      );
    } else {
      charBox.classList.add("char-right");
      charBox.animate(
        [
          {
            borderLeftWidth: 0
          },
          {
            borderLeftWidth: charSize
          }
        ],
        {
          duration: 600,
          fill: "forwards",
          delay: 400,
          easing: "ease-out"
        }
      );
    }
    sumH += rn;
  }
  let height = "calc(50vh - " + sumH / 2 + "rem)";
  lineTop.animate(
    [
      {
        height: "0"
      },
      {
        height: height
      }
    ],
    {
      duration: duration,
      fill: "forwards",
      easing: "ease-in"
    }
  );
  lineBottom.animate(
    [
      {
        height: "0"
      },
      {
        height: height
      }
    ],
    {
      duration: duration,
      fill: "forwards",
      easing: "ease-in"
    }
  );
}
// execute
generateBanner(CONFIG.title, 400);
