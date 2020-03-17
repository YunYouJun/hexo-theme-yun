# 主题页面

本主题默认支持并使用以下页面类型。

## 文章 post

### Front-matter

| 配置项 | 描述             | 默认值 |
| ------ | ---------------- | ------ |
| hide   | 临时隐藏你的文章 | false  |

你可以在文章头部添加本选项，来临时隐藏某篇文章。

```md
---
title: xxx
hide: true
---
```

该文章仍然会被渲染，你自己可以直接访问链接进行查看。但不会被显示在展示的文章卡片中。

> 题外话，这个功能是我当初应付备案临时加的。
> 我更改备案信息时，客服通知我首页不能用跳转其他页面链接的内容（有一个和文章混在一起直接跳转 bilibili 的卡片），所以我就加了这个功能临时隐藏掉了。
> 也许还挺实用的，你可以放一些只是自己看看，暂时还不打算发到主页显示的页面。

注意：其他文章末尾上一篇或下一篇文章里还是可能会出现该文章的链接。

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

进入 `source/links/index.md`

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
placeholder: 还没想好说些什么 # 默认对友链的描述
---

```

让友链显示在侧边栏中 [侧边栏 - 页面链接](/guide/config.html#页面链接)

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
- name: 名称
  avatar: 头像图片链接
  from: 出自什么作品
  url: 人物百科链接
  reason: 喜欢的理由
```

可参考我的[配置](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/girls/index.md)。
