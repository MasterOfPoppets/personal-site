/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controllers.contact', [])
  
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
    '$scope', '$http', '$state', 'FamousAnimationsFactory',
    function ($scope, $http, $state, FamousAnimationsFactory) {
      $scope.submit = function (contactForm) {
        $scope.submitted = true;
        $http({
          method: 'POST',
          url: '/contact',
          data: $scope.formData
        })
        .success(function () {
          $scope.exitOpacity = FamousAnimationsFactory.animateOut(function () {
            $state.transitionTo('contact.success');
          });
        });
      };
    }
  ])
  
  .controller('ContactSuccessCtrl', [
    '$scope', 'FamousAnimationsFactory',
    function ($scope, FamousAnimationsFactory) {        
      $scope.$on('$stateChangeSuccess', function () {
        $scope.entryOpacity = FamousAnimationsFactory.animateIn();
      });
    }
  ]);
}());