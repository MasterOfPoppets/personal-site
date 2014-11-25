(function () {
  'use strict';
  
  var Contact = require('../lib/contact');

  exports.loadPartial = function (req, res) {
    res.render('partials/' + req.params.section);
  };

  exports.loadPartialItem = function (req, res) {
    res.render('partials/' + req.params.section + '/' + req.params.item);
  };
  
  exports.loadBlogEntry = function (req, res) {
    res.render('partials/blogEntry');
  };
  
  exports.contact = function (req, res) {
    var contact = new Contact(req.body);
    
    contact.once('error', function (errorType, errors) {
      res.json({
        success: false,
        errorType: errorType,
        errors: errors
      });
    });
    
    contact.once('success', function (info) {
      res.json({
        success: true
      });
    });
    
    contact.sendContactForm(req.body);
  };

  exports.index = function (req, res) {
    res.render('layout');
  };
}());