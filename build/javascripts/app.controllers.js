/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controllers', [
    'gh.controllers.contact', 'gh.controllers.portfolio', 'gh.fireblogger'
  ])

  .controller('GHCtrl', [
    '$scope', '$http', 'PageFactory', 'Fireblogger', 
    function ($scope, $http, PageFactory, Fireblogger) {
      // Set PageFactory to app-wide scope
      $scope.PageFactory = PageFactory;

      // Get configuration file for links etc
      $http.get('/config.json').success(function (data) {
        $scope.socialLinks = data.socialLinks;
      });

      // Load all blog entries - maybe not the best location for this
      Fireblogger.loadAllPosts();
  }])

  .controller('BlogCtrl', [
    '$scope', 'PageFactory', 'Fireblogger', '$stateParams',
    function ($scope, PageFactory, Fireblogger, $stateParams) {
      $scope.model = Fireblogger.FirebloggerPostModel;

      if ($stateParams.id) {
        Fireblogger.getPost($stateParams.id);
      }
      
      PageFactory.setTest('/#services');

      PageFactory.newPage('Blog | Gareth Hughes');
  }]);
}());