# 关于

本主题是基于 [Hexo](https://hexo.io) 的自定义主题。

请先了解 [Hexo](https://hexo.io/zh-cn/docs/) 的相关使用方法。

你也可以参考我写的新手教程 [教你如何从零开始搭建一个属于自己的网站 - 云游君的小站](https://www.yunyoujun.cn/share/how-to-build-your-site/)。

如果您喜欢我的主题，请给一颗 [![GitHub stars](https://img.shields.io/github/stars/YunYouJun/hexo-theme-yun?style=social)](https://github.com/YunYouJun/hexo-theme-yun) 鼓励我。

> 因为我使用了 [SATA License](https://github.com/zTrix/sata-license)，笑。
> 你不知道这代表什么？简单来说，就是如果你使用了该主题，你需要马不停蹄地点一个 Star，接下来你便可以随意使用它。

- [hexo-theme-yun 制作笔记](https://www.yunyoujun.cn/note/make-hexo-theme-yun/)

## 关键词

简洁、优雅、自适应、快速、CDN、有趣、功能齐全

## 优势

- 文档！（我觉得像咱这样有详细文档的主题还真不多，膨胀）
- 自定义程度高，且方便按需配置（约定大于配置）
- 小且速度快（无 jQuery 依赖，尽可能使用 CDN 与最新的 API）
- 因为还没什么人用，所以基本不用担心撞衫！
- 一些奇怪的功能（譬如生成老婆名单？）

> 我发现许多 Hexo 主题都引入了 jQuery 以方便开发。
> 而现今 jQuery 的 API 已经逐渐融入现代浏览器的标准，所以本主题移除了 jQuery 并全部使用原生 JavaScript 来实现以提升速度。

## 设计原则

### 简洁至上

按钮优先使用简洁易懂的图标表现，不呈现文字。

### 新颖

在大部分浏览器已经支持的情况下，优先使用最新的 API。（可以减少冗余代码，提高速度。）

> IE: 你们都看我干嘛？

### 速度

谷歌 [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

![pagespeed-insights-score.png](https://i.loli.net/2020/03/12/cUIuDPJfo379ZOk.png)

谷歌浏览器 Audits - Lighthouse 检测分数

![Audits - Lighthouse](https://i.loli.net/2020/03/08/DhfLu5yngb7NZE2.png)

尽可能使用 CDN，提高访问速度。也算是符合了 云 ☁️ 的名字。

虽然很想用 WebP，奈何万恶的 Safari 与 iOS 不支持，故又都切回了 JPG。

> 顺便推荐谷歌的在线图片压缩工具：<https://squoosh.app/>

### 色彩

优先采用亮色模式

此前，我始终在亮色与暗色的选择之间徘徊，那么不如做一个可以切换亮暗的主题。
这也意味着工作量会增加，需要更多的考虑和测试，便优先亮色调的开发。（现在暗色模式也有啦，个人还是喜欢亮的。）

> 一些早在 20 世纪 80 年代的科学研究表明：对于大多数用户来说，亮色背景文本的大量使用似乎是一种更有效的选择。  
> D.Bauer 和 C.R.Cavonius 在其研究广告载体是如何运行的论文中分享了他们的研究成果《通过对比反转，提高视觉显示元素的易读性》（1980）。特别是，他们发现：当阅读文本时，参与者在浏览亮色背景上带有的深色文字时，准确率提高了 26%。  
> 为何会这样呢？来自英国伦比亚大学的「感觉知觉与互动研究小组」的 Jason Harrison 用以下方式解释了这一现象：  
> 患有散光的人（根据各种数据显示：大约 50%的人）觉得，在黑色背景上的文字，比在白色背景上的黑色文字更难感知，这部分与光线水平有关。在明亮的显示屏（白色背景）下，虹膜会稍微闭合一些，减少了「变形的」透镜的影响；在暗色的显示屏（黑色背景）下，虹膜就会打开，接收到更多的光线，镜头的变形会使眼睛的焦距更加模糊。  
> 因此，如果界面上有大量的文本，而且需要用户进行长时间阅读，那么使用浅色背景会让用户觉得更加友好。

### 排版

尽可能遵循 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)

## Thanks

### Project

- [jsDelivr – Open Source CDN](https://www.jsdelivr.com/)
- [Hexo](https://github.com/hexojs/hexo)
- [RemixIcon](https://github.com/Remix-Design/remixicon)
- [iconfont](https://www.iconfont.cn/)
- [lightgallery.js](https://github.com/sachinchoolur/lightgallery.js/)
- [VuePress](https://github.com/vuejs/vuepress)
- [KaTeX](https://github.com/KaTeX/KaTeX)
- [Pjax](https://github.com/MoOx/pjax)

### Theme

- [hexo-theme-next](https://github.com/theme-next/hexo-theme-next)
- [hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody)
- [hexo-theme-sakura](https://github.com/honjun/hexo-theme-sakura)

### PV

- [【洛天依原创】异样的风暴中心【杉田朗】](https://www.bilibili.com/video/av4018008)
- [【洛天依原创】星宿计时【杉田朗】](https://www.bilibili.com/video/av7036967)

### Article

- [Hexo 主题开发经验杂谈](https://molunerfinn.com/make-a-hexo-theme/)

## Hexo VS WordPress VS Typecho

正所谓存在即合理。

本主题为 Hexo 主题，Hexo 更适合愿意花时间折腾学习或有一定基础知识的人群（当然也还有追求静态速度与绝对安全，没有钱买服务器等理由）。

如果你更想专注于内容生产，并想要快速搭建上手（前提是你得有个服务器），便可以考虑直接使用 [WordPress](https://wordpress.org/) 或 [Typecho](https://typecho.org/)。

我懵懂之时的第一个站点正是使用 WordPress 搭建，并使用了有相当长一段时间。倘若直接使用 Hexo 搭建，便可能因为姿势水平不足遇到一些坑，打击到自己的热情。

WordPress 作为世界上市场占比最大的博客软件和内容管理系统，功能最为强大，生态丰富。

Typecho 则似乎在 WordPress 的强大和 Hexo 的简洁快速中取了个中间点。

你可以根据自己的真正需求来选择最适合自己的博客框架。

至于主题方面，则不妨试试小伙伴 [染川瞳](https://asuhe.jp/) 的 WordPress 主题 [Sakurairo](https://github.com/mirai-mamori/Sakurairo) 和 [阔落](https://guhub.cn/) 的 Typecho 主题 [miracles](https://github.com/BigCoke233/miracles)，都是很漂亮的主题。
