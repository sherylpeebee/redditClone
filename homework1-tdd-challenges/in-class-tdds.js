//----- ryanosaur fib challenge ------
function nextFib(num){
 var i;
 var fib = [];
 var seq = [];
 fib[0] = 0;
 fib[1] = 1;
 for(i=2; i <= 20; i++) {
 fib[i] = fib[i-2] + fib[i-1];
  if(fib[i] <= num + fib[i-2]) {
  seq.push(fib[i]);
  }
}
 return seq.pop();
}
console.log(nextFib(233) === 377);
console.assert(nextFib(1597) === 2584);
console.assert(nextFib(21) === 34);

// ------- son decode challenge --------

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

//----- ElijahOleg numberMultiplier challenge ------

function numberMultiplier(a, b){
  var multiplier2, multiplier1;
  var numbers = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };
    for (var prop in numbers){
      var val = numbers[prop];
      if (a === prop){
         multiplier1 = val;
      }
      if (b === prop){
         multiplier2 = val;
      }
    }
    var product = multiplier2 * multiplier1;
    for (var newProp in numbers){
      var newVal = numbers[newProp];
      if(product === newVal){
        return newProp;
      }
    }
}
console.log(numberMultiplier('three', 'two'));


// console.assert(numberMultiplier("ten","five") === "fifty");
// console.assert(numberMultiplier("six","twenty") === "one hundred and twenty");
