/*global angular*/

(function () {
  'use strict';
  angular.module('gh.directives', [])

  .directive('sociallink', function () {
    return {
      restrict: 'A',
      template: '<a href=\'{{ socialLink.link }}\'><i class=\'fa {{ socialLink.icon }}\'></i></a>'
    };
  });
}());