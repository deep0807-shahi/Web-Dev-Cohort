// 1. Convert the sentence "I love coding" into an array of words
let sentence1 = "I love coding";
let wordsArray = sentence1.split(" ");
console.log(wordsArray); // Output: ["I", "love", "coding"]


// 2. Convert the string "Alpha" into an array of characters
let string2 = "Alpha";
let charArray = string2.split("");
console.log(charArray); // Output: ["A", "l", "p", "h", "a"]


// 3. Print the ASCII value of the character "A"
let asciiValue = "A".charCodeAt(0);
console.log(asciiValue); // Output: 65


// 4. Join the array ["web", "dev"] into a single string with a space in between
let array4 = ["web", "dev"];
let joinedString = array4.join(" ");
console.log(joinedString); // Output: "web dev"


// 5. Given a string: "JavaScript is Awesome"
let jsString = "JavaScript is Awesome";

// a. All lowercase
console.log(jsString.toLowerCase()); // Output: "javascript is awesome"

// b. All uppercase
console.log(jsString.toUpperCase()); // Output: "JAVASCRIPT IS AWESOME"

// c. Replace "Awesome" with "Powerful"
let replacedString = jsString.replace("Awesome", "Powerful");
console.log(replacedString); // Output: "JavaScript is Powerful"

// d. Check if the string starts with "Java"
let startsWithJava = jsString.startsWith("Java");
console.log(startsWithJava); // Output: true


// 6. From the string "AlphaIntern WebDev", extract the word "WebDev"
let fullString = "AlphaIntern WebDev";
let webDev = fullString.split(" ")[1];
console.log(webDev); // Output: "WebDev"


// 7. From the string "apple, banana, grape", convert it into an array
let fruits = "apple, banana, grape";
let fruitArray = fruits.split(", ");
console.log(fruitArray); // Output: ["apple", "banana", "grape"]
