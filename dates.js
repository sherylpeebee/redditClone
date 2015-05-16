
// Write a JavaScript function that takes 3 arguments, year, month, and day, and calculates how many days between that day and today
//
// If the days are more than 30, return Y months, Z days
// If the days are months are more than 12, return X years, Y months, Z days
// Test Cases
//
// (Assuming today is April 2nd, 2015)
//
// age(2017, 11, 17) -> 2 years, 8 months, 15 days
//
// age(2015, 3, 6) -> 4 days
// Note that the month argument starts from 0 (11 is December)

function age(year, month, day){
  // var thisYear = new Date().getFullYear();
  // var thisMonth = new Date().getMonth();
  // var today = new Date().getDate();

  var now = {thisYear: new Date().getFullYear(), thisMonth: new Date().getMonth(), date: new Date().getDate()};
  var years =  now.thisYear - year;
  console.log(years);
  var months =  now.thisMonth - month;
  console.log(months);
  var days = now.date - day;
  console.log(days);

  if(days>30 && months>11){
    return "years + ' years'";
  } else if(days>30){
    return "months + ' months,' + years + ' years'";
  } else{
    return "days + ' days,' + months + ' months,' + years + ' years'";
  }
}







age(2017, 1, 7);
