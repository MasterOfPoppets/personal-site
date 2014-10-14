/*global angular, console*/

(function () {
    'use strict';
    
    angular.module('GHApp', [])
    
        .controller('GHCtrl', function ($scope, $http) {
            $http.get('/config.json', {cache: true}).success(function (data) {
                $scope.socialLinks = data.socialLinks;
                $scope.siteLinks = data.siteLinks;
            });
        });
}());