// oojs/object oriented programming is about organizing objects into classes;
//
// everything in javascript is an object- but...
// the most common is 'hash'/'dictionary'/'table' = 'pojo': plain old (key-value) javascript objects
// e.g. {key: 'value', key: value; key: 0043}, etc;
//
// "anyObject.__proto__" is a method you can apply to any object to get its parent object type

var a1 = [0,9,3,4];
  var a2 = [4,9,-5,4];

  Array.prototype.sum = function() { 
 return this.reduce(function(total, element){ 
   return total + element; 
   });
};

    console.log(a1.sum()); 
  console.log(a2.sum());  
   //console.log({ a: 5, g: 7, p: 42 }.values()) // [5, 7, 42]  console.log({ z: 12, g: 0, p: -1 }.values()) // [12, 0, -1]
