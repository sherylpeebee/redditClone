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
console.assert(nextFib(233) === 377);
console.assert(nextFib(1597) === 2584);
console.assert(nextFib(21) === 34);
