/*global angular, console*/

(function () {
    'use strict';
    
    angular.module('GHApp', [])
    
        .controller('GHCtrl', function ($scope, $http) {
            $scope.socialLinks = [
                {
                    icon: 'fa-twitter',
                    link: 'https://twitter.com/garethdhughes'
                },
                {
                    icon: 'fa-linkedin',
                    link: 'http://uk.linkedin.com/pub/gareth-hughes/a1/50/765/'
                }
            ];
            $scope.siteLinks = [
                {
                    name: 'home',
                    link: '/'
                },
                {
                    name: 'playtime',
                    link: '/playtime'
                },
                {
                    name: 'portfolio',
                    link: '/portfolio'
                },
                {
                    name: 'blog',
                    link: '/blog'
                },
                {
                    name: 'contact me',
                    link: '/contact'
                }
            ];
        });
}());