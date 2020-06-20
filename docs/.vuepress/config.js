module.exports = {
  head: [
    ["link", { rel: "icon", href: "/yun.svg" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#6200ee" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "#6200ee" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/logo.png",
        color: "#6200ee",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/logo.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#6200ee" }],
    [
      "script",
      {
        async: true,
        src: "//at.alicdn.com/t/font_1140697_pem9yni52s.js",
      },
    ],
  ],
  title: "Hexo-Theme-Yun",
  locales: {
    "/": {
      lang: "zh-CN",
      description: "A powerful & simple & fast theme for Hexo.",
    },
    "/en/": {
      lang: "en-US",
      description: "A powerful & simple & fast theme for Hexo.",
    },
  },
  themeConfig: {
    logo: "/yun.svg",
    nextLinks: true,
    prevLinks: true,
    repo: "YunYouJun/hexo-theme-yun",
    docsDir: "docs",
    editLinks: true,
    smoothScroll: true,
    sidebarDepth: 2,
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        editLinkText: "帮助改善此页面！( ￣□￣)/",
        nav: [
          { text: "使用指南", link: "/guide/" },
          { text: "示例站点", link: "/demo.html" },
          { text: "赞助名单", link: "https://sponsors.yunyoujun.cn" },
        ],
        sidebar: {
          "/": [
            "about.html",
            "guide/",
            "guide/config",
            "guide/page",
            "guide/third-party-support",
            "guide/additional-package-support",
            "guide/icon",
            "guide/faq",
          ],
        },
      },
      "/en/": {
        label: "English",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Guide", link: "/guide/" },
          { text: "Demo", link: "/demo.html" },
          { text: "Sponsor", link: "https://sponsors.yunyoujun.cn" },
        ],
        sidebar: {
          "/en/": [
            "about.html",
            "guide/",
            "guide/config",
            "guide/page",
            "guide/third-party-support",
            "guide/additional-package-support",
            "guide/icon",
            "guide/faq",
          ],
        },
      },
    },
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-121354150-9",
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "文档更新啦～",
            buttonText: "快点我刷新！",
          },
          "/en/": {
            message: "Documentation Updated～",
            buttonText: "Refresh Me!",
          },
        },
      },
    ],
  ],
};
