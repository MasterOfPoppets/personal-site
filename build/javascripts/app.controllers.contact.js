/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controllers.contact', [])
  
  .controller('ContactCtrl', [
    '$scope', '$state', 'PageFactory',
    function ($scope, $state, PageFactory) {
      $scope.formData = {};
      $scope.submitted = false;

      PageFactory.newPage('Contact | Gareth Hughes');
      
      // If we are here through a refresh then we will not be in the correct
      // state, so we will manually transition to it here.
      if (!$state.is('contact.form')) {
        $state.transitionTo('contact.form');
      }
    }
  ])

  .controller('ContactFormCtrl', [
    '$scope', '$http', '$state', '$famousAnimations',
    function ($scope, $http, $state, $famousAnimations) {
      $scope.submit = function (contactForm) {
        var httpPostObject = {
          method: 'POST',
          url: '/contact',
          data: $scope.formData
        };
        
        $scope.submitted = true;
        $http(httpPostObject).success(function (data) {
          if (data.success) {
            emailSendSuccess(data, $scope, $state, $famousAnimations);
          } else {
            emailSendFailure(data, $scope);
          }
        });
      };
    }
  ])
  
  .controller('ContactSuccessCtrl', [
    '$scope', '$state', '$famousAnimations',
    function ($scope, $state, $famousAnimations) {        
      $scope.$on('$stateChangeSuccess', function () {
        if ($state.is('contact.success')) {
          $scope.entryOpacity = $famousAnimations.animateIn();
        }
      });
    }
  ]);
  
  function emailSendFailure(data, $scope) {
    var keys = Object.keys(data.errors);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === 'enquiry_name') {
        $scope.enquiry_name_error = data.errors.enquiry_name; 
      } else if (keys[i] === 'enquiry_email') {
        $scope.enquiry_email_error = data.errors.enquiry_email; 
      } else if (keys[i] === 'enquiry_message') {
        $scope.enquiry_message_error = data.errors.enquiry_message; 
      }
    }
  }
  
  function emailSendSuccess(data, $scope, $state, $famousAnimations) {
    $scope.exitOpacity = $famousAnimations.animateOut(
      function () {
        $state.transitionTo('contact.success');
      }
    );
  }
}());