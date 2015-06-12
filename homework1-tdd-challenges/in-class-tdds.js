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
  var word = [];
  var argsArray = [];
  for (var prop in arguments){
    var val = arguments[prop];
    argsArray.push(val);
  }
  var brokenString = argsArray.join('').split('');

  for (var i = 0; i < brokenString.length + 2; i += 2){
    word.push(brokenString[i]);
  }
  var loop = function(){
    word.pop();
    for(var j = i - (i-1); j<brokenString.length; j+=2){
      word.push(brokenString[j]);

    }
      var result = word.join('');
      console.log(result); 
  };
  if(word[word.length - 1] === undefined){
    loop();
  }
}

console.log(decode("ci", "on", "dg"));
//"coding"


// console.assert(decode("ci", "on", "dg") === "coding");
// console.assert(decode(29,53,20) === 252930);
