 // Write a JavaScript function that takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters.
//
// If the sentence has multiple words with the same max of repeated letters, return them all in an Array.
//
// Test Case:
//
// wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")
// Would select the words:
//
// ["attribute", "success"]

function wordSelector(sentence){

  var matches = [];
var sentence = 'eggs, ham, cheese';
var split1 = sentence.split(', ');
console.log(split1);

var split2 = function(array){
  var arr = [];
  array.forEach(function(element){
    arr.push(element.split(''));
  });
  return arr;
};


var arrofArr = split2(split1);
// console.log(arrofArr);
var library = [];
for(var i=0; i<arrofArr.length; i++){
  console.log(i + ':' + arrofArr[i]);
  arrofArr[i].forEach(function(letter){
    library.push({letter: 0});
    console.log(library);
  });
}





}

wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale");
