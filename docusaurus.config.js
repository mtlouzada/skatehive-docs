const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

module.exports = {
  title: 'Docs',
  tagline: 'Knowledge base for Skatehive Community',
  url: 'https://docs.skatehive.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/skatehive.png',
  organizationName: 'sktbrd',
  projectName: 'skatehive-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'es', 'fr'],
    localeConfigs: {
      en: { label: 'English' },
      'pt-br': { label: 'Português (BR)' },
      es: { label: 'Español' },
      fr: { label: 'Français' },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./docs/_category__.json'),
          editUrl: 'https://github.com/sktbrd/skatehive-docs/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      { hashed: true },
    ],
  ],
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Skatehive Docs - Welcome to the Web3 Skateboarding World. Explore our documentation and ask anything to our AI in any language.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'Skateboarding, Web3, Skatehive, Documentation, AI, Multilingual',
      },
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Docs',
      style: 'dark',
      logo: { alt: 'Skatehive Logo', src: 'img/skatehive.png' },
      items: [
        { type: 'doc', docId: 'intro', position: 'left', label: 'Learn' },
        { to: 'https://skatehive.app', label: 'App', position: 'left' },
        {
          type: 'dropdown',
          label: 'Projects',
          position: 'left',
          items: [
            { label: 'Quest for Stoken', href: 'https://www.stoken.quest/' },
            { label: 'Gnars', href: 'https://gnars.wtf' },
            { label: 'Settle or Die', href: 'https://chromewebstore.google.com/detail/settle-or-die/ciabjlofbbflnnjocnbgidbhfnddijpm' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'left',
          items: [
            { label: 'Discord', href: 'https://discord.gg/skatehive' },
            { label: 'Twitter', href: 'https://twitter.com/skatehive' },
            { label: 'Farcaster', href: 'https://nounspace/s/skatehive' }
          ],
        },
        { href: 'https://github.com/sktbrd/skatehive-docs/tree/main', label: 'GitHub', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
    customFields: {
      mendableAnonKey: "524a2d83-688b-477a-ba99-05131d06138d",
    },
  },
};
