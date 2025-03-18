// Read number from command line arguments
let num = parseInt(process.argv[2]);

// Function to convert number to word
function numberToWord(num) {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid input (Please enter a single digit)";
    }
}

let result = numberToWord(num);
console.log(`Number ${num} in word: ${result}`);
