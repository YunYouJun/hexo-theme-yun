# Additional Dependency Library Support

## Word Count

Install [hexo-symbols-count-time] (https://github.com/theme-next/hexo-symbols-count-time)

```sh
npm install hexo-symbols-count-time
# or
# yarn add hexo-symbols-count-time
```

Enter the configuration file `_config.yml` in the root directory of the blog

```yml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
```

Enter the configuration file `source/_data/yun.yml` in the root directory of the blog

```yml
symbols_count_time:
  item_text_post: true
  item_text_total: true
  awl: 2
  wpm: 250
```

> For more information and usage, please refer to [hexo-symbols-count-time | GitHub] (https://github.com/theme-next/hexo-symbols-count-time).

## RSS

Install [hexo-generator-feed] (https://github.com/hexojs/hexo-generator-feed).

```sh
npm install hexo-generator-feed --save
```

Configure the default icon as `icon-rss-line`. If you need to customize, enter `source/_data /yun.yml` to configure.

It can be configured in the `social` field of `yun.yml`, such as:

```yml
social:
  -name: RSS
    link: /atom.xml # config.feed.path
    icon: icon-rss-line
    color: orange
```

For more configuration, please refer to [Official Document](https://github.com/hexojs/hexo-generator-feed) (in `_config.yml` in the Hexo working directory).

## Sticky

Run the following command in the root directory of Hexo to remove the default index generator and use the sticky index generator.

The sticky feature of the original plugin has not been merged for a long time. [# 26](https://github.com/hexojs/hexo-generator-index/pull/26)

```sh
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save
```

> You can reference [hexo-generator-index-pin-top] (https://github.com/netcan/hexo-generator-index-pin-top)
> Note that when using hexo-generator-index-pin-top, the sorting function according to `updated` will be invalid. (The only way out is to wait for the official one to be merged.)

By setting the `top` property in the article Front Matter.
After setting sticky, the sticky icon will appear in the upper right corner of the article card.

```md
---
title: xxx
top: true
---
```

You can also set the level of priority to achieve the order of multiple sticky articles.

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

At this time, the articles of `top: 2` will be arranged above the articles of `top: 1`.

::: tip
You can also set the sorting according to `updated`, and then set the date of `updated` to a future date to achieve the sticky effect.
:::

## live2d

There is no need to modify the theme to adding live2d, nor does it need to configure the theme. It is just a plug-in for Hexo. You can configure it in `_config.yml` in the root directory.
The reason it appears here is to illustrate the recommended settings (in short, it is best to use CDN).

Install [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)

```sh
npm install --save hexo-helper-live2d
```

Configure in `_config.yml` in Hexo root directory:

> For more options, please refer to [hexo-helper-live2d] (https://github.com/EYHN/hexo-helper-live2d)

```yml
live2d:
  enable: true
  # recommend to use the CDN of jsdelivr to load
  scriptFrom: jsdelivr
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  debug: false
  model:
    # recommend to use CDN to load the model
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
  #   # whether to open the dialog box
  #   enable: true
  #   # whether to use hitokoto
  #   hitokoto: true
```