// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: The nested function can access the variable internal because they are both declared within the same function. This means that since the nested function and the variable are declared in the same scope, it can be accessed by the functions in the same scope.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(numberGiven){
  let sum = 0
  for (let i = 0; i <= numberGiven; i++){
    sum = sum + i;
  }
  return sum;
}
console.log(summation(4));