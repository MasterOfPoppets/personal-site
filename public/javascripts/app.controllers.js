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
            $scope.testy = {
                imgSrc: '',
                imgSrc2: ''
            };
            
            $scope.test = function () {
                $scope.testy.imgSrc = 'images/playtime/IMG_1129.JPG?w=720';
            };
            
            $scope.test2 = function () {
                $scope.testy.imgSrc2 = 'images/playtime/IMG_1129.JPG?w=320';
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