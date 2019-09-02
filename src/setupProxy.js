const proxy = require('http-proxy-middleware');

const options = {
    target: 'https://localhost:8080/',
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '/'
    },
    secure: false
  }
   
const newProxy = proxy(options)

module.exports = function(app) {
    app.use("/api", newProxy);
};