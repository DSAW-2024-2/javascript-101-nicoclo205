// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Los datos de entrada no son adecuados');
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (typeof n !== 'number') {
    console.log('Los datos de entrada no son adecuados');
    return;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  max = -1000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== 'string') {
    return "Los datos de entrada no son adecuados";
  }
  let sum = 0;
  const vowels = 'aeiou';
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      sum++;
    }
  }
  return sum;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (n === 1) {
    return "Numero no es primo";
  }
  for (let i =  2; i<n; i++){
    if (n % i === 0){
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
