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

::: tip

> [Categories & Tags](https://hexo.io/docs/front-matter.html#Categories-amp-Tags)

Although Hexo supports multiple categories for an article, I personally recommend you to put an article under one category only and use tags for multiple descriptions for it.

Also, too many categories and tags are not easy to organize and not good for mobile display.

:::

## Archives

Hexo support by default.

It is rewritten in the form of a timeline.

> Example: <https://www.yunyoujun.cn/archives>

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
title: Nothing
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

## Albums

There is an album homepage, place multiple albums, click to enter the album to view more photos.

In `yun.yml`:

```yaml
albums:
enable: true
```

[Albums Example](https://www.yunyoujun.cn/albums/)

[Config Example](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/albums/index.md)

### albums

The album collection is the navigation page of the album, you can place multiple albums here.

New page for albums:

```sh
hexo new page albums
```

Enter `source/albums/index.md`, set `type`, and add album link, cover, etc.

- `caption`: album title
- url`: album link`
- cover`: album cover`
- `desc`: album description

```yaml {2}
---
type: albums
albums:
  - caption: 夕阳西下
    url: /albums/sunset.html
    cover: https://interactive-examples.mdn.mozilla.net/media/examples/elephant-660-480.jpg
    desc: 我想起那天夕阳下的奔跑
---

```

### Gallery

[Gallery Example](https://www.yunyoujun.cn/albums/sunset.html)

The photo album page is where you actually store your photos.

> Use [lightgallery.js](https://github.com/sachinchoolur/lightgallery.js/), the library will only be loaded on the album page.

New page.

You just need to create the md file in the newly created albums folder above, for example, create a new sunset.md.

Or create new via command line:

```sh
hexo new page --path albums/sunset "夕阳"
```

Enter the `sunset.md` file and modify it.

> Note: This is `layout` instead of `type`.

::: tip
You can also set `gallery_password` to encrypt the album. (Remember to set your repo as private.)

It is not directly named `password` to prevent conflicts with [hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt) plugin keyword `password`.

> Because [crypto-js](https://github.com/brix/crypto-js) is used, you also need `npm install crypto-js`.

Test page: <https://www.yunyoujun.cn/albums/sunset.html>
Test password: test

> If you find that the album cannot be decrypted normally when PJAX is turned on in `hexo s`, don't worry, this is that when Hexo is used as a server, the link is re-encrypted again, and there is no problem when generating static files for deployment.

:::

```yaml {5}
---
title: Sunset
date: 2020-04-18 16:27:24
updated: 2020-04-18 16:27:24
layout: gallery
password: test
photos:
  - caption: me
    src: https://interactive-examples.mdn.mozilla.net/media/examples/elephant-660-480.jpg
    desc: I think of running under the sunset that day.
  - caption: Remember
    src: https://i.picsum.photos/id/198/510/300.jpg
    desc: That is my lost youth
---

```

> Why use album collection as `albums` and `gallery` as album?
> [What is the Difference Between Albums vs Galleries in WordPress](https://enviragallery.com/what-is-the-difference-between-albums-vs-galleries-in-wordpress/)

## Slides

> Use [reveal.js](https://revealjs.com/) to achieve, see [document](https://revealjs.com/markdown/) for more information.

You can use Markdown to mix Html to quickly write your slides.

Create a new `slides/test.md` under `source`.

Or command:

```sh
hexo new page --path slides/test "Test Slides"
```

Enter `test.md`, modify the header as follows (follow the corresponding syntax to start editing your Slides file)

```yaml
---
title: Color Dust
date: 2020-06-23 16:27:24
updated: 2020-06-23 16:27:24
layout: slide
slide:
  theme: white
  config:
    history: true
    mouseWheel: true
---

```

Then start writing your Slides file with Markdown directly below.

```md
## Slide 1

## A paragraph with some text and a [link](http://hakim.se).

## Slide 2

---

## Slide 3
```

An example of my Slides:

- [color-dust.md](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/slides/color-dust.md)
- [Preview](https://www.yunyoujun.cn/slides/color-dust.html#/)

### General configuration

The default horizontal page separator is `---`, the vertical page separator is `~~`, and the start keyword of the note is `Note:`.

> Press <kbd>S</kbd> to turn on the speaker mode.

The theme is `white`, [more theme names](https://revealjs.com/themes/).

`config` corresponds to [More Configuration](https://revealjs.com/config/).

```yaml
slide:
  separator: ---
  separator_vertical: "~~"
  data_separator_notes: "^Note:"
  theme: white
  config:
    history: true
    mouseWheel: false
```

> As for the list of Slides, create your own `source/slides/index.md` and list it.
