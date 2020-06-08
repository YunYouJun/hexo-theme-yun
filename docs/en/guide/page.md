# Theme page

This theme supports and uses the following page types by default.

## Article

### Image references

You can annotate the images as follows.

```md
![Audits-Lighthouse](https://i.loli.net/2020/03/08/DhfLu5yngb7NZE2.png) _Google Chrome Audits-Lighthouse detection score_
```

![img-caption-example.png](https://i.loli.net/2020/03/19/2bOIPC3Wv4Gxetm.png)

## Tags

If you have not installed `hexo-generator-tag`, please enter `npm install hexo-generator-tag` in the terminal.

Create a new `tags` page, and enter the following in the root directory of the blog:

```sh
hexo new page tags
```

Modify `Front Matter` of `source/tags/index.md`

```yaml {5}
---
title: tag
date: 2017-10-09 19:11:58
comments: false
type: tags
---

```

## Categories

If you have not installed `hexo-generator-category`, please enter `npm install hexo-generator-category` in the terminal.

Create a new `categories` page, and enter the following in the root directory of the blog:

```sh
hexo new page categories
```

Modify `Front Matter` of `source/categories/index.md`

```yaml {5}
---
title: Category
date: 2017-10-12 10:47:16
comments: false
type: categories
---

```

## Archives

Hexo support by default

## About

### about you

Click on your avatar or name will enter the about page by default.

You will need to create your about page.

```sh
hexo new page about
```

Then start to introduce yourself ~

### About the site

Click on the site name on the sidebar to enter the About Site page.

You can introduce your site by creating a new `site.md` in the `source/about` folder.

## 404

You will need to create a new 404 page first. You can do it by creating a new `404.md` directly under the `source` directory.

```md
---
layout: 404
title: 四大皆空
permalink: /404.html
reward: false
---
```

Your custom 404 page will only be displayed after you deploy it to GitHub Pages.

Example: <https://www.yunyoujun.cn/404.html>

You can also directly visit `/404.html` to see the effect locally.

> [Creating a custom 404 page for your GitHub Pages site](https://help.github.com/en/github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

## Friend links

New Friends Link Page

```sh
hexo new page links
```

Go to `source/links/index.md` and set the`links` field.

- `url`: blog link
- `avatar`: avatar image link
- `name`: their name
- `blog`: site name
- `desc`: one-sentence description
- `color`: the default is gray `gray`

You can enter [My Friends](https://www.yunyoujun.cn/links/) to see the effect

- `tip`: a text reminder when FriendChain is not loaded successfully and will be removed after loading. (This only takes effect after successfully loaded FriendChain via JSON.)

```yaml
---
layout: links
title: My friends
date: 2019-06-21 13:06:06
keywords: link
description: Friends of Yunyou
comments: true
links:
  - url: https://yunyoujun.cn
    avatar: https://cdn.jsdelivr.net/gh/YunYouJun/yunyoujun.github.io/images/avatar.jpg
    name: Yunyou Jun
    blog: Yunyoujun's blog
    desc: All at sea.
    color: "#0078e7" # representative color
    email: # not required
placeholder: I haven't thought about what to say # The default description of YouChain
tip: Friendchain loading in progress ~ If it fails, please refresh and try again ~
---

```

Let the friend chain display on the sidebar [sidebar-page link](/guide/config.html#pagelink)

### Random Friend Link

To enable a random friend chain, you must change it to an external JSON loading method.

For example: <https://cdn.jsdelivr.net/gh/YunYouJun/friends@gh-pages/links.json>

You can refer to my [YunYouJun/friends](https://github.com/YunYouJun/friends) to automatically generate the JSON data format of your friend chain.
(Of course, you can also store it locally manually.)

- `random`: random friend chain order, not enabled by default

```yaml
layout: links
title: My friends
date: 2019-06-21 13:06:06
keywords: link
description: Friends of Yunyou
comments: true
links: https://cdn.jsdelivr.net/gh/YunYouJun/friends@gh-pages/links.json
random: true
```

> Note: Using jsdelivr may be delayed due to the CDN.
> You can also use a custom domain name as I did. <https://friends.yunyoujun.cn/links.json>

## Girls

Record my favorite girls

Sample page: <https://yunyoujun.cn/girls/>

Set to enable first. (I know most people may not use this feature, so it is set to disable by default.)

> When disabled, the CSS file of the page will not be packed into the final CSS file. So no need to worry about this if the feature will affect the loading speed.

```yaml
girls:
  enable: true
```

```sh
hexo new page girls
```

Enter `source/girls/index.md`

```yaml
---
layout: girls
title: kawaii girls
banner: <span title = "Everyone is my angel!"> ranked in unintentional order </ span>
girls:
  -name: name
    avatar: avatar image link
    from: the project she's from
    url: character encyclopedia link
    reason: the reason for crushing
---

```

Please refer to my [configuration](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/girls/index.md).

> If you want it to be displayed on the sidebar, you also need to configure the navigation [sidebar-pagelink](/guide/config.html#页面链接)
