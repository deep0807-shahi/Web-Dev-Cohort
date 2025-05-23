// IIFE that prints "IIFE executed!"
(function() {
  console.log("IIFE executed!");
})();
//Output :- IIFE executed!


// IIFE that takes a number and logs its factorial
(function(num) {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  console.log(`Factorial of ${num} is:`, fact);
})(5);  
// Output :- Factorial of 5 is: 120


