# Third-party support

All configuration is done by default in the `source/_data /yun.yml` file.

### Engine search

Jump search engine to search your website content

You can search by `site: yunyoujun.cn what you want to search`

🌰: <https://www.google.com/search?q=site:yunyoujun.cn%20 云游 君>

- `enable`: enable the search engine (because the other two types of search require additional configuration, the engine search is enabled by default)
- `href`: search engine prefix
- `domain`: the domain name of your website

```yml
engine_search:
  enable: true
  href: "https://www.google.com/search?q=site:"
  domain: yunyoujun.cn
```

### Local search

You need to install [hexo-generator-search] (https://github.com/wzpan/hexo-generator-search) first, and refer to the configuration document.

This theme is implemented using native JavaScript, without jQuery dependency.

> The format only supports XML

::: tip
Before enabling it, remember to turn off the default engine search.

```yml
engine_search:
  enable: false
```

:::

```yml
# search
# https://github.com/wzpan/hexo-generator-search
local_search:
  enable: true
  src: /js/search/local-search.js
`` `

> If you find that the local is normal, click the search button after deployment but it will jump to the bottom of the page, it may be simply a cache problem.

### Algolia

[Algolia] (https://www.algolia.com/) is a third-party search service provider. (For more information, please check the official website, or please search the engine.)

You need to install [hexo-algolia] (https://github.com/oncletom/hexo-algolia) or [hexo-algoliasearch] (https://github.com/LouisBarranqueiro/hexo-algoliasearch) first The documentation configures accordingly.

Turn it on again.

```yml
algolia_search:
  enable: true
  src: /js/search/algolia-search.js
  hits:
    per_page: 10 # the number of search results per page
```

## Analysis Statistics

### Google Analytics

Go to [Google Analytics] (https://analytics.google.com/) to get your ID. (Science Online)

- `enable`: whether to enable

```yml
google_analytics:
  enable: true
  id: UA-XXXXXXXXX-X
```

### busuanzi

No garlic is a light and minimal website counter.

Go to [不 garlic 子] (http://busuanzi.ibruce.info/) to view related information.

Instructions for use: <http://ibruce.info/2015/04/04/busuanzi>

> Please do not enable it at the same time as [Valine] (# valine) 's `visitor`.

- `site_uv`: Whether to display the unique visitor of the site user (\ _icon is the corresponding icon, the same applies below)
- `site_pv`: whether to display site page views Page View
- `page_pv`: whether to display page views of article pages

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

## Advertising

### Google Advertising

Go to [Google Adsense] (https://www.google.com/adsense) to get your client id.

```yml
google_adsense:
  enable: false
  client: ca-pub-2245427233262012
```

## player

### [hexo-tag-aplayer] (https://github.com/MoePlayer/hexo-tag-aplayer)

> See [Official Document](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md)

Recommended configuration (in `_config.yml` in the root directory of Hexo):

```yml
aplayer:
  cdn: https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.js
  style_cdn: https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.css
  meting: true
  meting_cdn: https://cdn.jsdelivr.net/npm/meting@1/dist/Meting.min.js
```

::: tip
If you find that Aplayer sometimes introduces header files repeatedly in irrelevant files. Remember to turn off automatic script insertion.

> [Question of repeatedly loading Aplayer.js resource script] (https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md#%E9%87%8D%E5% A4% 8D% E8% BD% BD% E5% 85% A5-aplayerjs-% E8% B5% 84% E6% BA% 90% E8% 84% 9A% E6% 9C% AC% E9% 97% AE% E9 % A2% 98)

```yml
aplayer:
  asset_inject: false
```

Then decide at the head of the article whether to enable `aplayer`:

```yml {3}
---
title: xxx
aplayer: true
---

```

You can also set it globally in `yun.yml`. (When you set up a global player, you can use it.)

```yml
aplayer:
  global: true
```

:::

Insert a song from NetEase Cloud Music

```md
{% meting "497572729" "netease" "song" "theme: # C20C0C"%}
```

Since `hexo-tag-aplayer` is so fragrant, I decided to remove the original media package script. Students who are really in need can add it by themselves.

```js
/ **
 * Transform embedded video to support responsive layout.
 * @see https://ultimatecourses.com/blog/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js
 * /
embeddedVideoTransformer: function () {
  let iframes = document.getElementsByTagName ("iframe");
  let SUPPORTED_PLAYERS = [
    "www.youtube.com",
    "player.vimeo.com",
    "music.163.com"
  ];
  for (let i = 0; i <iframes.length; i ++) {
    let iframe = iframes [i];
    if (iframe.src.search (SUPPORTED_PLAYERS.join ("|"))! == -1) {
      let videoRatio = (iframe.height / iframe.width) * 100;
      iframe.width = "100%";

      let wrap = document.createElement ("div");
      wrap.className = "fluid-vids";
      wrap.style.width = "100%";
      wrap.style.minHeight = "90px";
      wrap.style.height = iframe.height;
      wrap.style.position = "relative";

      let iframeParent = iframe.parentNode;
      iframeParent.insertBefore (wrap, iframe);
      wrap.appendChild (iframe);
    }
  }
}
```

## KaTeX

Some simple mathematical formulas are shown in the article, using [KaTeX] (katex.or). For details, please refer to [Official Document] (https://katex.org/).

- `copy_tex`: copy katex text, enabled by default
- `global`: If you want to use `KaTex` on the global page (such as the article summary on the homepage), then you can enable it. (Of course, this also means that your page needs to load more resources each time.)

```yml
katex:
  copy_tex: true
  global: false
```

KaTeX libraries will be loaded only in articles or pages that use `katex`, so you need to set them in articles or headers using KaTeX.
(When you turn on global loading, you will no longer need to set this option.)

```md {3}
---
title: xxx
katex: true
---
```

You can wrap the formula in the following way.

::: tip
Note that when writing directly in a Markdown file, you need an extra `\` to translate `\`.

Use `\\ [E = mc ^ 2 \\]` instead of `\ [E = mc ^ 2 \]`.

If you have too many characters that need to be translated, you can directly wrap it with HTML tags (internal characters will not be parsed as Markdown), without using multiple `\` to translate.

for example:

```html
<div>
  \ [E = mc ^ 2 \]
</ div>
```

:::

As shown below, the formula will be displayed in the center.

```latex
$$ E = mc ^ 2 $$
\ [E = mc ^ 2 \]
```

As shown in the following package, the formula will be displayed in line.

```latex
\ (E = mc ^ 2 \)
```

> You can visit [Yun Test] (https://www.yunyoujun.cn/yun/) to see the actual effect.
> You may need some time to wait for the `KaTeX` library to load, or refresh and try again.

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

If you do n’t use Google Analytics, the third method is probably the best. It does n’t require intrusive changes to the theme, nor does it increase the static file size too much.

::: tip

Note that the files provided by Google are now `html` files, which are placed directly under the `source` folder and will be compiled by Hexo.
So you also need to find the `skip_render` selection in the site configuration file `_config.yml` and add a file for skip rendering.

Examples:

```yml
skip_render:
  -README.md
  -googlexxxxxxxxxxxxxxx.html
```

:::

### [Baidu Search Resource Platform] (https://ziyuan.baidu.com/)

For the reasons above, it is more recommended to use DNS or file verification.