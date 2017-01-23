directiveMadness.controller('quoteCtrl',
  ['$scope',
  function($scope) {

    $scope.quotes = [];

  }]);

directiveMadness.directive('quoteForm', function() {

  var addQuote = function(scope, element, attributes) {
    var quote = {};
    var 
  };

  return {
    templateUrl: 'quoteForm.html',
    restrict: 'E',
    scope: true
  };

});

directiveMadness.directive('quotesIndex', function() {

  return {
    templateUrl: 'quotesIndex.html',
    restrict: 'E',
    scope: true
  }

});