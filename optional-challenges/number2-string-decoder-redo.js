// Create a function decodeStr()
//
// It will receive a string argument which has 2 parts, a stream of characters and a key, those 2 parts will be separated by the "|" sign in the message, example "sfGuisOthO12D|2 6 9 12"
//
// The key is a space-separated list of integers, the decoded message will be the letters positioned on those integers in the original stream, so for "2 6 9 12", we want the letters on positions 2, 6, 9, and 12, starting the count form 0
//
// assert_equal(decodeStr("sfGuisOthO12D|2 6 9 12"), "GOOD");
// assert_equal(decodeStr("01R34E6D|2 5 7"), "RED");


function decodeStr(string){
  var decodedMessage = [];
  var splitUp = string.split('|');
  var codedMessage = splitUp[0].split('');
  var decoder=splitUp[1].split(' ');

  decoder.forEach(function(element){
     decodedMessage.push(codedMessage[element]);
  });
  return decodedMessage.join('');
}

var result1 = decodeStr("01R34E6D|2 5 7");
var result2 = decodeStr("sfGuisOthO12D|2 6 9 12");

console.log(result1);
console.log(result2);
