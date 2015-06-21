$(document).ready(function(){
  $("#submit").on("click", function(){
    // var name = $("#name").val();
    // console.log(name);
    // var email = $("#email").val();
    // console.log(email);
    // var mobile = $("#mobile").val();
    // console.log(mobile);
  });
});


angular.module("Contacts", ["angular-md5"])
  .controller("ContactsCtrl", function($scope, md5){
    $scope.contact = { name: "Summer Jenkins", gravatar: "poop", email: "summer_jenkins@sbcglobal.net",  phone: "916-740-4008"};
    $scope.contactsArr = [
      {name: "Tania Leonian", email: "tania.dev77@gmail.com", phone: "510-798-3716"},
      {name: "Lionel Briones", email: "lionelbriones@gmail.com", phone: ""},
      {name: "Samer Buna", email: "samer.buna@gmail.com", phone: ""}
    ];
    $scope.addContact = function(obj){
      $scope.contactsArr.push(obj);
      console.log($scope.contactsArr);
    };
});
