module.exports = {
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
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
      ("script",
      {
        "data-ad-client": "ca-pub-2245427233262012",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      }),
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
    logo: "/logo.gif",
    nextLinks: true,
    prevLinks: true,
    repo: "YunYouJun/hexo-theme-yun",
    docsDir: "docs",
    editLinks: true,
    smoothScroll: true,
    sidebar: {
      "/guide/": [
        "about",
        "",
        "config",
        "page",
        "third-party-support",
        "additional-package-support",
        "faq",
        "sponsor",
      ],
    },
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
          { text: "示例站点", link: "https://www.yunyoujun.cn" },
        ],
      },
      "/en/": {
        label: "English",
        lastUpdated: "Last Updated",
        nav: [{ text: "Guide", link: "/guide/" }],
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
