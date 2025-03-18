const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMagicNumber() {
    let low = 1;
    let high = 100;
    let mid;

    console.log("Think of a number between 1 and 100...");

    function askQuestion() {
        if (low <= high) {
            mid = Math.floor((low + high) / 2);

            rl.question(`Is your number ${mid}? (yes/no): `, (answer) => {
                if (answer.toLowerCase() === 'yes') {
                    console.log(`Magic Number Found! Your number is ${mid}.`);
                    rl.close();
                } else {
                    rl.question(`Is your number greater than ${mid}? (yes/no): `, (isGreater) => {
                        if (isGreater.toLowerCase() === 'yes') {
                            low = mid + 1;
                        } else {
                            high = mid - 1;
                        }
                        askQuestion(); // Repeat until the number is found
                    });
                }
            });
        } else {
            console.log("Invalid input or number out of range.");
            rl.close();
        }
    }

    askQuestion(); // Start the process
}

// Start the magic number search
findMagicNumber();
