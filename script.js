console.log('test');

// arrays and loops

var nameArray = ['Millie', 'Amal', 'Eric', 'Abby', 'Droo', 'Amy'];

// console.log(nameArray[0]); //Millie
// console.log(nameArray[1]); //Amal

for (var i = 0; i < nameArray.length; i++) {
  // var excitedName = appendBang(nameArray[i]);
  // console.log(excitedName);
  console.log(appendBang(nameArray[i]));
}

// add a ! to the end of the given string
function appendBang(someString) { //args
  return someString + "!";
}
