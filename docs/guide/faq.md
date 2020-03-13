# FAQ

::: tip

- <Badge text="dev" vertical="middle"/> 代表只和开发有关。
  :::

有问题和建议欢迎提 [Issue](https://github.com/YunYouJun/hexo-theme-yun/issues)。

你也可以加入 [QQ 群](https://shang.qq.com/wpa/qunwpa?idkey=3bd19a05aaccb2b60c396295c8617b3a9e667821a495e8cd7e1698ff95ab61c6)（389401003）进行反馈与讨论。

> 如果是通用的问题（如 BUG 反馈，新功能建议），最好在 Issue 中进行反馈，这样别的朋友也能看到并参与讨论，减少重复。

---

## `hexo server` 文章只渲染部分内容 <Badge text="dev"/>

开发主题的过程中，发现长篇文章只能渲染出一部分，后半部分无法正常显示。
一开始还以为是 `hexo-renderer-pug` 的问题，折腾了一天，兜兜转转，最后才发现似乎是开发时 `hexo-browsersync` 的问题。

相关 Issue ：[Problem with long pages](https://github.com/hexojs/hexo-browsersync/issues/15)

### 临时解决方案

在根目录的 `_config.yml` 中设置

```yml
server:
  compress: true
```

> <https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492>
