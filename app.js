var app = angular.module('redditClone', ['ui.router']);

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
  $scope.posts = posts.posts;
}]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){

    $stateProvider.state(
      'home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }]);

app.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = [
      {title: 'post 1', upvotes: 2},
      {title: 'post 2', upvotes: 21},
      {title: 'post 3', upvotes: 213},
      {title: 'post 4', upvotes: 68},
      {title: 'post 5', upvotes: 42}
    ];
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === "") {return;}
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
  }]);
