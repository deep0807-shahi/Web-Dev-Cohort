function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("Add 4 and 5:", operate(4, 5, add));        
 // Output: 9

console.log("Multiply 4 and 5:", operate(4, 5, multiply));
 // Output: 20
