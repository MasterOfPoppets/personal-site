/*global angular, console*/

(function () {
  'use strict';

  angular.module('GHApp', ['GHControllers', 'GHFactories', 'ui.router'])
  
    .config([
      '$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'partials/home',
            controller: 'HomeCtrl'
          });
      }
    ]);

//    .config([
//      '$routeProvider', '$locationProvider', 
//      function ($routeProvider, $locationProvider) {
//        $locationProvider.html5Mode(true);
//        $routeProvider
//          .when('/skills', {
//            templateUrl: 'partials/skills',
//            controller: 'SkillsCtrl'
//          })
//          .when('/portfolio', {
//            templateUrl: 'partials/portfolio',
//            controller: 'PortfolioCtrl'
//          })
//          .when('/portfolio/:portfolioItem', {
//            templateUrl: function (params) {
//              return 'partials/portfolio/' + params.portfolioItem;
//            },
//            controller: 'PortfolioItemCtrl'
//          })
//          .when('/play', {
//            templateUrl: 'partials/play',
//            controller: 'PlayCtrl'
//          })
//          .when('/play/:playItem', {
//            templateUrl: function (params) {
//              return 'partials/play/' + params.playItem;
//            },
//            controller: 'PlayItemCtrl'
//          })
//          .when('/blog', {
//            templateUrl: 'partials/blog',
//            controller: 'BlogCtrl'
//          })
//          .when('/blog/:blogItem', {
//            templateUrl: function (params) {
//              return 'partials/blog/' + params.blogItem;
//            },
//            controller: 'BlogCtrl'
//          })
//          .when('/contact', {
//            templateUrl: 'partials/contact',
//            controller: 'ContactCtrl'
//          })
//          .when('/', {
//            templateUrl: 'partials/home',
//            controller: 'HomeCtrl'
//          })
//          .otherwise({redirectTo: '/'});
//        }
//      ]);
}());