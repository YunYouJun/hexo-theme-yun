# 第三方支持

所有配置默认在 `source/_data/yun.yml` 文件下进行。

与额外依赖库支持的区别，此处主要为使用第三方服务商提供的服务实现。

## 评论

- `enable`: 默认开启（代表整体的评论区块，你开启任意类型评论系统都须保持其开启）
- `tips`: 评论上方的提示，您可以使用数组的形式修改为任意的话（若不想显示，可以留空）
- `candidates`: 候选评论系统，默认不启用。配置后可切换多个评论系统，默认第一位为默认显示的评论。（你须确保 `candidates` 中的评论对应 `enable` 已开启）

```yaml
comment:
  enable: true
  tips:
    - 若您想及时得到回复提醒，建议跳转 GitHub Issues 评论。
    - 若没有本文 Issue，您可以使用 Comment 模版新建。
  candidates:
    - valine
    - utterances
```

关于评论系统我简单进行过一些对比，希望能起到一些参考。

> [第三方评论系统之我见](https://www.yunyoujun.cn/share/third-party-comment-system/)

### GitHub Issue

并内置实现跳转相关 Issue 的链接按钮与如何使用 GitHub Issue 进行评论的说明。
可自行配置开启或关闭。

- `filters`: 为 GitHub Issue 搜索规则，可参见 [searching-issues-and-pull-requests](https://help.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests)。

```yaml
github_issues:
  enable: true
  username: YunYouJun
  repository: yunyoujun.github.io
  filters: is:issue
```

在项目 `Settings -> Options -> Features -> Issues -> Set up templates` 中为 GitHub Issues 设置 Comment 模版，第一个创建评论的人可以根据这个模版创建 Issue。

也可以参考我的 [comment.md](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/ISSUE_TEMPLATE/comment.md)。

### [Gitalk](https://github.com/gitalk/gitalk)

Gitalk 是一个基于 GitHub Issue 的评论插件。

::: danger

本主题不支持 Gitalk ，如果你真的想用，不妨自行添加或尝试一下 [utterances](https://utteranc.es/)。

:::

基于以下理由，v0.9.7 将移除 Gitalk。

- 存在安全隐患，须授予公开项目读**写**权限
- CSS 无独立命名空间（甚至覆盖了主题的 markdown 样式）
- 无亮暗模式
- 部分 z-index 过高不合理，超过 sidebar
- 不支持重载以实现 pjax，[如何支持 pjax](https://github.com/gitalk/gitalk/issues/205)
- ...

最后我发现了 [utterances](https://utteranc.es/)，基本可以完美取代，所以决定彻底移除，今后大概也不会再加回来。

### [utterances](https://utteranc.es/)

一个轻量的基于 GitHub Issue 的评论插件。请求更少的权限，使用起来更为方便。（如果你打算使用 Gitalk，不妨尝试一下 utterances。）

```yaml
utterances:
  enable: false
  repo: owner/repo
  issue-term: pathname
  # label: comment
  theme: github-light
```

> 记得配置成自己的仓库。

### [Disqus](https://disqus.com/)

Disqus 可以说是全球最流行的第三方评论系统，但其在国内缺点也很明显，需要科学上网。

- `shortname`: 修改为你的用户名
- `count`: 是否开启评论数统计（将会显示在文章的评论数）

```yaml
disqus:
  enable: true
  shortname: yunyoujun
  count: false
```

#### [DisqusJS](https://github.com/SukkaW/DisqusJS)

> 纯前端、超轻量级的「评论基础模式」实现：使用 Disqus API 渲染评论列表

相比原生集成的 Disqus，解决的痛点就是在需要科学上网的地方，可以通过 Disqus API 渲染出一份基础的评论列表。
让无法科学上网的用户可以直接看到评论。

> 当然，想要真正评论，你仍然需要科学上网。

- `apikey`: 必须，请参考 DisqusJS 文档 [配置 Disqus Application](https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqus-application)

> 注释部分为非必须参数。

```yaml
disqusjs:
  enable: false
  shortname: yunyoujun
  # siteName:
  # identifier:
  # url:
  # title:
  # api:
  # apikey:
  # nesting: 4
  # nocomment:
  # admin:
  # adminLabel:
```

### Valine

参见 [Valine](https://valine.js.org) 官方文档进行配置。语言默认跟随 Hexo 的语言设置。

即 Hexo 根目录下的 `_config.yml`。（注意与主题的 `_config.yml` 相区分）

```yaml
language: zh-CN
```

实际上，你只需要参考下方页面获取配置所需的 appId 和 appKey 即可。（不需要安装，主题默认使用 CDN。模版也已经内置。）

> [快速开始 - 获取 APP ID 和 APP Key](https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key)

::: warning

因为国内行情，建议直接使用 [LeanCloud 国际版](https://leancloud.app/)。
如果你打算使用国内版，你需要绑定你的自定义域名并配置下方 `serverURLs` 字段。

> [请各位用户在 10 月 1 日前绑定自己的域名 | LeanCloud](https://leancloudblog.com/mandatory-domain-config/)

:::

- `visitor`: 文章阅读量统计（请最好不要与 [不蒜子](#busuanzi) 同时启用）

> [更多配置项](https://valine.js.org/configuration.html) 写在 `yun.yml` 中。

```yaml
valine:
  enable: false
  appId: # your leancloud application appid
  appKey: # your leancloud application appkey
  placeholder: Just go go # comment box placeholder
  avatar: # gravatar style
  meta:
    - nick
    - mail
    - link
  pageSize: 10 # pagination size
  # lang: zh-CN
  # visitor: false
  # highlight: true
  # recordIP: false
  # serverURLs:
  # Emoji See: https://valine.js.org/emoji.html
  # emojiCDN: //i0.hdslb.com/bfs/emote/
  # emojiMaps:
  #   tv_doge: 6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png
  #   more...
  # enableQQ: false
  # requiredFields:
  #   - nick
  #   - mail
```

Valine 的扩展和增强功能可以参考 [Valine-Admin](https://github.com/DesertsP/Valine-Admin)，可以对具体的评论进行邮件提醒。

> pjax: [请问如何在带有 pjax 的页面下使用 - Issue #138](https://github.com/xCss/Valine/issues/138)

### MiniValine

简单且简约的评论系统，基于LeanCloud。

- GitHub: [MiniValine](https://github.com/MiniValine/MiniValine)
- Demo: <https://minivaline.github.io/>

```yaml
minivaline:
  enable: false
  appId: # Your leancloud application appid
  appKey: # Your leancloud application appkey
  placeholder: Write a Comment # Comment box placeholder
  adminEmailMd5: # The MD5 of Admin Email to show Admin Flag.
  math: true # Support MathJax.
  md: true # Support Markdown.
  # MiniValine's display language depends on user's browser or system environment
  # If you want everyone visiting your site to see a uniform language, you can set a force language value
  # Available values: en  | zh-CN | (and many more)
  # More i18n info: https://github.com/MiniValine/minivaline-i18n
  lang:
```

### LiveRe 来必力

[LiveRe 来必力](https://livere.com/)是一家来自韩国的评论系统，支持多种 SNS 账号连接（QQ、微信、GitHub、百度、微博、豆瓣、Twitter 等等）。
好处是**不**需要科学上网。（不知为何，始终不温不火。）

> 注意：我反复尝试后，发现其无法兼容 PJAX，虽然的确可以在不同文章里显示不同的评论，但不知为何，后台通知里的文章链接仍旧来自于同一篇文章。

- `uid`: 安装代码中 `data-uid` 字段

```yaml
livere:
  enable: true
  uid:
```

<!-- ## 分享

### AddThis

AddThis 提供多种社交分享挂件，请先前往 [AddThis](https://www.addthis.com/) 获取您的 ID。

```yaml
add_this_id:
``` -->

## 搜索

### 引擎搜索

跳转搜索引擎搜索你的网站内容

可通过 `site:yunyoujun.cn 想要搜索的内容` 进行搜索

🌰：<https://www.google.com/search?q=site:yunyoujun.cn%20云游君>

- `enable`: 开启搜索引擎（因为另外两种搜索都需要额外配置，所以默认开启引擎搜索）科学上网，谷歌最佳
- `href`: 搜索引擎前缀
- `domain`: 你网站的域名

```yaml
engine_search:
  enable: true
  href: "https://www.google.com/search?q=site:"
  # href: "https://www.baidu.com/s?wd=site:"
  # href: "https://www.bing.com/search?q=site:"
  domain: yunyoujun.cn
```

### 本地搜索

您需要先安装 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)，并参考配置文档。

本主题使用原生 JavaScript 实现，无 jQuery 依赖。

> 格式只支持 XML

::: tip
启用它之前，记得先关闭默认的引擎搜索。

```yaml
engine_search:
  enable: false
```

:::

```yaml
# search
# https://github.com/wzpan/hexo-generator-search
local_search:
  enable: true
  src: /js/search/local-search.js
```

> 如果你发现本地正常，部署后点击搜索按钮却会跳转至页面底部，可能单纯只是缓存问题。

### Algolia

[Algolia](https://www.algolia.com/) 是一家第三方搜索服务商。（更多信息请自行查看官网，或拜托搜索引擎。）

您需要先安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)，并根据它们的说明文档进行相应的配置。

再开启它。

```yaml
algolia_search:
  enable: true
  src: /js/search/algolia-search.js
  hits:
    per_page: 10 # the number of search results per page
```

## 分析统计

### 谷歌分析

前往[谷歌分析](https://analytics.google.com/) 获取您的 ID。（科学上网）

- `enable`: 是否开启

```yaml
google_analytics:
  enable: true
  id: UA-XXXXXXXXX-X
  // 注意：最近新建的谷歌分析账号ID已经修改，格式如：G-XXXXXXXXXX，可以直接填入id一项，功能正常。
  // 站点配置文件`_config.yml`中的站点部署的 url 应与 CNAME 中的域名（或xxxxx.github.io）一致
```

### busuanzi

不蒜子是一款轻量极简的网站计数器。

前往[不蒜子](https://busuanzi.ibruce.info/) 查看相关信息。

使用说明：<https://ibruce.info/2015/04/04/busuanzi>

> 请最后不要与 [Valine](#valine) 的 `visitor` 同时启用。

- `site_uv`: 是否显示站点用户访问量 Unique Visitor（\_icon 为对应图标，以下同理）
- `site_pv`: 是否显示站点页面访问量 Page View
- `page_pv`: 是否显示文章页面访问量 Page View

```yaml
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

```yaml
google_adsense:
  enable: false
  client: ca-pub-2245427233262012
```

## SEO

### [Google Search Console](https://search.google.com/search-console/)

本主题并没有像 next 等其他主题为验证站点添加了配置选项。

原因如下：

谷歌为用户提供了五种验证方法。

- **域名提供商**：添加 DNS 的 TXT 解析。（这个可能算是最麻烦（其实也不麻烦），但也是对站点本身影响最小的一个。）也是我此前使用的方式。
- **文件验证**：将 HTML 文件上传至您的网站。（您只需下载并将其拷贝至 Hexo 工作目录的 `source` 文件夹下。并设置 `skip_render`，见下文。）也是推荐的方式之一。
- **HTML 标记**：向您网站的首页添加元标记。这也是大部分主题通过配置实现站点验证的方法，但我并不推荐这种做法，所以并没有将其内置。
  - 我之所以没有添加这种方式，是因为这个 meta 部分信息，只对验证 google 站点有用，对于用户来说完全是多余的。
  - 而 Hexo 是静态站点生成器，通过这一方法来验证，就意味着整个站点所有静态文件头部都会带上这一信息。
  - 譬如一百多篇文章加分页加标签页等等，就相当于凭空增加了上百行代码，尽管它的影响微乎其微，但这不管对用户还是站长来说都完全没有必要。
- **Google Analytics（分析）**：如果你已申请并使用了谷歌分析，你只需点击一个验证按钮即可。（**最佳方式**）
- **Google Tag Manager**：使用您的 Google 跟踪代码管理器帐号

如果您未使用谷歌分析，相比之下，直接使用 `域名提供商` 或者 `文件验证` 的方式或许更好，它不需要对主题进行侵入式修改，也不会过于增加生成后的静态文件大小。

::: tip

注意，Google 现在提供的文件为 `html` 文件，直接放在 `source` 文件夹下，会被 Hexo 编译。
因此你还需要找到站点配置文件 `_config.yml` 中的 `skip_render` 选型，并为其添加跳过渲染的文件。

示例：

```yaml
skip_render:
  - README.md
  - googlexxxxxxxxxxxxxxx.html
```

:::

### [百度搜索资源平台](https://ziyuan.baidu.com/)

理由如上，更推荐使用 DNS 或文件验证方式。

#### 自动推送

将其设置为 `true`，以开启百度自动推送。

> 即每次页面被访问时，将自动向百度提交该页面链接。（有利于百度的 SEO）

```yaml
baidu_push: true
```

> 注意：当国外用户访问时，百度推送可能无法正常工作会导致 `http` 与 `https` 混合，从而致使 `https` 在浏览器中的小锁消失。

## Tag Manager

### [Google 跟踪代码管理器](https://tagmanager.google.com/)

> Google 跟踪代码管理器是一个跟踪代码管理系统 (TMS)，可以帮助您快速轻松地更新网站或移动应用上的跟踪代码及相关代码段（统称为“代码”）。将一小段跟踪代码管理器代码添加到项目后，您可以通过网页界面安全轻松地部署 Google Analytics（分析）和衡量代码配置。

如果你真的需要用到它，那么自然会明白它是干什么的。

```yaml
google_tagmanager:
  enable: true
  id: GTM-XXXXXXX
```
