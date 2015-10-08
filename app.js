var app = angular.module("redditClone", []);

app.controller('MainCtrl', [
  'scope',
  function($scope){
    $scope.test="Hello World!"
  }]);
