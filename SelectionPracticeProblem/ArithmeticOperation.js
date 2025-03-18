// Read input from command line arguments
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

// Perform arithmetic operations
let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

// Store results in an array
let results = [op1, op2, op3, op4];

// Find maximum and minimum
let max = Math.max(...results);
let min = Math.min(...results);

console.log(`Results:`);
console.log(`1. a + b * c = ${op1}`);
console.log(`2. a % b + c = ${op2}`);
console.log(`3. c + a / b = ${op3}`);
console.log(`4. a * b + c = ${op4}`);

console.log(`Maximum result: ${max}`);
console.log(`Minimum result: ${min}`);
