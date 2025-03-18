const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to print prime numbers in a given range
function printPrimesInRange(start, end) {
    console.log(`Prime numbers between ${start} and ${end} are:`);
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            process.stdout.write(i + " ");
        }
    }
    console.log(); // For newline after output
}

// Take user input for range
rl.question('Enter the starting number: ', (start) => {
    rl.question('Enter the ending number: ', (end) => {
        start = parseInt(start);
        end = parseInt(end);

        if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
            console.log("Please enter valid positive integers with start <= end.");
        } else {
            printPrimesInRange(start, end);
        }

        rl.close();
    });
});
