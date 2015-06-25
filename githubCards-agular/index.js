
angular.module("githubCards", [])
.controller("appCtrl", ["$scope", "$http", function($scope, $http){
  $scope.usersArr = [];
  $scope.searchUsers = function(handle){
   $http.get('https://api.github.com/users/'+ handle).
   success(function(data, status, headers, config) {
     $scope.usersArr.push(data);
   }).
   error(function(data, status, headers, config) {
     console.log(status);
   });
  };
