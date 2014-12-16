/*global angular*/

(function () {
  'use strict';
  angular.module('gh.controller.portfolio', [])
  
    .controller('PortfolioCtrl', [
      '$scope', 'PageFactory', 
      function ($scope, PageFactory) {
        $scope.isShowPortfolioItem = PageFactory.showExpandedItem;
        $scope.portfolioLinks = [
          {
            link: 'gbst-syn',
            image: '/images/portfolio/syn_logo.png'
          },
          {
            link: 'ombudz',
            image: '/images/portfolio/syn_logo.png'
          },
          {
            link: 'gbst-syn',
            image: '/images/portfolio/syn_logo.png'
          }
        ];

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