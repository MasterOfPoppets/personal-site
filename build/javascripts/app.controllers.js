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

      PageFactory.newPage('Blog | Gareth Hughes');
  }])

  .controller('PlayCtrl', [
    '$scope', 'PageFactory', 
    function ($scope, PageFactory) {
      $scope.isShowPlayItem = PageFactory.showExpandedItem;

      PageFactory.newPage('Play! | Gareth Hughes');
  }])

  .controller('PlayItemCtrl', [
    '$scope', 'PageFactory', 
    function ($scope, PageFactory) {
      $scope.isShowPlayItem = PageFactory.showExpandedItem;
      $scope.coords = {
        xCoord: 1600,
        yCoord: 3150
      };
      $scope.testy = {
        imgSrc: '',
        imgSrc2: '',
        imgSrc3: '',
        imgSrc4: ''
      };

      $scope.test = function () {
        $scope.testy.imgSrc = 'images/play/IMG_1129.JPG?w=720';
      };

      $scope.test2 = function () {
        $scope.testy.imgSrc2 = 'images/play/IMG_1129.JPG?w=320';
      };

      $scope.test3 = function () {
        $scope.testy.imgSrc3 = 
          'images/play/IMG_1129.JPG?w=720&crop=1200,800,3150,1600';
      };

      $scope.test4 = function () {
        $scope.testy.imgSrc4 = 
          'images/play/IMG_1129.JPG?w=720&crop=1200,800,' + 
          $scope.coords.yCoord + ',' + $scope.coords.xCoord;
      };

      PageFactory.newPage('Play! | Gareth Hughes');
      PageFactory.setShowExpandedItem(true);
  }]);
}());