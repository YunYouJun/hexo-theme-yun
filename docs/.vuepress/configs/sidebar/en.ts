import type { SidebarConfig } from "@vuepress/theme-default";
export const en: SidebarConfig = {
  "/en/": [
    {
      isGroup: true,
      text: "Guide",
      children: [
        "/en/guide/",
        "/en/guide/config",
        "/en/guide/page",
        "/en/guide/third-party-support",
        "/en/guide/additional-package-support",
        "/en/guide/faq",
        "/en/guide/migrate",
      ],
    },
    {
      isGroup: true,
      text: "About",
      children: ["/en/about/", "/en/about/icon"],
    },
  ],
};
