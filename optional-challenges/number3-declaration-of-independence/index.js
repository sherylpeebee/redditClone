"use strict()";
$(document).ready(init);

function init(){
  $('button').on('click', function(){
    var library = {};
    var text = $('textarea').val();
    // str.replace(/[^\w\s]|_/g, "")
    //      .replace(/\s+/g, " ");
    var wordArray = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().split(' ');
    console.log(wordArray);


    for(var i=0; i<wordArray.length; i++){

      // console.log(wordArray[i]);
      if (!library[wordArray[i]]){
        library[wordArray[i]] = 1;
      } else if (library[wordArray[i]]){
        library[wordArray[i]]++;
      }
    }
      for(var key in library){
        var value = library[key];
        console.log(key, value);
      var newNode = $("<tr><td class='words'>" + key + "</td><td>"+ value +"</td></tr>");
        $('tbody').append(newNode);
      console.log(library);
      }

  });
}
