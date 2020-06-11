# 使用指南

本主题为 Hexo 主题，请确保您已了解 Hexo 的基本使用方式。

你也可以参考我写的新手教程 [教你如何从零开始搭建一个属于自己的网站 - 云游君的小站](https://www.yunyoujun.cn/share/how-to-build-your-site/)。

```sh
npm install hexo-cli -g
hexo init your-blog
cd your-blog
npm install
hexo server
```

> 更多信息请参见 [Hexo 官网](https://hexo.io/)

有任何关于本主题的使用问题与建议，可以前往[此处](https://github.com/YunYouJun/hexo-theme-yun/issues)发起 Issue。

你也可以加入 [QQ 群](https://shang.qq.com/wpa/qunwpa?idkey=3bd19a05aaccb2b60c396295c8617b3a9e667821a495e8cd7e1698ff95ab61c6)（389401003）进行反馈与讨论。

- [更新日志](https://github.com/YunYouJun/hexo-theme-yun/releases)

## 快速开始

::: tip 渲染器
如果您没有 `pug` 与 `stylus` 的渲染器，请先安装：
[hexo-renderer-pug](https://github.com/hexojs/hexo-renderer-pug)
（这个是　 Hexo 官方在维护，但是好像没有下面的星多，更新的勤快。）
或[hexo-render-pug](https://github.com/maxknee/hexo-render-pug)
（以及前者尚未支持开发时热更新，后者支持。）
和 [hexo-renderer-stylus](https://github.com/hexojs/hexo-renderer-stylus)

```sh
npm install hexo-render-pug hexo-renderer-stylus --save
# or
yarn add hexo-render-pug hexo-renderer-stylus
```

:::

### 安装主题

进入您的 Hexo 博客根目录，克隆或下载 `hexo-theme-yun` 主题，置于 `themes/yun`。

> 你也可以考虑加上 `--depth 1` 的参数来只克隆当前版本（体积更小，速度更快）。

```sh
git clone -b master https://github.com/YunYouJun/hexo-theme-yun themes/yun
```

> 如果你使用了持续集成，并希望每次构建的版本保持稳定。你可以 fork 本项目，然后克隆你 fork 的项目。
>
> ```sh
> git clone -b master https://github.com/你的名字/hexo-theme-yun themes/yun
> ```

如果你想体验新版 `hexo-theme-yun`。（[云游君的小站](https://www.yunyoujun.cn) 将始终使用最新版作为示例。）

```sh
git clone -b dev https://github.com/YunYouJun/hexo-theme-yun themes/yun
```

### 启用主题

修改 Hexo 站点配置文件 `_config.yml`

```sh
# 将主题设置为 hexo-theme-yun
theme: yun
```

### 配置主题

在 Hexo 工作目录下新建 `source/_data/yun.yml`。（若 `source/_data` 目录不存在，请新建。）

采用约定大于配置的方式，您仅需在 `yun.yml` 中自定义您想要覆盖的配置，其余将自动与主题默认配置合并。（这样做也更方便日后的升级）

> 你可以参考我的配置文件 [yun.yml - yunyoujun.github.io](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/_data/yun.yml)，是不是很短。  
> 这勉强也算本主题的一个优化功能，当然你选择全部覆盖也是没问题的。

::: tip
如：

`avatar` 的完整配置如下

```yaml
avatar:
  url: /images/avatar.jpg
  rounded: true
  opacity: 1
```

你可以在 `yun.yml` 中仅定义（当然，全部覆盖也是可以的）

```yaml
avatar:
  url: /images/avatar.jpg
```

:::

### 升级主题

如果您是在 `yun.yml` 中进行配置，那么仅需在 Hexo 工作路径中输入以下命令：

```sh
cd themes/yun
git pull
```

如果您修改了主题的 `themes/yun/_config.yml` 配置文件，那么您升级时可能会遭遇冲突，需要自行调整。

::: danger
请最好不要对主题的任何文件进行修改，除非你确认你拥有一定的开发能力或此后将不会对主题进行升级。
:::

如果你想对主题进行一些定制，你可以在 `head` 配置项中引入你的资源。

> [head 头部资源](/guide/config.html#head-头部资源)

譬如，你想为网站全局添加一个 Aplayer 播放器挂件。（实际上，现在你可以根据这里的 [配置](/guide/additional-package-support.html#全局音乐播放器) 直接开启全局播放器。）

这里主要起一个示例作用。

> 文章内部播放器，你可以考虑直接使用 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)

你可以在 Hexo 根目录的 `source/js` 文件夹下新建 `load-aplayer.js` 文件。

> 若 `js` 文件夹不存在，请新建。

通过 `createElement` 的方式，`append` 到 `body` 容器中。

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

并在 `yun.yml` 中设置 `head` 选项来引入 css 或 js。

```yaml
head:
  css:
    aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css
  js:
    defer:
      aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js
      loadAplayer: /js/load-aplayer.js
```

### 自动升级

你想要完全自动更新，时刻保持最新主题，可以采用持续集成（如 [GitHub Actions](https://github.com/features/actions), [Travis](https://travis-ci.com/) 等）。

你可以参考我的 GitHub Action 配置文件 [gh-pages.yml](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/workflows/gh-pages.yml)。(照抄配置，放在对应文件夹下即可，GitHub Actions 为 GitHub 自带的服务。)
若你没有使用 `algolia_search`，请删除 `algolia` 相关部分。

> 我采用的是这种做法，但我从良心上并不推荐你也如此，因为这是我自己的主题，自然对潜在的 BUG 拥有一定的容忍度。  
> 时刻保持与仓库版本相同，可能会遇到新引入的 BUG。  
> 当然你愿意当小白鼠的话，可以一试。顺便给咱反馈问题。个人角度上，是十分欢迎的。

如果你想要克隆稳定版本的主题，你可以自行 fork，然后修改源项目地址为你 fork 后的项目地址即可。

```yaml
run: |
  git clone -b dev https://github.com/YunYouJun/hexo-theme-yun.git themes/yun
```
