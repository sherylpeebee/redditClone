// 11. Array analyzer
// Write a javascript function that takes multiple arguments that are all integers and calculates the following:
//
// Count of odd integers
// Count of negative integers
// The average of all integers (round to 2 decimal)
// The median of all integers
// Test case:




function arrayAnalyzer(numbers){
  // console.log(arguments);
  var numberArray = [];
  var analysis = {odds: 0, negative: 0, avg: 0, median: 0};
  for(var key in arguments) {
    var value = arguments[key];
    if (value < 0){
      analysis.negative++;
      /*
      ORRRRR (COOL STUFFF AHEAD!!!) you could do analysis['negative']++
      NOTICE!!: When using bracket notation, if the key is a variable, use no quotes. it is not a string.
      BUT!!: If the key has already been set to a literal name (e.g. in the "analysis" object, we've labeled the key 'negative'),
      it MUST be called as a string.
      */
    }
    numberArray.push(value);
    if (value % 2 !== 0){
      analysis.odds++;
    }
  }
  var sum = numberArray.reduce(function(a, b){
    return a + b;
    });
  analysis.avg = (sum/numberArray.length).toFixed(2)*1;
  var orderedNumbers = numberArray.sort(function(a, b){ return a-b; });
  console.log(orderedNumbers);
  if (orderedNumbers.length % 2 !== 0){
    analysis.median = orderedNumbers[Math.floor(orderedNumbers.length/2)];
  } else{
      var index1 = (orderedNumbers.length/2);
      var index2 = index1 - 1;
      analysis.median = (orderedNumbers[index1]+orderedNumbers[index2]/2).toFixed(2);
    }

  return analysis;
}




console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3));

// would return:

// { "odds": 4, "negatives": 2, "avg": 8.29, "median": 3 }
