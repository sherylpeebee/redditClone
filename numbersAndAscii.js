var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];


var sentence = function(array){

return String.fromCharCode.apply(null, ascii);


};

console.log(sentence());
