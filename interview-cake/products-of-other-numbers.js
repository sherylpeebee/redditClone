// Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.
//
// For example, given:
//
//   [1, 7, 3, 4]
// your function would return:
//
//   [84, 12, 28, 21]
// by calculating:
//
//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]

function get_products_of_all_ints_except_at_index(numbers){
  var divider = numbers.toString().split(',').length - 1;
  var numbersArray = [];
  var test = numbers.reduce(function(prev, curr, index){
    for (var i=0; i<numbers.length; i++){
      if (curr !== numbers[i]){
        // indexedNums[i] = numbers[i];
        numbersArray.push(numbers[i]);

        // numbers[i].reduce(function(a, b, nestedIndex){

        //   console.log(a*b);
        // }, 1);
        // return prev + curr;
      }
    }
  }, 0);

  // console.log(numbersArray);
  console.log(divider);
}

var given = [1, 7, 3, 4];
get_products_of_all_ints_except_at_index(given);


// var newTest = [1, 2, 3, 4, 5].reduce(function(prev, curr, index) {
//     console.log('prev: '+prev, 'curr: ' + curr);
//     return prev * curr;
// }, 1);
//
// console.log(newTest);
