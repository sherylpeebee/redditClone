// //Counter
//
// $(document).ready(function(){
//   var counts = Counter.count(text);
//   var updateUI = function(text){
//     $("#characters").text(counts.characters);
//     $("#words").text(counts.words);
//     $("#spaces").text(counts.spaces);
//     $("#numbers").text(counts.numbers);
//   };
//   $('#data').on('keyup', function(){
//     console.log(this.value);
//     //.value is an HTML thing. gives access to the actual element.
//     updateUI(this.value);
//   });
// });
// ------- ^^ my code. i seem to have done something wrong. :( ^^ ------


$(document).ready(function() {
  var updateUI = function(text) {
    var counts = Counter.count(text);
    $("#characters").text(counts.characters);
    $("#words").text(counts.words);
    $("#spaces").text(counts.spaces);
    $("#numbers").text(counts.numbers);
    $("#paragraphs").text(counts.paragraphs);
  };

  $("#data").on("keyup", function() {
    updateUI(this.value);
  });
});
