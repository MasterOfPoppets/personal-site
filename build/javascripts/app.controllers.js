/*global angular*/

(function () {
    'use strict';
    angular.module('GHControllers', [])
    
        .controller('GHCtrl', ['$scope', '$http', 'PageFactory', function ($scope, $http, PageFactory) {
            $scope.PageFactory = PageFactory;
            $http.get('/config.json').success(function (data) {
                $scope.socialLinks = data.socialLinks;
                $scope.siteLinks = data.siteLinks;
            });
        }])
    
        .controller('BlogCtrl', ['PageFactory', function (PageFactory) {
            PageFactory.newPage('Blog | Gareth Hughes');
        }])
    
        .controller('ContactCtrl', ['PageFactory', function (PageFactory) {
            PageFactory.newPage('Contact | Gareth Hughes');
        }])
    
        .controller('HomeCtrl', ['PageFactory', function (PageFactory) {
            PageFactory.newPage('Gareth Hughes');
        }])
    
        .controller('PlaytimeCtrl', ['$scope', 'PageFactory', function ($scope, PageFactory) {
            $scope.isShowPlaytimeItem = PageFactory.showExpandedItem;
           
            PageFactory.newPage('Playtime | Gareth Hughes');
        }])
    
        .controller('PlaytimeItemCtrl', ['$scope', 'PageFactory', function ($scope, PageFactory) {
            $scope.isShowPlaytimeItem = PageFactory.showExpandedItem;
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
                $scope.testy.imgSrc = 'images/playtime/IMG_1129.JPG?w=720';
            };
            
            $scope.test2 = function () {
                $scope.testy.imgSrc2 = 'images/playtime/IMG_1129.JPG?w=320';
            };
            
            $scope.test3 = function () {
                $scope.testy.imgSrc3 = 'images/playtime/IMG_1129.JPG?w=720&crop=1200,800,3150,1600';
            };
            
            $scope.test4 = function () {
                $scope.testy.imgSrc4 = 'images/playtime/IMG_1129.JPG?w=720&crop=1200,800,' + $scope.coords.yCoord + ',' + $scope.coords.xCoord;
            };
            
            PageFactory.newPage('Playtime | Gareth Hughes');
            PageFactory.setShowExpandedItem(true);
        }])
    
        .controller('PortfolioCtrl', ['$scope', 'PageFactory', function ($scope, PageFactory) {
            $scope.isShowPortfolioItem = PageFactory.showExpandedItem;
            
            PageFactory.newPage('Portfolio | Gareth Hughes');
        }])
    
        .controller('PortfolioItemCtrl', ['$scope', 'PageFactory', function ($scope, PageFactory) {
            $scope.isShowPortfolioItem = PageFactory.showExpandedItem;
            
            PageFactory.newPage('Portfolio | Gareth Hughes');
            PageFactory.setShowExpandedItem(true);
        }])
    
        .controller('SkillsCtrl', ['PageFactory', function (PageFactory) {
            PageFactory.newPage('Skills | Gareth Hughes');
        }]);
}());