/* Challenge 1: Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];



 writers.forEach(function(element){
   console.log("Hi, my name is " + element.firstName + " " + element.lastName + " " + element.lastName + ".I am " + element.age + "  years old, and work as a " + element.occupation +".");
    })

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

console.log("====================================================================");
function displayAliveWrites() {
  return writers.filter(element => element.alive == true).map(
    function (element) {
      return "Hi, my name is " + element.firstName + " " + element.lastName  + ".I am " + element.age + "  years old, and work as a "+ element.occupation+".";
    }
  )
}
console.log(displayAliveWrites());