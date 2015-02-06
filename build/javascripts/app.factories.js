/*global angular*/

(function () {
  'use strict';
  angular.module('gh.factories', ['gh.factories.famous'])

  .factory('PageFactory', function () {
    var page = {
      showExpandedItem: false,
      testLink: '#services',
      title: 'Gareth Hughes'
    };

    return {
      newPage: function (title) {
        page.showExpandedItem = false;
        page.title = title;
      },

      showExpandedItem: function () {
        return page.showExpandedItem;
      },

      setShowExpandedItem: function (showExpandedItem) {
        page.showExpandedItem = showExpandedItem;
      },
      
      setTest: function (value) {
        page.testLink = value;
      },
      
      test: function () {
        return page.testLink;
      },

      title: function () {
        return page.title;
      }
    };
  });
}());