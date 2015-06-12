// //----- ryanosaur fib challenge ------
// function nextFib(num){
//  var i;
//  var fib = [];
//  var seq = [];
//  fib[0] = 0;
//  fib[1] = 1;
//  for(i=2; i <= 20; i) {
//  fib[i] = fib[i-2]  fib[i-1];
//   if(fib[i] <= num  fib[i-2]) {
//   seq.push(fib[i]);
//   }
// }
//  return seq.pop();
// }
// console.assert(nextFib(233) === 377);
// console.assert(nextFib(1597) === 2584);
// console.assert(nextFib(21) === 34);

function decode(args) {
  var wordArr = [];
  var argsArray = [];
  var val;
  for (var prop in arguments){
    val = arguments[prop];
    argsArray.push(val);
  }
    if(typeof val === 'string' ){
      return decodeWord();
    }
  function decodeWord(){
  var brokenString = argsArray.join('').split('');

  for (var i = 0; i < brokenString.length + 2; i += 2){
    wordArr.push(brokenString[i]);
  }
  function loop(){
    wordArr.pop();
    for(var j = i - (i-1); j < brokenString.length; j += 2){
      if (wordArr.length !== brokenString.length){
      wordArr.push(brokenString[j]);
      }
      else {
        return;
      }
    }
  }
  if(wordArr[wordArr.length - 1] === undefined){
    loop();
  }
      var result = wordArr.join('');

      console.log(result);
  }
}


console.log(decode("ci", "on", "dg"));
//"coding"


// console.assert(decode("ci", "on", "dg") === "coding");
// console.assert(decode(29,53,20) === 252930);
