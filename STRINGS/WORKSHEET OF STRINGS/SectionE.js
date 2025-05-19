// 1. Replace the word "Intern" with "Mentor" in "AlphaIntern"
let original1 = "AlphaIntern";
let result1 = original1.replace("Intern", "Mentor");
console.log(result1); 
// Output: AlphaMentor

// 2. Replace all occurrences of "a" with "z" in "banana"
let original2 = "banana";
let result2 = original2.replace(/a/g, "z");
console.log(result2); 
// Output: bznznz

// 3. Remove all extra spaces from the string " JavaScript is awesome "
let original3 = " JavaScript is awesome ";
let result3 = original3.trim();
console.log(result3); 
// Output: JavaScript is awesome

// 4. Extract "Intern" from the string "AlphaIntern"
let original4 = "AlphaIntern";
let result4 = original4.slice(5);
console.log(result4); 
// Output: Intern

// 5. Extract "Alpha" from the string "AlphaIntern"
let original5 = "AlphaIntern";
let result5 = original5.slice(0, 5);
console.log(result5); 
// Output: Alpha