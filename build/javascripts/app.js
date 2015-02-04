/*global angular, console*/

(function () {
  'use strict';

  angular.module('GHApp', [
    'gh.controllers', 'gh.factories', 'gh.directives', 'famous.angular',
    'ui.router'])
  
  .config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
      $stateProvider
      .state('index', {
        templateUrl: 'partials/index'
      })
      .state('index.home', {
        url: '/',
        views: {
          'content': {
            templateUrl: 'partials/content'
          },
          'contact': {
            templateUrl: 'partials/contact',
            controller: 'ContactFormCtrl'
          }
        }
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
      .state('portfolioItem', {
        url: '/portfolio/{id}',
        views: {
          '': {
            templateUrl: function ($stateParams) {
              return 'partials/portfolio/' + $stateParams.id;
            },
            controller: 'PortfolioItemCtrl'
          }
        }        
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
      })
      .state('contact.form', {
        templateUrl: 'partials/contact/contact_form',
        controller: 'ContactFormCtrl'
      })
      .state('contact.success', {
        templateUrl: 'partials/contact/contact_success',
        controller: 'ContactSuccessCtrl'
      });
    }
  ]);
}());