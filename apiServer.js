var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/comics/:id', function(req, res) {
  var url = 'https://xkcd.com/' + req.params.id + '/info.0.json';
  request.get(url, function (error, response, body) {
    res.json(JSON.parse(body));
  })
})

app.listen(3001, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log('API Server is listening on http://localhost:3001');
})
