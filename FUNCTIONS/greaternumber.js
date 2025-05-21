function greaterNumber(a, b) {
  if (a > b) {
    return `${a} is greater`;
  } else if (b > a) {
    return `${b} is greater`;
  } else {
    return "Both numbers are equal";
  }
}
console.log(greaterNumber(10, 5));  


// Output: "10 is greater"