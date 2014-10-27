(function () {
  'use strict';
  var md = require('marked')
    , Firebase = require('firebase')
    , fb = new Firebase('https://fiery-heat-3490.firebaseio.com/');

  function getBlogEntries(onGetBlogEntries) {
    fb.child('blogEntries').once('value', function (snapshot) {
      onGetBlogEntries(snapshot.val());
    });
  }

  exports.loadAll = function (req, res) {
//    var i
//      , blogEntryKeys = []
//      , posts = [];
//
//    // Get blog entries, providing a callback to render the jade template
//    // with meta information when they are returned by Firebase.
//    getBlogEntries(function onGetBlogEntries(blogEntries) {
//      blogEntryKeys = Object.keys(blogEntries);
//      for (i = 0; i < blogEntryKeys.length; i = i + 1) {
//        posts.push(
//          { url: blogEntryKeys[i]
//          , title: blogEntries[blogEntryKeys[i]].title
//          , stub: blogEntries[blogEntryKeys[i]].stub
//          , date: blogEntries[blogEntryKeys[i]].date
//          }
//        );
//      }
//
//      res.render('partials/blog'/*, { md: md, posts: posts }*/);
//    });
    res.render('partials/blog'/*, { md: md, posts: posts }*/);
  };

  exports.test = function (req, res) {
    var blobby = ''
      , blogEntries = fb.child('blogEntries');
    
    blogEntries.child(req.params.blogItem).on('value', function (snapshot) {
      blobby = snapshot.val().post;
      res.render('partials/blogEntry', { md: md, post: blobby });
    });
  };
}());