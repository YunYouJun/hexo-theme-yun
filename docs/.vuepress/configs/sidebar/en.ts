import type { SidebarConfig } from "@vuepress/theme-default";
export const en: SidebarConfig = {
  "/en/": [
    {
      isGroup: true,
      text: "Guide",
      children: [
        "/en/guide/README.md",
        "/en/guide/config.md",
        "/en/guide/page.md",
        "/en/guide/third-party-support.md",
        "/en/guide/additional-package-support.md",
        "/en/guide/faq.md",
        "/en/guide/migrate.md",
      ],
    },
    {
      isGroup: true,
      text: "About",
      children: ["/en/about/README.md", "/en/about/icon.md"],
    },
  ],
};
