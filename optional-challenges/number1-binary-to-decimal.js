// Create a function that operates on a binary string and converts it to a decimal number
//
// You can't use JavaScript built in parsing (parsInt and the like)
// Make the function available to be called on strings like the test cases below
// assert_equal("11001010".binaryToDecimal(), 202);
// assert_equal("1110".binaryToDecimal(), 14);



// String.prototype.binaryToDecimal = function () {
//   // return this.
//
//   return this.split('').reverse().reduce(function(prev, curr, index){
//     return (curr === '1') ? prev + Math.pow(2, index) : prev;
//   }, 0);
// //the seemingly floating zero is being used to set the initial value of the first parameter, 'prev'.
// //this is in order to establish the end value as a Number, rather than a String, which it initially is
// //(after having been split from its Array).
// };

//Following is the broken down version of the above. Both work.

String.prototype.binaryToDecimal = function () {
  // return this.
  var string = this;
  // '11001001'
  var charArr = string.split('');
  // ['1','1','0',...]
  var reversedArr = charArr.reverse();
  // ['1','0','0',...]

  var reducedValue = reversedArr.reduce(function(prev, curr, index){
    var result;
    if(curr === '1'){
      result = ( prev + Math.pow(2, index) );
    } else{
      result = prev;
    }
    return result;
    //the end value for "prev" which may act as both the *initial value* (unless
    //otherwise specified in the optional parameter, which we did) and the *accumulator*,
    //is dependent on the value of the "curr". After each running of the function,
    //(which will return a new, but not necessarily different value for every iteration -- one per Array index),
    //there is a new accumulated value until th ultimate is derived.
  }, 0);

  return reducedValue;
};

console.log("11001010".binaryToDecimal());
