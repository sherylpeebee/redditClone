
exports.doMath = function(arr, calcRes){
  var num1 = parseInt(arr[2].match(/^\d+/)[0]);
  var num2 = parseInt(arr[2].match(/\d+$/)[0]);
  var equation = arr.pop();
  console.log("equation: "+ equation);
  var opArray = equation.match(/[\*/%+-]+/);
  console.log("opArray: "+opArray);
  var op = opArray[0];
  switch (op) {
    case "+":
    var sum = num1+num2;
    console.log(JSON.stringify(sum));
    calcRes.write(JSON.stringify({sum: sum}));
    calcRes.end("");
      break;
    case "-":
    var difference = num1-num2;
    console.log(JSON.stringify(difference));
    calcRes.write(JSON.stringify({difference: difference}));
    calcRes.end("");
      break;
    case "/":
    var quotient = num1/num2;
    console.log(JSON.stringify(quotient));
    calcRes.write(JSON.stringify({quotient: quotient}));
    calcRes.end("");
      break;
    case "x":
    var product = num1*num2;
    console.log(JSON.stringify(product));
    calcRes.write(JSON.stringify({product: product}));
    calcRes.end("");
      break;
    case "*":
     product = num1*num2;
    console.log(JSON.stringify(product));
    calcRes.write(JSON.stringify({product: product}));
    calcRes.end("");
      break;
  }

};
