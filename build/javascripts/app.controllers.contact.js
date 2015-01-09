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
            $scope.exitOpacity = $famousAnimations.animateOut(
              function () {
                $state.transitionTo('contact.success');
              }
            );
          } else {
            console.log('Something has gone wrong'); 
          }
        });
      };
    }
  ])
  
  .controller('ContactSuccessCtrl', [
    '$scope', '$famousAnimations',
    function ($scope, $famousAnimations) {        
      $scope.$on('$stateChangeSuccess', function () {
        $scope.entryOpacity = $famousAnimations.animateIn();
      });
    }
  ]);
}());