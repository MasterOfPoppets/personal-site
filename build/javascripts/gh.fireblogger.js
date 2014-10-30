/*global angular*/

(function () {
  'use strict';
  angular.module('gh.fireblogger', [])
    
    .value('fb', new Firebase("https://fiery-heat-3490.firebaseio.com/"))
  
    .factory('Fireblogger', ['fb', '$timeout', function (fb, $timeout) {
        var fbBlogEntries = fb.child('blogEntries'),
            FirebloggerPostModel = {
              posts: [],
              post: null
            };

        return {
          FirebloggerPostModel: FirebloggerPostModel,
          
          getPost: function (postUrl) {
            console.log('getting post');
            fbBlogEntries.child(postUrl).once('value', function (snapshot) {
              $timeout(function () {
                FirebloggerPostModel.post = snapshot.val();
              });
            });
          },

          loadAllPosts: function () {
            fbBlogEntries.on('child_added', function (snapshot) {
              $timeout(function () {
                FirebloggerPostModel.posts.unshift(snapshot.val());
              });
            });
          }
        };
    }])
  
    .directive('markdown', function () {
      return {
        restrict: 'E',
        require: 'ngModel',
        link: function ($scope, $elem, $attrs, ngModel) {          
          ngModel.$render = function () {
            var html = marked(ngModel.$viewValue || '');
            $elem.html(html);
          };
        }
      };
    });
}());