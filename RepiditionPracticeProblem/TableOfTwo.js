const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to print table of powers of 2
function printPowersOfTwo(n) {
    let power = 0;
    let result = 1;

    console.log(`Powers of 2 up to 2^${n} or 256:`);

    while (power <= n && result <= 256) {
        console.log(`2^${power} = ${result}`);
        power++;
        result = Math.pow(2, power);
    }
}

// Take user input
rl.question('Enter a value for n: ', (n) => {
    n = parseInt(n);

    if (isNaN(n) || n < 0) {
        console.log("Please enter a valid non-negative integer.");
    } else {
        printPowersOfTwo(n);
    }

    rl.close();
});

