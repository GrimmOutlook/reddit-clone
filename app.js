var app = angular.module('redditClone', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.posts = [
      {title: 'post 1', upvotes: 2},
      {title: 'post 2', upvotes: 21},
      {title: 'post 3', upvotes: 213},
      {title: 'post 4', upvotes: 68},
      {title: 'post 5', upvotes: 42}
    ];
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === "") {return;};
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = '';
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
  }]);
