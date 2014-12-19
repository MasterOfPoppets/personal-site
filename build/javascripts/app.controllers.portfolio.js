/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controller.portfolio', [])
  
    .controller('PortfolioCtrl', [
      '$scope', 'PageFactory', '$famous',
      function ($scope, PageFactory, $famous) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];
        
        $scope.angle = new Transitionable(0);
        
        $scope.isShowPortfolioItem = PageFactory.showExpandedItem;
        $scope.test = '/images/portfolio/syn_logo.png';
        $scope.portfolioLinks = [
          {
            link: 'gbst-syn',
            image: '/images/portfolio/syn_logo.png'
          }
        ];
        
        $scope.animate = function () {
          console.log('clicked');
          $scope.angle.set(2 * Math.PI, {
            duration: 1000,
            curve: 'easeInOut'
          });
        };

        PageFactory.newPage('Portfolio | Gareth Hughes');
    }])

    .controller('PortfolioItemCtrl', [
      '$scope', 'PageFactory', 
      function ($scope, PageFactory) {
        $scope.isShowPortfolioItem = PageFactory.showExpandedItem;

        PageFactory.newPage('Portfolio | Gareth Hughes');
        PageFactory.setShowExpandedItem(true);
    }]);
}());