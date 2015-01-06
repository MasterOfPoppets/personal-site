/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controller.contact', [])
  
  .controller('ContactCtrl', [
    '$scope', '$famous', '$state', 'PageFactory',
    function ($scope, $famous, $state, PageFactory) {
      var Transitionable = $famous['famous/transitions/Transitionable'];
      var Easing = $famous['famous/transitions/Easing'];

      // If we are here through a refresh then we will not be in the correct
      // state, so we will manually transition to it here.
      if (!$state.is('contact.form')) {
        $state.transitionTo('contact.form');
      }

      $scope.formData = {};
      $scope.submitted = false;
      $scope.opacity = new Transitionable(0);

      PageFactory.newPage('Contact | Gareth Hughes');

      $scope.animate = function () {
        $scope.opacity.set(1, {
          duration: 500,
          curve: 'easeInOut'
        });
      };
    }
  ])

  .controller('ContactFormCtrl', [
    '$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $scope.submit = function (contactForm) {
        $scope.submitted = true;
        $http({
          method: 'POST',
          url: '/contact',
          data: $scope.formData
        })
        .success(function () {
          $state.transitionTo('contact.success');
        });
      };
    }
  ])
  
  .controller('ContactSuccessCtrl', [
    '$scope', '$famous',
    function ($scope, $famous) {
      var Transitionable = $famous['famous/transitions/Transitionable'];
      var Easing = $famous['famous/transitions/Easing'];
      $scope.opacity = new Transitionable(0);
      
      $scope.animate = function () {
        $scope.opacity.set(1, {
          duration: 500,
          curve: 'easeInOut'
        });
      }();
    }
  ]);
}());