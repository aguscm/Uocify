// const path = require('path');

const fs = require('fs');

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('./cert/server.key'),
      cert: fs.readFileSync('./cert/server.cert'),
    },
    public: 'https://localhost:8080/'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  pwa: {
    name: 'Uocify',
    themeColor: '#000078',
    msTileColor: '#ffffff',
    orientation: 'portrait',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
}