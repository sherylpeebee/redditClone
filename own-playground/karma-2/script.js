var storeData = function(array){
 localStorage['karma.data'] = JSON.stringify(array);
};
var readData = function(){
return JSON.parse(localStorage['karma.data']);
};

var modifyPointsFor = function(index, newPoints){
 $('body').on('dblclick', 'div', function(){
   var elementIndex = $(this).index('div');

   console.log(elementIndex);

   var elementToEdit = $('body').find('div:eq(' +[elementIndex]+')').html();

   console.log($(elementToEdit));
   console.log($(elementToEdit).text());

   var test = elementToEdit.replaceWith("<input>", {value: $(elementToEdit).text()});
   //tried both ".replaceWith" && ".html" to change element
   console.log(test);
 });
};

// $( "td:eq( 2 )" )
var leaderboard = function(data) {
 return data.sort(compare);
};

$(document).ready(function() {
 var data = readData();
 modifyPointsFor();
 var sorted = leaderboard(data);
 var $body = $("body");
 var divArray = [];
 for (var i = 0; i < sorted.length; i++) {
   var $div = $("<div>");
   var $p = $("<p>");
   $p.text(sorted[i].name + ' ' + sorted[i].points);
   $div.append($p);
   divArray.push($div);
 }
 $body.append(divArray);
});

function compare(a, b){
 return b.points - a.points;
}
