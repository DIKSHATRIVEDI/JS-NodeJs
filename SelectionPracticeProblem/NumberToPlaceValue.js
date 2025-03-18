// Read number from command line arguments
let num = parseInt(process.argv[2]);

// Function to convert number to place value
function numberToPlaceValue(num) {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        case 1000000: return "Ten Lakh";
        case 10000000: return "Crore";
        case 100000000: return "Ten Crore";
        default: return "Invalid input (Please enter a valid place value)";
    }
}

let result = numberToPlaceValue(num);
console.log(`Number ${num}: ${result}`);
