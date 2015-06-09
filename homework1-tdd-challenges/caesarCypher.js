// Using the JavaScript language, have the function CaesarCipher(str,num) take
// the str parameter and perform a Caesar Cipher shift on it using the num
// parameter as the shifting number. A Caesar Cipher works by shifting each letter
// in the string N places down in the alphabet (in this case N will be num).
// Punctuation, spaces, and capitalization should remain intact. For example if the
// string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".


// function CaesarCipher(str,num) {
//
//   // code goes here
//   return str + num;
//
// }
//
// CaesarCipher();
//
// Input = "Hello" & num = 4;
// Output = "Lipps";
// Input = "abc" & num = 0;
// Output = "abc";

var passFail = function(actual, expected){
  return actual === expected ? 'PASS':'FAIL';
};

console.log(passFail(CaesarCipher("Hello", 4), "Lipps"));
//PASS
console.log(passFail(CaesarCipher("abc", 0), "abc"));
//PASS
console.log(passFail(CaesarCipher("yes", 27), "yes"));
//PASS
console.log(passFail(CaesarCipher("O.kA.y", 3), "r.Nd.b"));
//FAIL
console.log(passFail(CaesarCipher("O.kA.y", 3), "R.nD.b"));
//PASS
