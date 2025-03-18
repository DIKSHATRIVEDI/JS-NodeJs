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

// Take user input
rl.question('Enter a number: ', (num) => {
    num = parseInt(num);

    if (isNaN(num)) {
        console.log("Please enter a valid number.");
    } else {
        if (isPrime(num)) {
            console.log(`${num} is a prime number.`);
        } else {
            console.log(`${num} is NOT a prime number.`);
        }
    }
    
    rl.close();
});
