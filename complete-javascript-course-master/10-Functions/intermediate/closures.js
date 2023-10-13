/*
A closure is a function that "encloses" its surrounding state, meaning it remembers and has access to
variables from the outer (enclosing) function even after that outer function has finished executing.

 */

/*
a function has access to teh variable environment ( VE ) of the execution context in which is was created

 */

const secureBooking = function() {
  let passengerCount = 0;
  return function ()
  {
    passengerCount++;
    console.log(`${passengerCount}   passengers`);
  }
}
const booker = secureBooking(); // we are assigning a variable to the function

booker();   // where is this syntax coming from ?
booker();
booker();

