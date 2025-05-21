function isEligibleForVoting(age) {
  if (age >= 18) {
    return "Eligible for voting";
  } else {
    return "Not eligible for voting";
  }
}
console.log(isEligibleForVoting(20));     


// Output: "Eligible for voting"