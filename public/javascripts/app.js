/*global angular, console*/

(function () {
    'use strict';
    
    angular.module('GHApp', ['ngRoute', 'GHControllers', 'GHFactories'])
    
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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
                    controller: 'PortfolioCtrl'
                })
                .when('/playtime', {
                    templateUrl: 'partials/playtime',
                    controller: 'PlaytimeCtrl'
                })
                .when('/blog', {
                    templateUrl: 'partials/blog',
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
        }]);
}());