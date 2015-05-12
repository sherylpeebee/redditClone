// 11. Array analyzer
// Write a javascript function that takes multiple arguments that are all integers and calculates the following:
//
// Count of odd integers
// Count of negative integers
// The average of all integers (round to 2 decimal)
// The median of all integers
// Test case:




function arrayAnalyzer(numbers){
  console.log(arguments);
  for(var key in arguments) {
    // console.log(key);
    var value = arguments[key];
    console.log(value);
}
  // var numberString = numbers.toString();
  // var numberArray = numberString.split(',');
  // console.log(numberArray);
  //
  // var results = {odds: 0, negatives: 0, avg: 0, median: 0};
  // numbers.forEach(function(number){
  //   if (number%2 !== 0){
  //    results.odds += 1;
  //   }
  // });

}


// var vals = Object.keys(obj).map(function (key) {
//     return obj[key];
// });

// use vals array


arrayAnalyzer(7, -3, 0, 12, 44, -5, 3);

// would return:

// { "odds": 4, "negatives": 2, "avg": 8.29, "median": 3 }
