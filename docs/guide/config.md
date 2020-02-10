# 主题配置

## 配置文件

约定 ＞ 配置

请在 `source/_data/yun.yml` 中定义您所需要的配置，其余将自动使用主题的默认配置。

## Icon

在主题 `_config.yml`， `cdn` 下 `css` 字段配置。

推荐方式零：只下载必要的 svg 存储为 cdn ，只在必要时使用（不引入 css 以尽可能提高速度）。
推荐方式一：使用 `font-awesome`，省时省力。
推荐方式二：全部使用自定义 `iconfont` 图标集。（速度快，但需自行配置）
推荐方式三：`ionicons` 加载与 `iconfont` 自定义搭配使用。

### [Font-Awesome](https://fontawesome.com)

GitHub: [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)
cdn: <https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.8.1/css/all.min.css>

图标多而全，含各类商标图标，但部分收费，且文件较大。

```html
<i class="fas fa-home"></i>
```

### [Ionicons](https://ionicons.com)

GitHub: [ionicons](https://github.com/ionic-team/ionicons)
cdn_css: <https://cdn.jsdelivr.net/npm/ionicons/dist/css/ionicons.min.css>
cdn_js: <https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons.js>

无商标图标，可使用 Web Component ，按需加载。

加载方式一：Web Component

可根据 `Android/iOS` 平台自动切换适合的风格 `Material/iOS`。

```html
<!-- 比 unpkg 快 -->
<!-- https://cdn.jsdelivr.net/npm/ionicons@4.5.6/dist/ionicons.js -->
<script src="https://unpkg.com/ionicons@4.5.5/dist/ionicons.js"></script>
```

```html
<ion-icon name="heart"></ion-icon>
```

如使用 Web Component `ion-icon`，配置中请如下填写：`ion-icon heart`。

加载方式二：

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

如使用 font-class 方式，配置中请如下填写：`icon ion-md-heart`。

### [Material Design icons](https://google.github.io/material-design-icons/)

GitHub: [material-design-icons](https://github.com/google/material-design-icons)

[Material Design icons](https://material.io/tools/icons)

样式统一，无商标图标。谷歌出品，因国内行情，加载未必稳定。

```html
<i class="material-icons">face</i>
```

如使用 `ionicon`，配置中请如下填写：`material-icons face`。

### [iconfont](https://www.iconfont.cn/)

阿里旗下，可定制自己所需图标集。

[使用说明](https://www.iconfont.cn/help/detail?helptype=code)

多色图标需采用文章中 `symbol` 引用方式。

为统一与方便切换，仍采用 `font-class` 方式引入。

```html
<i class="iconfont icon-xxx"></i>
```

### [Remix Icon](https://remixicon.com/)

GitHub: <https://github.com/Remix-Design/remixicon>

Download svg

cdn: <https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css>

### Recommend

#### CDN

- [jsDelivr – Open Source CDN](https://www.jsdelivr.com)

GitHub CDN: `https://cdn.jsdelivr.net/gh/user/repo@version/file`
