# 额外依赖库支持

与第三方支持的区别是，此处大部分功能为安装插件或引入 CDN 实现，并由主题进行简单适配。

## 字数统计

安装 [hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time)

```sh
npm install hexo-symbols-count-time
# or
# yarn add hexo-symbols-count-time
```

进入博客根目录的配置文件 `_config.yml`

```yaml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
```

进入博客根目录的配置文件 `source/_data/yun.yml`

```yaml
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

```yaml
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

```yaml
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

## 标签云（词云）

在 `yun.yml` 中开启在侧边栏下方显示

- `enable`: 开启后，将在标签页显示彩色词云

```yaml
wordcloud:
  enable: true
  height: 350
```

## 播放器

安装 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)

```sh
npm install hexo-tag-aplayer
```

> 可参见[官方文档](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md)。

推荐的配置（在 Hexo 的根目录下的 `_config.yml` 中）：

```yaml
aplayer:
  cdn: https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.js
  style_cdn: https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.css
  meting: true
  meting_cdn: https://cdn.jsdelivr.net/npm/meting@1/dist/Meting.min.js
```

::: tip
如果你发现 Aplayer 有时会在无关紧要的文件里也重复引入头文件。记得关闭自动脚本插入。

> [重复载入 Aplayer.js 资源脚本问题](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md#%E9%87%8D%E5%A4%8D%E8%BD%BD%E5%85%A5-aplayerjs-%E8%B5%84%E6%BA%90%E8%84%9A%E6%9C%AC%E9%97%AE%E9%A2%98)

```yaml
aplayer:
  asset_inject: false
```

然后在文章头部决定是否开启 `aplayer`:

```yaml {3}
---
title: xxx
aplayer: true
---

```

:::

插入某首网易云音乐的歌

```md
{% meting "497572729" "netease" "song" "theme:#C20C0C" %}
```

### 全局音乐播放器

你也可以在 `yun.yml` 中设置全局开启。（当你设置了全局的播放器时，可以使用它。）

- `meting`: 是否开启 [meting](https://github.com/metowolf/MetingJS)，决定是否引入 meting 资源。（注意与 `widget` 下的 `meting` 相区分）
- `widget`: 你可以将 `widget.enable` 设置为 `true` 来打开全局播放器。（`aplayer.global` 必须为 `true`）
  - `meting.enable`: 此处的 `meting` 控制是否打开全局播放器挂件的 meting。打开时，将加载 `option`；关闭时，将使用自定义的 `audio`。
  - `audio`: 给出了加载自定义音乐的默认参考配置，更多请参见 [官方文档](https://aplayer.js.org/#/home)。

更多选项: 参考 [Option | Aplayer](https://aplayer.js.org/#/home?id=options)

开启 [pjax](#pjax)，可以实现切换页面时，不中断音乐播放器。（为了正确加载音乐播放器，当切换到的文章页面也存在音乐播放器时，`Meting` 会重新加载。）

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

由于 `hexo-tag-aplayer` 太香了，我决定移除原先的媒体包裹脚本。实在有需要的同学，可以自行外挂添加。

```js
/**
 * Transform embedded video to support responsive layout.
 * @see https://ultimatecourses.com/blog/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js
 */
embeddedVideoTransformer: function() {
  let iframes = document.getElementsByTagName("iframe");
  let SUPPORTED_PLAYERS = [
    "www.youtube.com",
    "player.vimeo.com",
    "music.163.com"
  ];
  for (let i = 0; i < iframes.length; i++) {
    let iframe = iframes[i];
    if (iframe.src.search(SUPPORTED_PLAYERS.join("|")) !== -1) {
      let videoRatio = (iframe.height / iframe.width) * 100;
      iframe.width = "100%";

      let wrap = document.createElement("div");
      wrap.className = "fluid-vids";
      wrap.style.width = "100%";
      wrap.style.minHeight = "90px";
      wrap.style.height = iframe.height;
      wrap.style.position = "relative";

      let iframeParent = iframe.parentNode;
      iframeParent.insertBefore(wrap, iframe);
      wrap.appendChild(iframe);
    }
  }
}
```

## KaTeX

在文章中显示一些简单的数学公式，使用 [KaTeX](katex.or) 实现。具体方法请参见[官方文档](https://katex.org/)。

- `copy_tex`: 复制 katex 文本，默认开启
- `global`: 如果你想要在全局页面使用 `KaTex`，（譬如首页的文章摘要），那么你可以开启它。（当然，这也意味着你的页面每次需要加载更多的资源。）

```yaml
katex:
  copy_tex: true
  global: false
```

只有在使用了 `katex` 的文章或页面才会加载 KaTeX 的库，所以你需要在使用 KaTeX 的文章或头部进行设置。
（当你开启全局加载时，将不再需要设置此选项。）

```md {3}
---
title: xxx
katex: true
---
```

你可以使用如下方式包裹公式。

::: tip
注意，在 Markdown 文件中直接书写时，你需要多一个 `\` 来转译 `\`。

使用 `\\[ E = mc^2 \\]` 而不是 `\[ E = mc^2 \]`。

如果你有过多需要转译的字符，你可以直接使用 HTML 标签包裹它（内部的字符将不会被作为 Markdown 解析），而无需使用多个 `\` 来转译。

譬如：

```html
<div>
  \[ E = mc^2 \]
</div>
```

:::

如下包裹，公式将被居中展示。

```latex
$$ E = mc^2 $$
\[ E = mc^2 \]
```

如下包裹，公式将以行内形式展示。

```latex
\( E = mc^2 \)
```

> 你可以访问 [Yun Test](https://www.yunyoujun.cn/yun/) 来查看实际效果。
> 你可能需要一点时间来等待 `KaTeX` 库的加载，或刷新重试。

## 其他可用插件推荐

以下的插件配置与使用均与主题无关，你可以自行参考其文档配置。

> 因为当你想要一些主题并未提供的功能时，它们实际上可以直接通过插件来实现。

### [hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt)

你可以使用它来加密一些私密的文章页面。

## pjax

使用 [pjax](https://github.com/MoOx/pjax) 实现。

```yaml
pjax:
  enable: true
```
