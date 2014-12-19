/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controller.contact', [])
  
    .controller('ContactCtrl', [
      '$scope', '$http', 'PageFactory', '$famous',
      function ($scope, $http, PageFactory, $famous) {
//        var Transitionable = $famous['famous/transitions/Transitionable'];
//        var Easing = $famous['famous/transitions/Easing'];
        
        $scope.formData = {};
        $scope.submitted = false;
//        $scope.opacity = new Transitionable(0);
        
        PageFactory.newPage('Contact | Gareth Hughes');
        
        $scope.submit = function (contactForm) {
          $scope.submitted = true;
          $http({
            method: 'POST',
            url: '/contact',
            data: $scope.formData
          });
        };
        
//        $scope.animate = function () {
//          $scope.opacity.set(1, {
//            duration: 500,
//            curve: 'easeInOut'
//          });
//        };
//        
//        $scope.animate();
      }
    ]);
}());