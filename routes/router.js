(function () {
  'use strict';

  exports.loadPartial = function (req, res) {
    res.render('partials/' + req.params.section);
  };

  exports.loadPartialItem = function (req, res) {
    res.render('partials/' + req.params.section + '/' + req.params.item);
  };
  
  exports.loadBlogEntry = function (req, res) {
    res.render('partials/blogEntry');
  };

  exports.index = function (req, res) {
    res.render('layout');
  };
}());