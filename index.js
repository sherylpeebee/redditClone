var doubler = function(a, b) {
  if (typeof a === 'string' || typeof a === 'number' && typeof b === 'string' || typeof b === 'number'){
    return a+a+b+b;
  } else if (typeof a === 'function' && typeof b === 'function'){
    return a()*2 + b()*2;
  } else if (typeof a === 'object' || typeof b === 'object'){
    var dblVals = [];
    if (a){
      for (var prop in a){
        var val = a[prop];
        dblVals.push(val*2);
        console.log(dblVals);
      }
    }
    if (b){
      for (var prop2 in b){
        var val2 = b[prop2];
        console.log(val2*2);
      }
    }
    for (var i = 0; i < dblVals.length; i ++){
      
    }
  }
};






// console.log(doubler(4,2) === 12);

// console.log(doubler(1,3) === 8);
// console.log(doubler(-1,3) === 4);
//
// console.log(doubler("a", "b") === "aabb");
// console.log(doubler("a", "b"));
// console.log(doubler("coding", "rocks") === "codingcodingrocksrocks");

function m4() { return 4; }

function m2() { return 2; }

// function m1() { return 1; }
// function m3() { return 3; }

// console.log(doubler(m4, m2));
// console.log((m4()*2 + m2()*2));
// console.log(doubler(m1, m3) === 8);

// function objectsEqual(obj1, obj2) {
// var firstArray = Object.keys(obj1);
// var secondArray = Object.keys(obj2).reverse();
//
//   for(var i = 0; i< firstArray.length; i++){
//
//       console.log(firstArray[i] === secondArray[i]);
//
//   }
// }
//
// var a = { z: 42 , t: 7 };
// var b = { t: 7, z: 42 };

// console.log(objectsEqual(a, b));

// console.log(objectsEqual(doubler({x1: 1, x2: 4}), {x1: 2, x2: 8}));
console.log(doubler({x1: 1, x2: 4}));



// objectsEqual(doubler({x1: -4, x2: 0}), {x1: -8, x2: 0});
