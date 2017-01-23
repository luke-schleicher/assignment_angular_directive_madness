directiveMadness.controller('quoteCtrl',
  ['$scope',
  function($scope) {

    $scope.quotes = [];
    $scope.newQuote = {};
    $scope.id = 0

    $scope.createQuote = function(body, author){

      console.log(body);
      console.log(author);
      debugger;

      if ($scope.newQuote.body.length < 2) {
        return false;
      }

      if ($scope.newQuote.author.length < 2) {
        return false;
      }

      var quote = {
        body: $scope.newQuote.body,
        author: $scope.newQuote.author,
        id: $scope.id
      }
      ++$scope.id
      $scope.newQuote = {}
      $scope.quotes.push(quote)
    };

    $scope.deleteQuote = function(id){
      for(var i = 0; i < $scope.quotes.length; i++){
        if($scope.quotes[i].id === id){
          $scope.quotes.splice(i, 1)
          break;
        }
      }
    }

  }]);

directiveMadness.directive('quoteForm', function() {

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