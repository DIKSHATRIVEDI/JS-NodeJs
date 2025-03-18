// Get the command-line argument
const n = parseInt(process.argv[2]);

// Validate input
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
    process.exit(1);
}

// Function to calculate nth harmonic number
function getHarmonicNumber(n) {
    let harmonic = 0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    return harmonic;
}

// Calculate and print the harmonic number
const result = getHarmonicNumber(n);
console.log(`The ${n}th harmonic number is: ${result.toFixed(6)}`);
