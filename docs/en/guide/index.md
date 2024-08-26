# User's Guidance

::: warning [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) 已进入维护模式，不再添加新功能。

[Valaxy](https://github.com/YunYouJun/valaxy) 与 [valaxy-theme-yun](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-yun) 将成为它的继任者。

---

如果您是新手，我更推荐你直接尝试 [Valaxy - 静态博客框架](https://valaxy.site)。

- 它从更底层上解决了 Hexo 目前存在的一些问题与不足，也会是我之后着重维护更新的项目。
- valaxy-theme-yun 已经实现 hexo-theme-yun 的几乎所有功能，此外它的热更新开发体验绝对值得您一试！

---

如果您已经是 hexo-theme-yun 的使用者：

- Valaxy 提供了 [valaxy-theme-yun](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-yun) 主题以供迁移。（您也可以稍作等待，我们会继续修复细节，并优化迁移体验。）
- 如果您不想要迁移，hexo-theme-yun 会保持项目的维护，但不会再添加新功能或非缺陷型修复。

:::

::: warning [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) is in maintenance mode and no longer adding new features.

[Valaxy](https://github.com/YunYouJun/valaxy) and [valaxy-theme-yun](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-yun) will be its successors.

---

If you are a beginner, I recommend you to try [Valaxy - Static Blog Framework](https://valaxy.site).

- It solves some of the problems and shortcomings of Hexo from a lower level, and will be the project I will focus on maintaining and updating later.
- valaxy-theme-yun has almost all the features of hexo-theme-yun, and its hot update development experience is definitely worth a try!

:::

This is a Hexo theme. Please make sure you acknowledge the basic usage of Hexo.

You can also refer to the newbie tutorial I wrote [Tutorial on how to build your website from scratch-Yunyoujun's small station](https://www.yunyoujun.cn/posts/how-to-build-your-site).

```bash
npm install hexo-cli -g
hexo init your-blog
cd your-blog
npm install
hexo server
```

> For more information, please refer to [Hexo official website](https://hexo.io/)

If you have any questions or suggestions about the use of this theme, you can go ahead to [here](https://github.com/YunYouJun/hexo-theme-yun/issues) and initiate an issue.

You can also join [Discussions](https://github.com/YunYouJun/hexo-theme-yun/discussions) for feedback and discussion.

## Quickstart

::: tip renderer
If you don’t have renderers for `pug` and`stylus`, please install:
[hexo-renderer-pug](https://github.com/hexojs/hexo-renderer-pug)
(This is Hexo official maintenance, but it seems that there are not many stars, or have a diligent update as the one below.)
Or [hexo-render-pug](https://github.com/maxknee/hexo-render-pug)
(The former one does not support frequently update during development, but the latter does.)
And [hexo-renderer-stylus](https://github.com/hexojs/hexo-renderer-stylus)

```bash
npm install hexo-render-pug hexo-renderer-stylus --save
# or
yarn add hexo-render-pug hexo-renderer-stylus
```

:::

### Install Theme

Go to the root directory of your Hexo blog.

```bash
npm i hexo-theme-yun@latest
```

### Enable Themes

Modify the Hexo site configuration file `_config.yml`

```bash
# Set the theme to hexo-theme-yun
theme: yun
```

### Configure Theme

Create a new `_config.yun.yml` in the Hexo working directory.

With the convention greater than the configuration, you only need to customize the configuration you want to override in `_config.yun.yml`, and the rest will be automatically merged with the theme's default configuration. (This is also more convenient for future upgrades)

::: tip
Such as:

The complete configuration of `avatar` is as follows

```yaml
avatar:
  url: /images/avatar.jpg
  rounded: true
  opacity: 1
```

You can just define it in `_config.yun.yml` (it is also possible to cover it all)

```yaml
avatar:
  url: /images/avatar.jpg
```

:::

### Upgrade Theme

If you are configuring in `_config.yun.yml`, you only need to enter the following command in the Hexo working path:

```bash
npm i hexo-theme-yun@latest
```

If you modify the theme's file, you may encounter conflicts during the upgrade and need to adjust it by yourself.

::: danger
It is best not to modify any of the theme's files unless you have certain development capabilities, or else the theme can not be upgraded afterwards.
:::

If you want to customize the theme, you can include your resources in the `head` configuration item.

> [head resource](/guide/config.html#head-头部资源)

For example, if you want to add an Aplayer player widget to the website globally...

> Not currently recommended. This theme does not yet support PJAX, so when you jump to the page, the concert will be interrupted.
> PJAX support will be considered in the future (can be configured to decide whether to enable it), but it may not be achieved in the short term.
> Article internal player, you can use [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) directly

You can create a new `load-aplayer.js` file under the `source/js` folder in the root directory of Hexo.

> If the `js` folder does not exist, please create a new one.

::: danger
Hexo may put the folder of `source` directory as **renderable page**, this will cause files be rendered as `HTML`.

To solve this issue, you also need to configure `skip render` for all `js` file in `_config.yml`:

```yaml
skip_render:
  - '**/*.js'
```

See: [Configuration | Hexo](https://hexo.io/docs/configuration#Directory)
:::

Through the `createElement` method, `append` into the `body` container.

```js
document.addEventListener('DOMContentLoaded', () => {
  const apContainer = document.createElement('div')
  apContainer.id = 'aplayer'
  document.body.append(apContainer)
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [
      {
        name: 'name',
        artist: 'artist',
        url: 'url.mp3',
        cover: 'cover.jpg',
      },
    ],
  })
})
```

And set the `head` option in `_config.yun.yml` to introduce css or js.

```yaml
head:
  css:
    aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css
  js:
    defer:
      aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js
      loadAplayer: /js/load-aplayer.js
```

### Auto Update

If you want to update automatically and keep the latest themes at all times, you can use continuous integration (such as [GitHub Actions](https://github.com/features/actions), [Travis](https://travis-ci.com/)).

You can refer to my GitHub Action configuration file [gh-pages.yml](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/workflows/gh-pages.yml). (Copy the configuration and put it in the corresponding folder. GitHub Actions is a service that comes with GitHub.)
If you are not using `algolia_search`, please delete the relevant part of `algolia`.

New file `.github/workflows/gh-pages.yml`:

```yaml
name: GitHub Pages
on:
  push:
    branches:
      - hexo
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: 16.x

      - name: Install Dependencies
        run: npm i
      - run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: master
          force_orphan: true
```

## Extend Markdown Style

[Preview and Descriptions](https://www.yunyoujun.cn/yun/markdown.html)

- Colorful Blockquote
