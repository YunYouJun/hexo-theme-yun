# User's Guidance

This is a Hexo theme. Please make sure you acknowledge the basic usage of Hexo.

You can also refer to the newbie tutorial I wrote [Tutorial on how to build your website from scratch-Yunyoujun's small station](https://www.yunyoujun.cn/share/how-to-build-your-site/).

```sh
npm install hexo-cli -g
hexo init your-blog
cd your-blog
npm install
hexo server
```

> For more information, please refer to [Hexo official website](https://hexo.io/)

If you have any questions or suggestions about the use of this theme, you can go ahead to [here](https://github.com/YunYouJun/hexo-theme-yun/issues) and initiate an issue.

You can also join [QQ Group](https://shang.qq.com/wpa/qunwpa?idkey=3bd19a05aaccb2b60c396295c8617b3a9e667821a495e8cd7e1698ff95ab61c6) (389401003) for feedback and discussion.

## Quickstart

::: tip renderer
If you don’t have renderers for `pug` and`stylus`, please install:
[hexo-renderer-pug](https://github.com/hexojs/hexo-renderer-pug)
(This is Hexo official maintenance, but it seems that there are not many stars, or have a diligent update as the one below.)
Or [hexo-render-pug](https://github.com/maxknee/hexo-render-pug)
(The former one does not support frequently update during development, but the latter does.)
And [hexo-renderer-stylus](https://github.com/hexojs/hexo-renderer-stylus)

```sh
npm install hexo-render-pug hexo-renderer-stylus --save
# or
yarn add hexo-render-pug hexo-renderer-stylus
```

:::

### Install Theme

Go to the root directory of your Hexo blog. Clone or download the `hexo-theme-yun` theme, and place it under `themes/yun`.

```sh
git clone -b master https://github.com/YunYouJun/hexo-theme-yun themes/yun
```

> If you are using continuous integration and wanting to build a stable version each time, you can first fork this project and then clone your fork project.
>
> ```sh
> git clone -b master https://github.com/你的名字/hexo-theme-yun themes/yun
> ```

If you want to experience the new version of `hexo-theme-yun`. ([云游君的小站](https://www.yunyoujun.cn) will always use the latest version as an example.)

```sh
git clone -b dev https://github.com/YunYouJun/hexo-theme-yun themes/yun
```

### Enable Themes

Modify the Hexo site configuration file `_config.yml`

```sh
# Set the theme to hexo-theme-yun
theme: yun
```

### Configure Theme

Create a new `source/_data/yun.yml` in the Hexo working directory. (If the `source/_data` directory does not exist, please create a new one.)

With the convention greater than the configuration, you only need to customize the configuration you want to override in `yun.yml`, and the rest will be automatically merged with the theme's default configuration. (This is also more convenient for future upgrades)

::: tip
Such as:

The complete configuration of `avatar` is as follows

```yaml
avatar:
  url: /images/avatar.jpg
  rounded: true
  opacity: 1
```

You can just define it in `yun.yml` (it is also possible to cover it all)

```yaml
avatar:
  url: /images/avatar.jpg
```

:::

### Upgrade Theme

If you are configuring in `yun.yml`, you only need to enter the following command in the Hexo working path:

```sh
cd themes/yun
git pull
```

If you modify the theme's `themes/yun/_config.yml` configuration file, you may encounter conflicts during the upgrade and need to adjust it by yourself.

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

Through the `createElement` method, `append` into the `body` container.

```js
document.addEventListener("DOMContentLoaded", function() {
  let apContainer = document.createElement("div");
  apContainer.id = "aplayer";
  document.body.append(apContainer);
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    audio: [
      {
        name: "name",
        artist: "artist",
        url: "url.mp3",
        cover: "cover.jpg",
      },
    ],
  });
});
```

And set the `head` option in `yun.yml` to introduce css or js.

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

If you want to update automatically and keep the latest themes at all times, you can use continuous integration (such as [GitHub Actions](https://github.com/features/actions), [Travis](https://travis-ci.com/ )).

You can refer to my GitHub Action configuration file [gh-pages.yml](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/workflows/gh-pages.yml). (Copy the configuration and put it in the corresponding folder. GitHub Actions is a service that comes with GitHub.)
If you are not using `algolia_search`, please delete the relevant part of `algolia`.

> I have adopted this approach. But I do not recommend it to you from the conscience because this is my own theme, and naturally I have a certain degree of tolerance for potential bugs.
> You may encounter newly introduced BUG by keeping up with the warehouse version.
> Of course you can give it a try if you are willing to be a guinea pig. By the way, give us feedback. I'll be very appriciate it.

If you want to clone a stable version of the theme, you can fork it yourself, and then modify the source project address to the project address after forking it.

```yaml
run: |
  git clone -b dev https://github.com/YunYouJun/hexo-theme-yun.git themes/yun
```

