/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controller.contact', [])
  
  .controller('ContactCtrl', [
    '$scope', '$state', 'PageFactory',
    function ($scope, $state, PageFactory) {
      // If we are here through a refresh then we will not be in the correct
      // state, so we will manually transition to it here.
      if (!$state.is('contact.form')) {
        $state.transitionTo('contact.form');
      }

      $scope.formData = {};
      $scope.submitted = false;

      PageFactory.newPage('Contact | Gareth Hughes');
    }
  ])

  .controller('ContactFormCtrl', [
    '$scope', '$http', '$state', '$famous',
    function ($scope, $http, $state, $famous) {
      var Transitionable = $famous['famous/transitions/Transitionable'];
      
      $scope.animateExit = function () {
        $scope.exitOpacity = new Transitionable(1);
        $scope.exitOpacity.set(0, {
          duration: 500,
          curve: 'easeInOut'
        }, function () {
          $state.transitionTo('contact.success');
        });
      };
      
      $scope.submit = function (contactForm) {
        $scope.submitted = true;
        $http({
          method: 'POST',
          url: '/contact',
          data: $scope.formData
        })
        .success(function () {
          $scope.animateExit();
        });
      };
    }
  ])
  
  .controller('ContactSuccessCtrl', [
    '$scope', '$famous',
    function ($scope, $famous) {
      var Transitionable = $famous['famous/transitions/Transitionable'];
      
      $scope.animateEntry = function () {
        $scope.entryOpacity = new Transitionable(0);
        $scope.entryOpacity.set(1, {
          duration: 500,
          curve: 'easeInOut'
        });
      };
      
      $scope.$on('$stateChangeSuccess', function () {
        $scope.animateEntry();
      });
    }
  ]);
}());