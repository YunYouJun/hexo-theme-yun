import type { UserConfig } from "vitepress";
import type { YouTheme } from "vitepress-theme-you";

import baseConfig from 'vitepress-theme-you/config'

import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";

import { head } from "./configs/head";

const config: UserConfig<YouTheme.Config> = {
  extends: baseConfig,

  head,

  title: "Hexo-Theme-Yun",
  shortTitle: "Yun",

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
    // iconClass: "i-ri-cloud-line",
    shortTitle: "Yun",

    nextLinks: true,
    prevLinks: true,
    repo: "YunYouJun/hexo-theme-yun",
    docsDir: "docs",
    editLinks: true,
    docsBranch: "dev",

    editLinkText: "帮助改善此页面",

    locales: {
      "/": {
        label: "简体中文",
        selectText: "简体中文",
        lastUpdated: "上次更新",
        editLinkText: "帮助改善此页面！( ￣□￣)/",
        nav: navbar.zh,
        sidebar: sidebar.zh,
      },
      "/en/": {
        label: "English",
        selectText: "English",
        lastUpdated: "Last Updated",
        nav: navbar.en,
        sidebar: sidebar.en,
      },
    },

    algolia: {
      // appId: 'N2XEWA4N6V',
      apiKey: "62c0b4aa58760ed3804e4fae0457c202",
      indexName: "yunyoujun",
    },
  },

  // plugins: [
  //   [
  //     "@vuepress/google-analytics",
  //     {
  //       id: "UA-121354150-9",
  //     },
  //   ],
  // ],
};

export default config;
