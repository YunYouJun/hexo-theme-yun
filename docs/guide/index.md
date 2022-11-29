# 使用指南

::: warning [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) 即将进入维护模式，不再添加新功能。

[Valaxy](https://github.com/YunYouJun/valaxy) 与 [valaxy-theme-yun](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-yun) 将成为它的继任者。

---

如果您是新手，我更推荐你直接尝试 [Valaxy](https://github.com/YunYouJun/valaxy)。

- 它从更底层上解决了 Hexo 目前存在的一些问题与不足，也会是我之后着重维护更新的项目。
- 当然它可能还有许多细节问题需要优化，但我觉得它的开发体验绝对值得您一试！

---

如果您已经是 hexo-theme-yun 的使用者：

- Valaxy 提供了 [valaxy-theme-yun](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-yun) 主题以供迁移。（您也可以稍作等待，我们会继续修复细节，并优化迁移体验。）
- 如果您不想要迁移，hexo-theme-yun 会保持项目的维护和 BUG 修复，但不会再添加新功能或做大的变更。

:::

本主题为 Hexo 主题，请确保您已了解 Hexo 的基本使用方式。

你也可以参考我写的新手教程 [教你如何从零开始搭建一个属于自己的网站 - 云游君的小站](https://www.yunyoujun.cn/share/how-to-build-your-site/)。

```bash
npm install hexo-cli -g
hexo init your-blog
cd your-blog
npm install
hexo server
```

> 更多信息请参见 [Hexo 官网](https://hexo.io/)

有任何关于本主题的缺陷报告与功能建议，可以发起 [Issues](https://github.com/YunYouJun/hexo-theme-yun/issues)。

如果您想要展示您的成果、或者还有其他相关的想法与问题，可前往 [Discussions](https://github.com/YunYouJun/hexo-theme-yun/discussions)。

- [更新日志](https://github.com/YunYouJun/hexo-theme-yun/releases)

::: tip
如果您使用 Yun 版本 < v1.8.x 请查看 [迁移指南](/guide/migrate.html) 更新或修改配置文件。
:::

## 快速开始

::: warning 渲染器

如果您没有 `pug` 与 `stylus` 的渲染器，请先安装：
[hexo-renderer-pug](https://github.com/hexojs/hexo-renderer-pug)
（这个是 Hexo 官方在维护，但是好像没有下面的星多，更新的勤快。）
或 [hexo-render-pug](https://github.com/maxknee/hexo-render-pug)
（以及前者尚未支持开发时热更新，后者支持。）
和 [hexo-renderer-stylus](https://github.com/hexojs/hexo-renderer-stylus)

<!-- > 后续可能使用 Vue3 重构，届时将无需安装该渲染器。 -->

```bash
npm install hexo-render-pug hexo-renderer-stylus --save
# or
yarn add hexo-render-pug hexo-renderer-stylus
```

:::

### 安装主题

::: danger

自 <Badge>v1.8.x</Badge> 起，主题转为使用 npm 包进行发布安装。

> 新版本的脚本使用 TypeScript 进行重构，约束类型，并使用 ESBuild 进行构建压缩。
> 因此发布后的内容为编译压缩后的代码。

原先 clone 项目的方式不再推荐，如果您仍然想要使用该方式，请 clone 项目后，手动执行 `npm i && npm run build` 以构建压缩后的脚本。

配置迁移见 [迁移指南](./migrate.md)。

:::

进入您的 Hexo 博客根目录，执行：

```bash
npm i hexo-theme-yun@latest
```

> [云游君的小站](https://www.yunyoujun.cn) 将始终使用最新版作为示例。

### 启用主题

修改 Hexo 站点配置文件 `_config.yml`

```bash
# 将主题设置为 hexo-theme-yun
theme: yun
```

### 配置主题

在 Hexo 工作目录下新建 `_config.yun.yml`。（与你的 Hexo 配置 `_config.yml` 在同一目录）

采用约定大于配置的方式，您仅需在 `_config.yun.yml` 中自定义您想要覆盖的配置，其余将自动与主题默认配置合并。（这样做也更方便日后的升级）

> 你可以参考我的配置文件 [\_config.yun.yml - yunyoujun.github.io](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/_config.yun.yml)。
> 因为我开启了 `algolia`、`wordcount` 等需要在其他地方安装或额外配置的东西，所以如果你直接复制我的配置，记得删掉 `algolia_search` 和 `wordcount`字段。（以及请务必不要照抄我的 `waline` 字段！）

::: tip

如：

`avatar` 的完整配置如下

```yaml
avatar:
  url: /images/avatar.jpg
  rounded: true
  opacity: 1
```

你可以在 `_config.yun.yml` 中仅定义（当然，全部覆盖也是可以的）

```yaml
avatar:
  url: /images/avatar.jpg
```

:::

### 升级主题

如果您是在 `_config.yun.yml` 中进行配置，那么仅需在 Hexo 工作路径中输入以下命令：

```bash
npm i hexo-theme-yun@latest
```

::: tip
当主题配置出现不兼容更新时，请参见 [迁移指南](/guide/migrate)。
:::

如果您修改了主题文件，那么您升级时可能会遭遇冲突，需要自行调整。

::: danger
请最好**不要**对**主题的任何文件**进行修改，除非你确认你拥有一定的开发能力或此后将不会对主题进行升级。
:::

如果你想对主题进行一些定制，你可以在 `head` 配置项中引入你的资源。

> [head 头部资源](/guide/config.html#head-头部资源)

譬如，你想为网站全局添加一个 Aplayer 播放器挂件。（实际上，现在你可以根据这里的 [配置](/guide/additional-package-support.html#全局音乐播放器) 直接开启全局播放器。）

这里主要起一个示例作用。

> 文章内部播放器，你可以考虑直接使用 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)

你可以在 Hexo 根目录的 `source/js` 文件夹下新建 `load-aplayer.js` 文件。

> 若 `js` 文件夹不存在，请新建。

::: danger
Hexo 会把 `source` 目录下的文件夹视为**可渲染的页面**，导致文件加载时会被渲染为 `HTML`。

为了避免此问题，你还需要在 `_config.yml` 为所有可能出问题的 `js` 文件配置跳过渲染：

```yaml
skip_render:
  - '**/*.js'
```

参见：[Configuration | Hexo](https://hexo.io/docs/configuration#Directory)
:::

通过 `createElement` 的方式，`append` 到 `body` 容器中。

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

并在 `_config.yun.yml` 中设置 `head` 选项来引入 css 或 js。

```yaml
head:
  css:
    aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css
  js:
    defer:
      aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js
      loadAplayer: /js/load-aplayer.js
```

### 持续集成

您可以采用持续集成（如 [GitHub Actions](https://github.com/features/actions), [Travis](https://travis-ci.com/) 等），来自动构建部署博客。

你可以参考我的 GitHub Action 配置文件 [gh-pages.yml](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/workflows/gh-pages.yml)。(照抄配置，放在对应文件夹下即可，GitHub Actions 为 GitHub 自带的服务。)
若你没有使用 `algolia_search`，请删除 `algolia` 相关部分。

新建文件 `.github/workflows/gh-pages.yml`。

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

## Markdown 样式扩展

[效果预览与说明](https://www.yunyoujun.cn/yun/markdown.html)

- 多彩引用标签

## 其他方式

> 如果您已成功安装，无需继续阅读下文。

### Docker

如果你已对 Docker 有所了解，并想要使用配置完毕的现有环境。

可以按照下面的说明使用 Docker 构建一个定制好的环境，里面包含了大部分的插件。
这样您后续基本就不需要关心插件问题了，需要关心的只有如何书写配置文件。

请在 hexo 根目录创建名为 `docker-compose.yml` 的文件并填入下列内容。

```yaml
version: '3'
services:
  cli:
    user: root
    image: hexo-theme-yun
    container_name: hexo
    build:
      context: .
      dockerfile: Dockerfile
      args:
        - CHANGE_APK_SOURCE=true # 更换 APK 源为阿里源
        - CHANGE_NPM_SOURCE=true # 更换 NPM 源为腾讯源
    working_dir: /blog
    environment:
      - NODE_ENV=production # 将 node 的配置切换到生产环境
    volumes:
      - ./_config.yml:/blog/_config.yml # 挂载根目录配置文件
      - ./themes:/blog/themes # 挂载主题目录
      - ./scaffolds:/blog/scaffolds # 挂载模板目录
      - ./source:/blog/source # 挂载资源目录
      - ./public:/blog/public # 挂载 HTML 的生成目录
    ports:
      - 4000:4000 # 将 Docker 内的 4000 端口映射到主机的 4000 端口
    command: sleep 24h # 休眠 shell 24 小时防止容器自动关闭
```

然后在 hexo 根目录创建名为 `Dockerfile` 的文件并填入下列内容。

```docker
FROM node:12.20.2-alpine AS base
ARG CHANGE_APK_SOURCE=false
ARG CHANGE_NPM_SOURCE=false
ENV NPM_CONFIG_LOGLEVEL=info
ENV NODE_ENV=production
WORKDIR /
RUN     set -xe \
    &&  if [ ${CHANGE_APK_SOURCE} = true ]; then \
            sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories ; \
        fi \
    &&  if [ ${CHANGE_NPM_SOURCE} = true ] ; then \
            npm config set registry http://mirrors.cloud.tencent.com/npm/ ; \
        fi \
    &&  apk update \
    &&  apk add --no-cache \
            git \
            libc6-compat \
    &&  npm -g config set user root \
    &&  npx hexo init blog \
    &&  cd blog \
    &&  npm install --save hexo-cli \
    &&  npm install --save hexo-server \
    &&  npm install --save hexo-render-pug \
    &&  npm install --save hexo-renderer-stylus \
    &&  npm install --save hexo-tag-aplayer \
    &&  npm install --save hexo-generator-sitemap \
    &&  npm install --save hexo-generator-searchdb \
    &&  npm install --save hexo-generator-tag \
    &&  npm install --save hexo-generator-category \
    &&  npm install --save hexo-algoliasearch \
    &&  npm install --save hexo-wordcount \
    &&  npm install --save hexo-generator-feed \
    # &&  npm install --save hexo-helper-live2d \
    # &&  npm install --save hexo-abbrlink \
    # &&  npm install --save hexo-math \
    # &&  npm install --save hexo-filter-mathjax \
    &&  npm install --save hexo-tag-common \
    &&  npm install --save hexo-widget-tree \
    &&  npm install --save hexo-blog-encrypt

FROM node:12.20.2-alpine
ENV NPM_CONFIG_LOGLEVEL=info
ENV NODE_ENV=production
ARG CHANGE_APK_SOURCE=false
ARG CHANGE_NPM_SOURCE=false
COPY --from=base /blog /blog
WORKDIR /
RUN     set -xe \
    &&  if [ ${CHANGE_APK_SOURCE} = true ]; then \
            sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories ; \
        fi \
    &&  if [ ${CHANGE_NPM_SOURCE} = true ] ; then \
            npm config set registry http://mirrors.cloud.tencent.com/npm/ ; \
        fi \
    &&  apk update \
    &&  apk add --no-cache git \
    &&  npm -g config set user root

```

然后请在 hexo 根目录执行 `docker-compose build` 来构建镜像。

镜像构建完成后可以在 hexo 根目录执行 `docker-compose up -d` 来启动容器。

启动容器后您可以继续按照文档的指示来配置您的博客，
配置完毕后可以执行下列命令来进行测试和部署等操作。

```bash
# 启动测试服务器并可以在 http://localhost:4000 查看测试效果
docker exec hexo npx hexo s

# 生成 HTML 文件到 hexo 根目录的 public 目录下
docker exec hexo npx hexo g

# 部署博客到 Github 等平台
docker exec hexo npx hexo d

# 清理生成的文件
docker exec hexo npx hexo c
```

::: warning

出于一些考虑容器中并未提供下列插件：

- [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)：此插件一旦安装便默认开启，
  故默认不予安装。

- [hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)：此插件一旦安装便默认开启，
  故默认不予安装。

- [hexo-math](https://github.com/hexojs/hexo-math)：此插件是 KaTeX 的备用项，
  如果您不打算使用 KaTeX 可以启用此插件，但此插件默认不予安装。

- [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)：同 hexo-math。

如果您对插件有特殊需求可以自行修改 `Dockerfile` 文件。

:::
