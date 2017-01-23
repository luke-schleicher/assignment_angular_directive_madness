directiveMadness.controller('warmupCtrl',
  ['$scope',
  function($scope) {
  $scope.radioButtons;
  $scope.stateUp = "Up"

  $scope.hoverState = "LEAVE"

  $scope.doubleClicked = ""

  $scope.toggleState = function(){
    if($scope.stateUp === "Down"){
      $scope.stateUp = "Up"
    }else{
      $scope.stateUp = "Down"
    }
  }

  $scope.toggleHover = function(){
    if($scope.hoverState === "LEAVE"){
      $scope.hoverState = "OVER"
    }else{
      $scope.hoverState = "LEAVE"
    }
  }

  $scope.doubleClick = function(){
    if($scope.doubleClicked === ""){
      $scope.doubleClicked = "double "
    }else{
      $scope.doubleClicked = ""
    }
  }
  }]);