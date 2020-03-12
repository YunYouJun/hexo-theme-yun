# 第三方支持

所有配置默认在 `source/_data/yun.yml` 文件下进行。

## 评论

### GitHub Issue 与 Gitalk

最终我还是决定移除 [Gitalk](https://github.com/gitalk/gitalk)。

首先肯定与感谢作者的开源精神与贡献，此前我一直开启 `Gitalk` 作为默认评论。（从弃坑的 Gitment 转来。）
只是后来因为 GitHub API 的安全策略改变，每次进入文章都会调用 Gitalk 而收到了一大堆的安全警告邮件。
于是我临时将其关闭，当然现在已经修复。但也因此觉得，Gitalk 对于我的小站点来说未必有开启的必要。（~~没什么人是一个要素~~）

首先，Gitalk 提供的功能其实只要多个链接跳转到 GitHub Issue 页面即可，而且相对来说直接在 GitHub Issue 页面使用。拥有更好的显示和编辑体验。
其次。我希望我的主题能够成为一个轻量迅速的主题，Gitalk 需要加载额外的 JS 与 CSS，一定程度会影响网页加载速度，并且本身也会有 API 请求数量限制。
至于直接在文章末尾显示评论，我打算使用 Valine 进行补充，期望便捷的朋友，自身也可能更希望使用 Valine 无需登陆的评论。
而想要收到回复提醒、及不介意使用自己 GitHub 账号参与讨论，自然也不会过于介意多跳转一个页面。

- 因为 Gitalk 自身定位问题，本身就可能存在些许安全隐患，以及开发不是十分活跃，也堆积了不少 ISSUE。
- Gitalk 通过 label 来搜索，Issues 里自动创建来一堆 label，本强迫症有点难受。
- 当自己访问不存在的链接时，也会自动初始化一些无用的 Issue。

综上，本主题移除 Gitalk 评论。
并内置实现跳转相关 Issue 的链接按钮与如何使用 GitHub Issue 进行评论的说明。
可自行配置开启或关闭。

- `filters`: 为 GitHub Issue 搜索规则，可参见 [searching-issues-and-pull-requests](https://help.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests)。

```yml
github_issues:
  enable: true
  username: YunYouJun
  repository: yunyoujun.github.io
  filters: is:issue
```

在项目 `Settings -> Options -> Features -> Issues -> Set up templates` 中为 GitHub Issues 设置 Comment 模版，第一个创建评论的人可以根据这个模版创建 Issue。

也可以参考我的 [comment.md](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/ISSUE_TEMPLATE/comment.md)。

> 如果您实在觉得 Gitalk 有必要使用，可以在 Issue 里提出有力的理由来说服我或自行添加。

### Valine

参见 [Valine](https://valine.js.org) 官方文档进行配置。

```yml
valine:
  enable: false
  appId: # your leancloud application appid
  appKey: # your leancloud application appkey
  serverURLs:
  notify: false # mail notifier, See: https://github.com/xCss/Valine/wiki
  verify: false # Verification code
  placeholder: Just go go # comment box placeholder
  avatar: # gravatar style
  meta: nick,mail,link # custom comment header
  pageSize: 10 # pagination size
  visitor: true
```

<!-- ## 分享

### AddThis

AddThis 提供多种社交分享挂件，请先前往 [AddThis](https://www.addthis.com/) 获取您的 ID。

```yml
add_this_id:
``` -->

## 搜索

### 引擎搜索

跳转搜索引擎搜索你的网站内容

可通过 `site:yunyoujun.cn 想要搜索的内容` 进行搜索

🌰：<https://www.google.com/search?q=site:yunyoujun.cn%20云游君>

- `enable`: 开启搜索引擎（因为另外两种搜索都需要额外配置，所以默认开启引擎搜索）
- `href`: 搜索引擎前缀
- `domain`: 你网站的域名

```yml
engine_search:
  enable: true
  href: "https://www.google.com/search?q=site:"
  domain: yunyoujun.cn
```

### 本地搜索

您需要先安装 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)，并参考配置文档。

本主题使用原生 JavaScript 实现，无 jQuery 依赖。

> 格式只支持 XML

```yml
# search
# https://github.com/wzpan/hexo-generator-search
local_search:
  enable: false
  src: /js/search/local-search.js
```

### Algolia

您需要先安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)，并根据它们的说明文档进行相应的配置。

```yml
algolia_search:
  enable: false
  src: /js/search/algolia-search.js
  hits:
    per_page: 10 # the number of search results per page
```

## 分析统计

### 谷歌分析

前往[谷歌分析](https://analytics.google.com/) 获取您的 ID。

```yml
google_analytics:
  enable: false
  id: UA-XXXXXXXXX-X
```

### busuanzi

不蒜子是一款轻量极简的网站计数器。

前往[不蒜子](http://busuanzi.ibruce.info/) 查看相关信息。

使用说明：<http://ibruce.info/2015/04/04/busuanzi>

- `site_uv`: 是否显示站点用户访问量 Unique Visitor（\_icon 为对应图标，以下同理）
- `site_pv`: 是否显示站点页面访问量 Page View
- `page_pv`: 是否显示文章页面访问量 Page View

```yml
busuanzi:
  enable: false
  site_uv: true
  site_uv_icon: icon-user-line
  site_pv: true
  site_pv_icon: icon-eye-line
  page_pv: true
  page_pv_icon: icon-eye-line
```

## 广告

### 谷歌广告

前往[Google Adsense](https://www.google.com/adsense) 获取您的 client id。

```yml
google_adsense:
  enable: false
  client: ca-pub-2245427233262012
```
