var myFirebaseRef = new Firebase("https://hello-world-chat-app.firebaseio.com/");
// <--------- Adding to end of path is equivalent to ".child" method ------->
// <--------- IMPORTANT!!! the end path also chnages general destination for all data ------->
// <--------- this is obvious, but it was breaking my chat app.------->
var samerFirebase = new Firebase("https://torrid-heat-146.firebaseio.com/son");

myFirebaseRef.authWithOAuthPopup("github", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    initChat(authData.github);
  }
});

var initChat = function(user){

$("textarea").on("keyup", function(event){
  if(event.which === 13){
    sendMessage(this.value);
    this.value = "";
  }
});

var sendMessage = function(textValue) {
    if (textValue) {
      ref.push({
        author: user.displayName,
        message: textValue,
        messageDate: Firebase.ServerValue.TIMESTAMP
      });
    }
  };

//   var $messageTemplate = $(".text:first");
//
//   myFirebaseRef.on("child_added", function(snapshot){
//     var newMessage = snapshot.val();
//     if (newMessage.author && newMessage.message && newMessage.message.trim().length > 0){
//       var $messageDiv = $messageTemplate.clone().removeClass("hidden");
//       $messageDiv.find(".time").text(moment(newMessage.messageDate).format("lll"));
//       $messageDiv.find(".author").text(newMessage.author);
//       $messageDiv.find(".message").html(marked(newMessage.message));
//       $messageDiv.find(".avatar").attr("src", user.cachedUserProfile.avatar_url);
//       $("#chat").prepend($messageDiv);
//     }
//   }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   });
// };
// <------------- My version of the code below; needed updating. updates above -------------->

var sendMessage = function(textValue){
  // myFirebaseRef.set({
  // author: "Sher: ",
  // message: textValue
  // });
  samerFirebase.push({
  author: user.displayName + ":  ",
  message: textValue,
  messageDate: Firebase.ServerValue.TIMESTAMP
  });
};
//value goes in "" in .on
samerFirebase.on("child_added", function(snapshot) {
  console.log(snapshot.val());
  var newMessage = snapshot.val();
  var messageDiv = $("<div>")
                  .append($("<span>", { class: 'author', text: newMessage.author }))
                  .append($("<span>", { text: newMessage.message }))
                  .append($("<span>", { text: newMessage.messageDate }));
  $("#chat").prepend(messageDiv);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
};
// <------------- More Examples of Writing Data Below ----------->

samerFirebase.child("location/city").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
});
