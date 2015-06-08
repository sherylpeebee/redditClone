function makeHeader(size, string){
  return "<h" + size + ">" + string + "</h" + size +">" ;
}

var header = makeHeader(2, "hello");
console.log(header);

//expression v. value===fixed v. var===dynamic
//object literals?
