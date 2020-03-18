# 额外依赖库支持

## 字数统计

安装 [hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time)

```sh
npm install hexo-symbols-count-time
# or
# yarn add hexo-symbols-count-time
```

进入博客根目录的配置文件 `_config.yml`

```yml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
```

进入博客根目录的配置文件 `source/_data/yun.yml`

```yml
symbols_count_time:
  item_text_post: true
  item_text_total: true
  awl: 2
  wpm: 250
```

> 更多信息及使用方法请参见 [hexo-symbols-count-time | GitHub](https://github.com/theme-next/hexo-symbols-count-time)。

## RSS

安装 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)，参见官方文档进行配置。

```sh
npm install hexo-generator-feed --save
```

配置默认图标为 `icon-rss-line`，如需自定义，进入 `source/_data/yun.yml` 进行配置。

可配置在 `social` 字段里，如：

```yml
social:
  RSS:
    link: atom.xml # config.feed.path
    icon: icon-rss-line
    color: orange
  QQ: ...
```

## 置顶

在 Hexo 根目录下运行一下命令，以移除默认索引生成器，并使用具有置顶功能的索引生成器。

原插件的置顶功能等了很久还没有合并。[#26](https://github.com/hexojs/hexo-generator-index/pull/26)

```sh
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save
```

> 你可以参见 [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)

通过设置文章 Front Matter 中的 `top` 属性。
设置置顶后，文章卡片右上角将出现置顶图标。

```md
---
title: xxx
top: true
---
```

你也可以通过设置权重来实现多篇置顶文章的顺序。

```md
---
title: xxx
top: 1
---
```

```md
---
title: xxx
top: 2
---
```

此时 `top: 2` 的文章将排列在 `top: 1` 的文章上面。
