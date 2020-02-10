# FAQ

## `hexo server` 文章只渲染部分内容

开发主题的过程中，发现长篇文章只能渲染出一部分，后半部分无法正常显示。
一开始还以为是 `hexo-renderer-pug` 的问题，折腾了一天，兜兜转转，最后才发现是开发时 `hexo-browsersync` 的问题。

相关 Issue ：[Problem with long pages](https://github.com/hexojs/hexo-browsersync/issues/15)

问题截止目前（2019-04-25）还未解决。
