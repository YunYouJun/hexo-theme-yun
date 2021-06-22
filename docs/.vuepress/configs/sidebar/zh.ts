import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/": [
    {
      isGroup: true,
      text: "指南",
      children: [
        "/guide/README.md",
        "/guide/config.md",
        "/guide/page.md",
        "/guide/third-party-support.md",
        "/guide/additional-package-support.md",
        "/guide/faq.md",
        "/guide/migrate.md",
      ],
    },
    {
      isGroup: true,
      text: "关于",
      children: ["/about/README.md", "/about/icon.md"],
    },
  ],
};
