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
    
        .controller('BlogCtrl', ['ModelService', 'PageFactory', function (ModelService, PageFactory) {
            PageFactory.setTitle('Blog | Gareth Hughes');
            ModelService.setShowPortfolioItem(false);
        }])
    
        .controller('ContactCtrl', ['ModelService', 'PageFactory', function (ModelService, PageFactory) {
            PageFactory.setTitle('Contact | Gareth Hughes');
            ModelService.setShowPortfolioItem(false);
        }])
    
        .controller('HomeCtrl', ['ModelService', 'PageFactory', function (ModelService, PageFactory) {
            PageFactory.setTitle('Gareth Hughes');
            ModelService.setShowPortfolioItem(false);
        }])
    
        .controller('PlaytimeCtrl', ['$scope', 'ModelService', 'PageFactory', function ($scope, ModelService, PageFactory) {
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
            
            PageFactory.setTitle('Playtime | Gareth Hughes');
            ModelService.setShowPortfolioItem(false);
        }])
    
        .controller('PortfolioCtrl', ['$scope', 'ModelService', 'PageFactory', function ($scope, ModelService, PageFactory) {
            $scope.isShowPortfolioItem = ModelService.showPortfolioItem;
            
            PageFactory.setTitle('Portfolio | Gareth Hughes');
            ModelService.setShowPortfolioItem(false);
        }])
    
        .controller('PortfolioItemCtrl', ['$scope', 'ModelService', 'PageFactory', function ($scope, ModelService, PageFactory) {
            $scope.isShowPortfolioItem = ModelService.showPortfolioItem;
            
            PageFactory.setTitle('Portfolio | Gareth Hughes');
            ModelService.setShowPortfolioItem(true);
        }])
    
        .controller('SkillsCtrl', ['ModelService', 'PageFactory', function (ModelService, PageFactory) {
            PageFactory.setTitle('Skills | Gareth Hughes');
            ModelService.setShowPortfolioItem(false);
        }]);
}());