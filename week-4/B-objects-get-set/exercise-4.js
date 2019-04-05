/*
    Write code in the space provided so that the expected values output
*/

var dog = {
  name: "Billy",
  wantsToPlay: false
};

// WRITE CODE BELOW THIS LINE
//overriding value of objects,
//dog.names = 'Rex';
dog.name = 'Rex';
dog.wantsToPlay = true;
dog.colour = 'black';
// WRITE CODE ABOVE THIS LINE

//DO NOT MODIFY BELOW
console.log(dog.name);
console.log(dog.wantsToPlay);
console.log(dog.colour);

// it should output:
// Rex
// true
