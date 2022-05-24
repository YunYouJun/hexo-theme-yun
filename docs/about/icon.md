# 默认图标

## Iconify <Badge>v1.10.x</Badge>

`v1.10.x` 后使用 [Iconify](https://iconify.design/) 加载图标资源。

因此您可以使用 <https://icones.js.org/> 中可以看到的任意图标。

命名规则为：`ri:github-line`。

> 本主题默认使用 Remix Icon，因此此前的 `icon-github-line` 迁移为 `ri:github-line`。

如：

```yml
icon: ri:github-line
```

<br />
<br />

<details>

<summary>自 v1.10.x 废弃的使用方法</summary>

当前主题默认使用的图标（对应 [`_config.yml`](https://github.com/YunYouJun/hexo-theme-yun/blob/dev/_config.yml#L277) 文件中 `cdn.js.async.iconfont` 的链接 ）

大部分图标取自 [Remix Icon](https://remixicon.com/)，并保持其原命名。

> 只提供默认最常用的图标，有利于在满足使用的前提下，并减少加载的资源。如果您想要使用更多图标，推荐自行前往 [iconfont](https://www.iconfont.cn/) 定制你的图标集。并在 [head](/guide/config.html#head-头部资源) 引入。

在 `_config,yml` 中书写你的图标名称时，记得加上 `icon-` 的前缀。这可以将 iconfont 的 SVG 图标与其他字体图标区分开来。

如：

```yaml
icon: icon-github-line
```

## 辅助图标

> 通用的 UI 辅助图标

<display-icon v-for="aria in icons.arias" :icon="aria"></display-icon>

## 表意图标

> 通常有现实中对应物体

<display-icon v-for="object in icons.objects" :icon="object"></display-icon>

## LOGO

<display-icon v-for="logo in icons.logos" :icon="logo"></display-icon>

<CustomToast>复制成功</CustomToast>

<script setup>
import icons from "../.vitepress/assets/icons"
</script>

</details>
