# 主题配置

## 配置文件

约定 ＞ 配置

请在 `source/_data/yun.yml` 中定义您所需要的配置，其余将自动使用主题的默认配置。
如未特殊说明，皆默认在 `yun.yml` 文件中配置。

## 语言

默认语言为中文 `zh-CN`。

## 主题色

自定义主题的主色调。

```yml
color:
  primary: "#6200ee"
```

## 头部资源

如果您有想自定义的资源，请添加到 `head` 中。

遵照以下示例，自定义您要添加的 `css` 与 `js` 资源。

JavaScript 资源类型说明：

- `base`: 必须提前加载。
- `async`: 可异步记载。
- `defer`: 必须最后加载。

```yml
head:
  css:
    example: //example.min.js
  js:
    base:
    async:
      # 如果您不打算自定义图标，请务必附带以下 cdn 链接。
    defer:
```

### favicon

设置网站图标

```yml
favicon: /favicon.ico
```

## CDN

Content Delivery Network，统一加载网络资源，有利于提高网页加载速度。

[jsDelivr – Open Source CDN](https://www.jsdelivr.com) 是一款免费开源的 CDN，国内速度表现良好，且统一 CDN 来源同样有利于加载速度。
故本主题 CDN 均默认采用 jsDelivr，并使用 `dns-prefetch` 预解析 jsDelivr 。

您同样可以根据命名规则获取您想要的 CDN，在 `head` 中引入：

- GitHub CDN: `https://cdn.jsdelivr.net/gh/user/repo@version/file`
- npm: `https://cdn.jsdelivr.net/npm/package@version/file`

`cdn` 为主题目前默认引入的 CDN 资源，结构与 `head` 类似，请尽量不要覆盖：

```yml
cdn:
  pre:
  css:
  js:
    base:
    async:
    defer:
```

## 图标 Icon

本主题默认使用 Remix Icon 的部分图标，并通过 iconfont 生成的 cdn 加载。

如您想要使用其他图标，推荐以下几种图标。

- 推荐方式零：只下载必要的 svg 存储为 CDN ，只在必要时使用（不引入 css 以尽可能提高速度）。
- 推荐方式一：使用 `font-awesome`，省时省力。
- 推荐方式二：全部使用自定义 `iconfont` 图标集。（速度快，但需自行配置）
- 推荐方式三：`ionicons` 加载与 `iconfont` 自定义搭配使用。

::: tip
请先选择你想要的图标类型 CDN 添加至 `head` 配置。其他类型图标您同样可以在头部引入 CDN 来使用。
:::

下面给出了一些基础图标的使用方法。

### [iconfont](https://www.iconfont.cn/)

阿里旗下，可定制自己所需图标集。国内速度良好。（推荐）

[使用说明](https://www.iconfont.cn/help/detail?helptype=code)

多色图标需采用文章中 `symbol` 引用方式。

为统一与方便切换，仍采用 `font-class` 方式引入。

```html
<i class="iconfont icon-xxx"></i>
```

### [Remix Icon](https://remixicon.com/)

- GitHub: <https://github.com/Remix-Design/remixicon>
- CDN: <https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css>

简洁、优雅、开源。

### [Font-Awesome](https://fontawesome.com)

- GitHub: [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)
- CDN: <https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.8.1/css/all.min.css>

图标多而全，含各类商标图标，但部分收费，且文件较大。

```html
<i class="fas fa-home"></i>
```

如使用 `Font-Awesome`，图标相关配置中请如下填写：`fas fa-home`。

### [Ionicons](https://ionicons.com)

- GitHub: [ionicons](https://github.com/ionic-team/ionicons)
- CDN CSS: <https://cdn.jsdelivr.net/npm/ionicons/dist/css/ionicons.min.css>
- CDN JS: <https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons.js>

无商标图标，可使用 Web Component ，按需加载。

#### 加载方式一：Web Component

可根据 `Android/iOS` 平台自动切换适合的风格 `Material/iOS`。

```html
<!-- 比 unpkg 快 -->
<!-- https://cdn.jsdelivr.net/npm/ionicons@4.5.6/dist/ionicons.js -->
<script src="https://unpkg.com/ionicons@4.5.5/dist/ionicons.js"></script>
```

```html
<ion-icon name="heart"></ion-icon>
```

如使用 Web Component `ion-icon`，图标相关配置中请如下填写：`ion-icon heart`。

#### 加载方式二： CSS 引入

```html
<!-- 比 unpkg 快 -->
<!-- https://cdn.jsdelivr.net/npm/ionicons@4.5.6/dist/css/ionicons.min.css -->
<link
  href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css"
  rel="stylesheet"
/>
```

```html
<i class="icon ion-md-heart"></i>
```

如使用 `font-class` 方式，图标相关配置中请如下填写：`icon ion-md-heart`。

### [Material Design icons](https://google.github.io/material-design-icons/)

- GitHub: [material-design-icons](https://github.com/google/material-design-icons)
- [Material Design icons](https://material.io/tools/icons)

样式统一，无商标图标。谷歌出品，因国内行情，加载未必稳定。

```html
<i class="material-icons">face</i>
```

如使用 `ionicon`，图标相关配置中请如下填写：`material-icons face`。

### 其他图标

与上述几种图标使用方式类似，图标相关配置中填写对应图标 `class` 即可。

## 社交图标

默认提供以下几种社交图标，您可以通过在头部引入自定义图标资源来获取更多图标。

- `link`: 链接
- `icon`: 图标 Class
- `color`: 图标颜色（前提是您引入的图标支持 SVG 自定义颜色）当前默认色彩采用官方图标的品牌主色。

```yml
social:
  QQ:
    # https://isux.tencent.com/wp-content/uploads/2016/05/20160512101222609.pdf
    link: http://wpa.qq.com/msgrd?v=3&uin=910426929&site=qq&menu=yes
    icon: icon-qq-line
    color: "#12B7F5"
  GitHub:
    link: https://github.com/YunYouJun
    icon: icon-github-line
    color: "#181717"
  E-Mail:
    link: mailto:me@yunyoujun.cn
    icon: icon-mail-line
    color: "#8E71C1"
  微博:
    link: https://weibo.com/jizhideyunyoujun
    icon: icon-weibo-line
    color: "#E6162D"
  豆瓣:
    link: https://www.douban.com/people/yunyoujun/
    icon: icon-douban-line
    color: "#007722"
  网易云音乐:
    link: https://music.163.com/#/user/home?id=247102977
    icon: icon-netease-cloud-music-line
    color: "#C10D0C"
  知乎:
    link: https://www.zhihu.com/people/yunyoujun/
    icon: icon-zhihu-line
    color: "#0084FF"
  哔哩哔哩动画:
    link: https://space.bilibili.com/1579790
    icon: icon-bilibili-line
    color: "#FF8EB3"
```

默认使用对象名称作为图标提示的标题。譬如您想要显示提示为 `bilibili` 而非 `哔哩哔哩动画`。

则修改如下：

```yml
bilibili:
  link: https://space.bilibili.com/1579790
  icon: icon-bilibili-line
  color: "#FF8EB3"
```

## 首页标语

首页的垂直交错排列文字效果。您可以访问 <https://yunyoujun.cn> 查看效果。

如果您未定义 `banner`，将默认使用您为 Hexo 配置的标题。

```yml
banner:
  title: 云游君的小站
  src: /js/ui/banner.js
```

## UI

### 背景

```yml
bg_image:
  enable: true
  url: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/alice-kirito-eugeo.webp
```

### 烟花

点击页面效果

```yml
fireworks: true
```

> 参考自：[anime.js](https://animejs.com/) [fireworks](https://molunerfinn.com/hexo-theme-melody-doc/zh-Hans/third-party-support.html#%E7%83%9F%E8%8A%B1)

### rymd

群星移动效果，默认关闭。

```tml
rymd: false
```

![rymd.webp](/img/rymd.webp)

> 参考自: [rymd](https://codepen.io/hakimel/pen/bzrZGo)

## 侧边栏

### 头像

- `enable`: 是否显示头像
- `url`: 头像链接（推荐使用 webp ，体积更小，加载更快）
- `rounded`: 是否显示圆形
- `opacity`: 透明度

```yml
avatar:
  enable: true
  url: /images/avatar.jpg # recommend avatar.webp
  rounded: true
  opacity: 1
```

### 导航

设置导航对应图标及链接

```yml
menu:
  home:
    path: /
    icon: icon-home-4-line
  archives:
    path: /archives
    icon: icon-archive-line
  tags:
    path: /tags
    icon: icon-price-tag-3-line
  categories:
    path: /categories
    icon: icon-folder-2-line
  about:
    path: /about
    icon: icon-information-line
```

## 文章

### 信息

- `item_text`: 是否显示文字（如：发表于、更新于，若关闭则只显示图标与时间信息）
- `created_at`: 是否显示创建时间
- `updated_at`: 是否显示更新时间
- `categories`: 是否显示种类
- `tags`: 是否显示标签

```yml
post_meta:
  item_text: false
  created_at: true
  updated_at: true
  categories: true
  tags: true
```

### 编辑链接

若开启，则会在文章页面标题旁显示一个编辑图标。
点击后跳转到编辑页面。

- `url`: 文章所在地址（您可以参照默认链接设置您的仓库跳转链接）

如我使用 `GitHub` 作为博客的托管仓库，仓库名为 `yunyoujun.github.io`，在 `hexo` 分支下，`source` 文件夹中，
则链接为 <https://github.com/YunYouJun/yunyoujun.github.io/tree/hexo/source/>。

```yml
post_edit:
  enable: true
  url: https://github.com/YunYouJun/yunyoujun.github.io/tree/hexo/source/
```

### 代码高亮

设置代码高亮主题

由于性能问题，抛弃 `highlight.js` ，使用 [prism](https://github.com/PrismJS/prism)。

请参考 [hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin) 使用。

等待 [Hexo 5.0.0 Roadmap](https://github.com/hexojs/hexo/issues/4002) 原生支持 Prism

### 版权

设置您的文章的分享版权

默认使用 [Creative Commons 4.0 International License](https://creativecommons.org/share-your-work/licensing-types-examples)

- `license`: 设置证书 (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
- `language`: 设置语言 (deed.zh | deed.fr | deed.de)
- `post`: 在每篇文章末尾显示

```yml
creative_commons:
  license: by-nc-sa
  post: true
  language: deed.zh
```

## 打赏

开启后，将在每篇文章末尾显示打赏按钮。

- `enable`: 开启打赏
- `comment`: 在打赏按钮下显示你想说的话

```yml
reward_settings:
  enable: true
  #comment: 我很可爱，请给我钱。
```

您也可以在某篇文章的首部单独设置是否开启打赏。

```yml
reward: true | false
```

### 打赏二维码

默认支持微信、支付宝打赏图标，`color` 为自定义图标颜色。

```yml
reward:
  wechatpay:
    path: /img/donate/wechatpay-qrcode.jpg
    color: "#2DC100" #7BB32E
  alipay:
    path: /img/donate/alipay-qrcode.jpg
    color: "#00A3EE"
```

## 友链

友链显示在侧边栏中

- `enable`: 是否显示友链
- `icon`: 友链图标
- `title`: 标题提示
- `url`: 链接

```yml
links:
  enable: true
  icon: icon-open-arm-line
  title: 云游和他的小伙伴们
  url: /links
```

新建友链页面

```sh
hexo new page links
```

进入 `source/links/index.md`

```yml
---
layout: links
title: 我的小伙伴们
date: 2019-06-21 13:06:06
keywords: 链接
description: 云游和他的小伙伴们
comments: true
links:
  - url: https://yunyoujun.cn
    img: https://yunnyoujun.cn/images/avatar.webp
    name: 云游君
    desc: 云游君的小站
---

```

## 页脚

::: tip 注意
以下配置均写在 `footer` 字段下。
如：

```yml
footer:
  since: 1997
```

:::

### 起始年份

```yml
since: 2016
```

### 图标

位于年份和名称之间的图标。

- `name`: 图标名称（即 `class`）
- `animated`: 是否开启动画
- `color`: 图标颜色

```yml
icon:
  name: icon-cloud-line
  animated: true
  color: "#0078E7"
```

### 驱动

自豪地显示当前使用的博客框架 Hexo 与主题 Yun 的名字及版本。

如：`由 Hexo 驱动 v4.2.0 | 主题 - Yun v0.0.2`。

让更多人知道 Hexo 与主题 Yun，这有利于开源社区进一步发展。

- `enable`: 开启
- `version`: 显示版本

```yml
powered:
  enable: true
  version: true
```

### 备案

国内用户可以提供备案号，开启备案显示。

备案信息默认链接为：<http://www.beian.miit.gov.cn>

- `enable`: 开启备案
- `icp`: 备案号

```yml
beian:
  enable: true
  icp: 苏ICP备xxxxxxxx号
```

### 自定义文本

`custom_text` 为自定义页脚，可以包含 HTML。
譬如有时使用其他服务商进行托管页面。

```yml
custom_text: Hosted by <a href="https://pages.coding.me" rel="noopener" target="_blank">Coding Pages</a>
```

## Say

随机在网站主页显示一句~~中二~~句子。

- `enable`: 是否开启
- `remote`: 是否使用远程外部数据（通过 fetch 获取 json 数据，数据格式见示例）
- `api`: 远程 JSON API

```yml
say:
  enable: true
  remote: true
  # api: https://say.elpsy.cn/sentences.json
  api: https://cdn.jsdelivr.net/gh/ElpsyCN/say@gh-pages/sentences.json
```

> [say.elpsy.cn](https://say.elpsy.cn) 是我收藏中二语句的地方。= =，自动导出 JSON 用来拉取。  
> 可以自定义，不介意的话，也可以用我的。

如果不使用外部远程，则需要自定义语句。

```yml
# when remote is false
sentences:
  - content: 我们一日日度过的所谓日常,实际上可能是接连不断的奇迹。
    from: 《日常》
    url: https://baike.baidu.com/item/日常/5844361
  - content: 是啊，我所爱的，即非群星，也非银河。
    from: 云游君
    url: https://yunyoujun.cn
  - content: 隐约雷鸣 阴霾天空 但盼风雨来 能留你在此
    from: 《万叶集》雷神短歌
    url: https://book.douban.com/subject/1066538/
  - content: 人类的悲欢并不相通，我只觉得他们吵闹。
    from: 《小杂感》鲁迅
    url: https://baike.baidu.com/item/小杂感
  - content: 遍身罗绮者，不是养蚕人。
    from: 《蚕妇》张俞
    url: https://baike.baidu.com/item/蚕妇/40814
```

## 更多配置

你可以直接查看 [themes/yun/\_config.yml](https://github.com/YunYouJun/hexo-theme-yun/blob/master/_config.yml) 文件及相关注释。

或者参考我的博客的自定义配置 [source/\_data/yun.yml](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/_data/yun.yml)。
