/*A palindromic word is a word that reads the same way forward and backwards (i.e. racecar, reviver, rotator).

Write a JS function that takes a string argument, and returns an array of true/false values that map to whether the word in that position is palindromic or not.

Use the .map function in your solution and don't use any loops.

Test Case:

palindromicMap("stash and pop on this level")
Would return

[false, false, true, false, false, true]
*/
//
//
// function palindromicMap(string){
//   var wordArray = string.split(' ');
//   for(var i=0; i<wordArray.length; i++){
//     var letterArrays = wordArray[i].split('');
//     var result = wordArray[i] ===letterArrays.reverse().join('');
//     console.log(result);
//   }
// }

function palindromicMap(string){
  var wordArray = string.split(' ');
  var letterArrays =  wordArray.map(function(word){

     return word === word.split('').reverse().join('');

  });
  return letterArrays;

}

console.log(palindromicMap("stash and pop on this level"));
