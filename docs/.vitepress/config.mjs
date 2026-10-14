import { defineConfig } from "vitepress";

export default defineConfig({
  title: "@henrymmey/badges",
  description: "Beautifully designed badges for your projects.",
  base: "/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: "Home", link: "/" },
      { text: "Badge picker", link: "/badges/" },
      { text: "Credits", link: "/credits/" },
    ],
    sidebar: {
      "/badges/": [
        {
          text: "Badge styles",
          items: [
            { text: "All badges", link: "/badges/" },
            { text: "Cozy", link: "/badges/cozy" },
            { text: "Compact", link: "/badges/compact" },
            { text: "Cozy minimal", link: "/badges/cozy-minimal" },
            { text: "Compact minimal", link: "/badges/compact-minimal" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/henrymmey/badges" },
      { icon: "npm", link: "https://www.npmjs.com/package/@henrymmey/badges" },
    ],
    search: {
      provider: "local",
    },
    footer: {},
  },
});
