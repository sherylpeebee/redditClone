// TDD TEST

var assertEqual = function(actual, expected){
console.log(actual === expected ? "PASS": "FAIL");
};

// assertEqual(3+4, 7);
// assertEqual(3+4, 34);

function splitSum(numString, splitChar){
  var numbers = numString.split(splitChar);
  var sum = numbers.reduce(function(prev, curr){
    return prev*1 + curr*1;
  });
  //could have done:
  // sum = numbers.map(Number) <== 'Number' is a function (built-in)
  // or used parseInt function ==> to convert strings to numbers
  return sum;
}

// assertEqual(splitSum("3:4:5:1", ":"), 13);
// assertEqual(splitSum("-1$-5$5$-4", "$"), -5);
// result = splitSum("3:4:5:1", ":");
// console.log(result); // 13
// result = splitSum("-1$-5$5$-4", "$");
// console.log(result); // -5


function argsSum(numbers){
  var valArray = [];
  var sum;
  for (var key in arguments){
    val = arguments[key];
    valArray.push(val);
    sum = valArray.reduce(function(prev, curr){
      return prev + curr;
    });
  }
  return sum;
}


result = argsSum(3,7,8);
// console.log(result); // 18
// result = argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
// console.log(result); // 14


// assertEqual(argsSum(3,7,8), 18);


function  createArrayFromAtoB(start, end){
  var range = [];
  while (start <= end){
    range.push(start);
    start ++;
  }
  return range;
}

result = createArrayFromAtoB(4, 9);
console.log(result);
expectedResult = [4, 5, 6, 7, 8, 9];
console.log(expectedResult);
// result = createArrayFromAtoB(-1, 3);
// console.log(result); // [-1, 0, 1, 2, 3]
var assertArrayEqual = function(actual, expected){
console.log(JSON.stringify(actual) === JSON.stringify(expected) ? "PASS": "FAIL");
};

assertArrayEqual(result, expectedResult);
