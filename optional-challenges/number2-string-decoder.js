// Create a function decodeStr()
//
// It will receive a string argument which has 2 parts, a stream of characters and a key, those 2 parts will be separated by the "|" sign in the message, example "sfGuisOthO12D|2 6 9 12"
//
// The key is a space-separated list of integers, the decoded message will be the letters positioned on those integers in the original stream, so for "2 6 9 12", we want the letters on positions 2, 6, 9, and 12, starting the count form 0
//
// assert_equal(decodeStr("sfGuisOthO12D|2 6 9 12"), "GOOD");
// assert_equal(decodeStr("01R34E6D|2 5 7"), "RED");

function decodeStr(str){
  var keyCodeObject = str.split('|');
  console.log(keyCodeObject);
  keyCodeObject.split(',');
  //the above gives me errors!

}

var x = decodeStr("01R34E6D|2 5 7");
console.log(x);



// below is what I tried earlier thinking that since it was behaving like an object, it might work...?
//it did, but then the resulting array still behaved like an object. so i got nowhere with it.

//   var value;
//   var keyCodeArray = [];
// for(var key in keyCodeObject) {
// value = keyCodeObject[key];
// console.log(value);
// keyCodeArray.push(value);
// }
