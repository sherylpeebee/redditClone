$(document).ready(init);


function init () {
  clickNumber();
  operation();
  clearScreen();
}
  var numStrings;
  var numSet = [];
  var float;
  var clickNumber = function(){
   numStrings = [];
    $(".green-buttons, .purple-buttons").on("click", function(){
      var num;
      var numText = $(this).attr("value");
      $("#all-clear").text("C");
      numStrings.push(numText);
      var numToString = numStrings.join('');
      float = parseFloat(numToString);
      $('#input').val(float);
    });
  };

  var percentage = function(){
    return  $("#input").val() * 0.01;
  };


  var operation = function(){
    $(".operator.green-buttons, [value = '%'], [value = '+/-']").on("click", function(){
      console.log(this);
      var operatorVal = $(this).attr("value");

       numSet.push(float);
       console.log(operatorVal);
       
       numSet.push(operatorVal);

      numStrings = [];
      switch (operatorVal) {
        case "%":
          $("#input").val(percentage());
          numSet.shift();
          numSet.shift();
          var percentInt = parseFloat($("#input").val());
          numSet.push(percentInt);
          console.log(numSet);
          break;
        case "+/-":
          var negativeVal = $("#input").val() * -1;
        $("#input").val(negativeVal);
          break;
        case "=":
          numSet.pop();
          equals();
          console.log('equals');
          console.log('numSet after equal pop', numSet);
          break;
        }
      function equals(){
        if(typeof numSet[1] === "number"){
          var op = numSet[2];
          numSet.splice(2, 1, op);
          console.log("numSet after splice", numSet);
        }else {
         var num1 = numSet[0];
         var num2 = numSet[2];
         switch(numSet[1]){
       case "+":
         result = num1 + num2;
         $('#input').val(result);
         numSet = [];
         numSet.push(result);
         break;
       case  '-':
         result = num1 - num2;
         $('#input').val(result);
         numSet = [];
         numSet.push(result);
         console.log(numSet);
         break;
       case  '/':
         result = num1 / num2;
         console.log("numSet[1] after divide", numSet[1]);
         console.log(result);
         numSet = [];
         numSet.push(result);
         $('#input').val(result);
         break;
       case '*':
         result = num1 * num2;
         numSet = [];
         numSet.push(result);
         $('#input').val(result);
         break;
         }
       }

      }


    });
  };

  var clearScreen = function(){
    var clearClicks = 0;
    $("#all-clear").on("click", function(){
      $('#input').val('');
      console.log("numStrings after one clear", numStrings);
      clearClicks += 1;
      if(clearClicks <= 1){
      $("#all-clear").text("C");
      }
      else if(clearClicks >= 2){
      $("#all-clear").text("AC");
      numStrings = [];
      console.log("numStrings after 2 clear", numStrings);
      clearClicks = 0;
      }

    });
  };
