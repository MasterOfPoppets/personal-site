/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controllers.contact', [])

  .controller('ContactCtrl', [
    '$scope', '$state', 'PageFactory',
    function ($scope, $state, PageFactory) {
      PageFactory.newPage('Contact | Gareth Hughes');

      // If we are here through a refresh then we will not be in the correct
      // state, so we will manually transition to it here.
      if (!$state.is('contact.form')) {
        $state.transitionTo('contact.form');
      }
    }
  ])

  .controller('ContactFormCtrl', [
    '$scope', '$http', '$state'/*, '$famousAnimations'*/,
    function ($scope, $http, $state/*, $famousAnimations*/) {
      $scope.errors = {};
      $scope.formData = {};
      $scope.submitted = false;

      $scope.submit = function (contactForm) {
        var httpPostObject = {
          method: 'POST',
          url: '/contact',
          data: $scope.formData
        };

        $scope.submitted = true;
        $http(httpPostObject).success(function (data) {
          if (data.success) {
            emailSendSuccess(data, $scope, $state/*, $famousAnimations*/);
          } else {
            emailSendFailure(data, $scope);
          }
        });
      };
    }
  ])

  .controller('ContactSuccessCtrl', [
    '$scope', '$state'/*, '$famousAnimations'*/,
    function ($scope, $state/*, $famousAnimations*/) {
      // One day I'd like some famo.us here
//      $scope.$on('$stateChangeSuccess', function () {
//        if ($state.is('contact.success')) {
//          $scope.entryOpacity = $famousAnimations.animateIn();
//        }
//      });
    }
  ]);

  function emailSendFailure(data, $scope) {
    var keys = Object.keys(data.errors);

    $scope.errors = {};
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === 'enquiry_name') {
        $scope.errors.enquiry_name = data.errors.enquiry_name;
      } else if (keys[i] === 'enquiry_email') {
        $scope.errors.enquiry_email = data.errors.enquiry_email;
      } else if (keys[i] === 'enquiry_message') {
        $scope.errors.enquiry_message = data.errors.enquiry_message;
      }
    }
    $scope.submitted = false;
    console.log($scope.errors);
  }

  function emailSendSuccess(data, $scope, $state/*, $famousAnimations*/) {
    $scope.formData = {};
//    $scope.exitOpacity = $famousAnimations.animateOut(
//      function () {
//        $state.transitionTo('contact.success');
//      }
//    );
  }
}());
