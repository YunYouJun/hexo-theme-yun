# Third-party support

All configuration is done by default in the `source/_data /yun.yml` file.

## Search

### Engine search

Jump search engine to search your website content

You can search by `site: yunyoujun.cn what you want to search`

🌰: <https://www.google.com/search?q=site:yunyoujun.cn%20 云游 君>

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

### [Baidu Search Resource Platform](https://ziyuan.baidu.com/)

For the reasons above, it is more recommended to use DNS or file verification.
