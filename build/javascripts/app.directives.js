/*global angular*/

(function () {
  'use strict';
  angular.module('gh.directives', [])

  .directive('ghSocialLink', function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/gh-social-link.html'
    };
  });
}());