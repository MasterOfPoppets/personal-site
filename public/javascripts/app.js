/*global angular, console*/

(function () {
    'use strict';
    
    angular.module('GHApp', ['ngRoute'])
    
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/skills', {
                    templateUrl: 'partials/skills'
                })
                .when('/portfolio', {
                    templateUrl: 'partials/portfolio'
                })
                .when('/portfolio/:portfolioItem', {
                    templateUrl: 'partials/portfolio/gbst-syn'
                })
                .when('/playtime', {
                    templateUrl: 'partials/playtime'
                })
                .when('/blog', {
                    templateUrl: 'partials/blog'
                })
                .when('/contact', {
                    templateUrl: 'partials/contact'
                })
                .when('/', {
                    templateUrl: 'partials/home'
                })
                .otherwise({redirectTo: '/'});
        })
    
        .controller('GHCtrl', function ($scope, $http) {
            $http.get('/config.json').success(function (data) {
                $scope.socialLinks = data.socialLinks;
                $scope.siteLinks = data.siteLinks;
            });
        });
}());