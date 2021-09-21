import path from "path";
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";

export default defineUserConfig<DefaultThemeOptions>({
  alias: {
    "~": path.resolve(__dirname, "."),
  },

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
        src: "//at.alicdn.com/t/font_1140697_dxory92pb0h.js",
      },
    ],
  ],

  title: "Hexo-Theme-Yun",
  locales: {
    "/": {
      lang: "zh-CN",
      description:
        "A powerful & simple & fast theme for Hexo. 一个对可爱自以为是的 Hexo 主题。",
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
    docsBranch: "dev",

    locales: {
      "/": {
        selectLanguageName: "简体中文",
        lastUpdatedText: "上次更新",
        editLinkText: "帮助改善此页面！( ￣□￣)/",
        navbar: navbar.zh,
        sidebar: sidebar.zh,
      },
      "/en/": {
        selectLanguageName: "English",
        lastUpdatedText: "Last Updated",
        navbar: navbar.en,
        sidebar: sidebar.en,
      },
    },
  },

  plugins: [
    [
      "@vuepress/google-analytics",
      {
        id: "UA-121354150-9",
      },
    ],
    ["@vuepress/plugin-pwa"],
    [
      "@vuepress/plugin-pwa-popup",
      {
        locales: {
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
    [
      "@vuepress/docsearch",
      {
        apiKey: "62c0b4aa58760ed3804e4fae0457c202",
        indexName: "yunyoujun",
        locales: {
          "/": {
            placeholder: "Search Documentation",
          },
          "/zh/": {
            placeholder: "搜索文档",
          },
        },
      },
    ],
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
  ],
});
