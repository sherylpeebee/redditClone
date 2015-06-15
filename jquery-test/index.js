var data =
[
  {"name": "sue", "age": 20, "location": 'SF'},
  {"name": "bob", "age": 25, "location": 'SJ'},
  {"name": "joe", "age": 40, "location": 'SC'},
  {"name": "greg", "age": 34, "location": 'FR'}
];

$(document).ready(function(){
var titles = {};
var keys;
var names = [];
var ages = [];
var locations = [];
  data.forEach(function(obj){
    names.push(obj.name);
    ages.push(obj.age);
    locations.push(obj.location);
     keys = Object.keys(obj);
    if (!titles.keyInObj){
      titles.keyInObj = keys;
    }
  });

  var headers = keys;
  var theaders = [];
  headers.forEach(function(header){
    var theader = $("<th>"+ header + "</th>");
    theaders.push(theader);
  });
  $("thead").append(theaders);

 var tableNames = [];
  names.forEach(function(name){
    var nameData = $("<tr><td>" + name + "</tr></td>", {id: name});
    tableNames.push(nameData);
    // console.log(tableNames);
  });
  $("tbody").append(tableNames);


 var tableAges = [];
  ages.forEach(function(age){
    var ageData = $("<tr><td>" + age + "</td></tr>");
    tableAges.push(ageData);
    // console.log(tableAges);
  });
  $("tbody").find("tr").each(function(index, element){
      $(element).append(tableAges[index]);
  });

 var tableLocations = [];
  locations.forEach(function(location){
    var locationData = $("<tr><td>" + location + "</td></tr>");
    tableLocations.push(locationData);
    // console.log(tableLocations);
  });

  $("table").find("tr:last-child").each(function(index, element){
    console.log(element);
    $(element).append(tableLocations[index]);

});
//^^ this is wrong. move on.  ^^
  $(document).find("#age").on("click", function(){
    console.log(this);
  });
});
