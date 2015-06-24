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
    // console.log(result);
    res.write(result);
    res.end("");
  }

  else if (req.url.match("/Counts")){
    var sliced = req.url.replace("/Counts", "");
    // console.log(sliced);
    var sentence = sliced.replace(/\W+/gmi, " ");
    // console.log(sentence);

    var superCounter = function(string){
      var characters = sentence.length;
      var spaceArray = sentence.match(/\s/g);
      var spaces = spaceArray.length -1;
      var words = sentence.split(' ').length -1;
      var wordsArray = sentence.split(' ');
      var newArray = wordsArray.map(function(word){
        return word.length;
      });
      var sum = newArray.reduce(function(a,b){
        return a + b;
      });
      var avg = sum/wordsArray.length;
      console.log(words + ' words', characters + ' characters', avg + ' chars avg word length', spaces + ' spaces');
      // res.write(words + ' words', characters + ' characters', avg + ' chars avg word length', spaces + ' spaces');
      return {words: words, characters:characters, avg: avg, spaces: spaces};
    };
    console.log(superCounter(sentence));
    res.write(JSON.stringify(superCounter(sentence)));
    res.end("");
  }

  else if (req.url.match("/Calc")){
    var calArr = req.url.split("/");
    var num1 = parseInt(calArr[2].match(/^\d+/)[0]);
    var num2 = parseInt(calArr[2].match(/\d+$/)[0]);
    var equation = calArr.pop();
    console.log("equation: "+ equation);
    var opArray = equation.match(/[\*/%+-]+/);
    console.log("opArray: "+opArray);
    var op = opArray[0];
    switch (op) {
      case "+":
      var sum = num1+num2;
      console.log(JSON.stringify(sum));
      res.write(JSON.stringify({sum: sum}));
      res.end("");
        break;
      case "-":
      var difference = num1-num2;
      console.log(JSON.stringify(difference));
      res.write(JSON.stringify({difference: difference}));
      res.end("");
        break;
      case "/":
      var quotient = num1/num2;
      console.log(JSON.stringify(quotient));
      res.write(JSON.stringify({quotient: quotient}));
      res.end("");
        break;
      case "x":
      var product = num1*num2;
      console.log(JSON.stringify(product));
      res.write(JSON.stringify({product: product}));
      res.end("");
        break;
      case "*":
       product = num1*num2;
      console.log(JSON.stringify(product));
      res.write(JSON.stringify({product: product}));
      res.end("");
        break;


    }
  }



    // console.log(req.url);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("");


}
