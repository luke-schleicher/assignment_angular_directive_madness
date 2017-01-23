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