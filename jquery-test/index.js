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
var tableData = [];
  data.forEach(function(obj){
    // names.push(obj.name);
    // ages.push(obj.age);
    // locations.push(obj.location);
    var name = obj.name;
    var age = obj.age;
    var location = obj.location;

    var tableDataAge = $("<td>" + age + "</td>");
    ages.push(tableDataAge);

    var tableDataLocation = $("<td>" + location + "</td>");
    locations.push(tableDataLocation);
    var tableRow = $("<tr><td>" + name + "</td></tr>");
    tableData.push(tableRow);

     $("tbody").append(tableData);
     keys = Object.keys(obj);
    if (!titles.keyInObj){
      titles.keyInObj = keys;
    }
  });

    $("table").find("tr").each(function(index, element){
      $(element).append(ages[index]);

    });

    $("table").find("tr").each(function(index, element){
      $(element).append(locations[index]);

    });
  var headers = keys;
  var theaders = [];
  headers.forEach(function(header){
    var theader = $("<th>", {text: header, id: header});
    //added id to object; only had text b4-- id: easier to ref in query
    theaders.push(theader);
  });
  $("thead").append(theaders);

  $("body").on("click", "#name, #age, #location",  function(){
    console.log($(this).find('tr '));
  });
});
