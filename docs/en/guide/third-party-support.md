# Third-party support

All configuration is done by default in the `source/_data /yun.yml` file.

The difference from the additional packagfe support, here is mainly to use the service implementation provided by third-party service providers.

## Comment

- `enable`: enabled by default (representing the overall comment block, you must keep it enabled when you enable any type of comment system)
- `tips`: Tips above the comment, you can use the form of an array to modify it to anything (if you don't want to display it, you can leave it blank)
- -`candidates`: Candidate comment system, not enabled by default. After configuration, multiple comment systems can be switched, and the default first is the comment system displayed by default. (You must ensure that the `enable` of comment system in `candidates` is `true`.)

```yaml
comment:
  enable: true
  tips:
    - If you want to get a reminder to reply in time, it is recommended to jump to the GitHub Issues comment.
    - If there is no issue of this article, you can create a new one using the Comment template.
```

Regarding the comment system, I have briefly made some comparisons, hoping to serve as a reference.

> [My View on the Third Party Comment System](https://www.yunyoujun.cn/share/third-party-comment-system/)

### GitHub Issue

It also has a built-in link button for redirecting related issues and instructions on how to use GitHub Issue to comment.
It can be turned on or off by itself.

- `filters`: search rules for GitHub Issues, see [searching-issues-and-pull-requests](https://help.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests).

```yaml
github_issues:
  enable: true
  username: YunYouJun
  repository: yunyoujun.github.io
  filters: is:issue
```

Set up a Comment template for GitHub Issues in the project `Settings -> Options -> Features -> Issues -> Set up templates`. The first person to create a comment can create an Issue based on this template.

You can also refer to my [comment.md](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/ISSUE_TEMPLATE/comment.md).

### [Disqus](https://disqus.com/)

Disqus can be said to be the most popular third-party comment system in the world, but its shortcomings in China are also obvious, requiring scientific Internet access.

- `shortname`: change to your username
- `count`: Whether to enable comment counting (the number of comments that will be displayed in the article)

```yaml
disqus:
  enable: true
  shortname: yunyoujun
  count: false
```

#### [DisqusJS](https://github.com/SukkaW/DisqusJS)

> Pure front-end, ultra-lightweight "Comment Basic Mode" implementation: Use Disqus API to render comment lists

Compared with the natively integrated Disqus, the pain point to solve is that where scientific Internet access is required, a basic comment list can be rendered through the Disqus API.
Let users who can't get online scientifically see comments directly.

> Of course, to really comment, you still need to go online scientifically.

- `apikey`: Required, please refer to DisqusJS document [Configure Disqus Application](https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqus-application)

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

### [utterances](https://utteranc.es/)

A lightweight comments widget built on GitHub issues. Use GitHub issues for blog comments, wiki pages and more!

More convenient, less authority. (You do not need gitalk.)

```yaml
utterances:
  enable: false
  repo: owner/repo
  issue-term: pathname
  # label: comment
  theme: github-light
```

### Valine

Refer to [Valine](https://valine.js.org) official document for configuration. The language defaults to follow Hexo's language setting.

That is `_config.yml` in the root directory of Hexo. (Note that it is different from the theme's `_config.yml`)

```yaml
language: zh-CN
```

In fact, you only need to refer to the page below to get the appId and appKey required for configuration. (No need to install, the theme uses CDN by default. The template is also built-in.)

> [Quick Start-Get APP ID and APP Key](https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key)

- `visitor`: Article reading statistics (please do not enable it at the same time with [不蒜子](#busuanzi))

> [More configuration items](https://valine.js.org/configuration.html) is written in `yun.yml`.

```yaml
valine:
  enable: false
  appId: # your leancloud application appid
  appKey: # your leancloud application appkey
  placeholder: Just go go # comment box placeholder
  avatar: # gravatar style
  meta: -nick
    -mail
    -link
  pageSize: 10 # pagination size
  # lang: zh-CN
  # visitor: false
  # highlight: true
  # recordIP: false
  # serverURLs:
  # Emoji See: https://valine.js.org/emoji.html
  # emojiCDN: //i0.hdslb.com/bfs/emote/
  # emojiMaps:
  # tv_doge: 6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png
  # more...
  # enableQQ: false
  # requiredFields:
  #-nick
  #-mail
```

For Valine's extensions and enhancements, please refer to [Valine-Admin](https://github.com/DesertsP/Valine-Admin), you can send email reminders to specific comments.

> pjax: [How do I use it on a page with pjax-Issue #138](https://github.com/xCss/Valine/issues/138)

### MiniValine

A simple and minimalist comment system based on Leancloud.

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
  # Available values: en | zh-CN | (and many more)
  # More i18n info: https://github.com/MiniValine/minivaline-i18n
  lang:
```

### LiveRe

[LiveRe 来比力](https://livere.com/) is a comment system from South Korea that supports multiple SNS account connections (QQ, WeChat, GitHub, Baidu, Weibo, Douban, Twitter, etc.).
The advantage is that **no** need to go online scientifically. (I don’t know why, but it’s not warm.)

> Note: After trying repeatedly, I found that it is not compatible with PJAX. Although it is indeed possible to display different comments in different articles, for some reason, the article link in the background notification still comes from the same article.

- `uid`: `data-uid` field in the installation code

```yaml
livere:
  enable: true
  uid:
```

## Search

### Engine search

Jump search engine to search your website content

You can search by `site: yunyoujun.cn what you want to search`

🌰: <https://www.google.com/search?q=site:yunyoujun.cn%20云游君>

- `enable`: enable the search engine (because the other two types of search require additional configuration, the engine search is enabled by default)
- `href`: search engine prefix
- `domain`: the domain name of your website

```yaml
engine_search:
  enable: true
  href: "https://www.google.com/search?q=site:"
  domain: yunyoujun.cn
```

### Local search

You need to install [hexo-generator-search](https://github.com/wzpan/hexo-generator-search) first, and refer to the configuration document.

This theme is implemented using native JavaScript, without jQuery dependency.

> The format only supports XML

::: tip
Before enabling it, remember to turn off the default engine search.

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

> If you find that the local is normal, click the search button after deployment but it will jump to the bottom of the page, it may be simply a cache problem.

### Algolia

[Algolia](https://www.algolia.com/) is a third-party search service provider. (For more information, please check the official website, or please search the engine.)

You need to install [hexo-algolia](https://github.com/oncletom/hexo-algolia) or [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch) first The documentation configures accordingly.

Turn it on again.

```yaml
algolia_search:
  enable: true
  src: /js/search/algolia-search.js
  hits:
    per_page: 10 # the number of search results per page
```

## Analysis Statistics

### Google Analytics

Go to [Google Analytics](https://analytics.google.com/) to get your ID. (Science Online)

- `enable`: whether to enable

```yaml
google_analytics:
  enable: true
  id: UA-XXXXXXXXX-X
  // Note : Google Analytics abandoned the measurement ID of "UA-XXXXXXXXX-X" and used the measurement ID of "G-XXXXXXXXXX". You can fill in the new measurement ID directly in the "id:" item, which will not affect the analysis .
```

### busuanzi

No garlic is a light and minimal website counter.

Go to [不蒜子](https://busuanzi.ibruce.info/) to view related information.

Instructions for use: <https://ibruce.info/2015/04/04/busuanzi>

> Please do not enable it at the same time as [Valine] (# valine) 's `visitor`.

- `site_uv`: Whether to display the unique visitor of the site user (\_icon is the corresponding icon, the same applies below)
- `site_pv`: whether to display site page views Page View
- `page_pv`: whether to display page views of article pages

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

## Advertising

### Google Advertising

Go to [Google Adsense](https://www.google.com/adsense) to get your client id.

```yaml
google_adsense:
  enable: false
  client: ca-pub-2245427233262012
```

## SEO

### [Google Search Console](https://search.google.com/search-console/)

This topic does not add configuration options to the verification site for other topics like next.

The reasons are as follows:

Google provides five authentication methods for users.

- Domain name provider: add TXT resolution of DNS. (This may be the most troublesome (in fact, it is not troublesome), but it is also the one that has the least impact on the site itself.) It is also the method I used before.
- HTML file: Upload the HTML file to your website. (You only need to download and copy it to the `source` folder in the Hexo working directory. Set `skip_render`, see below.) Is also one of the recommended ways.
- HTML tags: Add meta tags to the homepage of your website. This is also the method used by most themes to implement site verification through configuration, but I do not recommend this approach, so it is not built into it.
  - The reason why I did not add this method is because this meta part of the information is only useful for verifying the Google site, and it is completely redundant for users.
  - While Hexo is a static site generator, this method of verification means that all static file headers throughout the site will carry this information.
  - For example, more than one hundred articles plus pagination and tab pages, etc., is equivalent to adding hundreds of lines of code out of thin air. Although its impact is minimal, it is completely unnecessary for users and webmasters.
- Google Analytics: If you have applied for and used Google Analytics, all you have to do is click a verification button. (Best way)
- Google Tag Manager: Use your Google Tag Manager account

If you do n’t use Google Analytics, `Domain name provider` and `HTML file` are probably the best. It does n’t require intrusive changes to the theme, nor does it increase the static file size too much.

::: tip

Note that the files provided by Google are now `html` files, which are placed directly under the `source` folder and will be compiled by Hexo.
So you also need to find the `skip_render` selection in the site configuration file `_config.yml` and add a file for skip rendering.

Examples:

```yaml
skip_render:
  - README.md
  - googlexxxxxxxxxxxxxxx.html
```

:::

## Tag Manager

### [Google Tag Manager](https://tagmanager.google.com/)

> Google Tag Manager is a Tag Management System (TMS) that can help you quickly and easily update the tracking code and related code segments (collectively referred to as "codes") on your website or mobile application. After adding a small piece of Tag Manager code to your project, you can safely and easily deploy Google Analytics and measurement code configuration through the web interface.

If you really need to use it, then you will naturally understand what it does.

```yaml
google_tagmanager:
  enable: true
  id: GTM-XXXXXXX
```
