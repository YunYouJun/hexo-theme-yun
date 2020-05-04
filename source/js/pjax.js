const pjax = new Pjax({
  selectors: ["title", ".js-Pjax", "aside", "#yun-config"],
});

document.addEventListener("pjax:send", function() {
  console.log("yes");
  if (window.aplayers) {
    for (let i = 0; i < window.aplayers.length; i++) {
      window.aplayers[i].destroy();
    }
    window.aplayers = [];
  }
});

// for aplayer
document.addEventListener(
  "pjax:success",
  function() {
    if (window.aplayers) {
      loadMeting();
    }
  },
  !1
);
