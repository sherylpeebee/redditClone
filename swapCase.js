// Test Case:

// swapCase("Life is 10% what happens to you, and 90% of how you REACT to it");
// Would return:

// "lIFE IS 10% WHAT HAPPENS TO YOU, AND 90% OF HOW YOU react TO IT"

//
// function swapCase(string){
//     for (var i=0; i<string.length; i++){
//       if (!isNaN(string[i])){
//           console.log(string[i]);
//       } else if (string[i] === string[i].toUpperCase()){
//         console.log(string[i].toLowerCase());
//       } else if (string[i] === string[i].toLowerCase()){
//         console.log(string[i].toUpperCase());
//       }
//     }
// }



// swapCase("Life is 10% what happens to you, and 90% of how you REACT to it");
// Test Case:

// swapCase("Life is 10% what happens to you, and 90% of how you REACT to it");
// Would return:

// "lIFE IS 10% WHAT HAPPENS TO YOU, AND 90% OF HOW YOU react TO IT"


function swapCase(string){
    for (var i=0; i<string.length; i++){
      if (string[i] === string[i].toUpperCase()){
        console.log(string[i].toLowerCase());
      } else if (string[i] === string[i].toLowerCase()){
        console.log(string[i].toUpperCase());
      }
    }
}




swapCase("Life is 10% what happens to you, and 90% of how you REACT to it");
