(function () {
  'use strict';
  
  var Contact = require('../lib/contact');
  
  exports.blogEntry = function (req, res) {
    res.render('partials/blogEntry'); 
  };
  
  exports.contact = function (req, res) {    
    res.render('partials/contact');
  };

  exports.loadPartial = function (req, res) {
    res.render('partials/' + req.params.section);
  };

  exports.loadPartialItem = function (req, res) {
    res.render('partials/' + req.params.section + '/' + req.params.item);
  };

  exports.index = function (req, res) {
    res.render('index');
  };
}());