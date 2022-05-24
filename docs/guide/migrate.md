# 迁移指南

当你升级主题时，可能会遇到一些不兼容更新。

## 迁移至 v1.10.x 之后的版本

<Badge>v1.10.x</Badge> 后使用 Iconify 加载图标资源。

您可以加载图标集中的任意图标。

譬如主题默认使用 Remix Icon，原图标名为 `icon-github-line` 修改为 `ri:github-line`。

## 从 1.x 迁移至 v1.8.x 之后的版本

<Badge>v1.8.x</Badge> 后起使用 npm 包进行分发安装。

> 你也应当确保你的 hexo 版本 `>= 6.0`。

迁移步骤：

1. 在博客根目录下执行：`npm install hexo-theme-yun@latest hexo@latest`
2. 将 `source/_data/yun.yml` 移动至根目录下，并重命名为 `_config.yun.yml`。
3. 删除 `themes/yun` 文件夹。

## 打赏配置

<Badge>v0.9.2</Badge> 将原先的 `reward_settings` 与 `reward` 配置合并。

请参照 [打赏 | 主题配置](/guide/config.html#打赏) 修改。
