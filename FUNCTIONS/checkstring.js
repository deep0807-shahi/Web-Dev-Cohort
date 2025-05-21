function containsLetterA(str) {
  if (str.includes('a') || str.includes('A')) {
    return "String contains 'a' or 'A'";
  } else {
    return "String does not contain 'a' or 'A'";
  }
}
console.log(containsLetterA("Apple"));   


// Output: "String contains 'a' or 'A'