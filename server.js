(function () {
  'use strict';
  
  require('newrelic');

  var express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      router = require('./routes/router'),
      api = require('./routes/api'),
      stylus = require('stylus'),
      nib = require('nib'),
      port = process.env.PORT || 3000;
    
  // Special Stylus compile
  function compile(str, path) {
    return stylus(str)
      .set('compress', true)
      .set('filename', path)
      .use(nib());
  }
    
  // Config
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(stylus.middleware(
    {
      src: __dirname + '/build',
      dest: __dirname + '/public',
      compile: compile
    }
  ));
    
  // Logging middleware
  app.use('/', function (req, res, next) {
    console.log(req.method, req.url);
    next();
  });
    
  // General
  app.get('/', router.index);
  
  // API
  app.get('/images/:section/:img', api.loadImage);
  app.post('/contact', bodyParser.json(), api.contact);

  // Partials
  app.get('/partials/:section', router.loadPartial);
  app.get('/partials/blog/:blogId', router.blogEntry);
  app.get('/partials/:section/:item', router.loadPartialItem);
    
  // Misc.
  app.use(express.static(__dirname + '/public'));
  app.use('*', router.index);
    
  app.listen(port);
}());