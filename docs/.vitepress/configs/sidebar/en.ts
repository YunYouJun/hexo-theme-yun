import type { YouTheme } from "vitepress-theme-you";

export const en: YouTheme.SideBarConfig = [
  {
    text: "Guide",
    children: [
      {
        text: "User's Guidance",
        link: "/en/guide/",
      },
      {
        text: "Theme Configuration",
        link: "/en/guide/config",
      },
      {
        text: "Theme page",
        link: "/en/guide/page",
      },
      {
        text: "Third-party support",
        link: "/en/guide/third-party-support",
      },
      {
        text: "Additional Dependency Library Support",
        link: "/en/guide/additional-package-support",
      },
      {
        text: "FAQ",
        link: "/en/guide/faq",
      },
      {
        text: "Migration Guide",
        link: "/en/guide/migrate",
      },
    ],
  },
  {
    text: "About",
    children: [
      {
        text: "About Theme",
        link: "/en/about/",
      },
      {
        text: "Icons",
        link: "/en/about/icon",
      },
    ],
  },
];
