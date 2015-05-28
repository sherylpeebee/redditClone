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
//I didn't read the question carefully enough; "solved" the wrong problem (for repeated consecutive letters instead of totals)

function wordSelector(string) {

    var wordsInSentence = string.split(' ');
    wordsInSentence.forEach(function(word){
      var matches = {};
      for (var i=0; i<word.length; i++) {
        var character = word.charAt(i);
        if (matches[character]) {
          matches[character]++;
        } else {
          matches[character] = 1;
        }
      }
      console.log(matches);
      return matches;
    });

}

wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale");

// function wordSelector(sentence){
//  var matches = [];
//  var topWords = {};
//
// var split1 = sentence.split(' ');
// console.log(split1);
//  split1.forEach(function(e){
//    for(var i=0; i<e.length; i++){
//      if(e[i]===e[i-1]){
//      matches.push(e, e[i]===e[i-1]);
//      }
//    }
//  });
//
//  console.log(matches);
// }
