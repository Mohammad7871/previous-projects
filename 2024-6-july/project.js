


////////////////////////////////// // Take 5 numbers as input from the user
// let num1 = +prompt("Enter number 1: ");
// let num2 = +prompt("Enter number 2: ");
// let num3 = +prompt("Enter number 3: ");
// let num4 = +prompt("Enter number 4: ");
// let num5 = +prompt("Enter number 5: ");

// // Create an array with the input numbers
// let numbers = [num1, num2, num3, num4, num5];

// // Calculate the sum of the array elements
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// // Print the sum
// console.log("The sum of the array elements is: " + sum);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



////////////////////////////////////////////// Take a number as input from the user
// let num = +prompt("Enter a number: ");

// // Print the table of the input number up to 10
// console.log(`Table of ${num}:`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Take 5 numbers as input from the user
let num1 = +prompt("Enter number 1: ");
let num2 = +prompt("Enter number 2: ");
let num3 = +prompt("Enter number 3: ");
let num4 = +prompt("Enter number 4: ");
let num5 = +prompt("Enter number 5: ");

// Create an array with the input numbers
let numbers = [num1, num2, num3, num4, num5];

// Find the largest number in the array
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

// Print the largest number
console.log("The largest number in the array is: " + largest);