function checkSign(num) {
  if (num > 0) {
    return "Positive number";
  } else if (num < 0) {
    return "Negative number";
  } else {
    return "Number is zero";
  }
}
console.log(checkSign(-7));           


// Output: "Negative number"
