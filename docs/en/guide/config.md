# Theme Configuration

## Configuration File

Convention > Configuration

::: danger
Please define the configuration you need in `source/_data/yun.yml`, the rest will automatically use the default configuration.

Unless otherwise specified, they are configured by default in the `yun.yml` file.

It is best not to modify any of the theme's files unless you have certain development capabilities, or else the theme can not be upgraded afterward.
:::

## Language

The default language is Chinese `zh-CN`.

### Customized Language

Create a new `source/_data/language.yml` in the Hexo working directory. (If the `source/_data` directory does not exist, please create a new one.)

With the convention greater than the configuration, you only need to customize the paragraph or words you want to override in `language.yml` , and the rest will be automatically merged with the theme's default configuration. (This is also more convenient for future upgrades)

Here follows a configuration example,

```yaml
en: # the language need to be overridden
  menu:
    home: My Index

ja: # the language need to be overridden
  menu:
    home: マイインデックス

zh-CN: # the language need to be overridden
  menu:
    home: 我的主页
```

If english is the only used language, all items can be erased other than `en`.

## Theme Color

The main color of the custom theme.

- `bg`: background color (choose a color closer to the main color of your background image in order to make it more coordinated)

> [color-dust](https://www.yunyoujun.cn/color-dust) I wrote a small tool that can analyze the color in pictures.

```yaml
colors:
  primary: "#6200ee"
  # bg: "# F5F5F5"
  selection_bg: "#8e71c1" # background color when selecting text
  # Starting and ending colors of the tags
  # tag_start_color:
  # tag_end_color:
```

### Tags

You can specify the color for your label, the default color is `#333`.

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

### Categories

You can specify the color for your category, the default color is `#333`.

```yaml
categories:
  Notes: dimgray
```

## Head Resources

If you have resources that you want to load, please add them to the `head`.

Follow the example below to customize the `css` and `js` resources you want to add.

JavaScript resource type description:

-`base`: must be loaded and executed in advance. -`async`: Asynchronous loading, executed immediately after loading. -`defer`: load the resource asynchronously, but execute it last.

```yaml
head:
  css:
    example: //example.min.css
  js:
    base:
    async:
    defer:
```

### Favicon

Set the website icon (make sure your `favicon.ico` file is placed under the `source` folder), set as follows:

```yaml
favicon: /favicon.ico
```

Yun Logo can use the corresponding opposite colors according to the light and dark theme of the browser.

For example, the bright browser LOGO has a black stroke, and the dark browser LOGO has a white stroke.

Your icon must be an `svg` file, and add a corresponding style to it.

> You can refer to my LOGO SVG code. [yun.svg](https://github.com/YunYouJun/hexo-theme-yun/blob/dev/source/yun.svg)

i.e.:

```html
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

Content Delivery Network unifies the loading of network resources; it is conducive to improving the speed of web page loading.

[jsDelivr – Open Source CDN](https://www.jsdelivr.com) is a free and open-source CDN, with good domestic speed performance, and a unified CDN source which is also conducive to loading speed.
Therefore, this theme's CDN defaults to jsDelivr and uses `dns-prefetch` to pre-parse jsDelivr.

You can also obtain the CDN you want according to the naming rules, and introduce it in the `head`:

-GitHub CDN: `https://cdn.jsdelivr.net/gh/user/repo@version/file`
-npm: `https://cdn.jsdelivr.net/npm/package@version/file`

`cdn` is the CDN resource currently introduced by the theme by default, and its structure is similar to `head`.

```yaml
cdn:
  pre: ""
  css:
  js:
    base:
    async:
      # Icon resources introduced by default, use iconfont
      iconfont: //at.alicdn.com/t/font_1140697_asgm6pccckc.js
    defer:
```

-`pre`: empty by default, your loading resource prefix. For example, if you want to use `jsdelivr` to accelerate the static resources of the whole station, you can set it in `yun.yml` like this.

> Replace `https://cdn.jsdelivr.net/gh/` with your GitHub username and repository name (you can also add the current branch, such as `@master`).
> `@latest` is to use the latest version (but it will still be cached, **and it will take 12 hours to update**, if you need to force a refresh, please refer to [Purge Cache](https://github.com/jsdelivr/sdelivr#purge-cache)
> In addition, please make sure that your avatar image link uses `/images/xxx.jpg` instead of `https://xxx/xxx.jpg`.

```yaml
cdn:
  pre: https://cdn.jsdelivr.net/gh/YunYouJun/yunyoujun.github.io@latest
```

::: tip
If you customize the resources used by the theme and want to preview and debug locally more conveniently,

you can add `" dev ":" export NODE_ENV = dev && hexo s "` in the `scripts` field of `package.json` in the Hexo working directory.

```json
{
  "scripts": {
    "dev": "export NODE_ENV= ev &&hexo s"
  }
}
```

And start it through `npm run dev`; it is now in development mode.`cdn.pre` is not used by default.
:::

### Overwrite Icon Font

```yaml
cdn:
  js:
    async:
      iconfont: your iconfont custom resource
```

### Preloading

Use `preload`, `prefetch`, `preconnect`, `dns-prefetch` to optimize the speed of webpage recording.

-`preload`: resources that will be used after this page -`prefetch`: resources that may be used after jump to the page -`dns-prefetch`: resolve the DNS address of the domain name that will be used -`preconnect`: establish a link with the specified domain name in advance; it has more TCP connections than`dns-prefetch`

`preload` and `prefetch` are only used to load local resources (and generally use by default). Do not use resources with a protocol header (`http://`).

CDN can be added at `head`.

> [\<link\> : External resource link element-MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)

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

# do more (TCP handshake ...) than dns-fetch
preconnect:
  - https://cdn.jsdelivr.net
```

## Icon

This theme uses some of Remix Icon's icons by default and loads through cdn generated by iconfont.

> The default icon list refer to [default icons](/en/guide/icon.html)

If you want to use other icons, the following icons are recommended.

- Only download the necessary svg and store it as a CDN, and only use it when necessary (do not introduce css in order to increase the speed as much as possible).
- Use `font-awesome`, saving time and effort.
- Use only custom `iconfont` icon sets. (Fast speed, but need to configure)
- Customize the use of `ionicons` load with `iconfont`.

::: tip
You can go to [iconfont](https://www.iconfont.cn/) to customize a set of icons and cover the icon resources introduced by [CDN] (# CDN).
If you just want to add a few extra icons, you'd better introduce it at [head](# head-header resource) instead of directly overwriting it.
:::

Here are some ways to use basic icons.

### [iconfont](https://www.iconfont.cn/)

Under Alibaba, you can customize your own icon set. Domestic speed is decent in China. (recommend)

[Instructions](https://www.iconfont.cn/help/detail?helptype=code)

Multi-color icons need to be quoted in the `symbol` of the article.

Then set as follow in `yun.yml`.

```yaml
head:
  js:
    async:
      # Here is the icon link you got from iconfont.
      iconfont: //at.alicdn.com/t/font_1623879_a03x3er7qur.js
```

### [Remix Icon](https://remixicon.com/)

-GitHub: <https://github.com/Remix-Design/remixicon>
-CDN: <https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css>

Simple, elegant and open source.

### [Font-Awesome](https://fontawesome.com)

-GitHub: [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)
-CDN: <https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css>

There are many and complete icons, including all kinds of trademark icons, but some are charged and the files are large.

```html
<i class="fas fa-home"> </i>
```

If you are using `Font-Awesome`, please fill in the icon configuration as follows: `fas fa-home`.

### [Ionicons](https://ionicons.com)

-GitHub: [ionicons](https://github.com/ionic-team/ionicons)
-CDN CSS: <https://cdn.jsdelivr.net/npm/ionicons/dist/css/ionicons.min.css>
-CDN JS: <https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons.js>

There is no trademark icon, you can use Web Component and load it on demand.

#### Loading Method 1: Web Component

It can automatically switch the suitable style `Material/ iOS` according to the `Android/iOS` platform.

```html
<!-- 比 unpkg 快 -->
<!-- https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons.js -->
<script src="https://unpkg.com/ionicons/dist/ionicons.js"></script>
```

```html
<ion-icon name="heart"> </ion-icon>
```

If you use Web Component `ion-icon`, please fill in the icon-related configuration as follows: `ion-icon heart`.

#### Loading Method 2: CSS Introduction

```html
<!-- Faster than unpkg -->
<!-- https://cdn.jsdelivr.net/npm/ionicons/dist/css/ionicons.min.css -->
<link
  href="https://unpkg.com/ionicons/dist/css/ionicons.min.css"
  rel="stylesheet"
/>
```

```html
<i class="icon ion-md-heart"> </i>
```

If you use the `font-class` method, please fill in the icon-related configuration as follows: `icon ion-md-heart`.

### [Material Design icons](https://google.github.io/material-design-icons/)

-GitHub: [material-design-icons](https://github.com/google/material-design-icons) -[Material Design icons](https://material.io/tools/icons)

Uniform style, no trademark icon. Produced by Google, due to domestic policies, loading may not be stable if using in China.

```html
<i class="material-icons">face </i>
```

If you use `ionicon`, please fill in the icon-related configuration as follows: `material-icons face`.

### Other Icons

Similar to the use of the above icons fill in the corresponding icon `class` in the icon-related configuration.

## Social Icons

The following social icons are provided by default. You can obtain more icons by introducing custom icon resources in [head](#head-head resource)
For better display, my default link will be displayed.

- `name`: link name
- `link`: link
- `icon`: Icon Class
- `color`: Icon color (If the icon you introduced supports SVG custom colors in advance) The current default color adopts the official icon brand color.

```yaml
social:
  - name: RSS
    # set rss in your root config
    # https://github.com/hexojs/hexo-generator-feed
    link: atom.xml # config.feed.path
    icon: icon-rss-line
    color: orange
  - name: QQ
    # https://isux.tencent.com/wp-content/uploads/2016/05/20160512101222609.pdf
    link: https://wpa.qq.com/msgrd?v=3&uin=910426929&site=qq&menu=yes
    icon: icon-qq-line
    color: "# 12B7F5"
  - name: GitHub
    link: https://github.com/YunYouJun
    icon: icon-github-line
    color: "# 181717"
  - name: E-Mail
    link: mailto: me@yunyoujun.cn
    icon: icon-mail-line
    color: "# 8E71C1"
  - name: Weibo
    link: https://weibo.com/jizhideyunyoujun
    icon: icon-weibo-line
    color: "# E6162D"
  - name: Douban
    link: https://www.douban.com/people/yunyoujun/
    icon: icon-douban-line
    color: "# 007722"
  - name: NetEase Cloud Music
    link: https://music.163.com/#/user/home?id=247102977
    icon: icon-netease-cloud-music-line
    color: "# C10D0C"
  - name: Zhihu
    link: https://www.zhihu.com/people/yunyoujun/
    icon: icon-zhihu-line
    color: "# 0084FF"
  - name: Bilibili Animation
    link: https://space.bilibili.com/1579790
    icon: icon-bilibili-line
    color: "# FF8EB3"
  - name: POPI
    link: https://www.popiask.cn/elpsycn
    icon: icon-questionnaire-line
    color: "# 525252"
  - name: WeChat official account
    link: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/about/white-qrcode-and-search.jpg
    icon: icon-wechat-2-line
    color: "# 1AAD19"
```

You only need to set `social` in`yun.yml` to overwrite it (at this time you can only display your mailbox icon and no other icons):

```yaml
social:
  - name: E-Mail
    link: mailto: your email
    icon: icon-mail-line
    color: "#8E71C1"
```

If you don't want to put any links, just set the following in `yun.yml`:

```yaml
social:
```

## Home

### Slogan Animation

The verticallly staggered text effect on the homepage is enabled by default.

You can visit <https://yunyoujun.cn> to see the effect. (Each refresh will display random font size)

> This is the earliest function implemented during the development of this theme. During the period, it was refactored several times due to compatibility issues of browsers such as Safari, and the loading speed was also improved.
> It was a function that went through three dynasties, lol.

-`enable`: whether to enable -`title`: set text content

```yaml
banner:
  enable: true
  title: 云游君的小站
  src: /js/ui/banner.js
```

### Announcement

You can configure the announcement as follows.
It will be displayed at the top of all article cards, below the tagline.

```yaml
notice:
  enable: true
  content: Thanks for playing my game.
```

## UI

### Background

-`opacity`: background transparency

::: tip
Note that the background blur is now disabled by default. It is also recommended that users use image processing tools to blur images for the background.

> You can also use some online image blur tools directly. For example, [Gaussian Blur](https://www.anooc.com/ts/gs) (This is only the first one I found on Google, you can find your favorite tool to process it.)

This also eliminates the white borders produced during the application of `blur` filter to color pictures.
At the same time, it can also reduce the background of the image and improve the loading and rendering speed.
:::

```yaml
bg_image:
  enable: true
  url: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-0-blur-30px.jpg
  # blur: 30px # Set the blurry degree of background
  opacity: 0.8
```

> If you want to use a custom image background, just put it in the `source/images` folder and use `/images/xxx.jpg` to import it.

#### Search Background

- `placeholder`: search box prompt text (if not set, the corresponding text will be automatically selected according to Hexo language configuration)

```yaml
search:
  bg_image: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-2.jpg
  # placeholder:
```

> For more search settings, please refer to [Search-Third Party Support](/guide/third-party-support.html#search)

### Fireworks

Click on the fireworks effect on the page

- `enable`: whether to enable, enable by default
- `colors`: the included colors, the default is several levels of blue colors (please follow the RGB values ​​below)

```yaml
fireworks:
  enable: true
  colors: -"102, 167, 221"
    -"62, 131, 225"
    -"33, 78, 194"
```

> Reference from: [Anime.js Fireworks canvas demo](https://codepen.io/juliangarnier/pen/gmOwJX)

### ScrollReveal

The scrolling effect of the card on the home page can be seen in [Official Website](https://cdn.jsdelivr.net/npm/scrollreveal/dist/scrollreveal.min.js), which is enabled by default.

```yaml
scrollreveal: true
```

### Cursor Cursor

Replace the mouse cursor, which is off by default. By default, [Material Design Cursors](https://www.deviantart.com/rosea92/art/Material-Design-Cursors-Dark-756850032) is used by default.

You can also use your favorite icon instead.

- `default`: Icon in the default state.
- `pointer`: pointer (that is, in the link state) icon.

```yaml
cursor:
  enable: false
  default: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/css/md-cursors/pointer.cur
  pointer: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/css/md-cursors/link.cur
  text: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/css/md-cursors/text.cur
```

## Sidebar

### Sidebar Background

```yaml
sidebar:
  bg_image: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-1.jpg
  bg_position: bottom 3rem center
```

`bottom 3rem center` means it is centered and `3rem` from the bottom.

You can refer to [background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position) to set the position of the background image.

### Avatar

- `enable`: whether to show avatar
- `url`: avatar image link
- `rounded`: whether to be circled
- `opacity`: transparency
- `mickey_mouse`: Closed by default. When ON, the avatar of the sidebar of the article page will move upwards (Disney copyright alert)

```yaml
avatar:
  enable: true
  url: /images/avatar.jpg
  rounded: true
  opacity: 1
  mickey_mouse: false
```

The effect after `mickey_mouse` is enabled:

![mickey-mouse](https://i.loli.net/2020/03/10/fPn637T98lA2wJ4.png)

### Navigation

Set navigation corresponding icons and links

They are:

- Home
- Archive
- Label
- Classification
- Custom (You can set any icon and link. When you do not set a custom icon link, it will automatically become a document navigation button to maintain the overall symmetry)

> By the way, read the documentation first when encountering an issue

```yaml
menu:
  home:
    path: /
    icon: icon-home-4-line
  archives:
    path: / archives
    icon: icon-archive-line
  tags:
    path: / tags
    icon: icon-price-tag-3-line
  categories:
    path: / categories
    icon: icon-folder-2-line
  custom:
    title: Document
    path: https://yun.yunyoujun.cn
    icon: icon-settings-line
```

::: tip
The labels and categories of the sidebar will only be displayed if you have articles that are using them.

e.g.:

```md
---
title: Tutorial on how to build your website from scratch
date: 2020-03-05 01:31:08
updated: 2020-03-13 01:31:08
tags:
  - Tutorial
  - Hexo
  - share
categories:
  - Little Amway from Yun
---
```

:::

### Page Link

At the bottom of the sidebar, add some eye-catching icon links.

The icon is larger than [Social Link](#SocialIcon). You can place your page navigation, friend links, etc.

e.g.:

> [Theme page](/guide/page.html#友链-links)

```yaml
pages:
  -name: my friends
    url: / links /
    icon: icon-genderless-line
    color: dodgerblue
```

If you don't want to put any links, just set the following in `yun.yml`:

```yaml
pages:
```

## Article

### Home Card

-`opacity`: customize the transparency of the homepage card, the default is set to `0.8`

```yaml
post_card:
  opacity: 0.8
```

#### Type

By setting the `type` attribute for an article, you can turn it into another type of card and jump to the link set by `url`.

e.g.:

```md
---
title: xxx
type: bilibili
url: https://www.bilibili.com/video/av8153395/
---
```

The bilibili icon will appear in front of the article title. Clicking on the title will jump to the corresponding link.

Currently, the following types are supported by default (Bilibili, Douban, GitHub, NetEase Cloud Music, WeChat Official Account, Weibo, Yuque, Zhihu, and Outer Links):

```yaml
types:
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
  link:
    color: blue
    icon: icon-external-link-line
```

You can also set your icon and color for different links in `yun.yml`.

```yaml
type:
  google:
    color: xxx
    icon: xxx
```

When the `type` you specified does not exist in the default nor is customized, the blue extra link icon will be used by default.

If you want to display information on your external link card, you can write it before `<!-- more -->`, it will be displayed as a summary.

e.g.:

```md
---
title: hexo-theme-yun
type: github
url: https://github.com/YunYouJun/hexo-theme-yun
---

Hexo theme Yun

<!-- more -->
```

#### Hide

You can add a `hide` attribute at the head of the article to temporarily hide an article.

```md
---
title: xxx
hide: true
# hide: index
---
```

The article will still be rendered, and you can directly view the link by yourself, but it will not be displayed in the displayed article card.

> (Here are a bunch of nonsense about why the author added this function that I don't want to translate)

Note: A link to the article will still appear in the previous or next article at the end of other articles.

### Information

- `item_text`: whether to display text (for example: posted on, updated on. If disabled, it will only display icon and time)
- `created_at`: whether to show the creation time
- `updated_at`: whether to show updated time
- `categories`: whether to display categories
- `tags`: whether to display tags

```yaml
post_meta:
  item_text: false
  created_at: true
  updated_at: true
  categories: true
  tags: true
```

### Table of Contents

As long as you follow [Markdown syntax](https://segmentfault.com/markdown), the directory will be automatically generated!

> No one will disable this feature, lol

### Edit Link

If enabled, an edit icon will be displayed next to the article page title.
Click to jump to the editing page.

- `url`: the address of the article (you can refer to the default link when setting your warehouse jump link)

If I use `GitHub` as the hosting warehouse for the blog, the warehouse name is `yunyoujun.github.io`, under the `hexo` branch, in the `source` folder,
where my link will be <https://github.com/YunYouJun/yunyoujun.github.io/tree/hexo/source/>.

```yaml
post_edit:
  enable: true
  url: https://github.com/YunYouJun/yunyoujun.github.io/tree/hexo/source/
```

### Code Highlighting

Set code highlight

Due to performance issues, I abandoned `highlight.js` and used [prism](https://github.com/PrismJS/prism).

Please refer to [hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin) to use.

Waiting for [Hexo 5.0.0 Roadmap](https://github.com/hexojs/hexo/issues/4002) to support Prism natively.

> Languages ​​currently supported by Prism: <https://prismjs.com/#supported-languages>

```sh
npm install hexo-prism-plugin
```

Configure in `_config.yml` under Hexo working directory:

```yaml
# https://github.com/ele828/hexo-prism-plugin
prism_plugin:
  mode: preprocess # realtime / preprocess
  theme: default
  line_number: false # default false
  # custom_css: "path / to / your / custom.css" # optional
```

Close the `highlight` that comes with Hexo (locates in `_config.yml` in the Hexo working directory)

```yaml
highlight:
  enable: true
```

> It is recommended to close the line number, [here](https://highlightjs.readthedocs.io/en/latest/line-numbers.html) is the where the author wrote why highlight does not support line numbers.
> After hexo-prism-plugin enables the line number, there will be some inconsistencies in the theme style.
> It doesn't matter if the line number exists. When it is removed, some space can be saved. For example, some codes that originally required scroll bars can be completely displayed after being removed.

### Copyright

Set the shared copyright of your article

[Creative Commons 4.0 International License](https://creativecommons.org/share-your-work/licensing-types-examples) is used by default

- `license`: set certificate (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
- `language`: set language (deed.zh | deed.fr | deed.de)
- `post`: displayed at the end of each post

```yaml
creative_commons:
  license: by-nc-sa
  post: true
  language: deed.zh
```

### Image Lazy Loading

Enable by default, it will add `loading ="lazy"` attribute to the Markdown image `img`.

> [<img> loading](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-loading)
> There are still many browsers that do not support this feature [Can I use loading?](Https://caniuse.com/#search=loading)

```yaml
lazyload:
  enable: true
```

## Patreon

After enabled, a donating button will be displayed at the end of each article or page.

- `enable`: enable rewards
- `icon`: reward icon
- `comment`: show what you want to say under the reward button
- `url`: your reward link (when you enable the reward link, it will automatically jump to your external link instead of expanding the QR code)

```yaml
reward_settings:
  enable: true
  icon: icon-hand-coin-line
  comment: I'm so cute. Please give me money.
  # url: https://github.com/YunYouJun/yunyoujun.github.io/issues/96
```

You can also set whether to enable rewards at the top of an article.

```yaml
reward: true
# reward: false
```

### Patreon QR Code

QQ, WeChat, and Alipay reward icons are supported by default, and `color` is a custom icon color.

- `name`: donating method
- `path`: image path
- `color`: icon color
- `icon`: icon name

```yaml
reward:
  - name: Alipay
    path: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/alipay-qrcode.jpg
    color: "# 00A3EE"
    icon: icon-alipay-line
  - name: QQ pay
    path: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/qqpay-qrcode.png
    color: "# 12B7F5"
    icon: icon-qq-line
  - name: WeChat Pay
    path: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/wechatpay-qrcode.jpg
    color: "# 2DC100"
    icon: icon-wechat-pay-line
```

You can override it in `yun.yml`.

```yaml
reward:
  -name: Alipay
    path: https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/alipay-qrcode.jpg
    color: "#00A3EE"
    icon: icon-alipay-line
```

## Footer

::: tip
The following configurations are written under the `footer` field.
Such as:

```yaml
footer:
  since: 1997
```

:::

### Starting Year

```yaml
since: 2016
```

### Icon

The icon between the year and the name.

- `name`: icon name (i.e. `class`)
- `animated`: whether to enable animation
- `color`: icon color

```yaml
icon:
  name: icon-cloud-line
  animated: true
  color: "#0078E7"
```

### Driver

Show the names and versions of the currently used blog framework, Hexo, and the theme Yun with pride.

For example: `Driven by Hexo v4.2.0 | Theme-Yun v0.0.2`.

Let more people know Hexo and the theme Yun, which is conducive to the further development of the open-source community.

- `enable`: enable

```yaml
powered:
  enable: true
```

### Filing

Domestic users in China can provide the record number to enable the record display.

The default link for record information is: <http://www.beian.miit.gov.cn>

- `enable`: enable the record
- `icp`: record number

```yaml
beian:
  enable: true
  icp: 苏 ICP 备 xxxxxxxx 号
```

### Operation Time

Disabled by default.

`This blog has been running 442 days, 19 hours, 28 minutes and 40 seconds (● '◡' ●)`

```yaml
live_time:
  enable: false
  prefix: This blog has been run cutely
  suffix: (● '◡' ●)
  start_time: "2019-04-12T00: 00: 00"
```

### Custom Text

`custom_text` is a custom footer and can contain HTML.
For example, sometimes it can use other service providers to host pages.

```yaml
custom_text: Hosted by <a href="https://pages.coding.me" rel="noopener" target="_blank"> Coding Pages </a>
```

## Say

Randomly display a sentence on the homepage of the website ~~eighth-grade syndrome. (By default, [hitokoto](https://hitokoto.cn/) is used as the API)

- `enable`: whether to enable hitokoto
- `api`: Remote JSON API
- `src`: the called js file, it is best not to modify it (you can also write it yourself according to its structure to load the desired JSON format.)
- `hitokoto.enable`: Whether to enable [hitokoto](https://hitokoto.cn/), when you enable hitokoto, it will override `say.api` by default
- `hitokoto.api`: You can refer to [Statement Interface ｜ hitokoto](https://developer.hitokoto.cn/sentence/) to use the koto API according to your thoughts

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

When you close hitokoto, the data at `say.api` will be used by default.

> [say.elpsy.cn](https://say.elpsy.cn) is where I have stored my eighthgrade syndrome hitokoto collections. = =, automatically export JSON for pulling.

### Customize

You can also use custom sentences.

Create a new `data/sentences.json` under the `source` folder in the root directory. (Note that `data` is not `_data`, or you can also create another folder.)

The format is as follows:

```json
[
  {
    "content": "Hello, World!",
    "author": "Brian Kernighan",
    "from": "The C Programming Language"
  },
  {
    "content": "The so-called daily life we ​​spend day by day may actually be a continuous miracle.",
    "from": "Daily"
  },
  {
    "content": "Yeah, what I love is neither the stars nor the galaxy.",
    "author": "YunYouJun",
    "from": "yunyoujun.cn"
  },
  {
    "content": "Vague thunder, hazy sky, but hope the wind and rain will keep you here",
    "from": "Wan Ye Ji · 雷神短歌"
  }
]
```

Then set `say.api` to `/data/sentences.json`, and close it.

i.e.:

```yaml
say:
  enable: true
  api: /data/sentences.json
  src: /js/say.js
  hitokoto:
    enable: false
```

## Special

### Mourn

On the designated day of the year, the gray mourning mode is enabled.

-`enable`: Disabled by default.

> On April 4, the nation mourned.
> In order to express the deep condolences of the people of all ethnic groups in the country in the fight against the Coronavirus Pandemic, at the expense of martyrs and deceased compatriots, the State Council issued an announcement and decided to hold a national mourning event on April 4, 2020.

```yaml
mourn:
  enable: true
  days: -"4-4"
```

## More Configuration

You can directly view the files and relative comments in[themes/yun/\_config.yml](https://github.com/YunYouJun/hexo-theme-yun/blob/master/_config.yml).

Or refer to the custom configuration of my blog [source/\_data/yun.yml](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/_data/yun.yml).
