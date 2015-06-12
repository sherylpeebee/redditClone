$(document).ready(function(){


  var data = [
  {name: 'ryan', points: 14 },
  {name: 'colin', points: 7 },
  {name: 'tania', points: 9 },
  {name: 'sheryl', points: 10 },
  {name: 'mike', points: 4 },
];

//   var points = [];
// data.forEach(function(student){
//   // console.log(student.name);
//   points.push(student.points);
//   // console.log(points);
// });
data.sort(function(a, b){
  return b.points-a.points;
});

// console.log(points); 
data.forEach(function(student){
  $('#leaderboard').append($('<tr><td>'+ student.name+ ' '+ student.points + '<tr><td>'));
});


  $('#findUser').on('click', function(){
    var handle = $('#userHandle').val();
    $('#userHandle').val('');

    $.getJSON('https://api.github.com/users/'+ handle, function(data){
    console.log(data);
    // var image = data.avatar_url;
    var userName = data.name;
    var image = $('<img src="'+ data.avatar_url + '">');
    $('table').append(image);
    $('table').find(image).before($('<h3>', {text: userName}));


    });
  });


});


















//---- error and succes handling examples below ----
// $.getJSON("example.json", function() {
//   alert("success");
// })
// .success(function() { alert("second success"); })
// .error(function() { alert("error"); })
// .complete(function() { alert("complete"); });
