module.exports = {
  devServer: {
    host: 'cvbp.jeziordev',
    proxy: {
      '^/api': {
        target: 'https://cvbp.jeziordev',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  publicPath: '/',
  outputDir: 'web',
  assetsDir: '',
  indexPath: '../templates/index.html',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'CraftCMS VueJS Boilerplate'
      args[0].environment = process.env.NODE_ENV
      return args
    })
  },
  pwa: {
    name: 'CraftCMS VueJS Boilerplate',
    themeColor: '#ffffff',
    msTileColor: '#ffffff',
    manifestOptions: {
      background_color: '#ffffff',
    },
    appleMobileWebAppCapable: 'yes',
    workboxOptions: {
      navigateFallback: '/',
      navigateFallbackBlacklist: [
        new RegExp('^(\\/?)(admin)(\\/?)(.*)'),
        // new RegExp('^(\\/?)(sitemap.xml)')
      ],
    },
  },
}
