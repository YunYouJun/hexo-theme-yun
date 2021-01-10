# FAQ

::: tip

- <Badge text="dev" vertical="middle"/> 代表只和开发有关。
  :::

有任何关于本主题的缺陷报告与功能建议，欢迎发起 [Issues](https://github.com/YunYouJun/hexo-theme-yun/issues)。

如果您想要展示您的成果、或者还有其他相关的想法与问题，可前往 [Discussions](https://github.com/YunYouJun/hexo-theme-yun/discussions)。

---

## 自查通用问题解决方案

检查文件或仓库命名是否错误。

检查 `Hexo` 工作目录下 `_config.yml` 中 `url` 是否设置正确。（此部分为 Hexo 初始化时自动生成）

```yaml
# If your site is put in a subdirectory
# set url as 'https://yoursite.com/child' and root as '/child/'
url: https://www.yunyoujun.cn
root: /
```

检查是否在 `yun.yml` 文件中进行主题配置，且已经保存。
检查是否已经执行如下几步：

- `hexo clean`：清除本地缓存
- `hexo g`：生成新的静态文件
- `hexo s`：本地查看效果（如果正常，使用 `hexo d` 重新部署）

检查是否已强制刷新本地浏览器缓存（Windows: `Ctrl + F5`，Mac: `Shift + Cmd + R`）。

检查是否为最新版本。

检查是否因为 CDN 缓存造成的问题，（关闭 `cdn.pre`）。

如果仍然存在问题，你可以将你的项目代码作为 `hexo` 分支推送到 GitHub 上。

> [与远程仓库建立关联](https://www.yunyoujun.cn/share/how-to-build-your-site/#与远程仓库建立关联)

主题相关问题请发起 [ISSUE](https://github.com/YunYouJun/hexo-theme-yun/issues) ，其他讨论与展示请使用 [Discussions](https://github.com/YunYouJun/hexo-theme-yun/discussions)。

## `hexo server` 文章只渲染部分内容 <Badge text="dev"/>

开发主题的过程中，发现长篇文章只能渲染出一部分，后半部分无法正常显示。
一开始还以为是 `hexo-renderer-pug` 的问题，折腾了一天，兜兜转转，最后才发现似乎是开发时 `hexo-browsersync` 的问题。

相关 Issue ：[Problem with long pages](https://github.com/hexojs/hexo-browsersync/issues/15)

### 临时解决方案

在根目录的 `_config.yml` 中设置

```yaml
server:
  compress: true
```

> <https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492>

## 标签与分类页面不显示？

标签与分类页面需要参考 [页面配置](https://yun.yunyoujun.cn/guide/page.html#标签-tags) 安装对应插件并自行生成页面。
