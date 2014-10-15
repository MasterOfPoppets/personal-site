/*global angular*/

(function () {
    'use strict';
    angular.module('GHFactories', [])
    
        .factory('PageFactory', function () {
            var title = 'Gareth Hughes';
        
            return {
                title: function () {
                    return title;
                },
                
                setTitle: function (newTitle) {
                    title = newTitle;
                }
            };
        })
    
        .factory('ModelService', function () {
            var model = {
                showPortfolioItem: false
            };
        
            return {
                showPortfolioItem: function () {
                    return model.showPortfolioItem;
                },
                
                setShowPortfolioItem: function (show) {
                    model.showPortfolioItem = show;
                }
            };
        });
}());