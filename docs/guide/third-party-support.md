# 第三方支持

所有配置默认在 `source/_data/yun.yml` 文件下进行。

## 评论

支持同时开启 Gitalk 与 Valine 评论系统。

### Gitalk

参见 [Gitalk](https://github.com/gitalk/gitalk) 官方文档进行配置。

```yml
gitalk:
  enable: false
  clientID: # Github Application Client ID
  clientSecret: # Github Application Client Secret
  repo: # GitHub repo
  owner: # GitHub repo owner
  admin: # GitHub repo owner and collaborators, only these guys can initialize github issues
```

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

## 分享

### AddThis

AddThis 提供多种社交分享挂件，请先前往 AddThis 获取您的 ID。

```yml
add_this_id:
```

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
