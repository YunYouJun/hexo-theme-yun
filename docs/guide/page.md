# 主题页面

本主题默认支持并使用以下页面类型。

## 文章

### 图片注释

你可以遵循如下写法来对图片进行注释。

```md
![Audits - Lighthouse](https://i.loli.net/2020/03/08/DhfLu5yngb7NZE2.png)_谷歌浏览器 Audits - Lighthouse 检测分数_
```

![img-caption-example.png](https://i.loli.net/2020/03/19/2bOIPC3Wv4Gxetm.png)

## 标签 tags

如果您尚未安装 `hexo-generator-tag`，请输入 `npm install hexo-generator-tag`。

新建 `tags` 页面，在博客根目录下输入：

```sh
hexo new page tags
```

修改 `source/tags/index.md` 的 `Front Matter`

```yml {5}
---
title: 标签
date: 2017-10-09 19:11:58
comments: false
type: tags
---

```

## 分类 categories

如果您尚未安装 `hexo-generator-category`，请输入 `npm install hexo-generator-category`。

新建 `categories` 页面，在博客根目录下输入：

```sh
hexo new page categories
```

修改 `source/categories/index.md` 的 `Front Matter`

```yml {5}
---
title: 分类
date: 2017-10-12 10:47:16
comments: false
type: categories
---

```

## 归档 archives

Hexo 默认支持

## 关于 About

### 关于你

默认点击自己的头像或者名称会进入关于页面。

你需要新建好你的关于页面。

```sh
hexo new page about
```

然后就开始介绍你自己吧～

### 关于站点

此外点击侧边栏中的站点名称，会进入关于站点页面。

你可以在 `source/about` 文件夹下新建 `site.md` 来介绍你的站点。

譬如记载站点的变迁历史，我觉得和关于自己放在一起可能会互相干扰，就分开了。

## 404

你需要先新建 404 页面。可以直接在 `source` 目录下新建 `404.md`。

```md
---
layout: 404
title: 四大皆空
permalink: /404.html
reward: false
---
```

只有当你将其部署到 GitHub Pages 上，你访问不存在的页面才会显示。

Example: <https://www.yunyoujun.cn/404.html>

在本地，你也可以直接访问 `/404.html` 查看效果。

> [Creating a custom 404 page for your GitHub Pages site](https://help.github.com/en/github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

## 友链 links

新建友链页面

```sh
hexo new page links
```

进入 `source/links/index.md`，设置 `links` 字段。

- `url`: 博客链接
- `avatar`: 头像图片链接
- `name`: 怎么称呼？
- `blog`: 站点名称
- `desc`: 一句话描述
- `color`: 代表色，默认是灰色 `gray`

你可以进入 [我的小伙伴们](https://www.yunyoujun.cn/links/) 查看效果

```yml
---
layout: links
title: 我的小伙伴们
date: 2019-06-21 13:06:06
keywords: 链接
description: 云游的小伙伴们
comments: true
links:
  - url: https://yunyoujun.cn
    avatar: https://cdn.jsdelivr.net/gh/YunYouJun/yunyoujun.github.io/images/avatar.jpg
    name: 云游君
    blog: 云游君的小站
    desc: All at sea.
    color: "#0078e7" # 代表色
    email: # 非必须
placeholder: 还没想好说些什么 # 默认对友链的描述
---

```

让友链显示在侧边栏中 [侧边栏 - 页面链接](/guide/config.html#页面链接)

### 随机友链

想要启用随机友链，你必须将其改为外置的 JSON 加载方式。

譬如：<https://cdn.jsdelivr.net/gh/YunYouJun/friends@gh-pages/links.json>

你可以参考我的 [YunYouJun/friends](https://github.com/YunYouJun/friends) 来自动生成你友链的 JSON 数据格式。
（当然你自己手写存放在本地也可以。）

- `random`: 随机友链顺序，默认未开启

```yml
layout: links
title: 我的小伙伴们
date: 2019-06-21 13:06:06
keywords: 链接
description: 云游的小伙伴们
comments: true
links: https://cdn.jsdelivr.net/gh/YunYouJun/friends@gh-pages/links.json
random: true
```

## Girls

记录喜欢的女孩子们

页面示例：<https://yunyoujun.cn/girls/>

先设置开启。（我知道大多数人，可能并不会使用这个功能。所以默认是关闭的。）

> 当关闭时，该页面的 CSS 文件也不会被打包进最后的 CSS 文件。所以不用担心本主题该功能会影响加载速度。

```yml
girls:
  enable: true
```

```sh
hexo new page girls
```

进入 `source/girls/index.md`

```yml
---
layout: girls
title: 可爱的女孩子
banner: <span title="大家都是我的天使！">排名不分先后</span>
girls:
  - name: 名称
    avatar: 头像图片链接
    from: 出自什么作品
    url: 人物百科链接
    reason: 喜欢的理由
---

```

可参考我的[配置](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/girls/index.md)。
