
// Using the JavaScript language, have the function CoinDeterminer(num) take the input,
// which will be an integer ranging from 1 to 250, and return an integer output that
// will specify the least number of coins, that when added, equal the input integer.
// Coins are based on a system as follows: there are coins representing the integers
// 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because
// you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output
// should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9,
// and 7 coins.


function CoinDeterminer(num){
var coinValues = [1, 5, 7, 9, 11];
var lesserValues = [];
var objArray = [];
  coinValues.forEach(function(e){
    if (e<= num){
      lesserValues.push(e);
    }
  });
  lesserValues.forEach(function(e){
    objArray.push({'coin':e, 'quotient':(num/e).toFixed(2)*1, 'remainder':num%e});
  });
  var leastCoinQuotient = objArray[objArray.length-1].quotient;
  var leastCoinRemainder = objArray[objArray.length-1].remainder;
  console.log(leastCoinQuotient, leastCoinRemainder);

  if (leastCoinRemainder === 0){
    return leastCoinQuotient;
  }
}

var result = CoinDeterminer(3);
console.log(result);




// var passFail = function(actual, expected){
//   return actual === expected ? 'PASS':'FAIL';
// };
//
// console.log(passFail(CaesarCipher(6), 2));
// //PASS
// console.log(passFail(CaesarCipher(16), 2));
// //PASS
// // Input = 6 Output = 2
// // Input = 16 Output = 2
