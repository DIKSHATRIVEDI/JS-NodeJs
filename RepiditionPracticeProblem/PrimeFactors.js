const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to compute prime factors
function primeFactors(n) {
    console.log(`Prime factors of ${n} are:`);

    // Divide by 2 until n becomes odd
    while (n % 2 === 0) {
        process.stdout.write(2 + " ");
        n = n / 2;
    }

    // Check for odd factors from 3 onwards till √n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            process.stdout.write(i + " ");
            n = n / i;
        }
    }

    // If n is a prime number greater than 2
    if (n > 2) {
        process.stdout.write(n + " ");
    }
    console.log(); // For newline
}

// Take user input
rl.question('Enter a number: ', (num) => {
    num = parseInt(num);

    if (isNaN(num) || num <= 1) {
        console.log("Please enter a valid positive integer greater than 1.");
    } else {
        primeFactors(num);
    }
    
    rl.close();
});
