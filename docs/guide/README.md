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

```sh
git clone -b master https://github.com/YunYouJun/hexo-theme-yun themes/yun
```

如果你想体验新版 `hexo-theme-yun`。

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

::: tip
如：

`avatar` 的完整配置如下

```yml
avatar:
  url: /images/avatar.jpg
  rounded: true
  opacity: 1
```

你可以在 `yun.yml` 中仅定义（当然，全部覆盖也是可以的）

```yml
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
