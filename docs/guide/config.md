# 主题配置

## 配置文件

约定 ＞ 配置

::: danger
请在 `source/_data/yun.yml` 中定义您所需要的配置，其余将自动使用主题的默认配置。

如未特殊说明，皆默认在 `yun.yml` 文件中配置。

请最好不要对主题的任何文件进行修改，除非你确认你拥有一定的开发能力或此后将不会对主题进行升级。
:::

## 语言

默认语言为中文 `zh-CN`。

> 站点的语言需要自己在 Hexo 目录下的 `_config.yml` 中设置。

```yaml
language: zh-CN
```

### 个性化语言包

在 Hexo 工作目录下新建 `source/_data/languages.yml`。（若 `source/_data` 目录不存在，请新建。）

采用约定大于配置的方式，您仅需在 `languages.yml` 中自定义您想要覆盖的语言，其余将自动与主题默认配置合并。（这样做也更方便日后的升级）

配置方式参考下例：

> 各语言对应属性和内容见 `themes/yun/languages`，覆盖对应项即可。

```yaml
en: # 将要覆盖的语言
  menu:
    home: My Index

ja: # 将要覆盖的语言
  menu:
    home: マイインデックス

zh-CN: # 将要覆盖的语言
  menu:
    home: 我的主页
```

如果仅使用中文语言，除 `zh-CN` 项目均可删除。

## 主题色

自定义主题的主色调。

- `bg`: 背景色（选取与你的背景图片主色调更贴近的颜色来使其更协调）

