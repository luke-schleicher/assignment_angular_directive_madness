directiveMadness.controller('scopesCtrl',
  ['$scope',
    function($scope) {
      $scope.twoWay = "first";
      $scope.oneWay = "second";
    }
  ]
);



directiveMadness.directive('isolated', function() {

  var linkFunc = function(scope) {
    scope.twoWay = "I have been modified";
    scope.oneWay = "I too have been modified";
    scope.sayHello = function(name) {
      alert('hello ' + name);
    };
  };

  return {
    templateUrl: "isolated.html",
    restrict: 'AE',
    scope: {
      twoWay: '=',
      oneWay: '@',
      sayHello: '&'
    },
    link: linkFunc
  };

});