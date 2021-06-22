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

<display-icon v-for="aria in arias" :icon="aria"></display-icon>

## Ideogram icon

> Usually there are corresponding objects in reality

<display-icon v-for="object in objects" :icon="object"></display-icon>

## LOGO

<display-icon v-for="logo in logos" :icon="logo"></display-icon>

<div class="toast" id="toast">
  Copy Sucessfully.
</div>

<script>
import icons from "~/assets/icons.json"
export default {
  data() {
    return {
      ...icons
    }
  }
}
</script>

<style lang="scss">
.toast {
  position: fixed;
  top: 5rem;
  color: white;
  background-color: #4CAF50;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  box-shadow: 0 0 0.2rem #4CAF50;
  transition: 0.4s;
  opacity: 0;

  &.show {
    opacity: 1;
  }
}
</style>
