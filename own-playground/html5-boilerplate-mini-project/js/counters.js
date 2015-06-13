// var Counter = {};
//
// Counter.count = function(text) {
//   var numbersMatch = text.match(/[0-9]/g) || {length:0};
//   return {
//     characters: text.length,
//     words: text.split(" ").length,
//     spaces: text.match(/\s/g).length,
//     numbers: numbersMatch.length
//     };
// };
//
// module.exports = Counter;

var Counter = {};

Counter.count = function(text) {
  var numbersMatch = text.match(/[0-9]/g) || { length: 0 };
  var spacesMatch = text.match(/\s/g) || { length: 0 };
  var newLineMatch = text.match(/\n/g) || { length: 0 };
  return {
    characters: text.length,
    words: text.split(" ").filter(function(word) {
      return word.length > 0;
    }).length,
    spaces: spacesMatch.length,
    numbers: numbersMatch.length,
    paragraphs: newLineMatch.length
  };
};

module.exports = Counter;
