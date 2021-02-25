module.exports = {
  title: 'I-Stem',
  tagline: 'Accessiblizing the world!!',
  url: 'https://I-Stem.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'I-Stem', 
  projectName: 'I-Stem',
  themeConfig: {
announcementBar: {
id: "wip",
content: "This is a work in progress. we are working hard to give these docs a shape which is developer friendly. Contributions are very much welcome."
},
navbar: {
title: "I-Stem Projects",
items : [{
type: "doc",
label: "Contributing Guidelines",
docId: "contributing/index"
}
]
},
    footer: {
/*
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
*/
      copyright: `Copyright © ${new Date().getFullYear()} I-Stem Services, Built with Docusaurus.`,
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
routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
blog: false,
pages: false
      },
    ],
  ],
};
