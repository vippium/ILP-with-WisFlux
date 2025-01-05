function findLargest(num1, num2, num3) {
  let largest = Math.max(num1, num2);

  largest = Math.max(largest, num3);
  return largest;
}

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let largestNumber = findLargest(num1, num2, num3);
console.log("The largest number is:", largestNumber);