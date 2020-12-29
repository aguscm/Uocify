// const path = require('path');
// const openssl = require('openssl-nodejs');
// openssl('openssl genpkey -out ../privkey.pem -algorithm RSA -pkeyopt rsa_keygen_bits:2018 -pkeyopt rsa_keygen_pubexp:3', (output) => console.log(output.toString()));
// var https = require('https');
const fs = require('fs');
// var options = {
//   key: fs.readFileSync('cert/server.key'),
//   cert: fs.readFileSync('cert/server.cert')
// };
// var server = https.createServer(options, app).listen(port);
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
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'src/assets/favicon-32x32.png',
      favicon16: 'src/assets/favicon-16x16.png',
      appleTouchIcon: 'src/assets/apple-touch-icon-152x152.png',
      maskIcon: 'src/assets/safari-pinned-tab.svg',
      msTileImage: 'src/assets/msapplication-icon-144x144.png'
    }
  }
}