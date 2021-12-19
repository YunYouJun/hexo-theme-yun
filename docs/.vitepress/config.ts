import type { UserConfig } from "vitepress";

import path from "path";

import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";

import { head } from "./configs/head";

const config: UserConfig = {
  // @ts-ignore
  head,

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
    iconClass: "i-ri-cloud-line",
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
};

export default config;
