// Exercise 7.
// --------------------------------------------------------

function getMiddle(numbers){
  var sorted;
  var nums = [];
  for (var key in arguments){
    var val = arguments[key];
    nums.push(val);
    sorted = nums.sort(function(a, b){
      return a-b;
    });

  }
    if (sorted.length % 2 !== 0){
    return sorted[Math.ceil(sorted.length/2)];

    }
    else if (sorted.length%2 === 0){

      var int1 = sorted.length/2;
      var int2 = (sorted.length/2)-1;
      return (sorted[int1] + sorted[int2])/2;

    }
}




var result = getMiddle(5, 6, 2, 6, 8);
console.log(result); // 2
