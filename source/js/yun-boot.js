$(document).ready(function() {
  console.log(
    "%c ☁️ hexo-theme-yun %c https://github.com/YunYouJun/hexo-theme-yun",
    "color: white; background: #0078E7; padding:5px 0;",
    "padding:4px;border:1px solid #0078E7;"
  );
  Yun.utils.embeddedVideoTransformer();
  Yun.utils.wrapImageWithFancyBox();
  wrapTable();
});
