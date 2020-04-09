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

安装 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)。

```sh
npm install hexo-generator-feed --save
```

配置默认图标为 `icon-rss-line`，如需自定义，进入 `source/_data/yun.yml` 进行配置。

可配置在 `yun.yml` 的 `social` 字段里，如：

```yml
social:
  - name: RSS
    link: /atom.xml # config.feed.path
    icon: icon-rss-line
    color: orange
```

更多配置请参见[官方文档](https://github.com/hexojs/hexo-generator-feed)（在 Hexo 工作目录下的 `_config.yml` 中进行）。

## 置顶

在 Hexo 根目录下运行一下命令，以移除默认索引生成器，并使用具有置顶功能的索引生成器。

原插件的置顶功能等了很久还没有合并。[#26](https://github.com/hexojs/hexo-generator-index/pull/26)

```sh
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save
```

> 你可以参见 [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)
> 注意，我发现使用 hexo-generator-index-pin-top 时，根据 `updated` 进行排序的功能将失效。（只能看官方的那个什么时候能合并了。）

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

::: tip
实际上，你也可以设置根据 `updated` 排序，然后把 `updated` 的日期设置很大来实现置顶效果。
:::

## live2d

其实添加 live2d 并不需要修改主题，也不需要对主题进行配置，它是 Hexo 的插件，你在根目录的 `_config.yml` 中配置即可。
在这里出现是为了说明一下推荐的设置（简而言之，就是最好使用 CDN 啦）。

安装 [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)

```sh
npm install --save hexo-helper-live2d
```

在 Hexo 根目录的 `_config.yml` 中进行配置：

> 更多选项含义请参见 [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)

```yml
live2d:
  enable: true
  # 推荐使用 jsdelivr 的 CDN 来加载
  scriptFrom: jsdelivr
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  debug: false
  model:
    # 推荐使用 CDN 来加载模型
    use: https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json
  display:
    position: right
    width: 150
    height: 300
  mobile:
    show: true
  react:
    opacity: 0.7
  # dialog:
  #   # 是否开启对话框
  #   enable: true
  #   # 是否使用一言
  #   hitokoto: true
```
