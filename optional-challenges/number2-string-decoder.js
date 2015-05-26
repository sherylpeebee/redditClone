// Create a function decodeStr()
//
// It will receive a string argument which has 2 parts, a stream of characters and a key, those 2 parts will be separated by the "|" sign in the message, example "sfGuisOthO12D|2 6 9 12"
//
// The key is a space-separated list of integers, the decoded message will be the letters positioned on those integers in the original stream, so for "2 6 9 12", we want the letters on positions 2, 6, 9, and 12, starting the count form 0
//
// assert_equal(decodeStr("sfGuisOthO12D|2 6 9 12"), "GOOD");
// assert_equal(decodeStr("01R34E6D|2 5 7"), "RED");

function decodeStr(str){
  var keyCodeArray = str.split('|');
  var codedMessage = keyCodeArray[0];
  var decoder=keyCodeArray[1];
  var zeroedMessage = [];
  var messageArray = [];


  for(var i=0; i<=codedMessage.length; i++){
    // zeroedMessage.push(codedMessage.charAt(decoder[i]));
    console.log(keyCodeArray);
    // console.log(decoder[i]);
    // console.log(codedMessage.charAt(decoder[i]));
  }
  // console.log(zeroedMessage);
  var counter = 0;
  while (counter < zeroedMessage.length){
    if (zeroedMessage[counter] !== '0'){
      messageArray.push(zeroedMessage[counter]);
    }
    counter ++;
  }
return messageArray.join('');
}

var x = decodeStr("sfGuisOthO12D|2 6 9 12");
console.log(x);
