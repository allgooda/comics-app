var express = require('express');
var httpProxy = require('http-proxy');

var app = express();

//PROXY TO API
const apiProxy = httpProxy.createProxyServer({
  target:'http://localhost:3001'
});
app.use('/api', function(req, res) {
  apiProxy.web(req, res);
})

module.exports = app;