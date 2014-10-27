/*global angular, console*/

(function () {
  'use strict';

  angular.module('GHApp', ['ngRoute', 'GHControllers', 'GHFactories'])

    .config(
      [ '$routeProvider'
      , '$locationProvider'
      , function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
          .when('/skills', {
            templateUrl: 'partials/skills',
            controller: 'SkillsCtrl'
          })
          .when('/portfolio', {
            templateUrl: 'partials/portfolio',
            controller: 'PortfolioCtrl'
          })
          .when('/portfolio/:portfolioItem', {
            templateUrl: function (params) {
              return 'partials/portfolio/' + params.portfolioItem;
            },
            controller: 'PortfolioItemCtrl'
          })
          .when('/playtime', {
            templateUrl: 'partials/playtime',
            controller: 'PlaytimeCtrl'
          })
          .when('/playtime/:playtimeItem', {
            templateUrl: function (params) {
              return 'partials/playtime/' + params.playtimeItem;
            },
            controller: 'PlaytimeItemCtrl'
          })
          .when('/blog', {
            templateUrl: 'partials/blog',
            controller: 'BlogCtrl'
          })
          .when('/blog/:blogItem', {
            templateUrl: function (params) {
              return 'partials/blog/' + params.blogItem;
            },
            controller: 'BlogCtrl'
          })
          .when('/contact', {
            templateUrl: 'partials/contact',
            controller: 'ContactCtrl'
          })
          .when('/', {
            templateUrl: 'partials/home',
            controller: 'HomeCtrl'
          })
          .otherwise({redirectTo: '/'});
        }
      ]);
}());