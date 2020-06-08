# 默认图标

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

<display-icon v-for="aria in arias" :icon="aria"></display-icon>

## 表意图标

> 通常有现实中对应物体

<display-icon v-for="object in objects" :icon="object"></display-icon>

## LOGO

<display-icon v-for="logo in logos" :icon="logo"></display-icon>

<div class="toast" id="toast">
  复制成功
</div>

<script>
export default {
  data() {
    return {
      arias: [
        'arrow-up-s-line',
        'arrow-down-s-line',
        'arrow-left-s-line',
        'arrow-right-s-line',
        'arrow-up-line',
        'arrow-left-line',
        'arrow-right-line',
        'arrow-go-back-line',
        'chat-3-line',
        'close-line',
        'contrast-2-line',
        'edit-line',
        'emotion-unhappy-line',
        'external-link-line',
        'history-line',
        'information-line',
        'menu-line',
        'more-line',
        'questionnaire-line',
        'search-line',
        'settings-line',
        'share-line',
      ],
      objects: [
        'archive-line',
        'book-2-line',
        'calendar-2-line',
        'calendar-line',
        'clipboard-line',
        'cloud-line',
        'disc-line',
        'eye-line',
        'file-word-line',
        'fingerprint-line',
        'folder-2-line',
        'folder-line',
        'gallery-line',
        'hand-coin-line',
        'heart-line',
        'home-4-line',
        'list-ordered',
        'mail-line',
        'money-cny-circle-line',
        'open-arm-line',
        'passport-line',
        'price-tag-3-line',
        'pushpin-line',
        'send-plane-2-line',
        'user-line',
        'calendar-line',
        'time-line',
        'timer-line',
      ],
      logos: [
        'alipay-line',
        'bilibili-line',
        'douban-line',
        'github-line',
        'netease-cloud-music-line',
        'paypal-line',
        'qq-line',
        'rss-line',
        'telegram-fill',
        'telegram-line',
        'twitter-line',
        'wechat-2-line',
        'wechat-pay-line',
        'weibo-line',
        'yuque',
        'zhihu-line',
        'genderless-line',
        'men-line',
        'women-line',
        'creative-commons-by-line',
        'creative-commons-nc-line',
        'creative-commons-nd-line',
        'creative-commons-sa-line',
        'creative-commons-zero-line',
      ]
    }
  }
}
</script>

<style lang="stylus">
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
