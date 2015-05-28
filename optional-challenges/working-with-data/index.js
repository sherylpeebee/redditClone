'use strict()';

$(document).ready(init);

function init(){
  $('#getData').on('click', function(){

    var url = 'https://api.github.com/users';
    $.getJSON(url, function(data){
      // console.log(data);
      // console.log(data[0].type);
      var userType= {};
      var siteAdmin = 0;
      var loginUnder5 = 0;
      data.forEach(function(userObject){
        console.log(typeof userObject.site_admin);

        if(userObject.site_admin === true){
          siteAdmin++;
        }

        if(userObject.login.length <= 5){
          loginUnder5++;
        }

        if (userObject.type === "User"){
          if(userType.User !== undefined){
            userType.User++;

          }
          else {
            userType.User = 0;
          }
        }
        else if (userObject.type === "Organization"){
          if (userType.Organization !== undefined) {
            userType.Organization++;

          }
          else {
            userType.Organization = 0;
          }
        }
      });
      // console.log(userType);
      // console.log(siteAdmin);
      console.log({loginUnder5: loginUnder5, Users: userType.User, Organizations: userType.Organization, siteAdmin: siteAdmin});
    });
  });
}
