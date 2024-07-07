


// let arr = [-12, -2, 8, 3, 20]; // example array with 5 elements

// let smallest = arr[0]; // assume the first element is the smallest

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }

// console.log("The smallest number in the array is: " + smallest);


// ======================================================================================================================

// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
//   }
  
//   let celsius = prompt("Enter temperature in Celsius: ");
//   let fahrenheit = celsiusToFahrenheit(celsius);
  
//   console.log(celsius + "°C is equal to " + fahrenheit + "°F");



//   =============================================================================================================


function fahrenheitTocelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  let fahrenheit = prompt("Enter temperature in fahrenheit: ");
  let celsius = fahrenheitTocelsius(fahrenheit);
  
  console.log(fahrenheit + "°F is equal to " + celsius + "°C");