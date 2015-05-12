// wordsReverser("This is fun, hopefully.");
// Would return:
//
// "sihT si nuf, yllufepoh."

function wordsReverser(sentence){
var sentenceReversed = sentence.split('').reverse().join('');
var reversedInPlace = (sentenceReversed.split(' ').reverse().join(' '));
return reversedInPlace;
}

console.log(wordsReverser("This is fun, hopefully."));
