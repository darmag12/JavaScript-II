// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function hubbyDaryl(){
let husband = 'Daryl';
let wife = 'Gwendolyn';
  console.log(`My name is ${husband}`);

function wifeyGwendolyn(){
  console.log(`My name is ${wife}`);

  function covenant(){
    console.log(`${husband} and ${wife} got married on september 2nd 2018`);
  }
   covenant(); 
}
    wifeyGwendolyn();
}
     hubbyDaryl();
//console.log(hubbyDaryl());



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var sc = 0;
  return function score (){
     sc++
     return console.log(sc);
     
  }
  
};
var newCounter = counter()
newCounter()
newCounter()
newCounter()
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
 
  return function count (){
    var number = 0;
    return {
     increment: function (){
      number++
      return console.log(number)
     },
     decrement: function (){
       number--
       return console.log(number)
     }
    }
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

var counting = counterFactory();
var counteer = counting();
//// increments
counteer.increment()
counteer.increment()
counteer.increment()
/// decrements
counteer.decrement()
counteer.decrement()
counteer.decrement()

