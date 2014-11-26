/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controller.contact', [])
  
    .controller('ContactCtrl', [
      '$scope', 
      '$http',
      'PageFactory', 
      function ($scope, $http, PageFactory) {
        $scope.formData = {};
        
        PageFactory.newPage('Contact | Gareth Hughes');
      
        $scope.submit = function(contactForm) {
          $scope.formData.vkResponse = 
            document.getElementById('g-recaptcha-response').value;
          
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