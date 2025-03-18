// Read number from command line arguments
let num = parseInt(process.argv[2]);

// Function to convert number to place value using switch-case
function numberToPlaceValue(num) {
    switch (num) {
        case 1: console.log("Unit"); break;
        case 10: console.log("Ten"); break;
        case 100: console.log("Hundred"); break;
        case 1000: console.log("Thousand"); break;
        case 10000: console.log("Ten Thousand"); break;
        case 100000: console.log("Lakh"); break;
        case 1000000: console.log("Ten Lakh"); break;
        case 10000000: console.log("Crore"); break;
        case 100000000: console.log("Ten Crore"); break;
        default: console.log("Invalid input (Please enter a valid place value)");
    }
}

numberToPlaceValue(num);
