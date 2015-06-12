var assert = require("assert");

// describe('Array', function(){
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     });
//   });
// });

var CH = {};

CH.sum = function sum(a, b){
 // if (typeof a === 'object' && typeof b === 'object'){
 //   var result = [];
 //   var first = a.reduce(function(e1, e2){
 //      result.push(e1 + e2);
 //   });
 //   var second = b.reduce(function(e1, e2){
 //      result.push( e1 + e2 );
 //   });
 //   return result;
 // } else{
 //  a = a || 0;
 //  b = b || 0;
 //  return a + b;
 //----^ used to work. new test cases called for refactor ^----
 return Array.prototype.reduce.call(arguments, function(total, e){
   return total + e || 0;
 }, 0);
 }
};

describe('the sum function', function(){
  it('should return the sum of its two arguments', function(){
    assert.equal(7, CH.sum(3, 4));
    assert.equal(-1, CH.sum(0, -1));
  });
  it("should return one argument if the other is missing", function(){
    assert.equal(0, CH.sum());
    assert.equal(3, CH.sum(undefined, 3));
    assert.equal(3, CH.sum(null, 3));
    assert.equal(3, CH.sum(NaN, 3));
    assert.equal(3, CH.sum(false, 3));
    assert.equal(3, CH.sum("", 3));
  });
  it('should return an array that sums individually passed arrays', function(){
    assert.deepEqual([4, 8], CH.sum([2, 2], [3, 5]));
    assert.deepEqual([16, 8], CH.sum([2, 2, 2, 2, 2, 2, 2, 2], [3, 5, 1, -1, 1, -1]));
  });
});
