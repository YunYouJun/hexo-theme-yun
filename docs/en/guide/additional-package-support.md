# Additional Dependency Library Support

## Word Count

Install [hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time)

```sh
npm install hexo-symbols-count-time
# or
# yarn add hexo-symbols-count-time
```

Enter the configuration file `_config.yml` in the root directory of the blog

```yaml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
```

Enter the configuration file `source/_data/yun.yml` in the root directory of the blog

```yaml
symbols_count_time:
  item_text_post: true
  item_text_total: true
  awl: 2
  wpm: 250
```

> For more information and usage, please refer to [hexo-symbols-count-time | GitHub](https://github.com/theme-next/hexo-symbols-count-time).

## RSS

Install [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed).

```sh
npm install hexo-generator-feed --save
```

Configure the default icon as `icon-rss-line`. If you need to customize, enter `source/_data /yun.yml` to configure.

It can be configured in the `social` field of `yun.yml`, such as:

```yaml
social:
  - name: RSS
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

> You can reference [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)
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

> For more options, please refer to [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)

```yaml
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

## player

### [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)

> See [Official Document](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md)

Recommended configuration (in `_config.yml` in the root directory of Hexo):

```yaml
aplayer:
  cdn: https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.js
  style_cdn: https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.css
  meting: true
  meting_cdn: https://cdn.jsdelivr.net/npm/meting@1/dist/Meting.min.js
```

::: tip
If you find that Aplayer sometimes introduces header files repeatedly in irrelevant files. Remember to turn off automatic script insertion.

> [Question of repeatedly loading Aplayer.js resource script] (https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md#%E9%87%8D%E5% A4% 8D% E8% BD% BD% E5% 85% A5-aplayerjs-% E8% B5% 84% E6% BA% 90% E8% 84% 9A% E6% 9C% AC% E9% 97% AE% E9 % A2% 98)

```yaml
aplayer:
  asset_inject: false
```

Then decide at the head of the article whether to enable `aplayer`:

```yaml {3}
---
title: xxx
aplayer: true
---

```

You can also set it globally in `yun.yml`. (When you set up a global player, you can use it.)

```yaml
aplayer:
  global: true
```

:::

Insert a song from NetEase Cloud Music

```md
{% meting "497572729" "netease" "song" "theme: # C20C0C"%}
```

Since `hexo-tag-aplayer` is so fragrant, I decided to remove the original media package script. Students who are really in need can add it by themselves.

```js
/ **
 * Transform embedded video to support responsive layout.
 * @see https://ultimatecourses.com/blog/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js
 * /
embeddedVideoTransformer: function () {
  let iframes = document.getElementsByTagName ("iframe");
  let SUPPORTED_PLAYERS = [
    "www.youtube.com",
    "player.vimeo.com",
    "music.163.com"
  ];
  for (let i = 0; i <iframes.length; i ++) {
    let iframe = iframes [i];
    if (iframe.src.search (SUPPORTED_PLAYERS.join ("|"))! == -1) {
      let videoRatio = (iframe.height / iframe.width) * 100;
      iframe.width = "100%";

      let wrap = document.createElement ("div");
      wrap.className = "fluid-vids";
      wrap.style.width = "100%";
      wrap.style.minHeight = "90px";
      wrap.style.height = iframe.height;
      wrap.style.position = "relative";

      let iframeParent = iframe.parentNode;
      iframeParent.insertBefore (wrap, iframe);
      wrap.appendChild (iframe);
    }
  }
}
```

## KaTeX

Some simple mathematical formulas are shown in the article, using [KaTeX](katex.or). For details, please refer to [Official Document](https://katex.org/).

- `copy_tex`: copy katex text, enabled by default
- `global`: If you want to use `KaTex` on the global page (such as the article summary on the homepage), then you can enable it. (Of course, this also means that your page needs to load more resources each time.)

```yaml
katex:
  copy_tex: true
  global: false
```

KaTeX libraries will be loaded only in articles or pages that use `katex`, so you need to set them in articles or headers using KaTeX.
(When you turn on global loading, you will no longer need to set this option.)

```md {3}
---
title: xxx
katex: true
---
```

You can wrap the formula in the following way.

::: tip
Note that when writing directly in a Markdown file, you need an extra `\` to translate `\`.

Use `\\[E = mc ^ 2 \\]` instead of `\[E = mc ^ 2 \]`.

If you have too many characters that need to be translated, you can directly wrap it with HTML tags (internal characters will not be parsed as Markdown), without using multiple `\` to translate.

for example:

```html
<div>
  \[E = mc ^ 2 \]
</div>
```

:::

As shown below, the formula will be displayed in the center.

```latex
$$ E = mc ^ 2 $$
\[E = mc ^ 2 \]
```

As shown in the following package, the formula will be displayed in line.

```latex
\(E = mc ^ 2 \)
```

> You can visit [Yun Test](https://www.yunyoujun.cn/yun/) to see the actual effect.
> You may need some time to wait for the `KaTeX` library to load, or refresh and try again.
