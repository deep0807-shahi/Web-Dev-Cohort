//1. Count vowels in a given string using includes() or any string method. 
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // Output: 3

//2. Reverse a string using 
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

//3. Check whether a given string is a palindrome or not. 
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("Hello"));   // Output: false

//4. Capitalize the first letter of each word in a sentence. 

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("javascript is awesome")); 
// Output: "Javascript Is Awesome"

//5. Write a function that takes a string input and returns the number of times "Alpha" appears using replaceAll() and length.
function countAlphaOccurrences(str) {
  let replaced = str.replaceAll("Alpha", "");
  return (str.length - replaced.length) / "Alpha".length;
}

console.log(countAlphaOccurrences("AlphaIntern Alpha AlphaWeb Alpha"));
// Output: 3