> [color-dust](https://www.yunyoujun.cn/color-dust) 此前写的一个可以分析图片配色的小工具。

```yaml
colors:
  primary: "#6200ee"
  # bg: "#F5F5F5"
  selection_bg: "#8e71c1" # 选取文字时的背景色
  # 标签云中标签的起始色和结束色
  # tag_start_color:
  # tag_end_color:
```

### tags

可以为你的标签指定色彩，默认色 `#333`。

```yaml
tags:
  Vue: "#4fc08d"
  Hexo: "#0E834D"
  CSS: "#5298d1"
  Node.js: "#026E00"
  Git: "#F14E32"
  React: "#61dafb"
  Python: "#3776ab"
  PHP: "#8892BF"
  VS Code: "#0066B8"
  JavaScript: "#F4DF4F"
  TypeScript: "#317AC6"
  Laravel: "#F4645F"
```

### categories

可以为你的分类指定色彩，默认色 `#333`。

```yaml
categories:
  笔记: dimgray
```

## head 头部资源

如果您有想自定义的资源要加载，请添加到 `head` 中。

遵照以下示例，自定义您要添加的 `css` 与 `js` 资源。

JavaScript 资源类型说明：

- `base`: 必须提前加载并执行。
- `async`: 异步加载，加载完成后立即执行。
- `defer`: 异步加载资源，但最后执行。

```yaml
head:
  css:
    example: //example.min.css
  js:
    base:
    async:
    defer:
```

::: tip

譬如想要自定义 css，先设置 `yun.yml`:

```yaml
head:
  css:
    custom: /css/custom.css
```

对应的文件路径为 `source/css/custom.css`（愣着干啥，自己新建去）

写你自定义的 CSS 就可以了。

```css
.char {
  background-color: transparent;
}
```

:::

### favicon

设置网站图标（确保你的 `favicon.ico` 文件已放置于 `source` 文件夹下），如下设置：

```yaml
favicon: /favicon.ico
```

> 当你的图片为 `png` 格式时，请确保其尺寸为 `16*16`、`32*32`、`64*64`、`128*128`、`256*256` 等符合规范的大小。

现在的 Yun Logo 可以根据浏览器的亮暗主题，采用对应的相反色。

譬如：亮色浏览器 LOGO 为黑色描边，暗色浏览器 LOGO 为白色描边。

> 如果你想要为自己的图标添加该特性，你的图标须为 `svg` 文件，并为其添加对应样式。
> 你可以参考我的 LOGO SVG 代码。[yun.svg](https://github.com/YunYouJun/hexo-theme-yun/blob/dev/source/yun.svg)

Example:

<!-- html formatOnSave 出错 -->

```svg
<svg id="yun-logo">
  <style>
    #yun-logo {
      stroke: black;
    }

    @media (prefers-color-scheme: dark) {
      #yun-logo {
        stroke: white;
      }
    }
  </style>
</svg>
```

> [Dark Mode Favicons](https://css-tricks.com/dark-mode-favicons/)

## CDN

Content Delivery Network，统一加载网络资源，有利于提高网页加载速度。

[jsDelivr – Open Source CDN](https://www.jsdelivr.com) 是一款免费开源的 CDN，国内速度表现良好，且统一 CDN 来源同样有利于加载速度。
故本主题 CDN 均默认采用 jsDelivr，并使用 `dns-prefetch` 预解析 jsDelivr 。

您同样可以根据命名规则获取您想要的 CDN，在 `head` 中引入：

- GitHub CDN: `https://cdn.jsdelivr.net/gh/user/repo@version/file`
- npm: `https://cdn.jsdelivr.net/npm/package@version/file`

`cdn` 为主题目前默认引入的 CDN 资源，结构与 `head` 类似。

```yaml
cdn:
  pre: ""
  css:
  js:
    base:
    async:
      # 默认引入的图标资源，使用 iconfont
      iconfont: //at.alicdn.com/t/font_1140697_stqaphw3j4.js
    defer:
```

- `pre`: 默认为空，你的加载资源前缀。譬如你如果想要使用 `jsdelivr` 加速全站静态资源（~~又白嫖~~），则可以在 `yun.yml` 中这样设置。

> 注意将 `https://cdn.jsdelivr.net/gh/` 后替换为你的 GitHub 用户名和仓库名（也可以添加所在分支，譬如 `@master`）。  
> `@latest` 为使用最新版本（但它仍然会被缓存，**且需要 12 h 才能更新**，如果你需要强制刷新，请参考 [Purge cache](https://github.com/jsdelivr/jsdelivr#purge-cache)）
> ~~请记住，白嫖是有代价的~~

```yaml
cdn:
  pre: https://cdn.jsdelivr.net/gh/YunYouJun/yunyoujun.github.io@latest
```

::: tip
如果你自己对主题使用到的资源进行了自定义，并想要更方便地在本地预览调试。

你可以在 Hexo 的工作目录下 `package.json` 中 `scripts` 字段添加 `"dev": "export NODE_ENV=development && hexo s"`。

```json
{
  "scripts": {
    "dev": "export NODE_ENV=development && hexo s"
  }
}
```

并通过 `npm run dev` 来启动，则此时处于开发模式下，默认不使用 `cdn.pre`。
:::

### 覆盖 iconfont

```yaml
cdn:
  js:
    async:
      iconfont: 你的 iconfont 自定义资源
```

### 预加载

通过 `preload`， `prefetch`，`preconnect`，`dns-prefetch`来优化网页记载速度。

- `preload`：本页面之后一定会用到的资源
- `prefetch`：跳转页面可能会用到的资源
- `dns-prefetch`：解析将要用到的域名的 DNS 地址
- `preconnect`：提前与指定域名建立链接，相比 `dns-prefetch` 多了 TCP 连接

`preload` 与 `prefetch` 只用来加载本地的资源（且一般使用默认），不要使用带有协议头（`http://`）的资源。

CDN 可以去 `head` 处添加。

> [\<link\> ：外部资源链接元素 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)

```yaml
preload:
  style:
    - /css/hexo-theme-yun.css
  script:
    - /js/utils.js
    - /js/hexo-theme-yun.js

prefetch:
  script:
    - /js/sidebar.js

dns_prefetch:
  - https://cos.yunyoujun.cn

# do more(TCP handshake...) than dns-fetch
preconnect:
  - https://cdn.jsdelivr.net
```

## 图标 Icon

本主题默认使用 [Remix Icon](https://remixicon.com/) 的部分图标，并通过 [iconfont](https://www.iconfont.cn/) 生成的 cdn 加载。

> 默认支持的图标列表见 [默认图标](/guide/icon.html)

如您想要使用其他图标，可以采用以下几种图标和使用方式。

- 方式一：最为推荐，全部使用自定义 `iconfont` 图标集。（速度快，但需自行配置）
- 方式二：自由在 [head](#head-头部资源) 引入字体图标的 css 样式文件，直接传入对应 `class` 名称即可。（往往会引入全部的图标资源，虽然一次性引入很方便，但很多图标其实用不到。）

::: tip
你完全可以前往 [iconfont](https://www.iconfont.cn/) 自定义一套你的图标集，并覆盖 [CDN](#CDN) 所引入的图标资源。  
如果你只是想额外增添几个图标，你最好在 [head](#head-头部资源) 处引入，而不是直接覆盖。  
:::

下面给出了一些基础图标的使用方法。

本主题对以下几种图标的使用进行了适配。

### [iconfont](https://www.iconfont.cn/)

阿里旗下，可定制自己所需图标集。国内速度良好。（推荐）

[使用说明](https://www.iconfont.cn/help/detail?helptype=code)

多色图标需采用文章中 `symbol` 引用方式。

随后如下在 `yun.yml` 中设置。

```yaml
head:
  js:
    async:
      # 这里是你从 iconfont 处获得的图标链接。
      iconfont: //at.alicdn.com/t/font_1140697_stqaphw3j4.js
```

### [Remix Icon](https://remixicon.com/)

- GitHub: <https://github.com/Remix-Design/remixicon>
- CDN: <https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css>

简洁、优雅、开源。

### [Ionicons](https://ionicons.com)

- GitHub: [ionicons](https://github.com/ionic-team/ionicons)
- CDN CSS: <https://cdn.jsdelivr.net/npm/ionicons/dist/css/ionicons.min.css>
- CDN JS: <https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons.js>

无商标图标，可使用 Web Component ，按需加载。

#### 加载方式一：Web Component

可根据 `Android/iOS` 平台自动切换适合的风格 `Material/iOS`。

本主题已对 `ion-icon` 标签引入的方式进行了适配，如下配置即可。

```yaml
head:
  js:
    async: https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons.js
```

```yaml
icon: ion-icon heart
```

#### 加载方式二： CSS 引入

与其他 CSS 引入字体图标的方式相同。

```yaml
head:
  css:
    ionicons: https://cdn.jsdelivr.net/npm/ionicons/dist/css/ionicons.min.css
```

```yaml
icon: icon ion-md-heart
```

### [Material Design icons](https://google.github.io/material-design-icons/)

- GitHub: [material-design-icons](https://github.com/google/material-design-icons)
- [Material Design icons](https://material.io/tools/icons)

样式统一，无商标图标。谷歌出品，因国内行情，加载未必稳定，你可以寻找一些镜像源替代。

主题同样进行了适配。

::: tip 为何需要适配？

原本的使用方式

`face` 为 `<i></i>` 内部内容，而非 `class`。

```html
<i class="material-icons">face</i>
```

:::

引入对应 CDN 资源：

```yaml
head:
  css:
    material: https://fonts.googleapis.com/icon?family=Material+Icons
```

```yaml
icon: material-icons face
```

### 其他图标

在 [`head`](#head-头部资源) 中引入相关资源，图标相关配置 `icon` 中填写对应图标 `class` 即可。

譬如常见的 [Font-Awesome](https://fontawesome.com)

> GitHub: [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)

引入它的 CSS 资源：

```yaml
head:
  css:
    fontawesome: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css
```

对应 `icon` 字段中填写对应 `class` 名称即可。

```yaml
icon: fas fa-home
```

> 其实并不推荐引入全部的 `font-awesome`，因为它真的很大。

## 社交图标

默认提供以下几种社交图标，您可以通过在[头部](#head-头部资源)引入自定义图标资源来获取更多图标。
为了更好的展示效果，会显示我的默认链接，作为你设置图标的参考。

- `name`: 链接名称
- `link`: 链接
- `icon`: 图标 Class
- `color`: 图标颜色（前提是您引入的图标支持 SVG 自定义颜色）当前默认色彩采用官方图标的品牌主色。

> 如果你想使用 QQ 跳转链接，你可能还需要到 [QQ 推广](https://shang.qq.com/) 开通。

```yaml
social:
  - name: RSS
    # set rss in your root config
    # https://github.com/hexojs/hexo-generator-feed
    link: /atom.xml # config.feed.path
    icon: icon-rss-line
    color: orange
  - name: QQ
    # https://isux.tencent.com/wp-content/uploads/2016/05/20160512101222609.pdf
    link: https://wpa.qq.com/msgrd?v=3&uin=910426929&site=qq&menu=yes
    icon: icon-qq-line
    color: "#12B7F5"
  - name: GitHub
    link: https://github.com/YunYouJun
    icon: icon-github-line
    color: "#181717"
  - name: E-Mail
    link: mailto:me@yunyoujun.cn
    icon: icon-mail-line
    color: "#8E71C1"
  - name: 微博
    link: https://weibo.com/jizhideyunyoujun
    icon: icon-weibo-line
    color: "#E6162D"
  - name: 豆瓣
    link: https://www.douban.com/people/yunyoujun/
    icon: icon-douban-line
    color: "#007722"
  - name: 网易云音乐
    link: https://music.163.com/#/user/home?id=247102977
    icon: icon-netease-cloud-music-line
    color: "#C10D0C"
  - name: 知乎
    link: https://www.zhihu.com/people/yunyoujun/
    icon: icon-zhihu-line
    color: "#0084FF"
  - name: 哔哩哔哩动画
    link: https://space.bilibili.com/1579790
    icon: icon-bilibili-line
    color: "#FF8EB3"
  - name: POPI
    link: https://www.popiask.cn/elpsycn
    icon: icon-questionnaire-line
    color: "#525252"
  - name: 微信公众号
    link: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/about/white-qrcode-and-search.jpg
    icon: icon-wechat-2-line
    color: "#1AAD19"
  - name: Twitter
    link: https://twitter.com/YunYouJun
    icon: icon-twitter-line
    color: "#1da1f2"
  - name: Telegram
    link: https://t.me/YunYouJun
    icon: icon-telegram-line
    color: "#0088CC"
  - name: Telegram Channel
    link: https://t.me/elpsycn
    icon: icon-telegram-fill
    color: "#0088CC"
  - name: Travelling
    link: https://travellings.now.sh/
    icon: icon-send-plane-2-line
    color: black
```

您只需要在 `yun.yml` 中设置 `social` 来覆盖即可（这时即可只显示你的邮箱图标，而没有其他图标）：

```yaml
social:
  - name: E-Mail
    link: mailto:你的邮箱
    icon: icon-mail-line
    color: "#8E71C1"
```

如果您不想放置任何链接，仅需在 `yun.yml` 中设置：

```yaml
social:
```

## 首页

### 标语动画

首页的垂直交错排列文字效果。默认开启。

您可以访问 <https://yunyoujun.cn> 查看效果。（每次刷新，随机字体大小）

> 这是本主题开发时，最早实现的功能，期间因为 Safari 等浏览器的兼容性问题重构了几次，也提高了加载速度。
> 算是三朝元老，笑。

- `enable`: 是否开启
- `title`: 设置文字内容
- `border`: 是否开启标语中字符的左右边框
- `cloud`: 在首页下方显示流动的云
  - `enable`: 是否开启
  - `color`: 自定义色彩
- `go_down`: 向下箭头按钮（点击翻页）

```yaml
banner:
  enable: true
  title: 云游君的小站
  src: /js/ui/banner.js
  border: true
  cloud:
    enable: true
    color: "white"
  go_down:
    enable: true
    icon: icon-arrow-down-s-line
```

你可以通过数组形式来自定义字符的分割，例如：

```yaml
banner:
  title:
    - Yun
    - You
    - Jun
    - Blog
```

### 公告

你可以如下配置来开启公告。
它将显示在所有文章卡片的最上方，标语的下方。

```yaml
notice:
  enable: true
  content: Thanks for playing my game.
```

## UI

### 亮暗模式

- `light`: 始终为亮色模式，不打包暗色样式资源
- `dark`: 始终为暗色模式
- `auto`: 根据系统亮暗模式自动切换，侧边栏将显示亮暗切换按钮，可自由切换。
- `time`: 根据时间切换亮暗模式，`07:00-19:00` 为亮模式，剩余时间为暗模式

> 暗色模式下纯黑图标，将变为白色。

你可以为暗色模式，设置独立的背景和搜索背景，参见对应配置项。

```yaml
# 可选 light | dark | auto | time
mode: auto
```

### 字体

你可以设置你的自定义字体，并调节为你喜欢的字重。

:::tip
如果你使用了非系统自带字体，你还需要前往 [head](#head-头部资源) 处引入。

譬如引入字重 900 的 `Noto Serif SC` 字体。

> 本主题为了保证足够轻量，默认不引入任何字体，均使用系统自带的默认字体。你可以自行决定是否引入。

```yaml
head:
  css:
    fonts: https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@900&display=swap
```

:::

本主题的字体主要分为以下三大类。

> 你可以仅覆盖你想覆盖的字体族。

- 衬线字体（Serif）：较粗表强调，通常用于首页标语（Banner）、Say、站点与文章标题（以及 links、girls 等页面的作品名称）等处。
- 无衬线字体（Sans Serif）：通常为普通文本内容。（如果你的字体显示较粗，可能是你在 Windows 系统上安装了 `PingFang SC` 字体，却没有安装对应字重。）
- 等宽字体（monospace）：字符均具有相同宽度，通常用于需要相同宽度以对齐之处（如日期、序号）。

将 `font.cdn.enable` 设置为 `false` 以全部使用系统默认字体，达到最佳访问速度。（默认开启时，使用 `media="none" onload="this.media='all'"` 实现 css 样式的异步加载。）

```yaml
font:
  cdn:
    enable: true
    lib:
      - https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@900&display=swap
  serif:
    family: "'Songti SC', 'Noto Serif SC', STZhongsong, STKaiti, KaiTi, Roboto, serif"
    weight: 900
  sans_serif:
    family: "'PingFang SC', 'Microsoft YaHei', Roboto, Arial, sans-serif"
    weight: 400
  monospace:
    family: "'Source Code Pro', 'Courier New', Courier, Consolas, Monaco, monospace"
```

### 图片背景

- `opacity`: 背景透明度

::: tip
注意，现背景模糊已默认关闭。更建议用户通过图像处理工具来模糊图片作为背景。

> 你也可以直接使用一些在线图像模糊工具。

这也能消除彩色图片应用 `blur` 滤镜时产生的白边。
同时也能缩小图片背景，提高载入与渲染速度。
:::

- `dark`: 暗色背景图片链接，仅在开启暗色模式时有效。

```yaml
bg_image:
  enable: true
  url: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-0-blur-30px.jpg
  # dark:
  # blur: 30px # 设置背景模糊程度
  opacity: 0.8
```

> 如果你想要使用自定义的图片背景，你只需要将其置于 `source/images` 文件夹下，并用 `/images/xxx.jpg` 来引入它。
> 注意：如果你使用子目录来放置你的博客，如 `xxx.github.io/blog/`，你的图片链接需要设置为 `/blog/xxx`，或者直接使用图床。

#### 搜索背景

- `modal`: 启用模态框时，搜索背景将为模糊后的下层内容，不再使用背景图片
- `placeholder`: 搜索框提示文字（如果不设置，将自动根据 Hexo 语言配置选取对应的文本）
- `dark_bg_image`：暗色模式下的背景，仅在你开启暗色模式时有效

```yaml
search:
  modal: true
  bg_image: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-2.jpg
  dark_bg_image: xxx
  # placeholder:
```

> 更多搜索设置参见：[搜索 - 第三方支持](/guide/third-party-support.html#搜索)

### 随机多边形背景

> [trianglify - GitHub](https://github.com/qrohlf/trianglify)

- `enable`: 默认关闭
- `cellSize`: 多边形网格尺寸
- `palette`: 调色盘，请参考文档配置（[更多色彩](https://github.com/qrohlf/trianglify/blob/master/src/utils/colorbrewer.js)）
- `opacity`: 透明度

> 因为背景采用拉伸，更大的 `width` 与 `height` 会获得更高的清晰度。（请与性能进行取舍）

```yaml
trianglify:
  enable: false
  cellSize: 75
  width: 800
  height: 600
  palette: '["YlGnBu", "GnBu", "Purples", "Blues"]'
  opacity: 0.5
```

### 烟花

点击页面的烟花效果

- `enable`: 是否开启，默认开启
- `colors`：包含的颜色，默认为几种蓝色配色（请仿照下方使用 RGB 数值）

```yaml
fireworks:
  enable: true
  colors:
    - "102, 167, 221"
    - "62, 131, 225"
    - "33, 78, 194"
```

> 参考自：[Anime.js Fireworks canvas demo](https://codepen.io/juliangarnier/pen/gmOwJX)

### ScrollReveal

首页卡片与文章内部图片的滚动浮现效果，可见[官网](https://cdn.jsdelivr.net/npm/scrollreveal/dist/scrollreveal.min.js)，默认开启。

- `targets`: 为元素选择器对应的元素添加滚动浮现效果

```yaml
scrollreveal:
  enable: true
  targets:
    - .post-card
    - .post-content img
```

### Cursor 光标

替换鼠标光标，默认关闭。开启时默认使用 [Material Design Cursors](https://www.deviantart.com/rosea92/art/Material-Design-Cursors-Dark-756850032)。

你也可以使用你喜欢的图标来替代。

- `default`: 默认状态下图标。
- `pointer`: 指针（即链接状态下）图标。

```yaml
cursor:
  enable: false
  default: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/css/md-cursors/pointer.cur
  pointer: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/css/md-cursors/link.cur
  text: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/css/md-cursors/text.cur
```

## 侧边栏

### 背景与标签

- `tagcloud`: 在侧边栏显示 Hexo 原生标签页
  - `amount`: 显示的标签数量

```yaml
sidebar:
  bg_image: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-1.jpg
  bg_position: bottom 3rem center
  tagcloud:
    enable: false
    amount: 20
```

> 注意：如果你使用子目录来放置你的博客，如 `xxx.github.io/blog/`，你的图片链接需要设置为 `/blog/xxx`，或者直接使用图床。

`bottom 3rem center` 代表居中并且距离底部 `3rem`。

你可以参考 [background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position) 来设置背景图片的位置。

### 头像

- `enable`: 是否显示头像
- `url`: 头像图片链接
- `rounded`: 是否显示圆形
- `opacity`: 透明度
- `mickey_mouse`: 默认关闭，开启后文章页面侧边栏的头像将向上移动（迪士尼警告）
- `status`
  - `enable`: 是否显示状态
  - `emoji`: emoji
  - `message`: 内容

```yaml
avatar:
  enable: true
  url: /images/avatar.jpg
  rounded: true
  opacity: 1
  mickey_mouse: false
  status:
    enable: true
    emoji: 😭
    message: 不想上学
```

`mickey_mouse` 开启后效果：

![mickey-mouse](/images/mickey-mouse.jpg)

### 导航

设置导航对应图标及链接

分别为：

- 主页
- 列表
  - 归档
  - 标签
  - 分类
- 自定义（你可以设置为任意图标及链接，当你未设置自定义图标链接时，它将自动变为文档导航按钮以保持整体的对称）

> 顺带提醒你遇到问题先看看文档

list

- `type`: 是否为 archives/categories/tags 等类型，会自动匹配此类型标题及显示对应数量。留空则为其他普通链接。
- `title`: 可以覆盖默认标题
- `icon`: 自定义你的图标
- `path`: 自定义路径
- `count`: 默认为对应类型的数量，你也可以使用自定义文本覆盖（如注释部分）

```yaml
menu:
  home:
    path: /
    icon: icon-home-4-line
  list:
    - type: archives
      path: /archives/
      icon: icon-archive-line
    - type: categories
      path: /categories/
      icon: icon-folder-2-line
    - type: tags
      path: /tags/
      icon: icon-price-tag-3-line
    # - path: https://www.yunyoujun.cn
    #   icon: icon-cloud-line
    #   count: 你猜
  custom:
    title: 文档
    path: https://yun.yunyoujun.cn
    icon: icon-settings-line
```

### 页面链接

在 sidebar 的最下方，添加醒目的图标链接。

相比[社交链接](#社交图标)，图标更大。你可以放置你的页面导航，友情链接等。

例如：

> [页面配置](/guide/page.html#友链-links)

```yaml
pages:
  - name: 我的小伙伴们
    url: /links/
    icon: icon-genderless-line
    color: dodgerblue
```

如果您不想放置任何链接，仅需在 `yun.yml` 中设置：

```yaml
pages:
```

## 文章

### 内容卡片

- `opacity`: 自定义展示的文章卡片透明度，默认为 `0.8`

```yaml
post_card:
  opacity: 0.8
```

#### type

为文章设置 `type` 属性，即可将其转为其他类型卡片，并跳转 `url` 设置的链接。

譬如：

```md
---
title: xxx
type: bilibili
url: https://www.bilibili.com/video/av8153395/
---
```

在文章标题前将会出现 bilibili 的图标，点击标题会跳转至对应的链接。

目前默认支持以下类型（哔哩哔哩、豆瓣、GitHub、网易云音乐、推特、微信公众号、微博、语雀、知乎、Notion、外链）：

```yaml
types:
  link:
    color: blue
    icon: icon-external-link-line
  bilibili:
    color: "#FF8EB3"
    icon: icon-bilibili-line
  douban:
    color: "#007722"
    icon: icon-douban-line
  github:
    color: black
    icon: icon-github-line
  netease-cloud-music:
    color: "#C10D0C"
    icon: icon-netease-cloud-music-line
  notion:
    color: black
    icon: icon-notion
  twitter:
    color: "#1da1f2"
    icon: icon-twitter-line
  wechat:
    color: "#1AAD19"
    icon: icon-wechat-2-line
  weibo:
    color: "#E6162D"
    icon: icon-weibo-line
  yuque:
    color: "#25b864"
    icon: icon-yuque
  zhihu:
    color: "#0084FF"
    icon: icon-zhihu-line
```

你也可以自己在 `yun.yml` 设置你跳转不同链接专属的图标和颜色。

```yaml
type:
  google:
    color: xxx
    icon: xxx
```

当你指定的 `type` 不存在于默认支持中，也没有进行自定义，将默认使用蓝色的额外链接图标。

如果你想在你的外链卡片上显示一些信息，你可以写在 `<!-- more -->` 前，它会被当作摘要显示。

譬如：

```md
---
title: hexo-theme-yun
type: github
url: https://github.com/YunYouJun/hexo-theme-yun
---

Hexo 主题 Yun

<!-- more -->
```

#### hide

你可以在文章头部添加 `hide` 属性，来临时隐藏某篇文章。

- `hide`:
  - `index`: 设置为 `index` 时，将只在首页隐藏，归档中仍然展示。（譬如放一些没有必要放在首页的笔记，并在归档中方便自己查看。）
  - `true`: 当设置为 `true` 时，该文章仍然会被渲染，你自己可以直接访问链接进行查看。但不会被显示在展示的文章卡片与归档中。

> 什么？你想完全不渲染不显示？那你为何不将其放在 `_drafts` 文件夹下，或干脆不提交这篇文章。

```yaml {3}
---
title: xxx
hide: true
# hide: index
sitemap: false
indexing: false
---

```

::: tip

如果你开启了站点地图，那它还会出现在 `sitemap.xml` 中，你还需要在 front matter 处设置 `sitemap: false` 来排除它。

> [excluding-posts | hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap#excluding-posts)

如果你开启了本地搜索，那它还会出现在 `search.xml` 中，你还需要设置 `indexing: false` 来排除它。

> [exclude-indexing | hexo-generator-search](https://github.com/wzpan/hexo-generator-search#exclude-indexing)

:::

> 题外话，这个功能是我当初应付备案临时加的。
> 我更改备案信息时，客服通知我首页不能用跳转其他页面链接的内容（有一个和文章混在一起直接跳转 bilibili 的卡片），所以我就加了这个功能临时隐藏掉了。
> 也许还挺实用的，你可以放一些只是自己看看，暂时还不打算发到主页显示的页面。

### 信息

- `item_text`: 是否显示文字（如：发表于、更新于，若关闭则只显示图标与时间信息）
- `created_at`: 是否显示创建时间
- `updated_at`: 是否显示更新时间
- `categories`: 是否显示种类
- `tags`: 是否显示标签

```yaml
post_meta:
  item_text: false
  created_at: true
  updated_at: true
  categories: true
  tags: true
```

### 目录

你只要遵循 [Markdown 语法](https://segmentfault.com/markdown)，就会自动生成目录！

::: tip
具有良好 SEO 的 HTML 页面，有且应当只有一个 `h1` 作为一级标题。
本主题默认采用您设置的 `title` 作为一级标题。
在接下来的文章内容中，您应当只从二级标题开始使用。

```md
---
title: 一级标题
---

## 二级标题
```

:::

> 没什么人会要关这个功能的吧，hhh（所以我根本没加关闭的功能）

当你开启显示编号，并切换到目录时，再次点击目录按钮，可切换隐藏目录编号。

- `list_number`: 显示编号
- `max_depth`: 生成 TOC 的最大深度
- `min_depth`: 生成 TOC 的最小深度
- `placeholder`: 当目录不存在时，显示的话。
- `collapse`: 是否折叠目录（默认折叠，即隐藏次级目录，滚到到相关位置时才展开）

```yaml
toc:
  list_number: true
  max_depth: 6
  min_depth: 1
  placeholder: 很遗憾，咱没写啥目录
  collapse: false
```

> [辅助函数 ｜ Hexo](https://hexo.io/zh-cn/docs/helpers#toc)

### 编辑链接

若开启，则会在文章页面标题旁显示一个编辑图标。
点击后跳转到编辑页面。

- `url`: 文章所在地址（您可以参照默认链接设置您的仓库跳转链接）

如我使用 `GitHub` 作为博客的托管仓库，仓库名为 `yunyoujun.github.io`，在 `hexo` 分支下，`source` 文件夹中，
则链接为 <https://github.com/YunYouJun/yunyoujun.github.io/tree/hexo/source/>。

```yaml
post_edit:
  enable: true
  url: https://github.com/YunYouJun/yunyoujun.github.io/tree/hexo/source/
```

### 代码高亮

设置代码高亮

由于性能及定位问题，且 [Hexo 5.0](https://blog.skk.moe/post/hexo-5/) 已原生支持 prism，本主题更推荐使用 [prismjs](https://github.com/PrismJS/prism) 而非 `highlight.js`。

> 请升级 Hexo 至 5.0。`npm install hexo@latest`

PrismJS 是一个轻量级的代码高亮库，相比 highlight.js，prismjs 可以在 Node.js 环境执行（即：可在 Hexo 生成页面时进行代码高亮）。

我们可以通过 CDN 快速切换主题，本主题也支持为亮暗模式设置不同的代码高亮主题。

> 当前 Prism 支持的语言：<https://prismjs.com/#supported-languages>
> 你应当使用更通用的 `cpp` 替代 `c++` 以高亮 C++ 代码

在 Hexo （须升级至 5.0 以上版本）工作目录下的 `_config.yml` 中配置：

```yaml
# 关闭 highlight
highlight:
  enable: false
# 启用 prism
prismjs:
  enable: true
  preprocess: true
  line_number: false
  tab_replace: ""
```

在 `yun.yml` 中：

- `copy_btn`: 开启一键复制按钮
- `prismjs`
  - `light`: 亮模式下，代码高亮主题
  - `dark`: 暗模式下，代码高亮主题

（可以为亮暗模式分别设置对应适合的高亮样式。）

> 代码高亮主题可参见 <https://cdn.jsdelivr.net/npm/prismjs@latest/themes/>。

```yaml
codeblock:
  copy_btn: true
  prismjs:
    light: default
    dark: tomorrow
```

> 建议关闭行号，[这里](https://highlightjs.readthedocs.io/en/latest/line-numbers.html)是 highlight 作者写的为什么 highlight 不支持行号。
> 行号是否存在影响不大，当去掉时可以节约出一部分空间，譬如一些原先需要滚动条的代码，去掉后，就可以完全显示出来。

### 版权

设置您的文章的分享版权

> [关于许可协议](https://creativecommons.org/licenses/)
> 默认使用 署名-非商业性使用-相同方式共享 4.0，即 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)。

- `license`: 设置证书 (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
- `language`: 设置语言 (deed.zh | deed.en | deed.ja ｜ ...)
- `post`: 在每篇文章末尾显示
- `clipboard`: 是否在复制文章时，在剪贴板中追加版权信息（默认关闭）

```yaml
creative_commons:
  license: by-nc-sa
  post: true
  language: deed.zh
  clipboard: false
```

> 你的 `url` 请在 Hexo 工作目录下的 `_config.yml` 中设置。
> [配置｜ Hexo](https://hexo.io/zh-cn/docs/configuration#%E7%BD%91%E5%9D%80)

```yaml
# URL
## If your site is put in a subdirectory, set url as 'https://yoursite.com/child' and root as '/child/'
url: https://www.yunyoujun.cn
```

### 图片懒加载

默认开启，将会为 Markdown 的图片 `img` 加上 `loading="lazy"` 属性。

> [<img> loading](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-loading)
> 当前仍有许多浏览器不支持该特性 [Can I use loading?](https://caniuse.com/#search=loading)

```yaml
lazyload:
  enable: true
```

## 打赏

开启后，将在每篇文章 `post` 末尾显示打赏按钮。（`page` 页面默认不显示，你需要设置 `reward: true` 以强制打开。）

- `enable`: 开启打赏
- `icon`: 打赏图标
- `comment`: 在打赏按钮下显示你想说的话
- `url`: 你的打赏链接（当你开启打赏链接时，将自动跳转你的外部链接而不是展开二维码）
- `methods`: 数组，打赏方式

### 打赏二维码

默认支持 QQ、微信、支付宝打赏图标，`color` 为自定义图标颜色。

- `name`: 打赏方式
- `path`: 图片路径
- `color`: 图标颜色
- `icon`: 图标名称

在 `yun.yml` 中进行覆盖。

::: warning
v0.9.2 将原先的 `reward_settings` 与 `reward` 配置合并。
:::

```yaml
reward:
  enable: true
  icon: icon-hand-coin-line
  comment: I'm so cute. Please give me money.
  # url: https://github.com/YunYouJun/yunyoujun.github.io/issues/96
  methods:
    - name: 支付宝
      path: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/alipay-qrcode.jpg
      color: "#00A3EE"
      icon: icon-alipay-line
    - name: QQ 支付
      path: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/qqpay-qrcode.png
      color: "#12B7F5"
      icon: icon-qq-line
    - name: 微信支付
      path: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/wechatpay-qrcode.jpg
      color: "#2DC100"
      icon: icon-wechat-pay-line
```

您也可以在某篇文章的首部单独设置是否开启打赏。

```yaml
reward: true
# reward: false
```

## 页脚

::: tip 注意
以下配置均写在 `footer` 字段下，请同时放到 `footer` 下。（只保留一个 `footer`。）
如：

```yaml
footer:
  since: 1997
  icon:
    name: icon-cloud-line
    animated: true
    color: "#0078E7"
```

:::

### 起始年份

```yaml
footer:
  since: 2016
```

### 图标

位于年份和名称之间的图标。

- `name`: 图标名称（即 `class`）
- `animated`: 是否开启动画
- `color`: 图标颜色
- `url`: 链接（留空则为 `span`，存在则可自定义链接）
- `title`: 提示

```yaml
footer:
  icon:
    name: icon-cloud-line
    animated: true
    color: "#0078E7"
    url: https://sponsors.yunyoujun.cn
    title: 云游君的赞助者们
```

### 驱动

自豪地显示当前使用的博客框架 Hexo 与主题 Yun 的名字及版本。

如：`由 Hexo 驱动 v4.2.0 | 主题 - Yun v0.6.1`。

让更多人知道 Hexo 与主题 Yun，这有利于开源社区进一步发展。

- `enable`: 开启
- `version`: 显示版本

```yaml
footer:
  powered:
    enable: true
```

### 备案

国内用户可以提供备案号，开启备案显示。

备案信息默认链接为：<https://beian.miit.gov.cn/>

- `enable`: 开启备案
- `icp`: 备案号

```yaml
footer:
  beian:
    enable: true
    icp: 苏ICP备xxxxxxxx号
```

### 运行时间

默认关闭。

`本博客已萌萌哒地运行 442 天 19 小时 28 分 40 秒(●'◡'●)`

```yaml
footer:
  live_time:
    enable: false
    prefix: 本博客已萌萌哒地运行
    suffix: (●'◡'●)
    start_time: "2019-04-12T00:00:00"
```

> 注意记得补 0，譬如 `2019-04-01` 而不是 `2019-4-1`。

### 支持

譬如在页脚显示支持，如[又拍云联盟](https://www.upyun.com/league)

```yaml
footer:
  support:
    enable: true
    title: 又拍云
    link: https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral
    logo: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/logo/upyun-logo.png
    prefix: 本网站由
    suffix: 提供 CDN 加速
```

### 自定义文本

`custom_text` 为自定义页脚，可以包含 HTML。
譬如有时使用其他服务商进行托管页面，或一些 ICP 之外的备案信息。

```yaml
footer:
  custom_text: Hosted by <a href="https://pages.coding.me" rel="noopener" target="_blank">Coding Pages</a>
```

## Say

随机在网站主页显示一句~~中二的~~话。（默认使用 [一言](https://hitokoto.cn/) 作为 API）

- `enable`: 是否开启 Say
- `api`: 远程 JSON API
- `src`: 调用的 js 文件，最好不要修改（你也可以仿照其结构自己写，来加载想要的 JSON 格式。）
- `hitokoto.enable`: 是否开启 [一言](https://hitokoto.cn/)，开启一言时，将默认覆盖 `say.api`
- `hitokoto.api`: 你可以参考 [语句接口｜一言](https://developer.hitokoto.cn/sentence/) 来根据你的想法使用一言 API

```yaml
say:
  enable: true
  api: https://cdn.jsdelivr.net/gh/ElpsyCN/say@gh-pages/sentences.json
  src: /js/say.js
  # https://developer.hitokoto.cn/sentence/
  hitokoto:
    enable: true
    api: https://v1.hitokoto.cn
```

当你关闭一言时，将默认使用 `say.api` 处的数据。

> [say.elpsy.cn](https://say.elpsy.cn) 是我自己收藏中二语句的地方。= =，自动导出 JSON 用来拉取。

### 自定义语句

你也可以使用自定义的话语。

你可以在根目录的 `source` 文件夹下新建 `data/sentences.json`。（注意是 `data` 不是 `_data`，当然你新建别的文件夹也可以。）

格式如下：

```json
[
  {
    "content": "Hello, World!",
    "author": "Brian Kernighan",
    "from": "The C Programming Language"
  },
  {
    "content": "我们一日日度过的所谓日常，实际上可能是接连不断的奇迹。",
    "from": "日常"
  },
  {
    "content": "是啊，我所爱的，即非群星，也非银河。",
    "author": "云游君",
    "from": "yunyoujun.cn"
  },
  {
    "content": "隐约雷鸣 阴霾天空 但盼风雨来 能留你在此",
    "from": "万叶集·雷神短歌"
  }
]
```

以及设置 `say.api` 为 `/data/sentences.json`，并关闭一言。

譬如：

```yaml
say:
  enable: true
  api: /data/sentences.json
  hitokoto:
    enable: false
```

## Special

### 默哀

在每年的指定日期，开启灰色默哀模式。

- `enable`: 默认关闭。

> 4 月 4 日，全国哀悼。
> 为表达全国各族人民对抗击新冠肺炎疫情斗争牺牲烈士和逝世同胞的深切哀悼，国务院发布公告，决定 2020 年 4 月 4 日举行全国性哀悼活动。
> [国务院办公厅关于为新冠肺炎疫情牺牲烈士和逝世同胞举行全国性哀悼活动的通知](http://www.gov.cn/zhengce/content/2020-04/03/content_5498474.htm)

```yaml
mourn:
  enable: true
  days:
    - "4-4"
```

> 注意这里不用补 0，因为直接获取月日判断时，可以直接判断，逻辑代码最少。

## 自定义样式

相比 `head` 引入，你可以在此处编写 `stylus` 文件，并使用主题已有的变量，且将编译进 `hexo-theme-yun.css` 中。

> 新建 `source/_data/style` 文件夹，并再新建 `xxx.styl`，开始编写你的自定义样式。

譬如通过以下方式将导入你的 `source/_data/style` 下所有的 `.styl` 文件。

```yaml
custom:
  style: source/_data/style/*
```

## 更多配置

你可以直接查看 [themes/yun/\_config.yml](https://github.com/YunYouJun/hexo-theme-yun/blob/master/_config.yml) 文件及相关注释。

或者参考我的博客的自定义配置 [source/\_data/yun.yml](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/_data/yun.yml)。
