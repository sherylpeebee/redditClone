// Using the JavaScript language, have the function Consecutive(arr) take the array
// of integers stored in arr and return the minimum number of integers needed to
// make the contents of arr consecutive from the lowest number to the highest number.
// For example: If arr contains [4, 8, 6] then the output should be 2 because two
// numbers need to be added to the array (5 and 7) to make it a consecutive array of
// numbers from 4 to 8. Negative numbers may be entered as parameters and no array
// will have less than 2 elements.

//Input = 5,10,15 Output = 8
// Input = -2,10,4 Output = 10

// var arr = [5,10,15];
var arr1 = [-2,10,4];

function Consecutive(numArr){
 var sorted = numArr.sort(function(a, b){
   return a-b;
 });
 console.log(sorted);
 var allSteps = [];
 sorted.reduce(function(prev, curr){
   if(prev < curr){

     while(prev<curr){
       prev++;
       allSteps.push(prev);
      }
     console.log(prev, curr);
   } return prev, curr;
 }, 0);
}

Consecutive(arr1);
