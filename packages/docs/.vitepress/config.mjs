import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'VeloraCSS',
  description: 'Modular CSS framework documentation',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Examples', link: '/examples/' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/guide/' },
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Tokens', link: '/api/' },
          { text: 'Utilities', link: '/examples/' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Customization', link: '/guide/' },
          { text: 'Integrations', link: '/api/' }
        ]
      }
    ]
  },
  theme: './theme/index.js'
});
