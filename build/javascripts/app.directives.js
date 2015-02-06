/*global angular*/

(function () {
  'use strict';
  angular.module('gh.directives', [])
  
  .directive('ghScrollingAnchor', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function (event) {
          // Not really happy about using jQuery here but for now it will
          // do, since Angular doesn't really have good support for scrolling
          // to anchors with easing. Famo.us?
          $('html, body').stop().animate({
            scrollTop: $(attrs.href).offset().top
          }, 1500, 'easeInOutExpo');
          
          event.preventDefault();
        });
      }
    };
  })
  
  .directive('ghShrinkingHeader', function ($timeout, $window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.changeHeaderOn = 300;
        scope.didScroll = false;
        
        function scrollY() {
          return $window.pageYOffset || document.documentElement.scrollTop;
        }
        
        function scrollPage() {
          console.log('scrolling');
          if (scrollY() > scope.changeHeaderOn) {
            element.addClass('navbar-shrink');
          } else {
            element.removeClass('navbar-shrink');
          }
          scope.didScroll = false;
        }
        
        angular.element($window).bind('scroll', function () {
          if (!scope.didScroll) {
            scope.didScroll = true;
            $timeout(function () {
              scrollPage();
            }, 250);
          }
        });
      }
    };
  })

  .directive('ghSocialLink', function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/gh-social-link.html'
    };
  });
}());