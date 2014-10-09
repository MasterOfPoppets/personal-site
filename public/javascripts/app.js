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
                    link: 'http://lnkd.in/dqY9Qxc'
                }
            ];
        });
}());