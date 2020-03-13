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

## Girls

记录喜欢的女孩子们

页面示例：<https://yunyoujun.cn/girls/>

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
    img: https://cdn.jsdelivr.net/gh/YunYouJun/yunyoujun.github.io/images/avatar.jpg
    name: 云游君
    desc: 云游君的小站
placeholder: 还没想好说些什么 # 默认对友链的描述
---

```

友链显示在侧边栏中

```yml
pages:
  我的小伙伴们:
    url: /links
    icon: icon-open-arm-line
```
