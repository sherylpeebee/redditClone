// Exercise 6.
// --------------------------------------------------------
var dogs = [
{name: 'a', age: 10, gender: 'male'},
{name: 'b', age: 2, gender: 'female'},
{name: 'c', age: 7, gender: 'male'},
{name: 'd', age: 1, gender: 'female'},
{name: 'e', age: 4, gender: 'male'},
{name: 'f', age: 6, gender: 'female'}
];


function getFemaleDogsLessThan3(array){
  var femDogUnder3 = [];
  dogs.forEach(function(dog){
  if (dog.age<3 && dog.gender === 'female'){
    femDogUnder3.push(dog);
  }
  });
  return femDogUnder3;
}



var result = getFemaleDogsLessThan3(dogs);
console.log(result); // display objects b, d
