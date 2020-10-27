# Additional Dependency Library Support

The difference with third-party support is that most of the functions here are implemented by installing plug-ins or introducing CDN, and they are simply adapted by themes.

## Word Count

Install [hexo-wordcount](https://github.com/willin/hexo-wordcount)

```sh
npm install hexo-wordcount
# or
# yarn add hexo-wordcount
```

Enter the configuration file `source/_data/yun.yml` in the root directory of the blog

- `count`: Word Count
- `time`: Read Time

```yaml
wordcount:
  enable: true
  count: true
  time: true
```

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
You can also set the sorting according to `updated`, and then set the date of `updated` to a future time to achieve the sticky effect.
:::

## live2d

There is no need to modify the theme to adding live2d, nor does it need to to be configured. It is just a plug-in for Hexo. You can configure it in `_config.yml` in the root directory.
The reason it appears here is to illustrate the recommended settings (in short, it is the best to use CDN).

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

## Tag Cloud (Word Cloud)

Config in `yun.yml, use colorful word cloud instead of native tag cloud.

- `enable`: enable word cloud
- `height`: set the height for word cloud

## player

### [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)

Install [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)

```sh
npm install hexo-tag-aplayer
```

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
If you find that the Aplayer sometimes introduces header files repeatedly in irrelevant files, remember to turn off the automatic script insertion.

> [Duplicate APlayer.JS loading](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/README.md#duplicate-aplayerjs-loading)

```yaml
aplayer:
  asset_inject: false
```

Then decide whether to enable `aplayer` at the head of the article:

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

### Global Music Player

You can set it global enable in `yun.yml`.

- `meting`: enable [meting](https://github.com/metowolf/MetingJS), whether to introduce meting resources (pay attention to the difference between this and `widget`)
- `widget`: set `widget.enable` `true` to enable global player (aplayer.global must be `true`)
  - `meting.enable`: whether to open meting for global widget. When open, it will load `option`; When close, will use cutsom `audio`.
  - `audio`: default config can be referred. More info see [Official Documentation](https://aplayer.js.org/#/home)。

Open [pjax](#pjax), it can realize that the music player is not interrupted when switching pages. (In order to load the music player correctly, when there is a music player in the article page that you switch to, `Meting` will reload.)

```yaml
aplayer:
  global: false
  meting: true
  # https://github.com/metowolf/MetingJS/tree/v1.2#option
  widget:
    enable: false
    autoplay: false
    # theme: "#2980b9"
    loop: all
    order: list
    preload: auto
    volume: 0.7
    mutex: true
    lrcType: 0
    listFolded: false
    listMaxHeight: 340px
    audio:
      - name: 星宿计时
        artist: 杉田朗/洛天依
        url: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/audio/star-timer.mp3
        cover: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-0.jpg
    meting:
      enable: true
      id: 308168565
      server: netease
      type: playlist
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

## Math Formula

### KaTeX

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

In the following, the formula will be displayed in the center.

```latex
$$ E = mc^2 $$
\[ E = mc^2 \]
```

In the following, the formula will be displayed in line.

```latex
$E = mc^2$
\( E = mc^2 \)
```

::: tip
Note that when writing directly in a Markdown file, you need an extra `\` to translate `\`.

Use `\\[E = mc ^ 2 \\]` instead of `\[E = mc ^ 2 \]`.

If you have too many characters that need to be translated, you can directly wrap it with HTML tags (internal characters will not be parsed as Markdown) without using multiple `\` to translate. (Or use `$E=mc^2$`)

For example:

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

### [hexo-math](https://github.com/hexojs/hexo-math)

You can also use plugins like [hexo-math](https://github.com/hexojs/hexo-math) for preprocessing.

hexo-math supports [KaTeX](https://katex.org/) and [MathJax](https://www.mathjax.org/) and is used as follows. (See official documentation for more)

> The difference with the theme's own support for KaTeX is that the theme uses a CDN that only starts parsing when the page is loaded, whereas this plugin pre-generates the content into a static document.

```md
{% katex %}
c = \pm\sqrt{a^2 + b^2}
{% endkatex %}
```

### [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)

Compared with hexo-math, you can use the formula `$...$`. The default supported renderer is [hexo-renderer-pandoc](https://github.com/wzpan/hexo-renderer-pandoc).

```md
$$
i\hbar\frac{\partial}{\partial t}\psi=-\frac{\hbar^2}{2m}\nabla^2\psi+V\psi
$$
```

> Hexo's default installed renderer is generally [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked), so you may need to be aware of some translation issues. (e.g. `*` needs to be used for \*` etc.)

## pjax

Use [pjax](https://github.com/MoOx/pjax)。

```yaml
pjax:
  enable: true
```

## Other Recommended Plugins

The following plug-in configuration and usage have nothing to do with the theme, you can refer to its documentation configuration yourself.

> Because when you want some features that the theme does not provide, they can actually be implemented directly through plugins.

### [hexo-tag-common](https://github.com/YunYouJun/hexo-tag-common)

Extended hexo tag syntax.

For example, Tabs function.（[Demo](https://www.yunyoujun.cn/yun/tag-common.html)）

More common tags may be added later.

### [hexo-widget-tree](https://github.com/YunYouJun/hexo-widget-tree)

Widget, view articles through the tree menu.

> If you need a PJAX effect, enable theme PJAX.

### [hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt)

You can use it to encrypt some private article pages.
