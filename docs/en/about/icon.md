# Icons

The default icon used by the current theme (corresponding to the `cdn.js.async` in the file [`_config.yml`](https://github.com/YunYouJun/hexo-theme-yun/blob/dev/_config.yml#L277) .iconfont` link)

Most of the icons are taken from [Remix Icon](https://remixicon.com/) and keep their original names.

> Only the most commonly used icons are provided by default, which is conducive to satisfying the use of the premise and reducing the loaded resources. If you want to use more icons, it is recommended to go to [iconfont](https://www.iconfont.cn/) to customize your icon set. It is introduced in [head](/guide/config.html#head-head resources).

When writing your icon name in `_config,yml`, remember to prefix it with `icon-`. This distinguishes iconfont’s SVG icons from other font icons.

For Example：

```yaml
icon: icon-github-line
```

## Auxiliary icon

> Universal UI auxiliary icons

<display-icon v-for="aria in icons.arias" :icon="aria"></display-icon>

## Ideogram icon

> Usually there are corresponding objects in reality

<display-icon v-for="object in icons.objects" :icon="object"></display-icon>

## LOGO

<display-icon v-for="logo in icons.logos" :icon="logo"></display-icon>

<CustomToast>Copy Sucessfully.</CustomToast>

<script setup>
import icons from "../../.vitepress/assets/icons"
</script>
