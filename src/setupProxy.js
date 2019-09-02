const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/signup', { target: 'https://localhost:8080/', secure: false }));
};