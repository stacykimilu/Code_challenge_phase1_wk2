// Function to check if a number is prime
function isPrime(num) {
    // Numbers less than 2 are not prime
  if (num < 2) return false;
  // Check divisibility from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If num is divisible by any number in this range, it's not prime
  }
  return true; // If num is not divisible by any number in the range, it's prime
}
// Function to filter prime numbers from an array
function filterPrimes_Num(arr) {
    const prime_Numbers = [];

    // Use the filter method to create a new array containing only the prime numbers
    return arr.filter(num => isPrime(num));
}

// Test the function
console.log(filterPrimes_Num([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
