$(document).ready(init);


function init () {
  clickNumber();
  operation();
  clearScreen();
}

  var clickNumber = function(){
  var numSet = [];
    $(".purple-buttons").on("click", function(){

      var numText = $(this).text();
      $("#all-clear").text("C");
      $(".purple-buttons").removeClass('purple-highlight');
      $(this).addClass('purple-highlight');
      var num = numText*1;
      console.log(isNaN(num));
      if( isNaN(num) === false && typeof num !== "string" && clearScreenClicks <=2){
        numSet.push(num);
      }
      console.log("clearScreenClicks", clearScreenClicks);
      var numToString = numSet.join('');
      var stringToNum = parseInt(numToString);
      // console.log(stringToNum, typeof stringToNum);
      $('#input').val(stringToNum);
    });
  };

  var operation = function(){
    $(".green-buttons").on("click", function(){
      console.log($(this).text());
      // $("#all-clear").text("C");
      $("this").toggleClass("green-highlight");
      // $(this).addClass('green-highlight');
    });
  };

  var clearScreen = function(){
    var clearScreenClicks = 0;
    $("#all-clear").on("click", function(){
      $('#input').val('');
      clearScreenClicks += 1;
      if(clearScreenClicks <= 1){
      $("#all-clear").text("C");
      }
      else if(clearScreenClicks >= 2){
      $("#all-clear").text("AC");
      clickNumber();
      numSet = "";
      clearScreenClicks = 0;
      }
      console.log("clearScreenClicks",clearScreenClicks);
    });
  };
