var directiveMadness = angular.module('directiveMadness', []);

directiveMadness.directive('mainNav', function() {

  return {
    templateUrl: "/mainNav.html",
    restrict: "E",
    scope: {}
  };

});

directiveMadness.directive('mainHeader', function() {

  return {
    templateUrl: "/mainHeader.html",
    restrict: "E",
    scope: {},
    transclude: true
  };

});

directiveMadness.directive('copyright', function() {

  var linkFunc = function(scope, element, attributes) {

    angular.element('#date').text(new Date().getFullYear());

  };

  return {
    templateUrl: "/copyright.html",
    restrict: "E",
    scope: {},
    transclude: true,
    link: linkFunc
  };

});

directiveMadness.directive('colorize', function() {

  var changeColor = function(scope, element, attributes) {

    element.css({ 
      'color': scope.color,
      'background': scope.background
    }); 

  };

  return {
    restrict: 'A',
    scope: {
      color: '@',
      background: '@'
    },
    link: changeColor
  };

});

