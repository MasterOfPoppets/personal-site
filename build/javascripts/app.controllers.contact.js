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
        $scope.submitted = false;
        
        PageFactory.newPage('Contact | Gareth Hughes');
      
        $scope.submit = function(contactForm) {
          $scope.submitted = true;
          $http({
            method: 'POST',
            url: '/contact',
            data: $scope.formData
          });
        };
      }
    ]);
}());