// Write a javascript counter function that takes a text argument and count the following:
//
// Number of words in the text
// Number of characters in the text
// Number of spaces in the text
// Average word length
// Test case
//
// superCounter("Count me in");
// would count: 3 words, 11 characters, 3 chars avg word length, 2 spaces.
//
// Return output as a single object, and don't use any libraries.


function  superCounter(sentence){
  var characters = sentence.length;
  var spaceArray = sentence.match(/\s/g);
  var spaces = spaceArray.length;
  var words = sentence.split(' ').length;
  var wordsArray = sentence.split(' ');
  var newArray = wordsArray.map(function(word){
    return word.length;
  });
  var sum = newArray.reduce(function(a,b){
    return a + b;
  });
  var avg = sum/wordsArray.length;
  // console.log(words + ' words', characters + ' characters', avg + ' chars avg word length', spaces + ' spaces');
  return {words: words, characters:characters, avg: avg, spaces: spaces};
}

console.log(superCounter("Count me in"));
