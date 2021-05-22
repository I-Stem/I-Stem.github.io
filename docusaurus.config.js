module.exports = {
  title: 'I-Stem',
  tagline: 'Empowering people with disabilities using technology, community and support services',
  url: 'https://I-Stem.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'I-Stem', 
  projectName: 'I-Stem.github.io',
  themeConfig: {
    navbar: {
      title: 'I-Stem',
      logo: {
        alt: 'I-Stem Logo',
        src: 'img/istem/istem_logo.png',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/i-stem',
          position: 'right',
//          className: 'header-github-link',
          label: 'GitHub Profile',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Follow us',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/istem-tech',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/istemtech',
            },
          ],
        },
      ],
      logo: {
        alt: 'I-Stem Logo',
        src: 'img/istem/istem_logo.png',
        href: 'https://istemai.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} I-Stem, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
include: ['**/*.md', '**/*.mdx'], // Extensions to include.
//routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
blog: false,
      },
    ],
  ],
};
