export default {
  // 站点级选项
  title: 'Html+Css Components',
  description: 'Just playing around.',
  head: [['link', { rel: 'icon', href: '/base/favicon.svg' }]],
  themeConfig: {
    // 主题级选项
    siteTitle: 'Html+Css Components',
    logo: '/base/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' },
      { text: 'Contact', link: '/contact/' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-GauTown Studio <a href="https://github.com/GauTown">GauTown</a>'
    }
  }
}