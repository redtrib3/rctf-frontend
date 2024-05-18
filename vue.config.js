const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
  {
      path: '/',
      lastmod: '2024-05-19',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/projects/',
      lastmod: '2024-05-19',
      priority: 0.5,
      changefreq: 'monthly'
  },
  {
      path: '/challenges/',
      lastmod: '2024-05-19',
      priority: 1.0,
      changefreq: 'weekly'
  },
  {
      path: '/socials/',
      lastmod: '2024-05-19',
      priority: 0.5,
      changefreq: 'yearly'
  }
]


module.exports = {
    
  configureWebpack: {
    plugins: [
        new SitemapPlugin({ base: 'https://redtrib3.me', paths })
    ]
  }
}
