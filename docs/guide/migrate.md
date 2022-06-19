# 迁移指南

当你升级主题时，可能会遇到一些不兼容更新。

> 以下为迁移到指定版本后需要更改的内容。

## v1.11.x

> <Badge>v1.11.0</Badge>

- 弃用 Valine 支持
- 弃用 Slides(reveal.js)，推荐使用 [slidev](https://sli.dev/)

## v1.10.x

> <Badge>v1.10.x</Badge>

使用 Iconify 加载图标资源。(您可以加载图标集中的任意图标。)

譬如主题默认使用 Remix Icon，原图标名为 `icon-github-line` 修改为 `ri:github-line`。

---

> <Badge>v1.10.1</Badge>

使用 [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb) 替代 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)。

```bash
npm un hexo-generator-search
npm i hexo-generator-searchdb
```

更多配置见 [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb)。

## v1.8.x

> <Badge>v1.8.x</Badge>

使用 npm 包进行分发安装。

> 你也应当确保你的 hexo 版本 `>= 6.0`。

迁移步骤：

1. 在博客根目录下执行：`npm install hexo-theme-yun@latest hexo@latest`
2. 将 `source/_data/yun.yml` 移动至根目录下，并重命名为 `_config.yun.yml`。
3. 删除 `themes/yun` 文件夹。

## v0.9.2

### 打赏配置

> <Badge>v0.9.2</Badge>

将原先的 `reward_settings` 与 `reward` 配置合并。

请参照 [打赏 | 主题配置](/guide/config.html#打赏) 修改。
