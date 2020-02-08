---
title: make-hexo-theme-starry
date: 2019-04-12 15:55:55
updated: 2019-04-21 15:55:55
tags:
  - 笔记
categories:
  - notes
sticky: 10
description: how to make hexo-theme-starry
---

Starry

<!-- more -->

## FAQ

### 文章只渲染部分内容

开发主题的过程中，发现长篇文章只能渲染出一部分，后半部分无法正常显示。
一开始还以为是 `hexo-renderer-pug` 的问题，折腾了一天，兜兜转转，最后才发现是开发时 `hexo-browsersync` 的问题。

相关 Issue ：[Problem with long pages](https://github.com/hexojs/hexo-browsersync/issues/15)

问题截止目前（2019-04-25）还未解决。

## Dependency

- [hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time)

## Inspiration

### Theme

- [hexo-theme-next](https://github.com/theme-next/hexo-theme-next)
- [hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody)

### PV

- [【洛天依原创】异样的风暴中心【杉田朗】](https://www.bilibili.com/video/av4018008)
- [【洛天依原创】星宿计时【杉田朗】](https://www.bilibili.com/video/av7036967)

### Article

- [Hexo主题开发经验杂谈](https://molunerfinn.com/make-a-hexo-theme/)