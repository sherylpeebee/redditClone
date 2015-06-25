'use strict()';

angular.module('reddit', ["ngRoute"])
.config(function($routeProvider){
  $routeProvider
  .when("/", {
    controller: "ListCtrl",
    templateUrl: "list.html"
  })
  .when("/new", {
    controller: "newLinkCtrl",
    templateUrl: "new.html"
  })
  .otherwise({
    redirectTo: "/"
  });
})
.service("linkService", function(){
  this.links = [
    {title: "blah", url: "http://www.poo.com", description: "poo stuff"}
  ];
  this.storeLink = function(newLink){
    this.links.unshift(newLink);
  };
  this.deleteLink = function($index){
    this.links.splice($index, 1);
  };
})
.controller('ListCtrl', function($scope, linkService){
  $scope.links = linkService.links;
  console.log("hey");
  $scope.deleteLink = function(){
    linkService.deleteLink();
  };
})
.controller('newLinkCtrl', function($scope, $location, linkService){
  console.log("hey");
  $scope.addLinkAndRedirect = function(junk){
    linkService.storeLink(junk);
    $scope.link = {};
    $location.path("/");
  };
});
