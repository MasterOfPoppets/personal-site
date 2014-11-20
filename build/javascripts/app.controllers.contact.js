/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controller.contact', [])
  
    .controller('ContactCtrl', [
      '$scope', 
      '$http',
      'PageFactory', 
      function ($scope, $http, PageFactory) {
        $scope.formData = {
          vk: {
            num1: Math.floor((Math.random() * 10) + 1),
            num2: Math.floor((Math.random() * 10) + 1)
          }
        };
        
        PageFactory.newPage('Contact | Gareth Hughes');
      
        $scope.submit = function(contactForm) {
          if (contactForm.$valid) {
            $http({
              method: 'POST',
              url: '/contact',
              data: $scope.formData
            });
          } else {
            console.log('Not valid');
          }
        };
      }
    ]);
}());