var fs = require("fs"),
    http = require("http"),
    request = require('request'),
    url = require('url'),
    md5 = require('MD5'),
    exec = require("child_process").exec;

    http.createServer(responseHandler).listen(8888);

function responseHandler(req, res) {
  if (req.url.match("fav")) {
    res.end("");
    return;
  }
  else if(req.url.match("/gravatarUrl")){
    var md5Arr = req.url.split("/");
    var email = md5Arr[2];
    var hash = md5(email);
    var result = "www.gravatar.com/avatar/" + hash;
    console.log(result);
    res.write(result);
    res.end("");
  }

  else if (req.url.match("/Calc")){
    var calArr = req.url.split("/");
    console.log(calArr);
  }

  // else if (req.url.match("/Counts")){
  //
  // }


    console.log(req.url);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("");


}
