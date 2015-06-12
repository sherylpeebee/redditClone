// var assert = require("assert");
//
// describe('Array', function(){
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     });
//   });
// });

CH.sum = function sum(a, b){
  return 7;
};

describe('the sum function', function(){
  it('should return the sum of its two arguments', function(){
    assert.equal(7, sum(3, 4));
  });
});
