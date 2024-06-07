// This function multiplies two decimal numbers
function multiplyDecimals(num1: number, num2: number) {
  // Multiplies the numbers and rounds the result to two decimal places
  return (num1 * num2).toFixed(2);
}

// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(10.666, 8.56)); // Shows 91.30
// After multiplying, we round to make the result easier to read.
