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


angular.module("Contacts", ["angular-md5", "xeditable"])
.run(function(editableOptions) {
  editableOptions.theme = 'yeti'; // bootstrap3 theme. Can be also 'bs2', 'default'
})
  .controller("ContactsCtrl", function($scope, md5){
    $scope.contact = { name: "", gravatar: "", email: "",  phone: ""};
    $scope.contactsArr = [
      {name: "Tania Leonian", email: "tania.dev77@gmail.com", phone: "510-798-3716", editable: false},
      {name: "Lionel Briones", email: "lionelbriones@gmail.com", phone: "", editable: false},
      {name: "Samer Buna", email: "samer.buna@gmail.com", phone: "", editable: false}
    ];
    $scope.addContact = function(obj){
      $scope.contactsArr.push(obj);
      console.log($scope.contactsArr);
    };

    $scope.editable = function(something){
      if(!something.editable){
         something.editable = true;
      }
      console.log(something.editable);
    };
});
