/*global angular, console*/

(function () {
  'use strict';

  angular.module('GHApp', ['GHControllers', 'GHFactories', 'ui.router'])
  
    .config([
      '$stateProvider', '$urlRouterProvider', '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'partials/home',
            controller: 'HomeCtrl'
          })
          .state('camera', {
            url: '/camera',
            templateUrl: 'camera',
            controller: 'HomeCtrl'
          })
          .state('skills', {
            url: '/skills',
            templateUrl: 'partials/skills',
            controller: 'SkillsCtrl'
          })
          .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'partials/portfolio',
            controller: 'PortfolioCtrl'
          })
          .state('portfolio.item', {
            url: '/{id}',
            templateUrl: function ($stateParams) {
              return 'partials/portfolio/' + $stateParams.id;
            },
            controller: 'PortfolioItemCtrl'
          })
          .state('play', {
            url: '/play',
            templateUrl: 'partials/play',
            controller: 'PlayCtrl'
          })
          .state('play.item', {
            url: '/{id}',
            templateUrl: function ($stateParams) {
              return 'partials/play/' + $stateParams.id;
            },
            controller: 'PlayItemCtrl'
          })
          .state('blog', {
            url: '/blog',
            templateUrl: 'partials/blog',
            controller: 'BlogCtrl'
          })
          .state('blogItem', {
            url: '/blog/{id}',
            templateUrl: function ($stateParams) {
              return 'partials/blog/' + $stateParams.id; 
            },
            controller: 'BlogCtrl'
          })
          .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact',
            controller: 'ContactCtrl'
          });
      }
    ]);
}());