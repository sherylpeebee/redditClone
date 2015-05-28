// Exercise 8.
// --------------------------------------------------------
function createArrayFromAtoB(num1, num2) {
  var counter = num1;
  var array = [];
  while(counter<=num2){
    array.push(counter);
    counter ++;
  }
  return array;
}

var result = createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]
