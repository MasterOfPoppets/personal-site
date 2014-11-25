(function () {
  'use strict';

  var express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      router = require('./routes/router'),
      images = require('./routes/images'),
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
  app.get('/images/:section/:img', images.loadImage);
  app.post('/contact', bodyParser.json(), router.contact);

  // Partials
  app.get('/partials/:section', router.loadPartial);
  app.get('/partials/:section/:item', router.loadPartialItem);
  app.get('/partials/blog/:blogItem', router.loadBlogEntry);
    
  // Misc.
  app.use(express.static(__dirname + '/public'));
  app.use('*', router.index);
    
  app.listen(port);
}());