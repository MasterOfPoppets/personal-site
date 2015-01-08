/*global angular*/

(function () {
  'use strict';
  angular.module('gh.factories.famous', [])

    .factory('FamousAnimationsFactory', [
    '$famous', 
    function ($famous) {
      return {
        animateIn: function (callback) {
          var opacity = new $famous['famous/transitions/Transitionable'](0);
          
          opacity.set(1, {
            duration: 500,
            curve: 'easeInOut'
          }, function () {
            if (callback) callback();
          });
          
          return opacity;
        },
        
        animateOut: function (callback) {
          var opacity = new $famous['famous/transitions/Transitionable'](1);
          
          opacity.set(0, {
            duration: 500,
            curve: 'easeInOut'
          }, function () {
            if (callback) callback();
          });
          
          return opacity;
        }
      };
    }]);
}());